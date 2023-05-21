import { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import GoogleMap from "../../components/common/GoogleMap";
import HomeBottomSheet1 from "../../components/bottomSheets/HomeBottomSheet1";
import HamburgerMenu from "../../components/common/HamburgerMenu";
import NetworkStatusLine from "../../components/common/NetworkStatusLine";
import screens from "../../static/screens.json";

export default function PassengerHomeScreen1({ navigation }) {
  const [locations, setLocations] = useState([]);

  const handleRequestNow = () => {
    try {
      navigation.navigate(screens.passengerHome2);
    } catch (err) {}
  };

  const handleSelectLocation = (location) => {
    try {
      setLocations([location]);
    } catch (err) {}
  };

  const handleDeleteLocation = (markerLocation) => {
    try {
      const newLocations = locations.filter(
        (location) =>
          location.latitude !== markerLocation.latitude &&
          location.longitude !== markerLocation.longitude
      );

      setLocations(newLocations);
    } catch (err) {}
  };

  const handleOpenDrawer = () => {
    try {
      navigation.openDrawer();
    } catch (err) {}
  };

  return (
    <SafeAreaView style={styles.container}>
      <NetworkStatusLine />

      <HamburgerMenu onPress={handleOpenDrawer} />

      <GoogleMap
        locations={locations}
        onSelectLocation={handleSelectLocation}
        onMarkerPress={handleDeleteLocation}
      />

      <HomeBottomSheet1
        disableButton={!locations.length}
        disableAddLocation={!locations.length}
        locationTitle={locations[0]?.title}
        onRequestNow={handleRequestNow}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
