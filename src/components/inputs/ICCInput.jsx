import { StyleSheet, View, Text, Image } from "react-native";
import * as theme from "../../constants/theme";

export default function ICCInput({ value = "+218", onChange }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/libya.png")}
        resizeMode="contain"
        style={styles.flag}
      />

      <Text style={styles.icc}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 110,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: theme.primaryColor,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  flag: {
    width: 30,
    height: 30,
  },
  icc: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
