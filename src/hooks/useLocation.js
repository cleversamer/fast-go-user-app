import { useState, useEffect } from "react";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";

const useLocation = () => {
  const [location, setLocation] = useState(null);

  const requestLocation = async () => {
    try {
      const { status: newPermissionStatus } =
        await requestForegroundPermissionsAsync();

      if (newPermissionStatus === "granted") {
        const location = await getCurrentPositionAsync({});
        setLocation(location);
      }
    } catch (err) {}
  };

  useEffect(() => {
    try {
      requestLocation();
    } catch (err) {}
  }, []);

  return location;
};

export default useLocation;
