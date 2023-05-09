import { useRef, useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export default function OTPInput() {
  const digit1Ref = useRef(null);
  const digit2Ref = useRef(null);
  const digit3Ref = useRef(null);
  const digit4Ref = useRef(null);
  const digit5Ref = useRef(null);
  const digit6Ref = useRef(null);
  const [digits, setDigits] = useState({
    d1: "",
    d2: "",
    d3: "",
    d4: "",
    d5: "",
    d6: "",
  });

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          ref={digit1Ref}
          style={styles.input}
          keyboardType="number-pad"
          maxLength={1}
          value={digits.d1}
          onChange={(digit) => {
            setDigits({ ...digits, d1: digit });
            if (digit !== "") {
              digit2Ref.current.focus();
            }
          }}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          ref={digit2Ref}
          style={styles.input}
          keyboardType="number-pad"
          maxLength={1}
          value={digits.d2}
          onChange={(digit) => {
            setDigits({ ...digits, d2: digit });
            if (digit !== "") {
              digit3Ref.current.focus();
            }
          }}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          ref={digit3Ref}
          style={styles.input}
          keyboardType="number-pad"
          maxLength={1}
          value={digits.d3}
          onChange={(digit) => {
            setDigits({ ...digits, d3: digit });
            if (digit !== "") {
              digit4Ref.current.focus();
            }
          }}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          ref={digit4Ref}
          style={styles.input}
          keyboardType="number-pad"
          maxLength={1}
          value={digits.d4}
          onChange={(digit) => {
            setDigits({ ...digits, d4: digit });
            if (digit !== "") {
              digit5Ref.current.focus();
            }
          }}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          ref={digit5Ref}
          style={styles.input}
          keyboardType="number-pad"
          maxLength={1}
          value={digits.d5}
          onChange={(digit) => {
            setDigits({ ...digits, d5: digit });

            if (digit !== "") {
              digit6Ref.current.focus();
            }
          }}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          ref={digit6Ref}
          style={styles.input}
          keyboardType="number-pad"
          maxLength={1}
          value={digits.d6}
          onChange={(digit) => {
            setDigits({ ...digits, d6: digit });
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: 10,
    paddingHorizontal: 15,
  },
  inputContainer: {
    flex: 1,
    borderBottomWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    fontFamily: "cairo-700",
    fontSize: 28,
  },
});
