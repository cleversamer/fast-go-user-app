import "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { StatusBar, Dimensions } from "react-native";
import useFonts from "./src/hooks/useFonts";
import useNetworkStatus from "./src/hooks/useNetworkStatus";
import useLocation from "./src/hooks/useLocation";
import useSystemLanguage from "./src/hooks/useSystemLanguage";

import {
  lockAsync,
  OrientationLock,
  unlockAsync,
} from "expo-screen-orientation";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./src/navigation/AuthNavigation";
import PassengerNavigation from "./src/navigation/PassengerNavigation";
import DriverNavigation from "./src/navigation/DriverNavigation";

import AuthContext from "./src/auth/context";

import Onboarding from "./src/screens/common/Onboarding";

export default function App() {
  // Hooks
  const { fontLoaded } = useFonts();
  useLocation();
  const { loading: isLoadingLanguage, systemLanguage } = useSystemLanguage();
  const isOnline = useNetworkStatus();

  // States
  const [lang, setLang] = useState(systemLanguage);
  const [showHomeScreen, setShowHomeScreen] = useState(false);
  const [user, setUser] = useState(null);
  const [displayMode, setDisplayMode] = useState("");
  const [screenDimensions, setScreenDimensions] = useState(
    Dimensions.get("screen")
  );

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ screen }) => {
      setScreenDimensions(screen);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    if (!isLoadingLanguage) {
      setLang(systemLanguage);
    }
  }, [isLoadingLanguage]);

  useEffect(() => {
    const lockScreenOrientation = async () => {
      await lockAsync(OrientationLock.PORTRAIT);
    };

    lockScreenOrientation();

    return () => {
      // Unlock the screen orientation when the component is unmounted
      unlockAsync();
    };
  }, []);

  const checkIfPassenger = () => {
    try {
      return user && (user.role === "passenger" || displayMode === "passenger");
    } catch (err) {
      return false;
    }
  };

  const checkIfDriver = () => {
    try {
      return user && user.role === "driver" && displayMode === "driver";
    } catch (err) {
      return false;
    }
  };

  if (!fontLoaded || isLoadingLanguage) {
    return null;
  }

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <AuthContext.Provider
        value={{
          user,
          setUser,
          lang,
          setLang,
          isOnline,
          displayMode,
          setDisplayMode,
          screenDimensions,
        }}
      >
        {!showHomeScreen && (
          <Onboarding onDone={() => setShowHomeScreen(true)} />
        )}

        {showHomeScreen && (
          <NavigationContainer>
            {!user && <AuthNavigation />}
            {checkIfPassenger() && <PassengerNavigation />}
            {checkIfDriver() && <DriverNavigation />}
          </NavigationContainer>
        )}
      </AuthContext.Provider>
    </>
  );
}
