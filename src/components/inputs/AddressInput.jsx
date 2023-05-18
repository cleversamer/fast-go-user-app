import { View, StyleSheet, TextInput } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import * as theme from "../../constants/theme";
import useLocale from "../../hooks/useLocale";

export default function AddressInput({
  value,
  onChange,
  placeholder,
  onFocus,
}) {
  const { lang } = useLocale();

  return (
    <View style={lang === "ar" ? styles.arContainer : styles.enContainer}>
      <TextInput
        onChangeText={onChange}
        placeholder={placeholder}
        style={lang === "ar" ? styles.arInput : styles.enInput}
        value={value}
        onFocus={onFocus}
        editable={false}
      />

      <EvilIcons name="location" size={34} color={theme.primaryColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  arContainer: {
    borderRadius: 8,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: theme.primaryColor,
    flexDirection: "row",
    alignItems: "center",
  },
  enContainer: {
    borderRadius: 8,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: theme.primaryColor,
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  arInput: {
    flex: 1,
    color: "#000",
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontFamily: "cairo-400",
    textAlign: "right",
  },
  enInput: {
    flex: 1,
    color: "#000",
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontFamily: "cairo-400",
    textAlign: "left",
  },
});
