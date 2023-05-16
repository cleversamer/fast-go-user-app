import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import useLocale from "../../hooks/useLocale";

const defaultText = "إضافة الموقع للمفضلة";

export default function AddLocation({ text = defaultText, disabled, onPress }) {
  const { lang } = useLocale();

  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <View style={lang === "ar" ? styles.arContainer : styles.enContainer}>
        <Text style={disabled ? styles.disabledTitle : styles.enabledTitle}>
          {text}
        </Text>

        <View style={styles.iconContainer}>
          <AntDesign name="plus" size={26} color="#000" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  arContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 10,
  },
  enContainer: {
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 10,
  },
  enabledTitle: {
    fontFamily: "cairo-500",
    fontSize: 12,
  },
  disabledTitle: {
    fontFamily: "cairo-500",
    fontSize: 12,
    color: "#747474",
  },
  iconContainer: {
    backgroundColor: "#EFEFEF",
    borderRadius: 6,
    padding: 4,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
