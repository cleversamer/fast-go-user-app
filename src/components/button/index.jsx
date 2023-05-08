import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import * as theme from "../../constants/theme";

export default function CustomButton({
  text,
  onPress,
  containerStyle,
  textStyle,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, containerStyle || {}]}>
        <Text style={[styles.text, textStyle || {}]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: theme.primaryColor,
  },
  text: {
    color: "#fff",
    fontFamily: "cairo-400",
    fontSize: 15,
    textAlign: "center",
  },
});
