import { useState } from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import useFonts from "./src/hooks/useFonts";

import Onboarding from "./src/screens/onboarding";
import WelcomeScreen from "./src/screens/welcome";

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
      <WelcomeScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
