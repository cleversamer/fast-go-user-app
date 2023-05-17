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

export default function ReferralCodeInput({ value, onChange }) {
  const [showHintPopup, setShowHintPopup] = useState(false);
  const { i18n, lang } = useLocale();

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

const styles = StyleSheet.create({
  arContainer: {
    borderRadius: 8,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: theme.primaryColor,
    flexDirection: "row",
    alignItems: "center",
  },
  enContainer: {
    borderRadius: 8,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: theme.primaryColor,
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  arAboutIcon: {
    fontSize: 26,
    marginLeft: 10,
    color: "#747474",
  },
  enAboutIcon: {
    fontSize: 26,
    marginRight: 10,
    color: "#747474",
  },
  arInput: {
    flex: 1,
    color: "#000",
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontFamily: "cairo-400",
    textAlign: "right",
  },
  enInput: {
    flex: 1,
    color: "#000",
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontFamily: "cairo-400",
    textAlign: "left",
  },
  arIcon: {
    fontSize: 30,
    color: theme.primaryColor,
    marginRight: 10,
  },
  enIcon: {
    fontSize: 30,
    color: theme.primaryColor,
    marginLeft: 10,
  },
  arPopupHint: {
    backgroundColor: "#f7f7f7",
    borderColor: "#ccc",
    borderWidth: 0.5,
    position: "absolute",
    top: 30,
    left: 0,
    right: 0,
    width: 235,
    textAlign: "center",
    paddingVertical: 10,
    borderRadius: 7,
    fontFamily: "cairo-500",
    fontSize: 12,
  },
  enPopupHint: {
    backgroundColor: "#f7f7f7",
    borderColor: "#ccc",
    borderWidth: 0.5,
    position: "absolute",
    top: 30,
    left: -250,
    right: 10,
    width: 275,
    textAlign: "center",
    paddingVertical: 10,
    borderRadius: 7,
    fontFamily: "cairo-500",
    fontSize: 12,
  },
});
