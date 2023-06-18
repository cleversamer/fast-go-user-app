import { StyleSheet, View, Text } from "react-native";
import useScreen from "../../hooks/useScreen";
import * as theme from "../../constants/theme";

export default function PendingDriver() {
  const screen = useScreen();

  const styles = StyleSheet.create({
    container: {
      width: screen.getHorizontalPixelSize(165),
      height: screen.getVerticalPixelSize(100),
      minHeight: screen.getVerticalPixelSize(100),
      maxHeight: screen.getVerticalPixelSize(100),
      backgroundColor: theme.primaryColor,
      borderRadius: screen.getHorizontalPixelSize(4),
      paddingHorizontal: screen.getHorizontalPixelSize(10),
      paddingVertical: screen.getVerticalPixelSize(10),
    },
  });

  return (
    <View styles={styles.container}>
      <Text>PendingDriver</Text>
    </View>
  );
}
