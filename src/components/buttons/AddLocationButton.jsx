import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import useLocale from "../../hooks/useLocale";
import useScreen from "../../hooks/useScreen";

const defaultText = "إضافة الموقع للمفضلة";

export default function AddLocationButton({
  text = defaultText,
  disabled,
  onPress,
}) {
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
    enabledTitle: {
      fontFamily: "cairo-500",
      fontSize: screen.getResponsiveFontSize(12),
    },
    disabledTitle: {
      fontFamily: "cairo-500",
      fontSize: screen.getResponsiveFontSize(12),
      color: "#747474",
    },
    iconContainer: {
      backgroundColor: "#EFEFEF",
      borderRadius: 6,
      padding: 4,
      width: screen.getHorizontalPixelSize(40),
      height: screen.getVerticalPixelSize(40),
      justifyContent: "center",
      alignItems: "center",
    },
  });

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
