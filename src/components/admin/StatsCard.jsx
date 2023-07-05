import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import useScreen from "../../hooks/useScreen";
import useLocale from "../../hooks/useLocale";
import * as theme from "../../constants/theme";

export default function StatsCard({ item }) {
  const screen = useScreen();
  const { i18n, lang } = useLocale();

  const styles = StyleSheet.create({
    container: {
      width: screen.getHorizontalPixelSize(165),
      height: screen.getVerticalPixelSize(100),
      minHeight: screen.getVerticalPixelSize(100),
      maxHeight: screen.getVerticalPixelSize(100),
      backgroundColor: theme.primaryColor,
      borderRadius: screen.getHorizontalPixelSize(4),
      paddingHorizontal: screen.getHorizontalPixelSize(10),
      paddingVertical: screen.getVerticalPixelSize(10),
      justifyContent: "space-between",
    },
    title: {
      fontFamily: "cairo-800",
      fontSize: screen.getResponsiveFontSize(14),
      color: "#fff",
      textAlign: lang === "ar" ? "right" : "left",
      textTransform: "capitalize",
    },
    bottomContainer: {
      flexDirection: lang === "ar" ? "row-reverse" : "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    value: {
      fontFamily: "cairo-800",
      fontSize: screen.getResponsiveFontSize(24),
      color: "#fff",
      textTransform: "capitalize",
    },
    icon: {
      fontSize: screen.getResponsiveFontSize(28),
      color: "#fff",
    },
  });

  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{i18n(item.title)}</Text>

      <View style={styles.bottomContainer}>
        {item.loading ? (
          <ActivityIndicator animating={true} size="small" color="#fff" />
        ) : (
          <Text style={styles.value}>{item.value}</Text>
        )}

        <MaterialCommunityIcons name={item.iconName} style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
}
