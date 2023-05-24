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

const MAX_CODE_LENGTH = 4;

export default function LoginScrseen2({ navigation }) {
  const { i18n } = useLocale();
  const { login } = useAuth();
  const { remainingSeconds, resetTimer, isTimerDone } = useTimer(150);
  const [code, setCode] = useState("");
  const [readyPin, setReadyPin] = useState(false);

  useEffect(() => {
    try {
      let timeoutId;

      if (code.length === MAX_CODE_LENGTH) {
        timeoutId = setTimeout(() => {
          login();
        }, 1500);
      }

      return () => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      };
    } catch (err) {}
  }, [code]);

  const handleGoBack = () => {
    try {
      navigation.goBack();
    } catch (err) {}
  };

  const handleSubmit = () => {
    try {
      if (code.length === MAX_CODE_LENGTH) {
        login();
      }
    } catch (err) {}
  };

  const handleResendCode = () => {
    try {
      // TODO: resend code
      resetTimer();
    } catch (err) {}
  };

  const mapSeconds = (seconds) => {
    try {
      const _minutes = Math.floor(seconds / 60);
      const _seconds = seconds % 60;

      const displayMinutes = _minutes < 10 ? `0${_minutes}` : _minutes;
      const displaySeconds = _seconds < 10 ? `0${_seconds}` : _seconds;
      return `${displayMinutes}:${displaySeconds}`;
    } catch (err) {
      return seconds;
    }
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
    padding: theme.getPixelSize(15),
    paddingTop: theme.getPixelSize(70),
  },
  title: {
    fontFamily: "cairo-700",
    fontSize: theme.getPixelSize(18),
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
    padding: theme.getPixelSize(5),
    fontSize: theme.getPixelSize(16),
  },
  remainingSeconds: {
    fontFamily: "cairo-700",
  },
  screenStepsContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: theme.getPixelSize(15),
    marginBottom: theme.getPixelSize(50),
    gap: theme.getPixelSize(20),
  },
  breakLine: {
    borderWidth: theme.getPixelSize(0.5),
    borderColor: "#ababab",
    backgroundColor: "#ababab",
  },
});
