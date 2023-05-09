import { useEffect, useRef, useState } from "react";
import { View, StyleSheet, TextInput, Pressable, Text } from "react-native";
import * as theme from "../../constants/theme";

export default function OTPInput({
  code,
  setCode,
  setReadyPin,
  maxLength,
  containerStyle,
}) {
  const textInputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const codeDigitsArray = Array(maxLength).fill(0);

  useEffect(() => {
    setReadyPin(code.length === maxLength);

    return () => {
      setReadyPin(false);
    };
  }, [code]);

  const handleOnBlur = () => {
    setIsFocused(false);
  };

  const handlePress = () => {
    setIsFocused(true);
    textInputRef?.current?.focus?.();
  };

  const toCodeDigitInput = (_value, index) => {
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
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
    marginVertical: 30,
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
    borderWidth: 2,
    borderRadius: 5,
    padding: 12,
  },
  otpInputFocused: {
    borderColor: theme.primaryColor,
    backgroundColor: theme.primaryColorLight,
  },
  otpInputText: {
    fontSize: 22,
    fontFamily: "cairo-700",
    textAlign: "center",
    color: "#000",
  },
});
