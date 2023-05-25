import { useEffect, useState } from "react";
import { Dimensions } from "react-native";

const useScreenDimensions = () => {
  const [screenDimensions, setScreenDimensions] = useState(
    Dimensions.get("screen")
  );

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", ({ screen }) => {
      setScreenDimensions(screen);
      console.log("screen", screen);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return screenDimensions;
};

export default useScreenDimensions;
