import { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import ScreenSteps from "../../components/common/ScreenSteps";
import Checkbox from "../../components/inputs/Checkbox";
import PopupError from "../../components/popups/PopupError";
import useLocale from "../../hooks/useLocale";
import NetworkStatusLine from "../../components/common/NetworkStatusLine";
import screens from "../../static/screens.json";
import useScreen from "../../hooks/useScreen";

export default function LoginScreen2({ navigation, route }) {
  const screen = useScreen();
  const { authType, role } = route.params;
  const { i18n, lang } = useLocale();
  const [error, setError] = useState(false);
  const [isPrivacyApproved, setIsPrivacyApproved] = useState(false);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: screen.getVerticalPixelSize(15),
      paddingHorizontal: screen.getHorizontalPixelSize(15),
      paddingTop: screen.getVerticalPixelSize(70),
    },
    arTitleContainer: {
      flexDirection: "row",
      justifyContent: "flex-end",
      gap: screen.getHorizontalPixelSize(15),
    },
    enTitleContainer: {
      flexDirection: "row-reverse",
      justifyContent: "flex-end",
      gap: screen.getHorizontalPixelSize(15),
    },
    title: {
      fontFamily: "cairo-700",
      flexShrink: 1,
    },
    image: {
      width: screen.getHorizontalPixelSize(50),
      height: screen.getVerticalPixelSize(50),
    },
    privacyText: {
      fontFamily: "cairo-400",
      fontSize: 13,
      marginTop: screen.getVerticalPixelSize(40),
    },
    screenStepsContainer: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      paddingHorizontal: screen.getHorizontalPixelSize(15),
      marginBottom: screen.getVerticalPixelSize(50),
      gap: screen.getVerticalPixelSize(20),
    },
    breakLine: {
      borderWidth: screen.getHorizontalPixelSize(0.5),
      borderColor: "#ababab",
      backgroundColor: "#ababab",
    },
  });

  const handleClosePopup = () => {
    try {
      setError(false);
    } catch (err) {}
  };

  const handleGoBack = () => {
    try {
      navigation.goBack();
    } catch (err) {}
  };

  const handleNext = () => {
    try {
      navigation.navigate(screens.login4, { authType });
    } catch (err) {}
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
