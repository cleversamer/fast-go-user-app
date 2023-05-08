import { StyleSheet, SafeAreaView, View, Text, Image } from "react-native";
import CustomButton from "../../components/button";
import * as theme from "../../constants/theme";

export default function WelcomeScreen() {
  const handleGoToLoginScreen = () => {};

  const handleGoToRegisterScreen = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/images/welcoming.png")}
        resizeMode="contain"
        style={styles.image}
      />

      <Text style={styles.title}>أهلاً وسهلاً بك!</Text>

      <Text style={styles.text}>
        نضمن لك سرعة الوصول نضمن لك سرعة الوصول نضمن لك سرعة الوصول نضمن لك سرعة
        الوصول نضمن لك سرعة الوصول
      </Text>

      <CustomButton
        text="تسجيل دخول"
        containerStyle={styles.loginButtonContainer}
        textStyle={styles.loginButtonText}
        onPress={handleGoToLoginScreen}
      />

      <CustomButton
        text="إنشاء حساب"
        containerStyle={styles.registerButtonContainer}
        textStyle={styles.registerButtonText}
        onPress={handleGoToRegisterScreen}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 30,
    padding: 15,
  },
  image: {
    width: theme.sizes.width,
    height: 300,
    marginBottom: 60,
  },
  title: {
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "cairo-800",
    fontSize: theme.sizes.h1,
  },
  text: {
    textAlign: "center",
    marginBottom: 50,
    fontFamily: "cairo-500",
    fontSize: theme.sizes.h5,
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
