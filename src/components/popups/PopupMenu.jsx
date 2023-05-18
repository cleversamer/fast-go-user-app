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

export default function PopupMenu({ onRequestAccountDeletion }) {
  const { i18n, lang } = useLocale();
  const [visible, setVisible] = useState(false);

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

const styles = StyleSheet.create({
  moreIcon: {
    fontSize: 26,
    padding: 5,
  },
  popup: {
    borderRadius: 8,
    borderColor: "#92929280",
    borderWidth: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    position: "absolute",
    top: 76,
    left: 20,
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 7,
  },
  arOptionText: {
    fontFamily: "cairo-700",
    fontSize: 13,
    textAlign: "right",
  },
  enOptionText: {
    fontFamily: "cairo-700",
    fontSize: 13,
    textAlign: "left",
  },
});
