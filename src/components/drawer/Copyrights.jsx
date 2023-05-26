import { StyleSheet, View, Text } from "react-native";
import useLocale from "../../hooks/useLocale";
import useScreen from "../../hooks/useScreen";

export default function Copyrights() {
  const screen = useScreen();
  const { i18n } = useLocale();

  const styles = StyleSheet.create({
    container: {
      alignSelf: "center",
      marginBottom: screen.getVerticalPixelSize(20),
      justifyContent: "center",
      alignItems: "center",
      gap: screen.getVerticalPixelSize(7),
    },
    text: {
      fontFamily: "cairo-600",
      fontSize: screen.getResponsiveFontSize(14),
      color: "#747474",
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{i18n("copyright")}</Text>
      <Text style={styles.text}>{i18n("rights")}</Text>
    </View>
  );
}
