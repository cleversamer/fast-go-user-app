import "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { StatusBar, Dimensions } from "react-native";
import useFonts from "./src/hooks/useFonts";
import useNetworkStatus from "./src/hooks/useNetworkStatus";

import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./src/navigation/AuthNavigation";
import PassengerNavigation from "./src/navigation/PassengerNavigation";
import DriverNavigation from "./src/navigation/DriverNavigation";

import AuthContext from "./src/auth/context";

import Onboarding from "./src/screens/common/Onboarding";

// import * as Sentry from "@sentry/react-native";

// Sentry.init({
//   dsn: "https://1b1394cc8661464a8d042e8af7aba4d4@o4505238497984512.ingest.sentry.io/4505238497984512",
// });

export default function App() {
  // Hooks
  const { fontLoaded } = useFonts();
  const isOnline = useNetworkStatus();

  // States
  const [lang, setLang] = useState("ar");
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
