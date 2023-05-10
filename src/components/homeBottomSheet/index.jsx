import { StyleSheet, Text } from "react-native";
import BottomSheet from "../bottomSheet";

export default function HomeBottomSheet() {
  return (
    <BottomSheet contentStyle={styles.container}>
      <Text style={styles.title}>إلى أين الوجهة ؟</Text>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    paddingTop: 0,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: "cairo-800",
    fontSize: 15,
  },
});
