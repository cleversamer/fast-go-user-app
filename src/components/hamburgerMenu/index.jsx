import { StyleSheet, View, TouchableOpacity } from "react-native";
import * as theme from "../../constants/theme";

export default function HamburgerMenu() {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.line}></View>
      <View style={styles.line}></View>
      <View style={styles.line}></View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
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
  line: {
    borderWidth: 1.5,
    borderColor: theme.primaryColor,
    backgroundColor: theme.primaryColor,
    width: "100%",
  },
});
