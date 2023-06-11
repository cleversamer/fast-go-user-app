import { StyleSheet, Modal, View, Text, ActivityIndicator } from "react-native";
import * as theme from "../../constants/theme";
import useLocale from "../../hooks/useLocale";
import useScreen from "../../hooks/useScreen";

export default function PopupLoading({ visible }) {
  const screen = useScreen();
  const { i18n } = useLocale();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    boxContainer: {
      width: screen.getScreenWidth() * 0.9,
      maxWidth: screen.getHorizontalPixelSize(400),
      height: screen.getVerticalPixelSize(180),
      backgroundColor: "#fff",
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
      gap: screen.getVerticalPixelSize(15),
    },
    text: {
      fontFamily: "cairo-700",
      fontSize: screen.getResponsiveFontSize(18),
      color: "#303030",
    },
  });

  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View style={styles.container}>
        <View style={styles.boxContainer}>
          <ActivityIndicator
            animating={true}
            size="large"
            color={theme.primaryColor}
          />
          <Text style={styles.text}>{i18n("loading")}</Text>
        </View>
      </View>
    </Modal>
  );
}
