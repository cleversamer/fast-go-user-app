import { StyleSheet, View, TouchableOpacity } from "react-native";
import * as theme from "../../constants/theme";
import useLocale from "../../hooks/useLocale";
import useScreen from "../../hooks/useScreen";

export default function HamburgerMenu({ onPress }) {
  const screen = useScreen();
  const { lang } = useLocale();

  const styles = StyleSheet.create({
    arContainer: {
      justifyContent: "center",
      alignItems: "center",
      gap: 4,
      position: "absolute",
      top: screen.getVerticalPixelSize(55),
      right: screen.getHorizontalPixelSize(20),
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
      top: screen.getVerticalPixelSize(55),
      left: screen.getHorizontalPixelSize(20),
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
