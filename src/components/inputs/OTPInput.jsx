import { useEffect, useRef, useState } from "react";
import { View, StyleSheet, TextInput, Pressable, Text } from "react-native";
import * as theme from "../../constants/theme";

export default function OTPInput({
  code,
  setCode,
  setReadyPin,
  maxLength,
  containerStyle,
  onSubmit,
}) {
  const textInputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const codeDigitsArray = Array(maxLength).fill(0);

  useEffect(() => {
    try {
      setReadyPin(code.length === maxLength);

      return () => {
        setReadyPin(false);
      };
    } catch (err) {}
  }, [code]);

  const handleOnBlur = () => {
    try {
      setIsFocused(false);
    } catch (err) {}
  };

  const handlePress = () => {
    try {
      setIsFocused(true);
      textInputRef?.current?.focus?.();
    } catch (err) {}
  };

  const toCodeDigitInput = (_value, index) => {
    try {
      const emptyInputChar = " ";
      const digit = code[index] || emptyInputChar;

      const isCurrentDigit = index === code.length;
      const isLastDigit = index === maxLength - 1;
      const isCodeFull = code.length === maxLength;
      const isDigitFocused = isCurrentDigit || (isLastDigit && isCodeFull);

      const style = [
        styles.otpInput,
        isFocused && isDigitFocused ? styles.otpInputFocused : {},
      ];

      return (
        <View key={index} style={style}>
          <Text style={styles.otpInputText}>{digit}</Text>
        </View>
      );
    } catch (err) {
      return (
        <View key={index} style={styles.otpInput}>
          <Text style={styles.otpInputText}>0</Text>
        </View>
      );
    }
  };

  return (
    <View style={[styles.container, containerStyle || {}]}>
      <Pressable style={styles.otpInputContainer} onPress={handlePress}>
        {codeDigitsArray.map(toCodeDigitInput)}
      </Pressable>

      <TextInput
        ref={textInputRef}
        style={styles.hiddenTextInput}
        value={code}
        onChangeText={setCode}
        maxLength={maxLength}
        keyboardType="number-pad"
        returnKeyType="done"
        textContentType="oneTimeCode"
        onBlur={handleOnBlur}
        onEndEditing={onSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
    marginVertical: theme.getPixelSize(30),
  },
  hiddenTextInput: {
    position: "absolute",
    width: 1,
    height: 1,
    opacity: 0,
  },
  otpInputContainer: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  otpInput: {
    borderColor: theme.primaryColor,
    minWidth: "15%",
    borderWidth: theme.getPixelSize(2),
    borderRadius: theme.getPixelSize(5),
    padding: theme.getPixelSize(12),
  },
  otpInputFocused: {
    borderColor: theme.primaryColor,
    backgroundColor: theme.primaryColorLight,
  },
  otpInputText: {
    fontSize: theme.getPixelSize(22),
    fontFamily: "cairo-700",
    textAlign: "center",
    color: "#000",
  },
});
