import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import * as theme from "../../constants/theme";

export default function Checkbox({
  text = "Check Me!",
  textStyle,
  boxStyle,
  innerBoxStyle,
  checked,
  onCheck,
}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onCheck}>
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
  container: {
    flexDirection: "row",
    gap: 7,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
    fontFamily: "cairo-500",
    fontSize: 13,
  },
  boxContainer: {
    height: 24,
    width: 24,
    borderWidth: 2,
    borderColor: theme.primaryColor,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  innerBoxContainer: {
    height: 16,
    width: 16,
    backgroundColor: theme.primaryColor,
    borderRadius: 3,
  },
});
