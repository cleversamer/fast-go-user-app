import { useState } from "react";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import useFonts from "./src/hooks/useFonts";
import Onboarding from "./src/screens/onboarding";

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
    return (
      <View style={{ flex: 1 }}>
        <Onboarding onDone={handleShowHomeScreen} />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Home screen</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
