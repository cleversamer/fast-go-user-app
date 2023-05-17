import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function ScreenTitle({ title, onPrev }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity style={styles.iconContainer} onPress={onPrev}>
        <AntDesign name="arrowright" style={styles.backIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    position: "relative",
  },
  title: {
    fontFamily: "cairo-700",
    fontSize: 16,
    textAlign: "center",
    textTransform: "capitalize",
  },
  iconContainer: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  backIcon: {
    fontSize: 26,
    padding: 5,
  },
});
