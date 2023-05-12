import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function AddLocation({ disabled }) {
  return (
    <TouchableOpacity disabled={disabled}>
      <View style={styles.container}>
        <Text style={disabled ? styles.disabledTitle : styles.enabledTitle}>
          إضافة الموقع للمفضلة
        </Text>

        <View style={styles.iconContainer}>
          <AntDesign name="plus" size={26} color="#000" />
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
  enabledTitle: {
    fontFamily: "cairo-500",
    fontSize: 12,
  },
  disabledTitle: {
    fontFamily: "cairo-500",
    fontSize: 12,
    color: "#747474",
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
