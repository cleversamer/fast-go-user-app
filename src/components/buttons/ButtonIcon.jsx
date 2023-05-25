import { StyleSheet, TouchableOpacity } from "react-native";
import * as theme from "../../constants/theme";
import useScreen from "../../hooks/useScreen";

export default function ButtonIcon({ onPress, containerStyle, children }) {
  const screen = useScreen();

  const styles = StyleSheet.create({
    container: {
      borderRadius: 8,
      paddingVertical: screen.getVerticalPixelSize(12),
      paddingHorizontal: screen.getHorizontalPixelSize(10),
      backgroundColor: theme.primaryColor,
    },
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle || {}]}
    >
      {children}
    </TouchableOpacity>
  );
}
