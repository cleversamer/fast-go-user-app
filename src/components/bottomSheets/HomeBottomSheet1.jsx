import { StyleSheet, Text } from "react-native";
import StaticBottomSheet from "./StaticBottomSheet";
import AddressInput from "../inputs/AddressInput";
import Location from "../common/Location";
import AddLocationButton from "../buttons/AddLocationButton";
import CustomButton from "../buttons/CustomButton";
import useLocale from "../../hooks/useLocale";

const userFavLocations = ["فلسطين,قطاع غزة,غزة,محافظةغزةالزيتون,890"];

export default function HomeBottomSheet1({
  onRequestNow,
  disableButton,
  disableAddLocation,
  locationTitle,
}) {
  const { i18n } = useLocale();

  return (
    <StaticBottomSheet contentStyle={styles.container} snapPoints={["40%"]}>
      <Text style={styles.title}>{i18n("whereTo")}</Text>

      <AddressInput
        placeholder={i18n("whereYourDestination")}
        value={locationTitle}
        onFocus={onRequestNow}
      />

      {userFavLocations.map((location, index) => (
        <Location key={index} title={location} onPress={onRequestNow} />
      ))}

      <AddLocationButton
        disabled={disableAddLocation}
        text={i18n("addLocationToFav")}
      />

      <CustomButton
        text={i18n("requestNow")}
        onPress={onRequestNow}
        textStyle={styles.buttonText}
        disabled={disableButton}
      />
    </StaticBottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
  title: {
    fontFamily: "cairo-800",
    fontSize: 15,
  },
  buttonText: {
    fontFamily: "cairo-800",
    fontSize: 16,
  },
});
