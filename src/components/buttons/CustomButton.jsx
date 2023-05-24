import { StyleSheet, TouchableOpacity, Text } from "react-native";
import * as theme from "../../constants/theme";

export default function CustomButton({
  text,
  onPress,
  containerStyle,
  textStyle,
  disabled,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        disabled ? styles.disabledContainer : styles.enabledContainer,
        containerStyle || {},
      ]}
      disabled={disabled}
    >
      <Text style={[styles.text, textStyle || {}]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  enabledContainer: {
    borderRadius: theme.getPixelSize(8),
    paddingVertical: theme.getPixelSize(12),
    paddingHorizontal: theme.getPixelSize(10),
    backgroundColor: theme.primaryColor,
  },
  disabledContainer: {
    borderRadius: theme.getPixelSize(8),
    paddingVertical: theme.getPixelSize(12),
    paddingHorizontal: theme.getPixelSize(10),
    backgroundColor: "#747474",
  },
  text: {
    color: "#fff",
    fontFamily: "cairo-400",
    fontSize: theme.getPixelSize(15),
    textAlign: "center",
    textTransform: "capitalize",
  },
});
