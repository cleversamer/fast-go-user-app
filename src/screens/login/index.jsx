import { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import * as theme from "../../constants/theme";
import PhoneInput from "../../components/phoneInput";
import CustomButton from "../../components/button";
import HorizontalLines from "../../components/horizontalLines";
import ContinueButton from "../../components/continueButton";

export default function LoginScreen() {
  const [phone, setPhone] = useState({ icc: "+218", nsn: "" });

  const handleKeyChange = (key) => (value) =>
    setPhone({ ...phone, [key]: value });

  const handleContinueWithGoogle = () => {};

  const handleContinueWithFacebook = () => {};

  const handleContinueWithApple = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>مرحبًا بك!</Text>
      <Text style={styles.subtitle}>قم بتسجيل الدخول للمتابعة</Text>

      <View style={styles.phoneContainer}>
        <PhoneInput
          icc={phone.icc}
          nsn={phone.nsn}
          onICCChange={handleKeyChange("icc")}
          onNSNChange={handleKeyChange("nsn")}
        />
      </View>

      <CustomButton
        text="متابعة"
        containerStyle={styles.buttonContainer}
        textStyle={styles.buttonText}
      />

      <HorizontalLines
        text="أو"
        containerStyle={styles.horizontalLinesContainer}
        textStyle={styles.horizontalLinesText}
      />

      <View style={styles.loginButtonsContainer}>
        <ContinueButton
          text="متابعة باستخدام جوجل"
          icon={require("../../assets/images/google.png")}
          onPress={handleContinueWithGoogle}
        />

        <ContinueButton
          text="متابعة باستخدام فيسبوك"
          icon={require("../../assets/images/facebook.png")}
          onPress={handleContinueWithGoogle}
        />

        <ContinueButton
          text="متابعة باستخدام آبل"
          icon={require("../../assets/images/apple.png")}
          onPress={handleContinueWithGoogle}
        />
      </View>

      <Text style={styles.conditionsText}>
        بالمتابعة، فإنك توافق على تلقِّ مكالمات واتساب أو رسائل SMS بالوسائل
        الآلية من Fast Go.
      </Text>

      <Text style={styles.privacyPolicyText}>
        هذا الموقع محمي بواسطة reCAPTCHA{" "}
        <Text style={styles.blueText}>وسياسة خصوصية Google</Text> وتطبق{" "}
        <Text style={styles.blueText}>شروط الخدمة.</Text>
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 60,
  },
  title: {
    fontSize: theme.sizes.h1,
    fontFamily: "cairo-800",
    fontSize: 28,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: theme.sizes.h3,
    fontFamily: "cairo-600",
    fontSize: 16,
    color: "#747474",
  },
  phoneContainer: {
    marginTop: 60,
    marginBottom: 20,
  },
  buttonContainer: {
    paddingVertical: 12,
  },
  buttonText: {
    fontFamily: "cairo-800",
    fontSize: 16,
  },
  horizontalLinesContainer: {
    marginVertical: 25,
  },
  horizontalLinesText: {
    fontFamily: "cairo-700",
    marginHorizontal: 5,
  },
  loginButtonsContainer: {
    gap: 15,
  },
  conditionsText: {
    fontFamily: "cairo-400",
    marginTop: 30,
    color: "#747474",
  },
  privacyPolicyText: {
    fontFamily: "cairo-400",
    marginTop: 30,
    color: "#747474",
  },
  blueText: {
    color: "#0038FF",
  },
});
