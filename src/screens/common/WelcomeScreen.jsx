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

export default function WelcomeScreen({ navigation }) {
  const { i18n } = useLocale();

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingTop: theme.getPixelSize(60),
    padding: theme.getPixelSize(15),
  },
  image: {
    width: theme.getWidth(),
    height: theme.getPixelSize(300),
    marginBottom: theme.getPixelSize(60),
  },
  title: {
    textAlign: "center",
    marginBottom: theme.getPixelSize(20),
    fontFamily: "cairo-800",
    fontSize: theme.getPixelSize(22),
  },
  text: {
    textAlign: "center",
    marginBottom: theme.getPixelSize(50),
    fontFamily: "cairo-500",
    fontSize: theme.getPixelSize(14),
  },
  loginButtonContainer: {
    backgroundColor: theme.primaryColor,
    marginVertical: theme.getPixelSize(20),
    borderRadius: theme.getPixelSize(4),
  },
  loginButtonText: {
    fontSize: theme.getPixelSize(16),
    fontFamily: "cairo-800",
  },
  registerButtonContainer: {
    backgroundColor: "#fff",
    borderWidth: theme.getPixelSize(2),
    borderColor: theme.primaryColor,
    borderRadius: theme.getPixelSize(4),
  },
  registerButtonText: {
    color: "#000",
    fontSize: theme.getPixelSize(16),
    fontFamily: "cairo-800",
  },
});
