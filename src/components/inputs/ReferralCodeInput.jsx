import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import * as theme from "../../constants/theme";
import useLocale from "../../hooks/useLocale";
import useScreen from "../../hooks/useScreen";

export default function ReferralCodeInput({ value, onChange }) {
  const screen = useScreen();
  const [showHintPopup, setShowHintPopup] = useState(false);
  const { i18n, lang } = useLocale();

  const styles = StyleSheet.create({
    arContainer: {
      borderRadius: 8,
      backgroundColor: "#fff",
      borderWidth: screen.getHorizontalPixelSize(1.5),
      borderColor: theme.primaryColor,
      flexDirection: "row",
      alignItems: "center",
    },
    enContainer: {
      borderRadius: 8,
      backgroundColor: "#fff",
      borderWidth: screen.getHorizontalPixelSize(1.5),
      borderColor: theme.primaryColor,
      flexDirection: "row-reverse",
      alignItems: "center",
    },
    arAboutIcon: {
      fontSize: screen.getResponsiveFontSize(26),
      marginLeft: screen.getHorizontalPixelSize(10),
      color: "#747474",
    },
    enAboutIcon: {
      fontSize: screen.getResponsiveFontSize(26),
      marginRight: screen.getHorizontalPixelSize(10),
      color: "#747474",
    },
    arInput: {
      flex: 1,
      color: "#000",
      paddingVertical: screen.getVerticalPixelSize(10),
      paddingHorizontal: screen.getHorizontalPixelSize(10),
      fontFamily: "cairo-400",
      textAlign: "right",
    },
    enInput: {
      flex: 1,
      color: "#000",
      paddingVertical: screen.getVerticalPixelSize(10),
      paddingHorizontal: screen.getHorizontalPixelSize(10),
      fontFamily: "cairo-400",
      textAlign: "left",
    },
    arIcon: {
      fontSize: screen.getResponsiveFontSize(30),
      color: theme.primaryColor,
      marginRight: screen.getHorizontalPixelSize(10),
    },
    enIcon: {
      fontSize: screen.getResponsiveFontSize(30),
      color: theme.primaryColor,
      marginLeft: screen.getHorizontalPixelSize(10),
    },
    arPopupHint: {
      backgroundColor: "#f7f7f7",
      borderColor: "#ccc",
      borderWidth: screen.getHorizontalPixelSize(0.5),
      position: "absolute",
      top: screen.getVerticalPixelSize(30),
      left: 0,
      right: 0,
      width: screen.getHorizontalPixelSize(235),
      textAlign: "center",
      paddingVertical: screen.getVerticalPixelSize(10),
      borderRadius: 7,
      fontFamily: "cairo-500",
      fontSize: screen.getResponsiveFontSize(12),
    },
    enPopupHint: {
      backgroundColor: "#f7f7f7",
      borderColor: "#ccc",
      borderWidth: screen.getHorizontalPixelSize(0.5),
      position: "absolute",
      top: screen.getVerticalPixelSize(30),
      left: -screen.getHorizontalPixelSize(250),
      right: screen.getHorizontalPixelSize(10),
      width: screen.getHorizontalPixelSize(275),
      textAlign: "center",
      paddingVertical: screen.getVerticalPixelSize(10),
      borderRadius: 7,
      fontFamily: "cairo-500",
      fontSize: screen.getResponsiveFontSize(12),
    },
  });

  return (
    <View style={lang === "ar" ? styles.arContainer : styles.enContainer}>
      <TouchableOpacity onPress={() => setShowHintPopup(!showHintPopup)}>
        <Feather
          name="info"
          style={lang === "ar" ? styles.arAboutIcon : styles.enAboutIcon}
        />

        {showHintPopup && (
          <Text style={lang === "ar" ? styles.arPopupHint : styles.enPopupHint}>
            {i18n("referralCodeHint")}
          </Text>
        )}
      </TouchableOpacity>

      <TextInput
        onChangeText={onChange}
        placeholder={i18n("referralCodePlaceholder")}
        style={lang === "ar" ? styles.arInput : styles.enInput}
        value={value}
        onFocus={() => setShowHintPopup(false)}
      />

      <MaterialIcons
        name="lock-outline"
        style={lang === "ar" ? styles.arIcon : styles.enIcon}
      />
    </View>
  );
}
