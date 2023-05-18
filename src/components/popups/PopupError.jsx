import { StyleSheet, Modal, View, Image, Text } from "react-native";
import * as theme from "../../constants/theme";
import CustomButton from "../buttons/CustomButton";
import useLocale from "../../hooks/useLocale";

const defaultMessage = "خطأ غير متوقع";

export default function PopupError({
  visible,
  message = defaultMessage,
  onClose,
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
            <Image
              source={require("../../assets/images/error-emoji.png")}
              resizeMode="contain"
              style={styles.icon}
            />

            <Text style={styles.title}>{i18n("popupErrorTitle")}</Text>

            <Text style={styles.errorText}>{message}</Text>

            <View style={styles.buttonContainer}>
              <CustomButton
                text={i18n("popupErrorButtonText")}
                onPress={onClose}
                containerStyle={styles.button}
                textStyle={styles.buttonText}
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
    paddingBottom: 80,
    backgroundColor: "#FF5353",
    borderRadius: 8,
    alignItems: "center",
    gap: 10,
  },
  icon: {
    width: 50,
    height: 50,
  },
  title: {
    fontFamily: "cairo-700",
    color: "#fff",
    fontSize: 17,
  },
  errorText: {
    fontFamily: "cairo-500",
    color: "#fff",
    fontSize: 13,
  },
  buttonContainer: {
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  button: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "#000",
  },
});
