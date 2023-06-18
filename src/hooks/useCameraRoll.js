import { useState, useEffect } from "react";
import { Platform } from "react-native";
import { requestMediaLibraryPermissionsAsync } from "expo-image-picker";

const useCameraRoll = () => {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    try {
      requestCameraRollPermissions();
    } catch (err) {}
  }, []);

  const requestCameraRollPermissions = async () => {
    try {
      if (Platform.OS !== "web") {
        const { status } = await requestMediaLibraryPermissionsAsync();
        setStatus(status);
      }
    } catch (err) {}
  };

  return {
    cameraRollPermissionsStatus: status,
    requestCameraRollPermissions,
  };
};

export default useCameraRoll;
