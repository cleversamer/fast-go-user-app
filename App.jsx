import "react-native-gesture-handler";
import { useEffect, useState } from "react";
import useFonts from "./src/hooks/useFonts";
import useLocation from "./src/hooks/useLocation";
import useSystemLanguage from "./src/hooks/useSystemLanguage";

import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./src/navigation/AuthNavigation";
import AppNavigation from "./src/navigation/AppNavigation";

import AuthContext from "./src/auth/context";

import Onboarding from "./src/screens/onboarding";

export default function App() {
  const { fontLoaded } = useFonts();
  useLocation();
  const { systemLanguage, loading: isLangLoading } = useSystemLanguage();
  const [lang, setLang] = useState(systemLanguage);
  const [showHomeScreen, setShowHomeScreen] = useState(false);
  const [user, setUser] = useState(false);

  useEffect(() => {
    setLang(systemLanguage);
  }, [systemLanguage]);

  if (!fontLoaded || isLangLoading) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ user, setUser, lang, setLang }}>
      {!showHomeScreen && <Onboarding onDone={() => setShowHomeScreen(true)} />}

      {showHomeScreen && (
        <NavigationContainer>
          {user && user.role === "passenger" && <AppNavigation />}
          {!user && <AuthNavigation />}
        </NavigationContainer>
      )}
    </AuthContext.Provider>
  );
}
