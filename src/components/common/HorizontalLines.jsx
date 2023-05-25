import { View, Text, StyleSheet } from "react-native";
import * as theme from "../../constants/theme";

export default function HorizontalLines({
  text,
  containerStyle,
  lineStyle,
  textStyle,
}) {
  return (
    <View style={[styles.container, containerStyle || {}]}>
      <View style={[styles.line, lineStyle || {}]} />
      <Text style={[styles.text, textStyle || {}]}>{text}</Text>
      <View style={[styles.line, lineStyle || {}]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  line: {
    borderBottomWidth: 2,
    borderColor: "#ccc",
    flex: 1,
  },
  text: {
    paddingHorizontal: 10,
  },
});
