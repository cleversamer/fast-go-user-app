import { View, StyleSheet, TextInput, Image } from "react-native";
import * as theme from "../../constants/theme";
import useLocale from "../../hooks/useLocale";

export default function CouponCodeInput({ value, onChange, placeholder }) {
  const { lang } = useLocale();

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

const styles = StyleSheet.create({
  arContainer: {
    borderRadius: 8,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: theme.primaryColor,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 10,
  },
  enContainer: {
    borderRadius: 8,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: theme.primaryColor,
    flexDirection: "row-reverse",
    alignItems: "center",
    paddingRight: 10,
  },
  arInput: {
    flex: 1,
    color: "#000",
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontFamily: "cairo-400",
    textAlign: "right",
  },
  enInput: {
    flex: 1,
    color: "#000",
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontFamily: "cairo-400",
    textAlign: "left",
  },
  icon: {
    width: 30,
    height: 30,
  },
});
