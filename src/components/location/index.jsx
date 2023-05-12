import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import * as theme from "../../constants/theme";

export default function Location({ title }) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.iconContainer}>
          <EvilIcons name="location" size={34} color={theme.primaryColor} />
        </View>
      </View>
    </TouchableOpacity>
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
