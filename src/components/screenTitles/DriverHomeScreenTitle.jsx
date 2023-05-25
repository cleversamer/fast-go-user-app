import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import SwitchButton from "../buttons/SwitchButton";
import * as theme from "../../constants/theme";
import useLocale from "../../hooks/useLocale";
import useScreen from "../../hooks/useScreen";

export default function DriverHomeScreenTitle({
  title,
  onToggleConnected,
  isDriverConnected,
  onOpenDrawer,
}) {
  const screen = useScreen();
  const { lang } = useLocale();

  const styles = StyleSheet.create({
    arContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      minHeight: screen.getVerticalPixelSize(50),
      paddingHorizontal: screen.getHorizontalPixelSize(10),
    },
    enContainer: {
      width: "100%",
      flexDirection: "row-reverse",
      justifyContent: "space-between",
      alignItems: "center",
      minHeight: screen.getVerticalPixelSize(50),
      paddingHorizontal: screen.getHorizontalPixelSize(10),
    },
    title: {
      fontFamily: "cairo-700",
      fontSize: 16,
      textAlign: "center",
      color: theme.primaryColor,
    },
    backIcon: {
      fontSize: 32,
      paddingVertical: screen.getVerticalPixelSize(5),
      paddingHorizontal: screen.getHorizontalPixelSize(5),
      color: theme.primaryColor,
    },
  });

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
