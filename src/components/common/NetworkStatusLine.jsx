import { StyleSheet, SafeAreaView, Text, StatusBar } from "react-native";
import useLocale from "../../hooks/useLocale";
import useAuth from "../../auth/useAuth";
import useScreen from "../../hooks/useScreen";

export default function NetworkStatusLine() {
  const screen = useScreen();
  const { isOnline } = useAuth();
  const { i18n } = useLocale();

  const styles = StyleSheet.create({
    container: {
      paddingVertical: screen.getVerticalPixelSize(4),
      position: "absolute",
      top: StatusBar.currentHeight || 0,
      left: 0,
      right: 0,
      backgroundColor: "#f00",
    },
    text: {
      color: "#fff",
      fontFamily: "cairo-700",
      textAlign: "center",
      fontSize: screen.getResponsiveFontSize(13),
    },
  });

  if (isOnline) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{i18n("offline")}</Text>
    </SafeAreaView>
  );
}
