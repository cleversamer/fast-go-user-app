import { useState } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import DriverHomeScreenTitle from "../../components/screenTitles/DriverHomeScreenTitle";
import GoogleMap from "../../components/common/GoogleMap";
import DriverHomeBottomSheet from "../../components/bottomSheets/DriverHomeBottomSheet";
import useLocale from "../../hooks/useLocale";
import screens from "../../static/screens.json";
import useAuth from "../../auth/useAuth";

export default function DriverHomeSceen({ navigation }) {
  const { user } = useAuth();
  const { i18n } = useLocale();
  const [isConnected, setIsConntected] = useState(user.isConnected);

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

  const handleToggoeConnected = () => {
    setIsConntected(!isConnected);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <DriverHomeScreenTitle
          title={i18n("mainScreen")}
          onToggleConnected={handleToggoeConnected}
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
