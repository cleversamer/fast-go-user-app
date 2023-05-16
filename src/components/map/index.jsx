import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import useLocation from "../../hooks/useLocation";
import Geocoder from "react-native-geocoding";
import useLocale from "../../hooks/useLocale";

Geocoder.init("AIzaSyAo9_6OiQ96Z-D2V8a4iiq5Yz3LDmrrM78");

// API KEY
// AIzaSyAo9_6OiQ96Z-D2V8a4iiq5Yz3LDmrrM78

const initialRegion = {
  latitude: 32.86806972,
  longitude: 13.1172586594,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

export default function Map({
  locations = [],
  onSelectLocation,
  onMarkerPress,
}) {
  const { i18n } = useLocale();
  const [region, setRegion] = useState(initialRegion);
  const location = useLocation();

  useEffect(() => {
    if (location) {
      setRegion({
        ...region,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    }
  }, [location]);

  const handleSelectLocation = async (event) => {
    try {
      const location = {
        latitude:
          event?.nativeEvent?.coordinate?.latitude || initialRegion.latitude,

        longitude:
          event?.nativeEvent?.coordinate?.longitude || initialRegion.longitude,

        title: i18n("unknownLocation"),
      };

      Geocoder.from(location.latitude, location.longitude)
        .then((response) => {
          try {
            const address = response?.results[0]?.formatted_address;
            if (address) {
              location.title = address;
            }

            onSelectLocation?.(location);
          } catch (err) {}
        })
        .catch((error) => {
          try {
            onSelectLocation?.(location);
          } catch (err) {}
        });
    } catch (err) {}
  };

  return (
    <MapView style={styles.map} region={region} onPress={handleSelectLocation}>
      <Marker
        coordinate={{
          latitude: region.latitude,
          longitude: region.longitude,
        }}
      />

      {locations.map((location, index) => (
        <Marker
          key={index}
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          onPress={() => onMarkerPress?.(location)}
        />
      ))}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
