import { SafeAreaView, StyleSheet } from "react-native";
import Map from "../../components/map";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Map />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
