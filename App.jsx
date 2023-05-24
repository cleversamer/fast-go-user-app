import "react-native-gesture-handler";
import { useState } from "react";
import { StatusBar } from "react-native";
import useFonts from "./src/hooks/useFonts";
import useNetworkStatus from "./src/hooks/useNetworkStatus";

import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./src/navigation/AuthNavigation";
import PassengerNavigation from "./src/navigation/PassengerNavigation";
import DriverNavigation from "./src/navigation/DriverNavigation";

import AuthContext from "./src/auth/context";

import Onboarding from "./src/screens/common/Onboarding";

export default function App() {
  const { fontLoaded } = useFonts();
  const [lang, setLang] = useState("ar");
  const [showHomeScreen, setShowHomeScreen] = useState(false);
  const [user, setUser] = useState(null);
  const [displayMode, setDisplayMode] = useState("");
  const isOnline = useNetworkStatus();

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

  if (!fontLoaded) {
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
        }}
      >
        {!showHomeScreen && (
          <Onboarding onDone={() => setShowHomeScreen(true)} />
        )}

        {showHomeScreen && (
          <NavigationContainer>
            {checkIfPassenger() && <PassengerNavigation />}
            {checkIfDriver() && <DriverNavigation />}
            {!user && <AuthNavigation />}
          </NavigationContainer>
        )}
      </AuthContext.Provider>
    </>
  );
}
