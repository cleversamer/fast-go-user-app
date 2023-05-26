import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Text,
  Image,
} from "react-native";
import CustomButton from "../../components/buttons/CustomButton";
import * as theme from "../../constants/theme";
import useLocale from "../../hooks/useLocale";
import NetworkStatusLine from "../../components/common/NetworkStatusLine";
import screens from "../../static/screens.json";
import useScreen from "../../hooks/useScreen";

export default function WelcomeScreen({ navigation }) {
  const screen = useScreen();
  const { i18n } = useLocale();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-end",
      paddingHorizontal: screen.getHorizontalPixelSize(15),
      paddingVertical: screen.getVerticalPixelSize(15),
      paddingTop: screen.getVerticalPixelSize(60),
    },
    image: {
      alignSelf: "center",
      width: screen.getScreenWidth(),
      maxWidth: screen.getHorizontalPixelSize(400),
      height: screen.getVerticalPixelSize(300),
      marginBottom: screen.getVerticalPixelSize(60),
    },
    title: {
      textAlign: "center",
      marginBottom: screen.getVerticalPixelSize(20),
      fontFamily: "cairo-800",
      fontSize: screen.getResponsiveFontSize(22),
    },
    text: {
      textAlign: "center",
      marginBottom: screen.getVerticalPixelSize(50),
      fontFamily: "cairo-500",
      fontSize: screen.getResponsiveFontSize(14),
    },
    loginButtonContainer: {
      backgroundColor: theme.primaryColor,
      marginVertical: screen.getVerticalPixelSize(20),
      borderRadius: 4,
    },
    loginButtonText: {
      fontSize: screen.getResponsiveFontSize(16),
      fontFamily: "cairo-800",
    },
    registerButtonContainer: {
      backgroundColor: "#fff",
      borderWidth: screen.getHorizontalPixelSize(1.5),
      borderColor: theme.primaryColor,
      borderRadius: 4,
    },
    registerButtonText: {
      color: "#000",
      fontSize: screen.getResponsiveFontSize(16),
      fontFamily: "cairo-800",
    },
  });

  const handleRegisterAsPassenger = () => {
    try {
      navigation.navigate(screens.login1, { role: "passenger" });
    } catch (err) {}
  };

  const handleRegisterAsDriver = () => {
    try {
      navigation.navigate(screens.login1, { role: "driver" });
    } catch (err) {}
  };

  return (
    <SafeAreaView style={styles.container}>
      <NetworkStatusLine />

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={require("../../assets/images/welcoming.png")}
          resizeMode="contain"
          style={styles.image}
        />

        <Text style={styles.title}>{i18n("welcomeScreenTitle")}</Text>

        <Text style={styles.text}>{i18n("welcomeScreenSubtitle")}</Text>

        <CustomButton
          text={i18n("registerAsPassenger")}
          containerStyle={styles.loginButtonContainer}
          textStyle={styles.loginButtonText}
          onPress={handleRegisterAsPassenger}
        />

        <CustomButton
          text={i18n("registerAsDriver")}
          containerStyle={styles.registerButtonContainer}
          textStyle={styles.registerButtonText}
          onPress={handleRegisterAsDriver}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
