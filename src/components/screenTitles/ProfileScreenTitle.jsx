import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import PopupMenu from "../popups/PopupMenu";
import useScreen from "../../hooks/useScreen";

export default function ProfileScreenTitle({
  title,
  onPrev,
  onRequestAccountDeletion,
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
      fontSize: 16,
      textAlign: "center",
      position: "absolute",
      left: "50%",
      transform: [{ translateX: -(screen.getScreenWidth() / 6) }],
    },
    backIcon: {
      fontSize: 26,
      paddingVertical: screen.getVerticalPixelSize(5),
      paddingHorizontal: screen.getHorizontalPixelSize(5),
    },
  });

  return (
    <View style={styles.container}>
      <PopupMenu onRequestAccountDeletion={onRequestAccountDeletion} />

      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity onPress={onPrev}>
        <AntDesign name="arrowright" style={styles.backIcon} />
      </TouchableOpacity>
    </View>
  );
}
