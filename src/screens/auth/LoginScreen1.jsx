import { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from "react-native";
import PhoneInput from "../../components/inputs/PhoneInput";
import CustomButton from "../../components/buttons/CustomButton";
import HorizontalLines from "../../components/common/HorizontalLines";
import ContinueButton from "../../components/buttons/ContinueButton";
import useLocale from "../../hooks/useLocale";
import NetworkStatusLine from "../../components/common/NetworkStatusLine";
import screens from "../../static/screens.json";
import checkPhoneNSN from "../../utils/checkPhoneNSN";
import useScreen from "../../hooks/useScreen";
import { signInWithGoogle } from "../../firebase";
import auth from "@react-native-firebase/auth";

export default function LoginScreen1({ navigation, route }) {
  const screen = useScreen();
  const { role } = route.params;
  const { i18n } = useLocale();
  const [phone, setPhone] = useState({ icc: "+218", nsn: "" });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: screen.getHorizontalPixelSize(15),
      paddingVertical: screen.getVerticalPixelSize(15),
      paddingTop: screen.getVerticalPixelSize(50),
    },
    title: {
      fontFamily: "cairo-800",
      fontSize: screen.getResponsiveFontSize(28),
      marginBottom: screen.getVerticalPixelSize(5),
    },
    subtitle: {
      fontFamily: "cairo-600",
      fontSize: screen.getResponsiveFontSize(16),
      color: "#747474",
    },
    phoneContainer: {
      marginTop: screen.getVerticalPixelSize(60),
      marginBottom: screen.getVerticalPixelSize(20),
    },
    buttonContainer: {
      paddingVertical: screen.getVerticalPixelSize(12),
    },
    buttonText: {
      fontFamily: "cairo-800",
      fontSize: screen.getResponsiveFontSize(16),
    },
    horizontalLinesContainer: {
      marginVertical: screen.getVerticalPixelSize(25),
    },
    horizontalLinesText: {
      fontFamily: "cairo-700",
      marginHorizontal: screen.getHorizontalPixelSize(5),
    },
    loginButtonsContainer: {
      gap: screen.getVerticalPixelSize(15),
    },
    conditionsText: {
      fontFamily: "cairo-400",
      marginTop: screen.getVerticalPixelSize(30),
      color: "#747474",
    },
    privacyPolicyText: {
      fontFamily: "cairo-400",
      marginTop: screen.getVerticalPixelSize(30),
      color: "#747474",
    },
    blueText: {
      color: "#0038FF",
    },
  });

  const handlePhoneNSNChange = (phoneNSN) => {
    try {
      const inputValue = phoneNSN.trim();

      if (inputValue.length <= 9) {
        setPhone({ ...phone, nsn: inputValue });
      }
    } catch (err) {}
  };

  const handleContinue = () => {
    try {
      navigation.navigate(screens.login2, { authType: "email", phone, role });
    } catch (err) {}
  };

  const handleContinueWithGoogle = async () => {
    try {
      const res = await auth().signInWithPhoneNumber(phone.icc + phone.nsn);
      // navigation.navigate(screens.login2, { authType: "google", phone, role });
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleContinueWithFacebook = () => {
    try {
      navigation.navigate(screens.login2, {
        authType: "facebook",
        phone,
        role,
      });
    } catch (err) {}
  };

  const handleContinueWithApple = () => {
    try {
      navigation.navigate(screens.login2, { authType: "apple", phone, role });
    } catch (err) {}
  };

  return (
    <SafeAreaView style={styles.container}>
      <NetworkStatusLine />

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>{i18n("loginScreen1Title")}</Text>
        <Text style={styles.subtitle}>{i18n("loginScreen1Subtitle")}</Text>

        <View style={styles.phoneContainer}>
          <PhoneInput
            icc={phone.icc}
            nsn={phone.nsn}
            onNSNChange={handlePhoneNSNChange}
          />
        </View>

        <CustomButton
          text={i18n("continue")}
          onPress={handleContinue}
          containerStyle={styles.buttonContainer}
          textStyle={styles.buttonText}
          disabled={!checkPhoneNSN(phone.nsn)}
        />

        <HorizontalLines
          text={i18n("or")}
          containerStyle={styles.horizontalLinesContainer}
          textStyle={styles.horizontalLinesText}
        />

        <View style={styles.loginButtonsContainer}>
          <ContinueButton
            text={i18n("continueWithGoogle")}
            icon={require("../../assets/images/google.png")}
            onPress={handleContinueWithGoogle}
          />

          <ContinueButton
            text={i18n("continueWithFacebook")}
            icon={require("../../assets/images/facebook.png")}
            onPress={handleContinueWithFacebook}
          />

          <ContinueButton
            text={i18n("continueWithApple")}
            icon={require("../../assets/images/apple.png")}
            onPress={handleContinueWithApple}
          />
        </View>

        <Text style={styles.conditionsText}>{i18n("registerConditions")}</Text>

        <Text style={styles.privacyPolicyText}>
          {i18n("googleConditionsPart1")}{" "}
          <Text style={styles.blueText}>{i18n("googleConditionsPart2")}</Text>{" "}
          {i18n("googleConditionsPart3")}{" "}
          <Text style={styles.blueText}>{i18n("googleConditionsPart4")}</Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
