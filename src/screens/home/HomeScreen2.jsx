import { useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import AddressInput from "../../components/addressInput";
import Location from "../../components/location";
import CustomButton from "../../components/button";
import useLocale from "../../hooks/useLocale";

const _locations = [
  "فلسطين,قطاع غزة,غزة,محافظةغزةالزيتون,890",
  "فلسطين,قطاع غزة,غزة,محافظةغزةالزيتون,890",
  "فلسطين,قطاع غزة,غزة,محافظةغزةالزيتون,890",
];

export default function HomeScreen2({ navigation }) {
  const { i18n } = useLocale();
  const [locations, setLocations] = useState(_locations);

  const handleDeleteLocation = (locationIndex) => {
    const newLocations = [...locations];
    newLocations.splice(locationIndex, 1);
    setLocations(newLocations);
  };

  const handleContinue = () => {
    navigation.navigate("HomeScreen3");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{i18n("whereTo")}</Text>

      <AddressInput placeholder={i18n("whereYourDestination")} />

      {locations.map((location, index) => (
        <Location
          key={index}
          title={location}
          showDelete
          onDelete={() => handleDeleteLocation(index)}
        />
      ))}

      <CustomButton
        text={i18n("continue")}
        textStyle={styles.buttonText}
        disabled={!locations.length}
        onPress={handleContinue}
      />
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
