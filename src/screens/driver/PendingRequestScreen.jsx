import { StyleSheet, SafeAreaView, Image, Text } from "react-native";
import CustomButton from "../../components/buttons/CustomButton";
import useLocale from "../../hooks/useLocale";
import screens from "../../static/screens.json";
import useScreen from "../../hooks/useScreen";

export default function PendingRequestScreen({ navigation }) {
  const screen = useScreen();
  const { i18n } = useLocale();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      paddingHorizontal: screen.getHorizontalPixelSize(15),
      paddingVertical: screen.getVerticalPixelSize(15),
      paddingTop: screen.getVerticalPixelSize(70),
    },
    logo: {
      width: screen.getHorizontalPixelSize(240),
      height: screen.getVerticalPixelSize(56),
      marginBottom: screen.getVerticalPixelSize(50),
    },
    image: {
      width: screen.getHorizontalPixelSize(300),
      height: screen.getVerticalPixelSize(300),
      marginBottom: screen.getVerticalPixelSize(35),
    },
    title: {
      fontFamily: "cairo-800",
      fontSize: screen.getResponsiveFontSize(18),
      marginBottom: screen.getVerticalPixelSize(15),
    },
    subtitle: {
      fontFamily: "cairo-700",
      fontSize: screen.getResponsiveFontSize(14),
      color: "#747474",
      marginBottom: screen.getVerticalPixelSize(50),
    },
    buttonContainer: {
      alignSelf: "stretch",
      marginHorizontal: screen.getHorizontalPixelSize(25),
    },
    buttonText: {
      fontFamily: "cairo-800",
      fontSize: screen.getResponsiveFontSize(16),
    },
  });

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
