import { StyleSheet, View, TextInput, Text } from "react-native";
import * as theme from "../../constants/theme";

export default function InputIcon({
  Icon,
  placeholder,
  value,
  title,
  onChange,
  keyboardType,
  containerStyles,
}) {
  return (
    <View style={[styles.container, containerStyles || {}]}>
      {title && <Text style={styles.title}>{title}</Text>}

      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={onChange}
          placeholder={placeholder}
          style={styles.input}
          keyboardType={keyboardType || "default"}
          value={value}
        />

        {Icon && <Icon />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 7,
  },
  inputContainer: {
    borderRadius: 8,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: theme.primaryColor,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontFamily: "cairo-700",
    fontSize: 15,
  },
  input: {
    flex: 1,
    color: "#000",
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontFamily: "cairo-500",
    fontSize: 13,
    textAlign: "right",
  },
});
