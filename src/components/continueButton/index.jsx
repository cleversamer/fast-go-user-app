import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import * as theme from "../../constants/theme";

export default function ContinueButton({ text, onPress, icon }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <Image source={icon} resizeMode="contain" style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: theme.primaryColor,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  text: {
    color: "#000",
    fontFamily: "cairo-700",
    fontSize: 15,
    textAlign: "center",
  },
  icon: {
    width: 30,
    height: 30,
  },
});
