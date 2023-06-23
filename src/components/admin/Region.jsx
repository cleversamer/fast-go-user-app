import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import useLocale from "../../hooks/useLocale";
import useScreen from "../../hooks/useScreen";
import * as theme from "../../constants/theme";

export default function Region({ title }) {
  const screen = useScreen();
  const { lang } = useLocale();

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: screen.getHorizontalPixelSize(10),
    },
    title: {
      flex: 1,
      textAlign: lang === "ar" ? "right" : "left",
      fontFamily: "cairo-500",
      fontSize: screen.getResponsiveFontSize(14),
    },
    deleteIcon: {
      fontSize: screen.getResponsiveFontSize(30),
      color: theme.primaryColor,
    },
    locationIcon: {
      fontSize: screen.getResponsiveFontSize(30),
      color: theme.primaryColor,
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <AntDesign name="delete" style={styles.deleteIcon} />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <Ionicons name="location" style={styles.locationIcon} />
    </View>
  );
}
