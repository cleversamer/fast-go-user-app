import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import * as theme from "../../constants/theme";
import useLocale from "../../hooks/useLocale";

export default function Location({ title, onPress, showDelete, onDelete }) {
  const { lang } = useLocale();

  return (
    <View
      onPress={onPress}
      style={lang === "ar" ? styles.arContainer : styles.enContainer}
    >
      {showDelete && (
        <TouchableOpacity onPress={onDelete}>
          <MaterialIcons name="delete" size={30} color={theme.primaryColor} />
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={lang === "ar" ? styles.arContainer : styles.enContainer}
        onPress={onPress}
      >
        <Text style={styles.title}>{title}</Text>

        <View style={styles.iconContainer}>
          <EvilIcons name="location" size={34} color={theme.primaryColor} />
        </View>
      </TouchableOpacity>
    </View>
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
  title: {
    fontFamily: "cairo-500",
    fontSize: 12,
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
