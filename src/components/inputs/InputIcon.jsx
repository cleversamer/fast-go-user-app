import { StyleSheet, View, TextInput, Text } from "react-native";
import * as theme from "../../constants/theme";
import useLocale from "../../hooks/useLocale";

export default function InputIcon({
  Icon,
  placeholder,
  value,
  title,
  onChange,
  keyboardType,
  containerStyles,
}) {
  const { lang } = useLocale();

  return (
    <View style={[styles.container, containerStyles || {}]}>
      {title && <Text style={styles.title}>{title}</Text>}

      <View
        style={
          lang === "ar" ? styles.arInputContainer : styles.enInputContainer
        }
      >
        <TextInput
          onChangeText={onChange}
          placeholder={placeholder}
          style={lang === "ar" ? styles.arInput : styles.enInput}
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
  arInputContainer: {
    borderRadius: 8,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: theme.primaryColor,
    flexDirection: "row",
    alignItems: "center",
  },
  enInputContainer: {
    borderRadius: 8,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: theme.primaryColor,
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  title: {
    fontFamily: "cairo-700",
    fontSize: 15,
  },
  arInput: {
    flex: 1,
    color: "#000",
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontFamily: "cairo-500",
    fontSize: 13,
    textAlign: "right",
  },
  enInput: {
    flex: 1,
    color: "#000",
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontFamily: "cairo-500",
    fontSize: 13,
    textAlign: "left",
  },
});
