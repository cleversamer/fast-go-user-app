import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import SwitchButton from "../buttons/SwitchButton";
import * as theme from "../../constants/theme";
import useLocale from "../../hooks/useLocale";

export default function DriverHomeScreenTitle({
  title,
  onToggleConnected,
  isDriverConnected,
  onOpenDrawer,
}) {
  const { lang } = useLocale();

  return (
    <View style={lang === "ar" ? styles.arContainer : styles.enContainer}>
      <SwitchButton enabled={isDriverConnected} onToggle={onToggleConnected} />

      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity onPress={onOpenDrawer}>
        <Entypo name="menu" style={styles.backIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  arContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: 50,
    paddingHorizontal: 10,
  },
  enContainer: {
    width: "100%",
    flexDirection: "row-reverse",
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
