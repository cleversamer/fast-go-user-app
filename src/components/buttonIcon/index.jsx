import { StyleSheet, TouchableOpacity } from "react-native";
import * as theme from "../../constants/theme";

export default function ButtonIcon({ onPress, containerStyle, children }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle || {}]}
    >
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: theme.primaryColor,
  },
});
