import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import SwitchButton from "../buttons/SwitchButton";
import * as theme from "../../constants/theme";

export default function DriverHomeScreenTitle({
  title,
  onToggleConnected,
  isDriverConnected,
  onOpenDrawer,
}) {
  return (
    <View style={styles.container}>
      <SwitchButton enabled={isDriverConnected} onToggle={onToggleConnected} />

      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity onPress={onOpenDrawer}>
        <Entypo name="menu" style={styles.backIcon} />
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
    paddingHorizontal: 10,
  },
  title: {
    fontFamily: "cairo-700",
    fontSize: 16,
    textAlign: "center",
    color: theme.primaryColor,
  },
  backIcon: {
    fontSize: 32,
    padding: 5,
    color: theme.primaryColor,
  },
});
