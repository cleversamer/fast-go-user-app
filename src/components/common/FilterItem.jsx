import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import * as theme from "../../constants/theme";
import useScreen from "../../hooks/useScreen";

export default function FilterItem({ title, onSelect, selected }) {
  const screen = useScreen();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: selected ? theme.primaryColor : "#fff",
      paddingVertical: screen.getVerticalPixelSize(7),
      paddingHorizontal: screen.getHorizontalPixelSize(10),
      borderRadius: screen.getHorizontalPixelSize(20),
      borderColor: "#3333334d",
      borderWidth: selected ? 0 : screen.getHorizontalPixelSize(1),
      justifyContent: "center",
      alignItems: "center",
      minWidth: screen.getHorizontalPixelSize(80),
    },
    text: {
      color: selected ? "#fff" : "#000",
      fontSize: screen.getResponsiveFontSize(13),
      fontFamily: "cairo-700",
    },
  });

  return (
    <TouchableOpacity style={styles.container} onPress={onSelect}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
