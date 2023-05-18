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

export default function AddPlaceBottomSheet({
  place,
  visible,
  onClose,
  locations,
  onSelectLocation,
  onMarkerPress,
}) {
  const { i18n, lang } = useLocale();
  const [placeType, setPlaceType] = useState(place.type);

  const _placesTypes = placeTypes?.map?.((type, index) => ({
    key: index + 1,
    value: i18n(type),
  }));

  const handleSelectPlaceType = (placeType) => {
    setPlaceType(placeType);
  };

  return (
    <DraggableBottomSheet
      contentStyle={styles.container}
      visible={visible}
      onClose={onClose}
      height={700}
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

const styles = StyleSheet.create({
  container: {
    gap: 15,
    paddingHorizontal: 15,
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
    gap: 4,
  },
  enIconContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 4,
  },
  iconText: {
    fontFamily: "cairo-700",
    fontSize: 15,
    color: theme.primaryColor,
  },
  icon: {
    fontSize: 24,
    color: theme.primaryColor,
  },
  title: {
    fontFamily: "cairo-800",
    fontSize: 15,
  },
  buttonContainerStyle: {
    paddingVertical: 10,
  },
  buttonTextStyle: {
    fontFamily: "cairo-800",
    fontSize: 18,
  },
});
