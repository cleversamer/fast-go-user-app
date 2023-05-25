import { StyleSheet, TouchableOpacity } from "react-native";
import * as theme from "../../constants/theme";
import useScreen from "../../hooks/useScreen";

export default function CircularButton({ Icon, onPress, containerStyle }) {
  const screen = useScreen();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.primaryColor,
      width: screen.getHorizontalPixelSize(60),
      height: screen.getVerticalPixelSize(60),
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
    },
  });

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle || {}]}
      onPress={onPress}
    >
      {Icon && <Icon />}
    </TouchableOpacity>
  );
}
