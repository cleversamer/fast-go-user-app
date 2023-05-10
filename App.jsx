import "react-native-gesture-handler";
import { useState } from "react";
import { StyleSheet } from "react-native";
import useFonts from "./src/hooks/useFonts";

import Onboarding from "./src/screens/onboarding";
import WelcomeScreen from "./src/screens/welcome";
import LoginScreen1 from "./src/screens/login/LoginScreen1";
import LoginScreen2 from "./src/screens/login/LoginScreen2";
import LoginScreen3 from "./src/screens/login/LoginScreen3";
import LoginScreen4 from "./src/screens/login/LoginScreen4";
import HomeScreen from "./src/screens/home";

export default function App() {
  const { fontLoaded } = useFonts();
  const [showHomeScreen, setShowHomeScreen] = useState(false);

  const handleShowHomeScreen = () => {
    setShowHomeScreen(true);
  };

  if (!fontLoaded) {
    return null;
  }

  if (!showHomeScreen) {
    return <Onboarding onDone={handleShowHomeScreen} />;
  }

  return (
    <>
      {/* <WelcomeScreen /> */}
      {/* <LoginScreen1 /> */}
      {/* <LoginScreen2 /> */}
      {/* <LoginScreen3 /> */}
      {/* <LoginScreen4 /> */}
      <HomeScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
