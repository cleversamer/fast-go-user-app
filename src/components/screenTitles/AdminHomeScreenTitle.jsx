import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import * as theme from "../../constants/theme";
import useLocale from "../../hooks/useLocale";
import useScreen from "../../hooks/useScreen";

export default function AdminHomeScreenTitle({ title, onOpenDrawer }) {
  const screen = useScreen();
  const { lang } = useLocale();

  const styles = StyleSheet.create({
    arContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      minHeight: screen.getVerticalPixelSize(50),
    },
    enContainer: {
      width: "100%",
      flexDirection: "row-reverse",
      justifyContent: "space-between",
      alignItems: "center",
      minHeight: screen.getVerticalPixelSize(50),
    },
    title: {
      fontFamily: "cairo-700",
      fontSize: screen.getResponsiveFontSize(16),
      textAlign: "center",
      color: theme.primaryColor,
    },
    arIconContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "flex-end",
    },
    enIconContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "flex-start",
    },
    menuIcon: {
      fontSize: screen.getResponsiveFontSize(32),
      color: theme.primaryColor,
    },
  });

  return (
    <View style={lang === "ar" ? styles.arContainer : styles.enContainer}>
      <View style={{ flex: 1 }}></View>

      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity
        onPress={onOpenDrawer}
        style={lang === "ar" ? styles.arIconContainer : styles.enIconContainer}
      >
        <Entypo name="menu" style={styles.menuIcon} />
      </TouchableOpacity>
    </View>
  );
}
