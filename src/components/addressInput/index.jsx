import { View, StyleSheet, TextInput } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import * as theme from "../../constants/theme";

export default function AddressInput({
  value,
  onChange,
  placeholder,
  onFocus,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChange}
        placeholder={placeholder}
        style={styles.input}
        value={value}
        onFocus={onFocus}
      />

      <EvilIcons name="location" size={34} color={theme.primaryColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: theme.primaryColor,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    color: "#000",
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontFamily: "cairo-400",
    textAlign: "right",
  },
});
