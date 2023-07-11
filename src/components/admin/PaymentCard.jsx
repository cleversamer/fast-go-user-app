import { AntDesign, Entypo } from "@expo/vector-icons";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import useScreen from "../../hooks/useScreen";
import * as theme from "../../constants/theme";
import useLocale from "../../hooks/useLocale";

export default function PaymentCard({
  paymentCard,
  showBreakline = true,
  onDelete,
}) {
  const screen = useScreen();
  const { lang } = useLocale();

  const styles = StyleSheet.create({
    container: {
      flexDirection: lang === "ar" ? "row" : "row-reverse",
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
      flexDirection: lang === "ar" ? "row" : "row-reverse",
      gap: screen.getHorizontalPixelSize(15),
    },
    textContainer: {
      alignItems: lang === "ar" ? "flex-end" : "flex-start",
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
        <TouchableOpacity style={styles.deleteIconContainer} onPress={onDelete}>
          <AntDesign name="delete" style={styles.deleteIcon} />
        </TouchableOpacity>

        <View style={styles.rightContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.couponCode}>{paymentCard.code}</Text>
            <Text style={styles.discount}>{paymentCard.balance} LYD</Text>
          </View>

          <Entypo name="credit-card" style={styles.cardIcon} />
        </View>
      </View>

      {showBreakline && <View style={styles.breakLine}></View>}
    </>
  );
}
