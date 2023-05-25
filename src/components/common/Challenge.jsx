import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import useLocale from "../../hooks/useLocale";
import * as theme from "../../constants/theme";
import useScreen from "../../hooks/useScreen";

export default function Challenge({ challenge }) {
  const screen = useScreen();
  const { lang } = useLocale();

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
    arInfoContainer: {
      justifyContent: "space-between",
      alignItems: "flex-start",
    },
    enInfoContainer: {
      justifyContent: "space-between",
      alignItems: "flex-end",
    },
    rewardAmount: {
      fontFamily: "cairo-700",
      fontSize: 18,
      color: theme.primaryColor,
    },
    scoresText: {
      fontFamily: "cairo-600",
      fontSize: 14,
      color: "#747474",
    },
    title: {
      flex: 1,
      alignSelf: "stretch",
      flexWrap: "wrap",
      fontFamily: "cairo-600",
      fontSize: 13,
      paddingVertical: screen.getVerticalPixelSize(3),
    },
    iconContainer: {
      backgroundColor: theme.primaryColor,
      // width: screen.getHorizontalPixelSize(54),
      // maxWidth: 54,
      // height: screen.getVerticalPixelSize(54),
      // maxHeight: 54,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 6,
    },
    icon: {
      color: "#fff",
      fontSize: 50,
    },
  });

  return (
    <View style={lang === "ar" ? styles.arContainer : styles.enContainer}>
      <View
        style={lang === "ar" ? styles.arInfoContainer : styles.enInfoContainer}
      >
        <Text style={styles.rewardAmount}>{challenge?.rewardAmount} LYD</Text>

        <Text style={styles.scoresText}>
          {challenge?.scores?.number}/{challenge?.scores?.total}
        </Text>
      </View>

      <Text style={styles.title}>{challenge?.title?.[lang]}</Text>

      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="google-analytics" style={styles.icon} />
      </View>
    </View>
  );
}
