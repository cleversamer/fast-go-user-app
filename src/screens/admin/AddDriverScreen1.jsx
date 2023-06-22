import { useState } from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import useScreen from "../../hooks/useScreen";
import useLocale from "../../hooks/useLocale";
import DefaultScreenTitle from "../../components/screenTitles/DefaultScreenTitle";
import InputIcon from "../../components/inputs/InputIcon";
import { Feather, Ionicons } from "@expo/vector-icons";
import ScreenSteps from "../../components/common/ScreenSteps";
import screens from "../../static/screens.json";
import * as theme from "../../constants/theme";
import PhoneInput from "../../components/inputs/PhoneInput";
import SelectInput from "../../components/inputs/SelectInput";
import data from "../../static/data.json";
import checkPhoneNSN from "../../utils/checkPhoneNSN";
import checkRealName from "../../utils/checkForRealName";
import checkEmail from "../../utils/checkEmail";

export default function AddDriverScreen1({ navigation }) {
  const screen = useScreen();
  const { i18n, lang } = useLocale();
  const [context, setContext] = useState({
    phone: { icc: "+218", nsn: "" },
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      gap: screen.getVerticalPixelSize(15),
      paddingHorizontal: screen.getHorizontalPixelSize(15),
      paddingVertical: screen.getVerticalPixelSize(15),
      paddingTop: screen.getVerticalPixelSize(50),
    },
    title: {
      fontFamily: "cairo-700",
      fontSize: screen.getResponsiveFontSize(16),
      marginTop: screen.getVerticalPixelSize(10),
    },
    inputsContainer: {
      gap: screen.getVerticalPixelSize(24),
    },
    arTextInputsContainer: {
      flexDirection: "row",
      gap: screen.getHorizontalPixelSize(10),
      alignItems: "center",
    },
    enTextInputsContainer: {
      flexDirection: "row-reverse",
      gap: screen.getHorizontalPixelSize(10),
      alignItems: "center",
    },
    inputContainer: {
      flex: 1,
    },
    arInputIcon: {
      marginRight: screen.getHorizontalPixelSize(10),
      fontSize: screen.getResponsiveFontSize(20),
      color: theme.primaryColor,
    },
    enInputIcon: {
      marginLeft: screen.getHorizontalPixelSize(10),
      fontSize: screen.getResponsiveFontSize(20),
      color: theme.primaryColor,
    },
    screenStepsContainer: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      paddingHorizontal: screen.getHorizontalPixelSize(15),
      marginBottom: screen.getVerticalPixelSize(50),
    },
  });

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

  const handleKeyChange = (key) => (value) => {
    try {
      setContext({ ...context, [key]: value });
    } catch (err) {}
  };

  const isValidForm = () => {
    try {
      const { phone, email, firstName, lastName, gender } = context;

      const isValidPhone = checkPhoneNSN(phone.nsn);
      const isValidFirstName = firstName.length >= 3 && firstName.length <= 16;
      const isValidLastName = lastName.length >= 3 && lastName.length <= 16;
      const isRealName = checkRealName(firstName + lastName);
      const isValidEmail = checkEmail(email);
      const isValidGender = data.genders.includes(gender);

      const isValidForm =
        isValidPhone &&
        isValidFirstName &&
        isValidLastName &&
        isRealName &&
        isValidEmail &&
        isValidGender &&
        isValidGender;

      return isValidForm;
    } catch (err) {
      return true;
    }
  };

  const handleGoBack = () => {
    try {
      navigation.goBack();
    } catch (err) {}
  };

  const handleNext = () => {
    try {
      navigation.navigate(screens.login3, {
        authType,
        role,
        ...context,
      });
    } catch (err) {}
  };

  return (
    <SafeAreaView style={styles.container}>
      <DefaultScreenTitle title={i18n("addDriver")} onPrev={handleGoBack} />

      <Text style={styles.title}>{i18n("addDriverInfo")}</Text>

      <View style={styles.inputsContainer}>
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
                style={lang === "ar" ? styles.arInputIcon : styles.enInputIcon}
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
                style={lang === "ar" ? styles.arInputIcon : styles.enInputIcon}
              />
            )}
            placeholder={i18n("firstname")}
            containerStyles={styles.inputContainer}
            value={context.firstName}
            onChange={handleKeyChange("firstName")}
          />
        </View>

        <PhoneInput
          icc={context.phone.icc}
          nsn={context.phone.nsn}
          onNSNChange={handlePhoneNSNChange}
        />

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

        <SelectInput
          value={context.gender ? i18n(context.gender) : ""}
          options={data.genders.map((g) => ({ key: g, value: i18n(g) }))}
          onChange={handleKeyChange("gender")}
          placeholder={i18n("selectGender")}
        />
      </View>

      <View style={styles.screenStepsContainer}>
        <ScreenSteps
          onNext={handleNext}
          disableNext={!isValidForm()}
          showPrev={false}
        />
      </View>
    </SafeAreaView>
  );
}
