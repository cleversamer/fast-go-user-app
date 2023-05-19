import { useState } from "react";
import { SafeAreaView, StyleSheet, Linking } from "react-native";
import GoogleMap from "../../components/common/GoogleMap";
import NetworkStatusLine from "../../components/common/NetworkStatusLine";
import TripDetailsBottomSheet from "../../components/bottomSheets/TripDetailsBottomSheet";
import CallDriverBottomSheet from "../../components/bottomSheets/CallDriverBottomSheet";
import screens from "../../static/screens.json";

export default function TripDetailsScreen({ navigation }) {
  const [driver, setDriver] = useState({});
  const [showSheet, setShowSheet] = useState(false);

  const handleCallInApp = () => {
    setShowSheet(false);
    navigation.navigate(screens.call);
  };

  const handleCallOutOfApp = async () => {
    try {
      await Linking.openURL("tel:+1234567890");
    } catch (err) {}
  };

  return (
    <SafeAreaView style={styles.container}>
      <NetworkStatusLine />

      <GoogleMap />

      <TripDetailsBottomSheet
        driver={driver}
        onCallDriver={() => setShowSheet(true)}
      />

      <CallDriverBottomSheet
        driver={driver}
        visible={showSheet}
        onClose={() => setShowSheet(false)}
        onCallInApp={handleCallInApp}
        onCallOutOfApp={handleCallOutOfApp}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
