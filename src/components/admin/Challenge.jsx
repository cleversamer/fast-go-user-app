import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import useLocale from "../../hooks/useLocale";
import * as theme from "../../constants/theme";
import useScreen from "../../hooks/useScreen";

export default function Challenge({ challenge, onDelete }) {
  const screen = useScreen();
  const { i18n, lang } = useLocale();

  const styles = StyleSheet.create({
    arContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: screen.getHorizontalPixelSize(10),
    },
    enContainer: {
      flexDirection: "row-reverse",
      justifyContent: "space-between",
      alignItems: "center",
      gap: screen.getHorizontalPixelSize(10),
    },
    infoContainer: {
      flex: 1,
      justifyContent: "center",
    },
    title: {
      flex: 1,
      flexWrap: "wrap",
      fontFamily: "cairo-600",
      fontSize: screen.getResponsiveFontSize(12),
      paddingVertical: screen.getVerticalPixelSize(3),
    },
    description: {
      flex: 1,
      flexWrap: "wrap",
      fontFamily: "cairo-600",
      fontSize: screen.getResponsiveFontSize(12),
      paddingVertical: screen.getVerticalPixelSize(3),
      color: "#ababab",
    },
    iconContainer: {
      backgroundColor: theme.primaryColor,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 6,
    },
    icon: {
      color: "#fff",
      fontSize: screen.getResponsiveFontSize(50),
    },
    deleteIconContainer: {
      alignSelf: "stretch",
      width: screen.getHorizontalPixelSize(50),
      justifyContent: "center",
      alignItems: "center",
    },
    deleteIcon: {
      fontSize: screen.getResponsiveFontSize(30),
      color: theme.primaryColor,
    },
  });

  const getTitle = () => {
    return lang === "ar"
      ? `أنجز ${challenge?.tripTarget} رحلة وقم بدعوة ${challenge?.referralTarget} من الأصدقاء`
      : `Achieve ${challenge?.tripTarget} trips and invite ${challenge?.referralTarget} people to app`;
  };

  const getDescription = () => {
    return lang === "ar"
      ? `الفئة: ${i18n(challenge.role)}، الجائزة: ${challenge.reward} LYD`
      : `Category: ${i18n(challenge.role)}, Reward: ${challenge.reward} LYD`;
  };

  return (
    <View style={lang === "ar" ? styles.arContainer : styles.enContainer}>
      <TouchableOpacity style={styles.deleteIconContainer} onPress={onDelete}>
        <AntDesign name="delete" style={styles.deleteIcon} />
      </TouchableOpacity>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{getTitle()}</Text>
        <Text style={styles.description}>{getDescription()}</Text>
      </View>

      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="google-analytics" style={styles.icon} />
      </View>
    </View>
  );
}
