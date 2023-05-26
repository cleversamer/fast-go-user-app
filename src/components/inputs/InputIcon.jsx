import { StyleSheet, View, TextInput, Text } from "react-native";
import * as theme from "../../constants/theme";
import useLocale from "../../hooks/useLocale";
import useScreen from "../../hooks/useScreen";

export default function InputIcon({
  Icon,
  placeholder,
  value,
  title,
  onChange,
  keyboardType,
  containerStyles,
}) {
  const screen = useScreen();
  const { lang } = useLocale();

  const styles = StyleSheet.create({
    container: {
      gap: screen.getVerticalPixelSize(7),
    },
    arInputContainer: {
      borderRadius: 8,
      backgroundColor: "#fff",
      borderWidth: screen.getHorizontalPixelSize(1.5),
      borderColor: theme.primaryColor,
      flexDirection: "row",
      alignItems: "center",
    },
    enInputContainer: {
      borderRadius: 8,
      backgroundColor: "#fff",
      borderWidth: screen.getHorizontalPixelSize(1.5),
      borderColor: theme.primaryColor,
      flexDirection: "row-reverse",
      alignItems: "center",
    },
    title: {
      fontFamily: "cairo-700",
      fontSize: screen.getResponsiveFontSize(15),
    },
    arInput: {
      flex: 1,
      color: "#000",
      paddingVertical: screen.getVerticalPixelSize(10),
      paddingHorizontal: screen.getHorizontalPixelSize(10),
      fontFamily: "cairo-500",
      fontSize: screen.getResponsiveFontSize(13),
      textAlign: "right",
    },
    enInput: {
      flex: 1,
      color: "#000",
      paddingVertical: screen.getVerticalPixelSize(10),
      paddingHorizontal: screen.getHorizontalPixelSize(10),
      fontFamily: "cairo-500",
      fontSize: screen.getResponsiveFontSize(13),
      textAlign: "left",
    },
  });

  return (
    <View style={[styles.container, containerStyles || {}]}>
      {title && <Text style={styles.title}>{title}</Text>}

      <View
        style={
          lang === "ar" ? styles.arInputContainer : styles.enInputContainer
        }
      >
        <TextInput
          onChangeText={onChange}
          placeholder={placeholder}
          style={lang === "ar" ? styles.arInput : styles.enInput}
          keyboardType={keyboardType || "default"}
          value={value}
        />

        {Icon && <Icon />}
      </View>
    </View>
  );
}
