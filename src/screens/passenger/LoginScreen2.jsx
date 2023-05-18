import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import * as theme from "../../constants/theme";
import InputIcon from "../../components/inputs/InputIcon";
import PhoneInput from "../../components/inputs/PhoneInput";
import ScreenSteps from "../../components/common/ScreenSteps";
import { Ionicons } from "@expo/vector-icons";
import useLocale from "../../hooks/useLocale";
import NetworkStatusLine from "../../components/common/NetworkStatusLine";
import screens from "../../static/screens.json";
import ReferralCodeInput from "../../components/inputs/ReferralCodeInput";

export default function PassengerLoginScreen2({ navigation }) {
  const { i18n, lang } = useLocale();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleNext = () => {
    navigation.navigate(screens.passengerLogin3);
  };

  return (
    <SafeAreaView style={styles.container}>
      <NetworkStatusLine />

      <Text style={styles.title}>{i18n("loginScreen2Title")}</Text>
      <Text style={styles.subtitle}>{i18n("loginScreen2Subtitle")}</Text>

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
          />
        </View>

        <PhoneInput />

        <ReferralCodeInput />
      </View>

      <View style={styles.screenStepsContainer}>
        <ScreenSteps onNext={handleNext} onPrev={handleGoBack} />
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
    fontSize: theme.sizes.h1,
    fontFamily: "cairo-800",
    fontSize: 28,
  },
  subtitle: {
    fontSize: theme.sizes.h3,
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
