import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import * as theme from "../../constants/theme";
import useLocale from "../../hooks/useLocale";
import useScreen from "../../hooks/useScreen";

export default function Location({ title, onPress, showDelete, onDelete }) {
  const screen = useScreen();
  const { lang } = useLocale();

  const styles = StyleSheet.create({
    arContainer: {
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      gap: screen.getHorizontalPixelSize(10),
    },
    enContainer: {
      flexDirection: "row-reverse",
      justifyContent: "flex-end",
      alignItems: "center",
      gap: screen.getHorizontalPixelSize(10),
    },
    title: {
      fontFamily: "cairo-500",
      fontSize: 12,
    },
    iconContainer: {
      backgroundColor: "#EFEFEF",
      borderRadius: 6,
      width: screen.getHorizontalPixelSize(40),
      maxWidth: 40,
      height: screen.getHorizontalPixelSize(40),
      maxHeight: 40,
      justifyContent: "center",
      alignItems: "center",
    },
  });

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
