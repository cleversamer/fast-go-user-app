import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as theme from "../../constants/theme";
import SwitchButton from "../buttons/SwitchButton";

export default function NotificationsScreenTitle({
  title,
  onPrev,
  onToggleNotifications,
}) {
  return (
    <View style={styles.container}>
      <SwitchButton enabled onToggle={onToggleNotifications} />

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
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -(theme.getWidth() / 9) }],
  },
  backIcon: {
    fontSize: 26,
    padding: 5,
  },
});
