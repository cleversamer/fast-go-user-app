import "react-native-gesture-handler";
import { useState } from "react";
import { StatusBar } from "react-native";
import useFonts from "./src/hooks/useFonts";
import useNetworkStatus from "./src/hooks/useNetworkStatus";
import useScreenDimensions from "./src/hooks/useScreenDimensions";

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
  const screenDimensions = useScreenDimensions();
  const { fontLoaded } = useFonts();
  const isOnline = useNetworkStatus();

  // States
  const [lang, setLang] = useState("ar");
  const [showHomeScreen, setShowHomeScreen] = useState(false);
  const [user, setUser] = useState(null);
  const [displayMode, setDisplayMode] = useState("");

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

  const getHorizontalPixelSize = (pixels) => {
    return screenDimensions.width * pixels * 0.0025510204081633;
  };

  const getVerticalPixelSize = (pixels) => {
    return screenDimensions.height * pixels * 0.0025510204081633;
  };

  const getScreenWidth = () => {
    return screenDimensions.width;
  };

  const getScreenHeight = () => {
    return screenDimensions.height;
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
          getHorizontalPixelSize,
          getVerticalPixelSize,
          getScreenWidth,
          getScreenHeight,
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
