import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function AddLocation() {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.title}>إضافة الموقع للمفضلة</Text>

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
