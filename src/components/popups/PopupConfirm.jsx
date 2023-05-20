import { StyleSheet, Modal, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as theme from "../../constants/theme";
import CustomButton from "../buttons/CustomButton";
import useLocale from "../../hooks/useLocale";

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
  const { i18n } = useLocale();

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  boxContainer: {
    width: Math.floor(theme.sizes.width * 0.9),
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    alignItems: "center",
    gap: 20,
  },
  closeIcon: {
    position: "absolute",
    top: 20,
    left: 20,
    fontSize: 26,
  },
  title: {
    fontFamily: "cairo-700",
    color: "#000",
    fontSize: 16,
    textAlign: "center",
    textTransform: "capitalize",
  },
  middleBox: {
    gap: 10,
  },
  subtitle: {
    fontFamily: "cairo-600",
    color: "#000",
    fontSize: 15,
    textAlign: "center",
  },
  hint: {
    fontFamily: "cairo-400",
    color: "#000",
    fontSize: 13,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  closeButtonContainer: {
    flex: 1,
    paddingVertical: 7,
    backgroundColor: "#fff",
    borderColor: theme.primaryColor,
    borderWidth: 2,
  },
  closeButtonText: {
    fontFamily: "cairo-700",
    fontSize: 15,
    color: "#000",
  },
  confirmButtonContainer: {
    flex: 1,
    paddingVertical: 9,
    backgroundColor: theme.primaryColor,
  },
  confirmButtonText: {
    fontFamily: "cairo-700",
    fontSize: 15,
    color: "#fff",
  },
});
