import { StyleSheet, SafeAreaView, Text, Image } from "react-native";
import useScreen from "../../hooks/useScreen";
import useLocale from "../../hooks/useLocale";
import CustomButton from "../../components/buttons/CustomButton";
import screens from "../../static/screens.json";

export default function AddDriverScreen4({ navigation }) {
  const screen = useScreen();
  const { i18n } = useLocale();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      gap: screen.getVerticalPixelSize(15),
      paddingHorizontal: screen.getHorizontalPixelSize(15),
      paddingVertical: screen.getVerticalPixelSize(15),
      justifyContent: "center",
      alignItems: "center",
      gap: screen.getVerticalPixelSize(15),
    },
    title: {
      fontFamily: "cairo-700",
      fontSize: screen.getResponsiveFontSize(16),
      marginTop: screen.getVerticalPixelSize(10),
      textAlign: "center",
    },
    image: {
      width: screen.getScreenWidth() * 0.75,
      maxWidth: screen.getHorizontalPixelSize(400),
      height: screen.getScreenWidth() * 0.75,
      maxHeight: screen.getHorizontalPixelSize(400),
      alignSelf: "center",
    },
    buttonContainer: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      marginHorizontal: screen.getHorizontalPixelSize(20),
      marginBottom: screen.getVerticalPixelSize(50),
    },
    buttonText: {
      fontFamily: "cairo-700",
      fontSize: screen.getResponsiveFontSize(16),
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/images/success.png")}
        resizeMode="contain"
        style={styles.image}
      />

      <Text style={styles.title}>{i18n("successMssg")}</Text>

      <CustomButton
        text={i18n("backToHome")}
        containerStyle={styles.buttonContainer}
        textStyle={styles.buttonText}
        onPress={() => navigation.navigate(screens.adminHome)}
      />
    </SafeAreaView>
  );
}
