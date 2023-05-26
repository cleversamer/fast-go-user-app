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

export default function AddPlaceBottomSheet({
  place,
  visible,
  onClose,
  locations,
  onSelectLocation,
  onMarkerPress,
}) {
  const screen = useScreen();
  const { i18n, lang } = useLocale();
  const [placeType, setPlaceType] = useState(place.type);

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

  const _placesTypes = placeTypes?.map?.((type, index) => ({
    key: index + 1,
    value: i18n(type),
  }));

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
      <View
        style={lang === "ar" ? styles.arTopContainer : styles.enTopContainer}
      >
        <TouchableOpacity
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
        onChange={handleSelectPlaceType}
        placeholder=""
      />

      <GoogleMap
        locations={locations}
        onSelectLocation={onSelectLocation}
        onMarkerPress={onMarkerPress}
      />

      <CustomButton
        text={i18n("save")}
        disabled={!placeType || !locations[0]?.title}
        containerStyle={styles.buttonContainerStyle}
        textStyle={styles.buttonTextStyle}
      />
    </DraggableBottomSheet>
  );
}
