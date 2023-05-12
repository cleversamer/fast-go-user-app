import { StyleSheet, Text } from "react-native";
import StaticBottomSheet from "../bottomSheet/StaticBottomSheet";
import AddressInput from "../addressInput";
import Location from "../location";
import AddLocation from "../addLocation";
import CustomButton from "../button";

const userFavLocations = ["فلسطين,قطاع غزة,غزة,محافظةغزةالزيتون,890"];

export default function HomeBottomSheet1({
  onRequestNow,
  disableButton,
  disableAddLocation,
  locationTitle,
}) {
  return (
    <StaticBottomSheet contentStyle={styles.container} snapPoints={["40%"]}>
      <Text style={styles.title}>إلى أين الوجهة ؟</Text>

      <AddressInput
        placeholder="أين وجهتك؟"
        value={locationTitle}
        onFocus={onRequestNow}
      />

      {userFavLocations.map((location, index) => (
        <Location key={index} title={location} onPress={onRequestNow} />
      ))}

      <AddLocation disabled={disableAddLocation} />

      <CustomButton
        text="اطلب الآن"
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
