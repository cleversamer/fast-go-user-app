import "react-native-gesture-handler";
import { useState } from "react";
import { StyleSheet } from "react-native";
import useFonts from "./src/hooks/useFonts";
import useLocation from "./src/hooks/useLocation";

import Onboarding from "./src/screens/onboarding";
import WelcomeScreen from "./src/screens/welcome";
import LoginScreen1 from "./src/screens/login/LoginScreen1";
import LoginScreen2 from "./src/screens/login/LoginScreen2";
import LoginScreen3 from "./src/screens/login/LoginScreen3";
import LoginScreen4 from "./src/screens/login/LoginScreen4";
import HomeScreen1 from "./src/screens/home/HomeScreen1";
import HomeScreen2 from "./src/screens/home/HomeScreen2";
import HomeScreen3 from "./src/screens/home/HomeScreen3";

export default function App() {
  const { fontLoaded } = useFonts();
  useLocation();
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
      {/* <HomeScreen1 /> */}
      {/* <HomeScreen2 /> */}
      <HomeScreen3 />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
