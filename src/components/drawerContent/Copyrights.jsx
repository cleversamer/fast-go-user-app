import { StyleSheet, View, Text } from "react-native";
import useLocale from "../../hooks/useLocale";

export default function Copyrights() {
  const { i18n } = useLocale();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{i18n("copyright")}</Text>
      <Text style={styles.text}>{i18n("rights")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 7,
  },
  text: {
    fontFamily: "cairo-600",
    fontSize: 14,
    color: "#747474",
  },
});
