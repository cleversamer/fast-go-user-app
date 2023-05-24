import { useEffect, useState } from "react";
import {
  getPermissionsAsync,
  requestPermissionsAsync,
  getExpoPushTokenAsync,
} from "expo-notifications";

const useExpoPushNotifications = () => {
  const [token, setToken] = useState("");

  const registerForPushNotifications = async () => {
    try {
      const { status: existingStatus } = await getPermissionsAsync();

      let finalStatus = existingStatus;

      if (existingStatus !== "granted") {
        const { status } = await requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== "granted") {
        return;
      }

      const { data: token } = await getExpoPushTokenAsync();
      setToken(token);
    } catch (err) {}
  };

  useEffect(() => {
    try {
      registerForPushNotifications();
    } catch (err) {}
  }, []);

  return token;
};

export default useExpoPushNotifications;
