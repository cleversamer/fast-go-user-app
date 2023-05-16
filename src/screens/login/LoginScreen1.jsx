import { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from "react-native";
import * as theme from "../../constants/theme";
import PhoneInput from "../../components/phoneInput";
import CustomButton from "../../components/button";
import HorizontalLines from "../../components/horizontalLines";
import ContinueButton from "../../components/continueButton";
import useLocale from "../../hooks/useLocale";
import NetworkStatusLine from "../../components/networkStatusLine";

export default function LoginScreen1({ navigation }) {
  const { i18n } = useLocale();
  const [phone, setPhone] = useState({ icc: "+218", nsn: "" });

  const handleKeyChange = (key) => (value) =>
    setPhone({ ...phone, [key]: value });

  const handleContinue = () => {
    navigation.navigate("LoginScreen2");
  };

  const handleContinueWithGoogle = () => {
    navigation.navigate("LoginScreen2");
  };

  const handleContinueWithFacebook = () => {
    navigation.navigate("LoginScreen2");
  };

  const handleContinueWithApple = () => {
    navigation.navigate("LoginScreen2");
  };

  return (
    <SafeAreaView style={styles.container}>
      <NetworkStatusLine />

      <ScrollView>
        <Text style={styles.title}>{i18n("loginScreen1Title")}</Text>
        <Text style={styles.subtitle}>{i18n("loginScreen1Subtitle")}</Text>

        <View style={styles.phoneContainer}>
          <PhoneInput
            icc={phone.icc}
            nsn={phone.nsn}
            onICCChange={handleKeyChange("icc")}
            onNSNChange={handleKeyChange("nsn")}
          />
        </View>

        <CustomButton
          text={i18n("continue")}
          onPress={handleContinue}
          containerStyle={styles.buttonContainer}
          textStyle={styles.buttonText}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 50,
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
