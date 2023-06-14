import { useState } from "react";
import useLocale from "../../hooks/useLocale";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import DraggableBottomSheet from "./DraggableBottomSheet";
import { MaterialIcons } from "@expo/vector-icons";
import AddressInput from "../inputs/AddressInput";
import SelectInput from "../inputs/SelectInput";
import * as theme from "../../constants/theme";
import placeTypes from "../../constants/placeTypes";
import CustomButton from "../buttons/CustomButton";
import GoogleMap from "../common/GoogleMap";
import useScreen from "../../hooks/useScreen";

export default function EditPlaceBottomSheet({
  place,
  visible,
  onClose,
  onEditPlace,
  onDeletePlace,
}) {
  const screen = useScreen();
  const { i18n, lang } = useLocale();
  const [placeType, setPlaceType] = useState(place?.type);
  const [locations, setLocations] = useState([
    {
      title: place?.title,
      longitude: place?.longitude,
      latitude: place?.latitude,
    },
  ]);

  const styles = StyleSheet.create({
    container: {
      gap: screen.getVerticalPixelSize(15),
      paddingHorizontal: screen.getHorizontalPixelSize(15),
    },
    arTopContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    enTopContainer: {
      flexDirection: "row-reverse",
      justifyContent: "space-between",
      alignItems: "center",
    },
    arIconContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: screen.getHorizontalPixelSize(4),
    },
    enIconContainer: {
      flexDirection: "row-reverse",
      alignItems: "center",
      gap: screen.getHorizontalPixelSize(4),
    },
    iconText: {
      fontFamily: "cairo-700",
      fontSize: screen.getResponsiveFontSize(15),
      color: theme.primaryColor,
    },
    icon: {
      fontSize: screen.getResponsiveFontSize(24),
      color: theme.primaryColor,
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

  const checkIfSaveButtonDisabled = () => {
    return (
      !placeType ||
      !locations[0] ||
      (placeType === place.type &&
        locations[0].title === place.title &&
        locations[0].longitude === place.longitude &&
        locations[0].latitude === place.latitude)
    );
  };

  return (
    <DraggableBottomSheet
      contentStyle={styles.container}
      visible={visible}
      onClose={onClose}
      height={screen.getVerticalPixelSize(700)}
    >
      <View
        style={lang === "ar" ? styles.arTopContainer : styles.enTopContainer}
      >
        <TouchableOpacity
          onPress={() => onDeletePlace(place._id)}
          style={
            lang === "ar" ? styles.arIconContainer : styles.enIconContainer
          }
        >
          <Text style={styles.iconText}>{i18n("delete")}</Text>

          <MaterialIcons name="delete" style={styles.icon} />
        </TouchableOpacity>

        <Text style={styles.title}>{i18n("favLocationName")}</Text>
      </View>

      <AddressInput
        placeholder={i18n("chooseLocationPlaceholder")}
        value={locations[0]?.title}
      />

      <SelectInput
        options={_placesTypes}
        value={i18n(place.type)}
        onChange={handleSelectPlaceType}
      />

      <GoogleMap
        locations={locations}
        onSelectLocation={handleSelectLocation}
        onMarkerPress={handleDeleteLocation}
        containerStyles={{ minHeight: 100 }}
      />

      <CustomButton
        text={i18n("save")}
        disabled={checkIfSaveButtonDisabled()}
        containerStyle={styles.buttonContainerStyle}
        textStyle={styles.buttonTextStyle}
        onPress={() => onEditPlace(place._id, placeType, locations[0])}
      />
    </DraggableBottomSheet>
  );
}
