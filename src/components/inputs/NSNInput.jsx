import { View, StyleSheet, TextInput } from "react-native";
import * as theme from "../../constants/theme";
import { Ionicons } from "@expo/vector-icons";
import useScreen from "../../hooks/useScreen";

export default function NSNInput({ value, onChange }) {
  const screen = useScreen();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: screen.getHorizontalPixelSize(110),
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
    },
    icon: {
      marginRight: screen.getHorizontalPixelSize(10),
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChange}
        placeholder="91 7763190"
        style={styles.input}
        keyboardType="number-pad"
        value={value}
      />

      <Ionicons
        name="call-outline"
        size={24}
        color={theme.primaryColor}
        style={styles.icon}
      />
    </View>
  );
}
