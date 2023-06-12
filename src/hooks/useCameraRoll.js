import { useState, useEffect } from "react";
import { Platform } from "react-native";
import { requestMediaLibraryPermissionsAsync } from "expo-image-picker";

const useCameraRoll = () => {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    requestCameraRollPermissions();
  }, []);

  const requestCameraRollPermissions = async () => {
    if (Platform.OS !== "web") {
      const { status } = await requestMediaLibraryPermissionsAsync();
      setStatus(status);
    }
  };

  return {
    cameraRollPermissionsStatus: status,
    requestCameraRollPermissions,
  };
};

export default useCameraRoll;
