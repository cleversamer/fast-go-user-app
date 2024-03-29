import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import useLocation from "../../hooks/useLocation";
import useLocale from "../../hooks/useLocale";
import Geocoder from "react-native-geocoding";

Geocoder.init("AIzaSyCCEmVrr0YEw2JDMpYpXMfhSztRyeu1ycw");

const initialRegion = {
  latitude: 32.86806972,
  longitude: 13.1172586594,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

export default function GoogleMap({
  locations = [],
  onSelectLocation,
  onMarkerPress,
  containerStyles,
}) {
  const { i18n } = useLocale();
  const [region, setRegion] = useState(initialRegion);
  const location = useLocation();

  useEffect(() => {
    try {
      if (location) {
        setRegion({
          ...region,
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      }
    } catch (err) {}
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
    <MapView
      style={[styles.map, containerStyles || {}]}
      region={region}
      onPress={handleSelectLocation}
    >
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
    minHeight: "100%",
    minWidth: "100%",
  },
});
