import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as theme from "../../constants/theme";

export default function ScreenTitle({ title, onPrev }) {
  return (
    <View style={styles.container}>
      <View></View>

      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity onPress={onPrev}>
        <AntDesign name="arrowright" style={styles.backIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: 50,
  },
  title: {
    fontFamily: "cairo-700",
    fontSize: 16,
    textAlign: "center",
    textTransform: "capitalize",
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -(theme.sizes.width / 6) }],
  },
  backIcon: {
    fontSize: 26,
    padding: 5,
  },
});
