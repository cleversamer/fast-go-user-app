import { SafeAreaView, StyleSheet, Text } from "react-native";
import AddressInput from "../../components/addressInput";
import Location from "../../components/location";
import AddLocation from "../../components/addLocation";
import CustomButton from "../../components/button";

const locations = [
  "فلسطين,قطاع غزة,غزة,محافظةغزةالزيتون,890",
  "فلسطين,قطاع غزة,غزة,محافظةغزةالزيتون,890",
  "فلسطين,قطاع غزة,غزة,محافظةغزةالزيتون,890",
];

export default function HomeScreen2() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>إلى أين الوجهة ؟</Text>

      <AddressInput placeholder="أين وجهتك؟" />

      {locations.map((location, index) => (
        <Location key={index} title={location} />
      ))}

      <AddLocation />

      <CustomButton text="متابعة" textStyle={styles.buttonText} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 60,
    gap: 15,
  },
  title: {
    fontFamily: "cairo-800",
    fontSize: 15,
  },
  buttonText: {
    fontFamily: "cairo-800",
  },
});
