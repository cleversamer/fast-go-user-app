import { AntDesign, Entypo } from "@expo/vector-icons";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import useScreen from "../../hooks/useScreen";
import * as theme from "../../constants/theme";

export default function CouponCode({ couponCode, showBreakline = true }) {
  const screen = useScreen();

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: screen.getHorizontalPixelSize(7),
    },
    deleteIconContainer: {
      paddingHorizontal: screen.getHorizontalPixelSize(10),
      alignSelf: "stretch",
      justifyContent: "center",
      alignItems: "center",
    },
    deleteIcon: {
      fontSize: screen.getResponsiveFontSize(28),
      color: theme.primaryColor,
    },
    cardIcon: {
      fontSize: screen.getResponsiveFontSize(36),
      color: theme.primaryColor,
      alignSelf: "center",
    },
    rightContainer: {
      flexDirection: "row",
      gap: screen.getHorizontalPixelSize(15),
    },
    textContainer: {
      alignItems: "flex-end",
      textAlign: "right",
    },
    couponCode: {
      fontFamily: "cairo-500",
      fontSize: screen.getResponsiveFontSize(16),
    },
    discount: {
      fontFamily: "cairo-500",
      fontSize: screen.getResponsiveFontSize(11),
      color: "#ababab",
    },
    breakLine: {
      borderTopWidth: screen.getHorizontalPixelSize(1.5),
      borderColor: "#ccc",
    },
  });

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.deleteIconContainer}>
          <AntDesign name="delete" style={styles.deleteIcon} />
        </TouchableOpacity>

        <View style={styles.rightContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.couponCode}>65656566</Text>
            <Text style={styles.discount}>نسبة الخصم: 10%</Text>
          </View>

          <Entypo name="credit-card" style={styles.cardIcon} />
        </View>
      </View>

      {showBreakline && <View style={styles.breakLine}></View>}
    </>
  );
}
