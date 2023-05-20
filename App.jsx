import "react-native-gesture-handler";
import { useEffect, useState } from "react";
import useFonts from "./src/hooks/useFonts";
import useLocation from "./src/hooks/useLocation";
import useSystemLanguage from "./src/hooks/useSystemLanguage";
import useNetworkStatus from "./src/hooks/useNetworkStatus";

import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./src/navigation/AuthNavigation";
import AppNavigation from "./src/navigation/AppNavigation";
import DriverNavigation from "./src/navigation/DriverNavigation";

import AuthContext from "./src/auth/context";

import Onboarding from "./src/screens/common/Onboarding";

export default function App() {
  const { fontLoaded } = useFonts();
  useLocation();
  const { systemLanguage, loading: isLangLoading } = useSystemLanguage();
  const [lang, setLang] = useState(systemLanguage);
  const [showHomeScreen, setShowHomeScreen] = useState(false);
  const [user, setUser] = useState(false);
  const [displayMode, setDisplayMode] = useState("");
  const isOnline = useNetworkStatus();

  useEffect(() => {
    // setLang(systemLanguage);
    setLang("ar");
  }, [systemLanguage]);

  const checkIfPassenger = () => {
    return user && (user.role === "passenger" || displayMode === "passenger");
  };

  const checkIfDriver = () => {
    return user && user.role === "driver" && displayMode === "driver";
  };

  if (!fontLoaded || isLangLoading) {
    return null;
  }

  return (
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
      {!showHomeScreen && <Onboarding onDone={() => setShowHomeScreen(true)} />}

      {showHomeScreen && (
        <NavigationContainer>
          {checkIfPassenger() && <AppNavigation />}
          {checkIfDriver() && <DriverNavigation />}
          {!user && <AuthNavigation />}
        </NavigationContainer>
      )}
    </AuthContext.Provider>
  );
}
