import { StyleSheet, View, TextInput, Text } from "react-native";
import useLocale from "../../hooks/useLocale";
import useScreen from "../../hooks/useScreen";
import * as theme from "../../constants/theme";

export default function TextAreaInput({
  placeholder,
  value,
  title,
  onChange,
  containerStyles,
}) {
  const screen = useScreen();
  const { lang } = useLocale();

  const styles = StyleSheet.create({
    container: {
      gap: screen.getVerticalPixelSize(7),
    },
    title: {
      fontFamily: "cairo-700",
      fontSize: screen.getResponsiveFontSize(15),
      paddingHorizontal: screen.getHorizontalPixelSize(10),
    },
    inputContainer: {
      borderRadius: 8,
      backgroundColor: "#fff",
      borderWidth: screen.getHorizontalPixelSize(1.5),
      borderColor: theme.primaryColor,
      flexDirection: lang === "ar" ? "row" : "row-reverse",
      height: screen.getVerticalPixelSize(150),
    },
    input: {
      flex: 1,
      color: "#000",
      paddingVertical: screen.getVerticalPixelSize(10),
      paddingHorizontal: screen.getHorizontalPixelSize(10),
      fontFamily: "cairo-500",
      fontSize: screen.getResponsiveFontSize(13),
      textAlign: lang === "ar" ? "right" : "left",
    },
  });

  return (
    <View style={[styles.container, containerStyles || {}]}>
      {title && <Text style={styles.title}>{title}</Text>}

      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={onChange}
          placeholder={placeholder}
          style={styles.input}
          value={value}
          multiline={true}
          numberOfLines={4}
          textAlignVertical="top"
        />
      </View>
    </View>
  );
}
