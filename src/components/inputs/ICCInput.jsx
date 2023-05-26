import { StyleSheet, View, Text, Image } from "react-native";
import * as theme from "../../constants/theme";
import useScreen from "../../hooks/useScreen";

export default function ICCInput({ value = "+218", onChange }) {
  const screen = useScreen();

  const styles = StyleSheet.create({
    container: {
      width: screen.getHorizontalPixelSize(110),
      paddingVertical: screen.getVerticalPixelSize(10),
      borderRadius: 8,
      backgroundColor: "#fff",
      borderWidth: screen.getHorizontalPixelSize(1.5),
      borderColor: theme.primaryColor,
      flexDirection: "row",
      gap: screen.getHorizontalPixelSize(10),
      alignItems: "center",
      justifyContent: "center",
    },
    flag: {
      width: screen.getHorizontalPixelSize(30),
      height: screen.getVerticalPixelSize(30),
    },
    icc: {
      fontWeight: "bold",
      fontSize: screen.getResponsiveFontSize(16),
    },
  });

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
