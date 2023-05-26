import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import * as theme from "../../constants/theme";
import useLocale from "../../hooks/useLocale";
import useScreen from "../../hooks/useScreen";

export default function Checkbox({
  text,
  textStyle,
  boxStyle,
  innerBoxStyle,
  checked,
  onCheck,
}) {
  const screen = useScreen();
  const { lang } = useLocale();

  const styles = StyleSheet.create({
    arContainer: {
      flexDirection: "row",
      gap: screen.getHorizontalPixelSize(7),
      justifyContent: "flex-end",
      alignItems: "center",
    },
    enContainer: {
      flexDirection: "row-reverse",
      gap: screen.getHorizontalPixelSize(7),
      justifyContent: "flex-end",
      alignItems: "center",
    },
    text: {
      fontFamily: "cairo-500",
      fontSize: screen.getResponsiveFontSize(13),
    },
    boxContainer: {
      height: screen.getVerticalPixelSize(24),
      width: screen.getHorizontalPixelSize(24),
      borderWidth: screen.getHorizontalPixelSize(1.5),
      borderColor: theme.primaryColor,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
    },
    innerBoxContainer: {
      height: screen.getVerticalPixelSize(16),
      width: screen.getHorizontalPixelSize(16),
      backgroundColor: theme.primaryColor,
      borderRadius: 3,
    },
  });

  return (
    <TouchableOpacity
      style={lang === "ar" ? styles.arContainer : styles.enContainer}
      onPress={onCheck}
    >
      <Text style={[styles.text, textStyle || {}]}>{text}</Text>

      <View style={[styles.boxContainer, boxStyle || {}]}>
        {checked && (
          <View style={[styles.innerBoxContainer || innerBoxStyle || {}]} />
        )}
      </View>
    </TouchableOpacity>
  );
}
