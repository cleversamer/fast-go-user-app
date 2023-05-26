import { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  Text,
  Animated,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import useLocale from "../../hooks/useLocale";
import useScreen from "../../hooks/useScreen";

export default function PopupMenu({ onRequestAccountDeletion }) {
  const screen = useScreen();
  const { i18n, lang } = useLocale();
  const [visible, setVisible] = useState(false);

  const styles = StyleSheet.create({
    moreIcon: {
      fontSize: screen.getResponsiveFontSize(26),
      paddingVertical: screen.getVerticalPixelSize(5),
      paddingHorizontal: screen.getHorizontalPixelSize(5),
    },
    popup: {
      borderRadius: 8,
      borderColor: "#92929280",
      borderWidth: screen.getHorizontalPixelSize(1),
      backgroundColor: "#fff",
      paddingHorizontal: screen.getHorizontalPixelSize(20),
      position: "absolute",
      top: screen.getVerticalPixelSize(76),
      left: screen.getHorizontalPixelSize(20),
    },
    option: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: screen.getVerticalPixelSize(7),
    },
    arOptionText: {
      fontFamily: "cairo-700",
      fontSize: screen.getResponsiveFontSize(13),
      textAlign: "right",
    },
    enOptionText: {
      fontFamily: "cairo-700",
      fontSize: screen.getResponsiveFontSize(13),
      textAlign: "left",
    },
  });

  return (
    <>
      <TouchableOpacity onPress={() => setVisible(true)}>
        <Feather name="more-vertical" style={styles.moreIcon} />
      </TouchableOpacity>

      <Modal transparent visible={visible}>
        <SafeAreaView style={{ flex: 1 }} onTouchEnd={() => setVisible(false)}>
          <Animated.View style={styles.popup}>
            <TouchableOpacity
              style={styles.option}
              onPress={onRequestAccountDeletion}
            >
              <Text
                style={
                  lang === "ar" ? styles.arOptionText : styles.enOptionText
                }
              >
                {i18n("requestAccountDeletion")}
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </SafeAreaView>
      </Modal>
    </>
  );
}
