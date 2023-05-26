import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import SwitchButton from "../buttons/SwitchButton";
import useScreen from "../../hooks/useScreen";

export default function NotificationsScreenTitle({
  title,
  onPrev,
  onToggleNotifications,
}) {
  const screen = useScreen();

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      minHeight: screen.getVerticalPixelSize(50),
    },
    title: {
      fontFamily: "cairo-700",
      fontSize: screen.getResponsiveFontSize(16),
      textAlign: "center",
      position: "absolute",
      left: "50%",
      transform: [{ translateX: -(screen.getScreenWidth() / 9) }],
    },
    backIcon: {
      fontSize: screen.getResponsiveFontSize(26),
      paddingVertical: screen.getVerticalPixelSize(5),
      paddingHorizontal: screen.getHorizontalPixelSize(5),
    },
  });

  return (
    <View style={styles.container}>
      <SwitchButton enabled onToggle={onToggleNotifications} />

      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity onPress={onPrev}>
        <AntDesign name="arrowright" style={styles.backIcon} />
      </TouchableOpacity>
    </View>
  );
}
