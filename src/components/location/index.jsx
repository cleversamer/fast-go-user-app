import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import * as theme from "../../constants/theme";

export default function Location({ title, onPress, showDelete, onDelete }) {
  return (
    <View onPress={onPress} style={styles.container}>
      {showDelete && (
        <TouchableOpacity onPress={onDelete}>
          <MaterialIcons name="delete" size={30} color={theme.primaryColor} />
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.iconContainer}>
          <EvilIcons name="location" size={34} color={theme.primaryColor} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontFamily: "cairo-500",
    fontSize: 12,
  },
  iconContainer: {
    backgroundColor: "#EFEFEF",
    borderRadius: 6,
    padding: 4,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
