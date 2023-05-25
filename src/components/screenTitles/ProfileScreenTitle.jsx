import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as theme from "../../constants/theme";
import PopupMenu from "../popups/PopupMenu";

export default function ProfileScreenTitle({
  title,
  onPrev,
  onRequestAccountDeletion,
}) {
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

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: 50,
  },
  title: {
    fontFamily: "cairo-700",
    fontSize: 16,
    textAlign: "center",
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -(700 / 6) }], // TODO: fix
  },
  backIcon: {
    fontSize: 26,
    padding: 5,
  },
});
