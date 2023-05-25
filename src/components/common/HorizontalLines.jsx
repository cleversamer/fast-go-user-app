import { View, Text, StyleSheet } from "react-native";
import useScreen from "../../hooks/useScreen";

export default function HorizontalLines({
  text,
  containerStyle,
  lineStyle,
  textStyle,
}) {
  const screen = useScreen();

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
    },
    line: {
      borderBottomWidth: screen.getHorizontalPixelSize(2),
      borderColor: "#ccc",
      flex: 1,
    },
    text: {
      paddingHorizontal: screen.getHorizontalPixelSize(10),
    },
  });

  return (
    <View style={[styles.container, containerStyle || {}]}>
      <View style={[styles.line, lineStyle || {}]} />
      <Text style={[styles.text, textStyle || {}]}>{text}</Text>
      <View style={[styles.line, lineStyle || {}]} />
    </View>
  );
}
