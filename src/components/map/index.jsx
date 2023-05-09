import { StyleSheet } from "react-native";
import MapView from "react-native-maps";
import Constants from "expo-constants";

// API KEY
// AIzaSyAo9_6OiQ96Z-D2V8a4iiq5Yz3LDmrrM78

export default function Map() {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      // provider={PROVIDER_GOOGLE}
      // customMapStyle={Constants.manifest.extra.mapStyle}
    />
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
