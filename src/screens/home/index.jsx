import { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import Map from "../../components/map";
import HomeBottomSheet from "../../components/homeBottomSheet";
import HamburgerMenu from "../../components/hamburgerMenu";

export default function HomeScreen() {
  const [isSheetVisible, setIsSheetVisible] = useState(false);

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
