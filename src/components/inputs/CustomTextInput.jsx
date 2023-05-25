import { View, StyleSheet, TextInput } from "react-native";
import * as theme from "../../constants/theme";
import useScreen from "../../hooks/useScreen";

export default function CustomTextInput({ value, onChange, placeholder }) {
  const screen = useScreen();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      borderRadius: 8,
      backgroundColor: "#fff",
      borderWidth: screen.getHorizontalPixelSize(1.5),
      borderColor: theme.primaryColor,
      flexDirection: "row",
      alignItems: "center",
    },
    input: {
      flex: 1,
      color: "#000",
      paddingVertical: screen.getVerticalPixelSize(10),
      paddingHorizontal: screen.getHorizontalPixelSize(10),
      fontFamily: "cairo-400",
      textAlign: "right",
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChange}
        placeholder={placeholder}
        style={styles.input}
        value={value}
      />
    </View>
  );
}
