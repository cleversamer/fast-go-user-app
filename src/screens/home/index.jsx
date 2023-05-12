import { SafeAreaView, StyleSheet } from "react-native";
import Map from "../../components/map";
import HomeBottomSheet from "../../components/homeBottomSheet";
import HamburgerMenu from "../../components/hamburgerMenu";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <HamburgerMenu />
      <Map />
      <HomeBottomSheet />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
