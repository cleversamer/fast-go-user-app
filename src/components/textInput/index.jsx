import { View, StyleSheet, TextInput } from "react-native";
import * as theme from "../../constants/theme";

export default function CustomTextInput({ value, onChange, placeholder }) {
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChange}
        placeholder={placeholder}
        style={styles.input}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
