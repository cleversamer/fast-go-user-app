import { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import ScreenSteps from "../../components/screenSteps";
import Checkbox from "../../components/checkbox";
import PopupError from "../../components/popup/PopupError";
import useLocale from "../../hooks/useLocale";
import NetworkStatusLine from "../../components/networkStatusLine";
import screens from "../../static/screens.json";

export default function DriverLoginScreen2({ navigation }) {
  const { i18n, lang } = useLocale();
  const [error, setError] = useState(true);
  const [isPrivacyApproved, setIsPrivacyApproved] = useState(false);

  const handleClosePopup = () => setError(false);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleNext = () => {
    navigation.navigate(screens.driverLogin4);
  };

  return (
    <SafeAreaView style={styles.container}>
      <NetworkStatusLine />

      <PopupError visible={error} onClose={handleClosePopup} />

      <View
        style={
          lang === "ar" ? styles.arTitleContainer : styles.enTitleContainer
        }
      >
        <Text style={styles.title}>{i18n("loginScreen3Title")}</Text>

        <Image
          source={require("../../assets/images/privacy.png")}
          resizeMode="contain"
          style={styles.image}
        />
      </View>

      <Text style={styles.privacyText}>{i18n("loginScreen3Description")}</Text>

      <View style={styles.screenStepsContainer}>
        <View style={styles.breakLine}></View>

        <Checkbox
          text={i18n("agreeTerms")}
          checked={isPrivacyApproved}
          onCheck={() => setIsPrivacyApproved(!isPrivacyApproved)}
        />

        <ScreenSteps
          disableNext={!isPrivacyApproved}
          onNext={handleNext}
          onPrev={handleGoBack}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 70,
  },
  arTitleContainer: {
    flexDirection: "row",
    gap: 15,
  },
  enTitleContainer: {
    flexDirection: "row-reverse",
    gap: 15,
  },
  title: {
    fontFamily: "cairo-700",
    flexShrink: 1,
  },
  image: {
    width: 50,
    height: 50,
  },
  privacyText: {
    fontFamily: "cairo-400",
    fontSize: 13,
    marginTop: 40,
  },
  screenStepsContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 15,
    marginBottom: 50,
    gap: 20,
  },
  breakLine: {
    borderWidth: 0.5,
    borderColor: "#ababab",
    backgroundColor: "#ababab",
  },
});