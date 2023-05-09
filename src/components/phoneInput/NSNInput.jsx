import { View, StyleSheet, TextInput } from "react-native";
import * as theme from "../../constants/theme";
import { Ionicons } from "@expo/vector-icons";

export default function NSNInput({ value, onChange }) {
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChange}
        placeholder="91 7763190"
        style={styles.input}
        keyboardType="number-pad"
        value={value}
      />

      <Ionicons
        name="call-outline"
        size={24}
        color="black"
        style={styles.icon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 110,
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
  },
  icon: {
    marginRight: 10,
  },
});
