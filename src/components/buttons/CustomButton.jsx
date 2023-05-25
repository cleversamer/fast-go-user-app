import { StyleSheet, TouchableOpacity, Text } from "react-native";
import * as theme from "../../constants/theme";
import useScreen from "../../hooks/useScreen";

export default function CustomButton({
  text,
  onPress,
  containerStyle,
  textStyle,
  disabled,
}) {
  const screen = useScreen();

  const styles = StyleSheet.create({
    enabledContainer: {
      borderRadius: 8,
      paddingVertical: screen.getVerticalPixelSize(12),
      paddingHorizontal: screen.getHorizontalPixelSize(10),
      backgroundColor: theme.primaryColor,
    },
    disabledContainer: {
      borderRadius: 8,
      paddingVertical: screen.getVerticalPixelSize(12),
      paddingHorizontal: screen.getHorizontalPixelSize(10),
      backgroundColor: "#747474",
    },
    text: {
      color: "#fff",
      fontFamily: "cairo-400",
      fontSize: 15,
      textAlign: "center",
      textTransform: "capitalize",
    },
  });

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
