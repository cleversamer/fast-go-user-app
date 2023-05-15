import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import * as theme from "../../constants/theme";
import InputIcon from "../../components/inputIcon";
import PhoneInput from "../../components/phoneInput";
import ScreenSteps from "../../components/screenSteps";
import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen2({ navigation }) {
  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleNext = () => {
    navigation.navigate("LoginScreen3");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>مرحبًا بك!</Text>
      <Text style={styles.subtitle}>أكّد معلوماتك</Text>

      <View style={styles.inputsContainer}>
        <View style={styles.textInputsContainer}>
          <InputIcon
            Icon={() => <Ionicons name="person" style={styles.inputIcon} />}
            placeholder="الإسم الأخير"
            containerStyles={styles.inputContainer}
          />
          <InputIcon
            Icon={() => <Ionicons name="person" style={styles.inputIcon} />}
            placeholder="الإسم الأول"
            containerStyles={styles.inputContainer}
          />
        </View>

        <PhoneInput />
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
  textInputsContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  inputContainer: {
    flex: 1,
  },
  inputIcon: {
    marginRight: 10,
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
