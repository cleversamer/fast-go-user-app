import { useEffect, useState } from "react";
import { loadAsync } from "expo-font";

const useFonts = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    try {
      loadAsync({
        "cairo-400": require("../assets/fonts/Cairo-Regular.ttf"),
        "cairo-500": require("../assets/fonts/Cairo-Medium.ttf"),
        "cairo-600": require("../assets/fonts/Cairo-SemiBold.ttf"),
        "cairo-700": require("../assets/fonts/Cairo-Bold.ttf"),
        "cairo-800": require("../assets/fonts/Cairo-ExtraBold.ttf"),
      })
        .then(() => setFontLoaded(true))
        .catch((err) => {});
    } catch (err) {}
  }, []);

  return { fontLoaded };
};

export default useFonts;
