import { useState } from "react";
import {
  Keyboard,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ScreenSteps from "../../components/screenSteps";
import OTPInput from "../../components/otpInput";
import useTimer from "../../hooks/useTimer";
import useAuth from "../../auth/useAuth";

export default function LoginScreen2({ navigation }) {
  const { login } = useAuth();
  const { remainingSeconds, resetTimer, isTimerDone } = useTimer(150);
  const [code, setCode] = useState("");
  const [readyPin, setReadyPin] = useState(false);
  const MAX_CODE_LENGTH = 4;

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSubmit = () => {
    login();
  };

  const handleResendCode = () => {
    // TODO: resend code
    resetTimer();
  };

  const mapSeconds = (seconds) => {
    const _minutes = Math.floor(seconds / 60);
    const _seconds = seconds % 60;

    const displayMinutes = _minutes < 10 ? `0${_minutes}` : _minutes;
    const displaySeconds = _seconds < 10 ? `0${_seconds}` : _seconds;
    return `${displayMinutes}:${displaySeconds}`;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Pressable style={styles.container} onPress={Keyboard.dismiss}>
        <Text style={styles.title}>أدخل الرمز المكون من 6 أرقام</Text>

        <OTPInput
          code={code}
          setCode={setCode}
          setReadyPin={setReadyPin}
          maxLength={MAX_CODE_LENGTH}
          containerStyle={styles.otpInputContainer}
        />

        {isTimerDone ? (
          <Text onPress={handleResendCode} style={styles.resendCodeText}>
            إعادة الإرسال
          </Text>
        ) : (
          <Text style={styles.timerText}>
            يمكنك إعادة الإرسال بعد{" "}
            <Text style={styles.remainingSeconds}>
              {mapSeconds(remainingSeconds)}
            </Text>
          </Text>
        )}

        <View style={styles.screenStepsContainer}>
          <ScreenSteps
            disableNext={!readyPin}
            onPrev={handleGoBack}
            onNext={handleSubmit}
          />
        </View>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 70,
  },
  title: {
    fontFamily: "cairo-700",
    fontSize: 18,
  },
  otpInputContainer: {
    alignSelf: "center",
  },
  timerText: {
    fontFamily: "cairo-500",
    textAlign: "center",
  },
  resendCodeText: {
    fontFamily: "cairo-700",
    color: "#0038FF",
    textDecorationLine: "underline",
    textAlign: "center",
    padding: 5,
  },
  remainingSeconds: {
    fontFamily: "cairo-700",
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
