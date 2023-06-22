import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import useLocale from "../../hooks/useLocale";
import useScreen from "../../hooks/useScreen";
import { AntDesign } from "@expo/vector-icons";
import CustomButton from "../buttons/CustomButton";

export default function ChargeCardsScreenTitle({
  title,
  onPrev,
  onButtonPress,
}) {
  const screen = useScreen();
  const { i18n, lang } = useLocale();

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
      fontSize: screen.getResponsiveFontSize(16),
      textAlign: "center",
    },
    backIcon: {
      fontSize: screen.getResponsiveFontSize(32),
      paddingVertical: screen.getVerticalPixelSize(5),
      paddingHorizontal: screen.getHorizontalPixelSize(5),
    },
    buttonContainer: {
      paddingVertical: screen.getVerticalPixelSize(4),
      paddingHorizontal: screen.getHorizontalPixelSize(7),
    },
    buttonText: {
      fontFamily: "cairo-800",
      fontSize: screen.getResponsiveFontSize(12),
    },
  });

  return (
    <View style={lang === "ar" ? styles.arContainer : styles.enContainer}>
      <CustomButton
        text={i18n("autoCode")}
        containerStyle={styles.buttonContainer}
        textStyle={styles.buttonText}
        onPress={onButtonPress}
      />

      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity onPress={onPrev}>
        <AntDesign name="arrowright" style={styles.backIcon} />
      </TouchableOpacity>
    </View>
  );
}
