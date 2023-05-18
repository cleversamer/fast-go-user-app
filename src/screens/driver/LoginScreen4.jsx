import { useEffect, useState } from "react";
import {
  Keyboard,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ScreenSteps from "../../components/common/ScreenSteps";
import OTPInput from "../../components/inputs/OTPInput";
import useTimer from "../../hooks/useTimer";
import useAuth from "../../auth/useAuth";
import useLocale from "../../hooks/useLocale";
import NetworkStatusLine from "../../components/common/NetworkStatusLine";
import * as theme from "../../constants/theme";

export default function DriverLoginScrseen2({ navigation }) {
  const { i18n } = useLocale();
  const { login } = useAuth();
  const { remainingSeconds, resetTimer, isTimerDone } = useTimer(150);
  const [code, setCode] = useState("");
  const [readyPin, setReadyPin] = useState(false);
  const MAX_CODE_LENGTH = 4;

  useEffect(() => {
    if (code.length === 4) {
      login();
    }
  }, [code]);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSubmit = () => {
    if (code.length === 4) {
      login();
    }
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
      <NetworkStatusLine />

      <Pressable style={styles.container} onPress={Keyboard.dismiss}>
        <Text style={styles.title}>{i18n("enterSixDigitsCode")}</Text>

        <OTPInput
          code={code}
          setCode={setCode}
          setReadyPin={setReadyPin}
          maxLength={MAX_CODE_LENGTH}
          containerStyle={styles.otpInputContainer}
          onSubmit={handleSubmit}
        />

        {isTimerDone ? (
          <Text onPress={handleResendCode} style={styles.resendCodeText}>
            {i18n("resendCode")}
          </Text>
        ) : (
          <Text style={styles.timerText}>
            {i18n("youCanResendAfter")}{" "}
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
    color: theme.primaryColor,
    textDecorationLine: "underline",
    textAlign: "center",
    padding: 5,
    fontSize: 16,
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
