import { StyleSheet, Modal, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as theme from "../../constants/theme";
import CustomButton from "../buttons/CustomButton";
import useLocale from "../../hooks/useLocale";
import useScreen from "../../hooks/useScreen";

export default function PopupConfirm({
  title,
  subtitle,
  hint,
  visible,
  onClose,
  onConfirm,
  titleStyle,
  subtitleStyle,
  hintStyle,
}) {
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
      paddingVertical: screen.getVerticalPixelSize(20),
      paddingHorizontal: screen.getHorizontalPixelSize(20),
      backgroundColor: "#fff",
      borderRadius: 8,
      alignItems: "center",
      gap: screen.getVerticalPixelSize(10),
    },
    closeIcon: {
      position: "absolute",
      top: screen.getVerticalPixelSize(20),
      left: screen.getHorizontalPixelSize(20),
      fontSize: screen.getResponsiveFontSize(26),
    },
    title: {
      fontFamily: "cairo-700",
      color: "#000",
      fontSize: screen.getResponsiveFontSize(16),
      textAlign: "center",
      textTransform: "capitalize",
    },
    middleBox: {
      gap: screen.getVerticalPixelSize(10),
    },
    subtitle: {
      fontFamily: "cairo-600",
      color: "#000",
      fontSize: screen.getResponsiveFontSize(15),
      textAlign: "center",
    },
    hint: {
      fontFamily: "cairo-400",
      color: "#000",
      fontSize: screen.getResponsiveFontSize(13),
    },
    buttonsContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: screen.getVerticalPixelSize(10),
    },
    closeButtonContainer: {
      flex: 1,
      paddingVertical: screen.getVerticalPixelSize(7),
      backgroundColor: "#fff",
      borderColor: theme.primaryColor,
      borderWidth: screen.getHorizontalPixelSize(1.5),
    },
    closeButtonText: {
      fontFamily: "cairo-700",
      fontSize: screen.getResponsiveFontSize(15),
      color: "#000",
    },
    confirmButtonContainer: {
      flex: 1,
      paddingVertical: screen.getVerticalPixelSize(9),
      backgroundColor: theme.primaryColor,
    },
    confirmButtonText: {
      fontFamily: "cairo-700",
      fontSize: screen.getResponsiveFontSize(15),
      color: "#fff",
    },
  });

  return (
    <>
      <Modal
        visible={visible}
        animationType="fade"
        transparent={true}
        onRequestClose={onClose}
      >
        <View style={styles.container}>
          <View style={styles.boxContainer}>
            <Ionicons name="close" style={styles.closeIcon} onPress={onClose} />

            {title && (
              <Text style={[styles.title, titleStyle || {}]}>{title}</Text>
            )}

            {(subtitle || hint) && (
              <View style={styles.middleBox}>
                {subtitle && (
                  <Text style={[styles.subtitle, subtitleStyle || {}]}>
                    {subtitle}
                  </Text>
                )}

                {hint && (
                  <Text style={[styles.hint, hintStyle || {}]}>{hint}</Text>
                )}
              </View>
            )}

            <View style={styles.buttonsContainer}>
              <CustomButton
                text={i18n("cancel")}
                onPress={onClose}
                containerStyle={styles.closeButtonContainer}
                textStyle={styles.closeButtonText}
              />

              <CustomButton
                text={i18n("ok")}
                onPress={onConfirm}
                containerStyle={styles.confirmButtonContainer}
                textStyle={styles.confirmButtonText}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}
