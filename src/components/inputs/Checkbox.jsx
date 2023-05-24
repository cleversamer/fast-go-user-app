import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import * as theme from "../../constants/theme";
import useLocale from "../../hooks/useLocale";

export default function Checkbox({
  text,
  textStyle,
  boxStyle,
  innerBoxStyle,
  checked,
  onCheck,
}) {
  const { lang } = useLocale();

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

const styles = StyleSheet.create({
  arContainer: {
    flexDirection: "row",
    gap: theme.getPixelSize(7),
    justifyContent: "flex-end",
    alignItems: "center",
  },
  enContainer: {
    flexDirection: "row-reverse",
    gap: theme.getPixelSize(7),
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
    fontFamily: "cairo-500",
    fontSize: theme.getPixelSize(13),
  },
  boxContainer: {
    height: theme.getPixelSize(24),
    width: theme.getPixelSize(24),
    borderWidth: theme.getPixelSize(2),
    borderColor: theme.primaryColor,
    borderRadius: theme.getPixelSize(5),
    alignItems: "center",
    justifyContent: "center",
  },
  innerBoxContainer: {
    height: theme.getPixelSize(16),
    width: theme.getPixelSize(16),
    backgroundColor: theme.primaryColor,
    borderRadius: theme.getPixelSize(3),
  },
});
