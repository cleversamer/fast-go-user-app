import { StyleSheet, SafeAreaView, Image, Text } from "react-native";
import CustomButton from "../../components/buttons/CustomButton";
import useLocale from "../../hooks/useLocale";
import screens from "../../static/screens.json";

export default function PendingRequestScreen({ navigation }) {
  const { i18n } = useLocale();

  const handleEditRequest = () => {
    try {
      navigation.navigate(screens.driverHome);
    } catch (err) {}
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/icons/logo.png")}
        resizeMode="contain"
        style={styles.logo}
      />

      <Image
        source={require("../../assets/images/taxi.png")}
        resizeMode="contain"
        style={styles.image}
      />

      <Text style={styles.title}>{i18n("requestHasBeenSent")}</Text>

      <Text style={styles.subtitle}>{i18n("requestUnderReview")}</Text>

      <CustomButton
        text={i18n("editRequest")}
        onPress={handleEditRequest}
        containerStyle={styles.buttonContainer}
        textStyle={styles.buttonText}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 70,
    alignItems: "center",
  },
  logo: {
    width: 240,
    height: 56,
    marginBottom: 50,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 35,
  },
  title: {
    fontFamily: "cairo-800",
    fontSize: 18,
    marginBottom: 15,
  },
  subtitle: {
    fontFamily: "cairo-700",
    fontSize: 14,
    color: "#747474",
    marginBottom: 50,
  },
  buttonContainer: {
    alignSelf: "stretch",
    marginHorizontal: 25,
  },
  buttonText: {
    fontFamily: "cairo-800",
    fontSize: 16,
  },
});
