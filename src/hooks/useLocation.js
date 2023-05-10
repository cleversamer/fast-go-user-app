import { useState, useEffect } from "react";
import {
  getForegroundPermissionsAsync,
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";

const useLocation = () => {
  const [location, setLocation] = useState(null);

  const requestLocation = async () => {
    // const { status: currentPermissionStatus } =
    //   await getForegroundPermissionsAsync();
    // if (currentPermissionStatus) {
    //   const location = await getCurrentPositionAsync({});
    //   return setLocation(location);
    // }

    const { status: newPermissionStatus } =
      await requestForegroundPermissionsAsync();
    if (newPermissionStatus === "granted") {
      const location = await getCurrentPositionAsync({});
      return setLocation(location);
    }
  };

  useEffect(() => {
    requestLocation();
  }, []);

  return location;
};

export default useLocation;
