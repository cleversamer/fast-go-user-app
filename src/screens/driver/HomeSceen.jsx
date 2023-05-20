import { useState } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import DriverHomeScreenTitle from "../../components/screenTitles/DriverHomeScreenTitle";
import GoogleMap from "../../components/common/GoogleMap";
import DriverHomeBottomSheet from "../../components/bottomSheets/DriverHomeBottomSheet";

export default function DriverHomeSceen({ navigation }) {
  const [isConnected, setIsConnected] = useState(true);

  const handleOpenDrawer = () => {
    try {
      navigation.openDrawer();
    } catch (err) {}
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <DriverHomeScreenTitle
          title="الرئيسية"
          onToggleConnected={() => setIsConnected(!isConnected)}
          isDriverConnected={isConnected}
          onOpenDrawer={handleOpenDrawer}
        />
      </View>

      <GoogleMap />

      <DriverHomeBottomSheet isDriverConnected={isConnected} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 100,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
