import "react-native-gesture-handler";
import { useState } from "react";
import useFonts from "./src/hooks/useFonts";
import useLocation from "./src/hooks/useLocation";

import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./src/navigation/AuthNavigation";
import AppNavigation from "./src/navigation/AppNavigation";

import AuthContext from "./src/auth/context";

import Onboarding from "./src/screens/onboarding";

export default function App() {
  const { fontLoaded } = useFonts();
  useLocation();
  const [lang, setLang] = useState("ar");
  const [showHomeScreen, setShowHomeScreen] = useState(false);
  const [user, setUser] = useState(null);

  if (!fontLoaded) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ user, setUser, lang, setLang }}>
      {!showHomeScreen && <Onboarding onDone={() => setShowHomeScreen(true)} />}

      {showHomeScreen && (
        <NavigationContainer>
          {user ? <AppNavigation /> : <AuthNavigation />}
          {/* <AppNavigation /> */}
        </NavigationContainer>
      )}
    </AuthContext.Provider>
  );
}
