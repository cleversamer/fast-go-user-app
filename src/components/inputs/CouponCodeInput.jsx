import { View, StyleSheet, TextInput, Image } from "react-native";
import * as theme from "../../constants/theme";
import useLocale from "../../hooks/useLocale";
import useScreen from "../../hooks/useScreen";

export default function CouponCodeInput({ value, onChange, placeholder }) {
  const screen = useScreen();
  const { lang } = useLocale();

  const styles = StyleSheet.create({
    arContainer: {
      borderRadius: 8,
      backgroundColor: "#fff",
      borderWidth: screen.getHorizontalPixelSize(1.5),
      borderColor: theme.primaryColor,
      flexDirection: "row",
      alignItems: "center",
      paddingRight: screen.getHorizontalPixelSize(10),
    },
    enContainer: {
      borderRadius: 8,
      backgroundColor: "#fff",
      borderWidth: 2,
      borderColor: theme.primaryColor,
      flexDirection: "row-reverse",
      alignItems: "center",
      paddingRight: screen.getHorizontalPixelSize(10),
    },
    arInput: {
      flex: 1,
      color: "#000",
      paddingVertical: screen.getVerticalPixelSize(10),
      paddingHorizontal: screen.getHorizontalPixelSize(10),
      fontFamily: "cairo-400",
      textAlign: "right",
    },
    enInput: {
      flex: 1,
      color: "#000",
      paddingVertical: screen.getVerticalPixelSize(10),
      paddingHorizontal: screen.getHorizontalPixelSize(10),
      fontFamily: "cairo-400",
      textAlign: "left",
    },
    icon: {
      width: screen.getHorizontalPixelSize(30),
      maxWidth: 30,
      height: screen.getHorizontalPixelSize(30),
      maxHeight: 30,
    },
  });

  return (
    <View style={lang === "ar" ? styles.arContainer : styles.enContainer}>
      <TextInput
        onChangeText={onChange}
        placeholder={placeholder}
        style={lang === "ar" ? styles.arInput : styles.enInput}
        value={value}
      />

      <Image
        source={require("../../assets/images/coupon.png")}
        resizeMode="contain"
        style={styles.icon}
      />
    </View>
  );
}
