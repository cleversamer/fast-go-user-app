import { StyleSheet, Text } from "react-native";
import StaticBottomSheet from "../bottomSheet/StaticBottomSheet";
import AddressInput from "../addressInput";
import Location from "../location";
import AddLocation from "../addLocation";
import CustomButton from "../button";

export default function HomeBottomSheet1() {
  const handleRequestNow = () => {};

  return (
    <StaticBottomSheet contentStyle={styles.container} snapPoints={["40%"]}>
      <Text style={styles.title}>إلى أين الوجهة ؟</Text>

      <AddressInput placeholder="أين وجهتك؟" />

      <Location title="فلسطين,قطاع غزة,غزة,محافظةغزةالزيتون,890" />

      <AddLocation />

      <CustomButton
        text="اطلب الآن"
        onPress={handleRequestNow}
        textStyle={styles.buttonText}
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
