import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import * as theme from "../../constants/theme";
import useLocale from "../../hooks/useLocale";

export default function ContinueButton({ text, onPress, icon }) {
  const { lang } = useLocale();

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={lang === "ar" ? styles.arContainer : styles.enContainer}>
        <Text style={styles.text}>{text}</Text>
        <Image source={icon} resizeMode="contain" style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  arContainer: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: theme.primaryColor,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  enContainer: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: theme.primaryColor,
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  text: {
    color: "#000",
    fontFamily: "cairo-700",
    fontSize: 15,
    textAlign: "center",
  },
  icon: {
    width: 30,
    height: 30,
  },
});
