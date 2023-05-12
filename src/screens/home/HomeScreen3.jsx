import { TouchableOpacity, SafeAreaView, StyleSheet, View } from "react-native";
import Map from "../../components/map";
import HomeBottomSheet2 from "../../components/homeBottomSheet2";
import { AntDesign } from "@expo/vector-icons";

export default function HomeScreen3() {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.iconContainer}>
        <AntDesign name="arrowright" size={24} color="black" />
      </TouchableOpacity>

      <Map />

      <HomeBottomSheet2 />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    position: "absolute",
    top: 55,
    right: 20,
    backgroundColor: "#fff",
    width: 45,
    height: 45,
    borderRadius: 50,
    zIndex: 1,
    padding: 12,
  },
});
