import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import * as theme from "../../constants/theme";
import useLocale from "../../hooks/useLocale";
import useScreen from "../../hooks/useScreen";

export default function ContinueButton({ text, onPress, icon }) {
  const screen = useScreen();
  const { lang } = useLocale();

  const styles = StyleSheet.create({
    arContainer: {
      borderRadius: 8,
      paddingVertical: screen.getVerticalPixelSize(12),
      paddingHorizontal: screen.getHorizontalPixelSize(10),
      backgroundColor: "#fff",
      borderWidth: screen.getHorizontalPixelSize(1.5),
      borderColor: theme.primaryColor,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: screen.getHorizontalPixelSize(10),
    },
    enContainer: {
      borderRadius: 8,
      paddingVertical: screen.getVerticalPixelSize(12),
      paddingHorizontal: screen.getHorizontalPixelSize(10),
      backgroundColor: "#fff",
      borderWidth: screen.getHorizontalPixelSize(1.5),
      borderColor: theme.primaryColor,
      flexDirection: "row-reverse",
      justifyContent: "center",
      alignItems: "center",
      gap: screen.getHorizontalPixelSize(10),
    },
    text: {
      color: "#000",
      fontFamily: "cairo-700",
      fontSize: screen.getResponsiveFontSize(15),
      textAlign: "center",
    },
    icon: {
      width: screen.getHorizontalPixelSize(30),
      height: screen.getVerticalPixelSize(30),
    },
  });

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={lang === "ar" ? styles.arContainer : styles.enContainer}>
        <Text style={styles.text}>{text}</Text>
        <Image source={icon} resizeMode="contain" style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
}
