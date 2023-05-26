import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import useScreen from "../../hooks/useScreen";

export default function DefaultScreenTitle({ title, onPrev }) {
  const screen = useScreen();

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      height: screen.getVerticalPixelSize(36),
      position: "relative",
    },
    title: {
      fontFamily: "cairo-700",
      fontSize: screen.getResponsiveFontSize(16),
      textAlign: "center",
      textTransform: "capitalize",
    },
    iconContainer: {
      position: "absolute",
      top: 0,
      right: 0,
    },
    backIcon: {
      fontSize: screen.getResponsiveFontSize(26),
      paddingVertical: screen.getVerticalPixelSize(5),
      paddingHorizontal: screen.getHorizontalPixelSize(5),
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity style={styles.iconContainer} onPress={onPrev}>
        <AntDesign name="arrowright" style={styles.backIcon} />
      </TouchableOpacity>
    </View>
  );
}
