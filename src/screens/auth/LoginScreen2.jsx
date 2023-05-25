import { useState } from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import * as theme from "../../constants/theme";
import InputIcon from "../../components/inputs/InputIcon";
import PhoneInput from "../../components/inputs/PhoneInput";
import ScreenSteps from "../../components/common/ScreenSteps";
import { Feather, Ionicons } from "@expo/vector-icons";
import useLocale from "../../hooks/useLocale";
import NetworkStatusLine from "../../components/common/NetworkStatusLine";
import screens from "../../static/screens.json";
import ReferralCodeInput from "../../components/inputs/ReferralCodeInput";
import checkPhoneNSN from "../../utils/checkPhoneNSN";
import checkRealName from "../../utils/checkForRealName";
import checkEmail from "../../utils/checkEmail";

export default function LoginScreen2({ navigation, route }) {
  const { authType, role } = route.params;
  const { i18n, lang } = useLocale();
  const [context, setContext] = useState({
    phone: { icc: "+218", nsn: "" },
    firstName: "",
    lastName: "",
    email: "",
    referralCode: "",
  });

  const handleGoBack = () => {
    try {
      navigation.goBack();
    } catch (err) {}
  };

  const handleNext = () => {
    try {
      navigation.navigate(screens.login3, { authType });
    } catch (err) {}
  };

  const handlePhoneNSNChange = (phoneNSN) => {
    try {
      const inputValue = phoneNSN.trim();

      if (inputValue.length <= 9) {
        setContext({
          ...context,
          phone: { ...context.phone, nsn: inputValue },
        });
      }
    } catch (err) {}
  };

  const handleReferralCodeChange = (referralCode) => {
    try {
      const inputValue = referralCode.trim();

      if (inputValue.length <= 14) {
        setContext({ ...context, referralCode: inputValue });
      }
    } catch (err) {}
  };

  const handleKeyChange = (key) => (value) => {
    try {
      setContext({ ...context, [key]: value });
    } catch (err) {}
  };

  const isValidForm = () => {
    try {
      const { phone, email, firstName, lastName, referralCode } = context;

      const isValidPhone = checkPhoneNSN(phone.nsn);
      const isValidFirstName = firstName.length >= 3 && firstName.length <= 16;
      const isValidLastName = lastName.length >= 3 && lastName.length <= 16;
      const isRealName = checkRealName(firstName + lastName);
      const isValidReferralCode = !referralCode || referralCode.length === 14;
      const isValidEmail = checkEmail(email);

      const isValidEmailLogin =
        isValidFirstName &&
        isValidLastName &&
        isRealName &&
        isValidEmail &&
        isValidReferralCode;

      const isValidOuterLogin = isValidPhone && isValidReferralCode;

      return authType === "email" ? isValidEmailLogin : isValidOuterLogin;
    } catch (err) {
      return true;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <NetworkStatusLine />

      <Text style={styles.title}>{i18n("loginScreen2Title")}</Text>
      <Text style={styles.subtitle}>{i18n("loginScreen2Subtitle")}</Text>

      <View style={styles.inputsContainer}>
        {authType === "email" && (
          <View
            style={
              lang === "ar"
                ? styles.arTextInputsContainer
                : styles.enTextInputsContainer
            }
          >
            <InputIcon
              Icon={() => (
                <Ionicons
                  name="person"
                  style={
                    lang === "ar" ? styles.arInputIcon : styles.enInputIcon
                  }
                />
              )}
              placeholder={i18n("lastname")}
              containerStyles={styles.inputContainer}
              value={context.lastName}
              onChange={handleKeyChange("lastName")}
            />

            <InputIcon
              Icon={() => (
                <Ionicons
                  name="person"
                  style={
                    lang === "ar" ? styles.arInputIcon : styles.enInputIcon
                  }
                />
              )}
              placeholder={i18n("firstname")}
              containerStyles={styles.inputContainer}
              value={context.firstName}
              onChange={handleKeyChange("firstName")}
            />
          </View>
        )}

        {authType !== "email" && (
          <PhoneInput
            icc={context.phone.icc}
            nsn={context.phone.nsn}
            onNSNChange={handlePhoneNSNChange}
          />
        )}

        {authType === "email" && (
          <InputIcon
            placeholder={i18n("email")}
            keyboardType="email-address"
            value={context.email}
            onChange={handleKeyChange("email")}
            Icon={() => (
              <Feather
                name="mail"
                style={lang === "ar" ? styles.arInputIcon : styles.enInputIcon}
              />
            )}
          />
        )}

        <ReferralCodeInput
          value={context.referralCode}
          onChange={handleReferralCodeChange}
        />
      </View>

      <View style={styles.screenStepsContainer}>
        <ScreenSteps
          onNext={handleNext}
          onPrev={handleGoBack}
          disableNext={!isValidForm()}
        />
      </View>
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
    fontSize: 22,
    fontFamily: "cairo-800",
    fontSize: 28,
  },
  subtitle: {
    fontFamily: "cairo-600",
    fontSize: 16,
    color: "#747474",
  },
  inputsContainer: {
    gap: 24,
    marginVertical: 30,
  },
  arTextInputsContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  enTextInputsContainer: {
    flexDirection: "row-reverse",
    gap: 10,
    alignItems: "center",
  },
  inputContainer: {
    flex: 1,
  },
  arInputIcon: {
    marginRight: 10,
    fontSize: 20,
    color: theme.primaryColor,
  },
  enInputIcon: {
    marginLeft: 10,
    fontSize: 20,
    color: theme.primaryColor,
  },
  screenStepsContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 15,
    marginBottom: 50,
  },
});
