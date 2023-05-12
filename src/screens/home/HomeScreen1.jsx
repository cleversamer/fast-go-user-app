import { SafeAreaView, StyleSheet } from "react-native";
import Map from "../../components/map";
import HomeBottomSheet1 from "../../components/homeBottomSheet1";
import HamburgerMenu from "../../components/hamburgerMenu";

export default function HomeScreen1() {
  return (
    <SafeAreaView style={styles.container}>
      <HamburgerMenu />
      <Map />
      <HomeBottomSheet1 />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
