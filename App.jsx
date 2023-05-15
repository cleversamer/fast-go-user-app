import "react-native-gesture-handler";
import { useState } from "react";
import { StyleSheet } from "react-native";
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
  const [showHomeScreen, setShowHomeScreen] = useState(false);
  const [user, setUser] = useState(null);

  if (!fontLoaded) {
    return null;
  }

  if (!showHomeScreen) {
    return <Onboarding onDone={() => setShowHomeScreen(true)} />;
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        {user ? <AppNavigation /> : <AuthNavigation />}
        {/* <AppNavigation /> */}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
