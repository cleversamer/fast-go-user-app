import { View, StyleSheet, TextInput, Image } from "react-native";
import * as theme from "../../constants/theme";

export default function CouponCodeInput({ value, onChange, placeholder }) {
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChange}
        placeholder={placeholder}
        style={styles.input}
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
  container: {
    borderRadius: 8,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: theme.primaryColor,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 10,
  },
  input: {
    flex: 1,
    color: "#000",
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontFamily: "cairo-400",
    textAlign: "right",
  },
  icon: {
    width: 30,
    height: 30,
  },
});