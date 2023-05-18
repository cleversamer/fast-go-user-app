import { StyleSheet, View, TouchableOpacity } from "react-native";
import * as theme from "../../constants/theme";
import useLocale from "../../hooks/useLocale";

export default function HamburgerMenu({ onPress }) {
  const { lang } = useLocale();

  return (
    <TouchableOpacity
      style={lang === "ar" ? styles.arContainer : styles.enContainer}
      onPress={onPress}
    >
      <View style={styles.line}></View>
      <View style={styles.line}></View>
      <View style={styles.line}></View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  arContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    position: "absolute",
    top: 55,
    right: 20,
    backgroundColor: "#fff",
    width: 45,
    height: 45,
    borderRadius: 50,
    zIndex: 1,
    padding: 12,
  },
  enContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    position: "absolute",
    top: 55,
    left: 20,
    backgroundColor: "#fff",
    width: 45,
    height: 45,
    borderRadius: 50,
    zIndex: 1,
    padding: 12,
  },
  line: {
    borderWidth: 1.5,
    borderColor: theme.primaryColor,
    backgroundColor: theme.primaryColor,
    width: "100%",
  },
});
