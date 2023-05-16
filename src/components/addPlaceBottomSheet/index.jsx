import { useState } from "react";
import useLocale from "../../hooks/useLocale";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import DraggableBottomSheet from "../bottomSheet/DraggableBottomSheet";
import { MaterialIcons } from "@expo/vector-icons";
import AddressInput from "../addressInput";
import SelectInput from "../selectInput";
import * as theme from "../../constants/theme";
import placeTypes from "../../constants/placeTypes";
import CustomButton from "../button";
import Map from "../map";

export default function AddPlaceBottomSheet({
  place,
  visible,
  onClose,
  locations,
  onSelectLocation,
  onMarkerPress,
}) {
  const { i18n } = useLocale();
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
      <View style={styles.topContainer}>
        <TouchableOpacity style={styles.iconContainer}>
          <Text style={styles.iconText}>حذف</Text>
          <MaterialIcons name="delete" style={styles.icon} />
        </TouchableOpacity>

        <Text style={styles.title}>اسم الموقع المفضل</Text>
      </View>

      <AddressInput
        placeholder="اختر عنوانًا على الخريطة"
        value={locations[0]?.title}
      />

      <SelectInput
        options={_placesTypes}
        onChange={handleSelectPlaceType}
        placeholder=""
      />

      <Map
        locations={locations}
        onSelectLocation={onSelectLocation}
        onMarkerPress={onMarkerPress}
      />

      <CustomButton
        text="حفظ"
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
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconContainer: {
    flexDirection: "row",
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
