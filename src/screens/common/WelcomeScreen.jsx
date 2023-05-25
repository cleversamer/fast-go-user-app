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
    paddingTop: 60,
    padding: 15,
  },
  image: {
    width: "100%", // TODO
    height: 300,
    marginBottom: 60,
  },
  title: {
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "cairo-800",
    fontSize: 22,
  },
  text: {
    textAlign: "center",
    marginBottom: 50,
    fontFamily: "cairo-500",
    fontSize: 14,
  },
  loginButtonContainer: {
    backgroundColor: theme.primaryColor,
    marginVertical: 20,
    borderRadius: 4,
  },
  loginButtonText: {
    fontSize: 16,
    fontFamily: "cairo-800",
  },
  registerButtonContainer: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: theme.primaryColor,
    borderRadius: 4,
  },
  registerButtonText: {
    color: "#000",
    fontSize: 16,
    fontFamily: "cairo-800",
  },
});
