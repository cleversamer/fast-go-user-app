import { useState } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import DriverHomeScreenTitle from "../../components/screenTitles/DriverHomeScreenTitle";
import GoogleMap from "../../components/common/GoogleMap";
import DriverHomeBottomSheet from "../../components/bottomSheets/DriverHomeBottomSheet";
import useLocale from "../../hooks/useLocale";
import screens from "../../static/screens.json";

export default function DriverHomeSceen({ navigation }) {
  const { i18n } = useLocale();
  const [isConnected, setIsConnected] = useState(true);

  const handleOpenDrawer = () => {
    try {
      navigation.openDrawer();
    } catch (err) {}
  };

  const handleWalletClick = () => {
    try {
      navigation.navigate(screens.wallet);
    } catch (err) {}
  };

  const handleNotificationsClick = () => {
    try {
      navigation.navigate(screens.notifications);
    } catch (err) {}
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <DriverHomeScreenTitle
          title={i18n("mainScreen")}
          onToggleConnected={() => setIsConnected(!isConnected)}
          isDriverConnected={isConnected}
          onOpenDrawer={handleOpenDrawer}
        />
      </View>

      <GoogleMap />

      <DriverHomeBottomSheet
        isDriverConnected={isConnected}
        onWalletClick={handleWalletClick}
        onNotificationsClick={handleNotificationsClick}
      />
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
