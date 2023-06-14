import { useState } from "react";
import useLocale from "../../hooks/useLocale";
import { StyleSheet, View, Text } from "react-native";
import DraggableBottomSheet from "./DraggableBottomSheet";
import AddressInput from "../inputs/AddressInput";
import SelectInput from "../inputs/SelectInput";
import placeTypes from "../../constants/placeTypes";
import CustomButton from "../buttons/CustomButton";
import GoogleMap from "../common/GoogleMap";
import useScreen from "../../hooks/useScreen";

export default function AddPlaceBottomSheet({ visible, onClose, onAddPlace }) {
  const screen = useScreen();
  const { i18n } = useLocale();
  const [locations, setLocations] = useState([]);
  const [placeType, setPlaceType] = useState("");

  const styles = StyleSheet.create({
    container: {
      gap: screen.getVerticalPixelSize(15),
      paddingHorizontal: screen.getHorizontalPixelSize(15),
    },
    title: {
      fontFamily: "cairo-800",
      fontSize: screen.getResponsiveFontSize(15),
    },
    buttonContainerStyle: {
      paddingVertical: screen.getVerticalPixelSize(10),
    },
    buttonTextStyle: {
      fontFamily: "cairo-800",
      fontSize: screen.getResponsiveFontSize(18),
    },
  });

  const _placesTypes = placeTypes?.map?.((type) => ({
    key: type,
    value: i18n(type),
  }));

  const handleSelectLocation = (location) => {
    try {
      setLocations([location]);
    } catch (err) {}
  };

  const handleDeleteLocation = (markerLocation) => {
    try {
      const newLocations = locations.filter(
        (location) =>
          location.latitude !== markerLocation.latitude &&
          location.longitude !== markerLocation.longitude
      );

      setLocations(newLocations);
    } catch (err) {}
  };

  const handleSelectPlaceType = (placeType) => {
    try {
      setPlaceType(placeType);
    } catch (err) {}
  };

  return (
    <DraggableBottomSheet
      contentStyle={styles.container}
      visible={visible}
      onClose={onClose}
      height={screen.getVerticalPixelSize(700)}
    >
      <Text style={styles.title}>{i18n("favLocationName")}</Text>

      <AddressInput
        placeholder={i18n("chooseLocationPlaceholder")}
        value={locations[0]?.title}
      />

      <SelectInput options={_placesTypes} onChange={handleSelectPlaceType} />

      <GoogleMap
        locations={locations}
        onSelectLocation={handleSelectLocation}
        onMarkerPress={handleDeleteLocation}
        containerStyles={{ minHeight: 100 }}
      />

      <CustomButton
        text={i18n("add")}
        disabled={!locations[0]?.title || !placeType}
        containerStyle={styles.buttonContainerStyle}
        textStyle={styles.buttonTextStyle}
        onPress={() => onAddPlace(placeType, locations[0])}
      />
    </DraggableBottomSheet>
  );
}
