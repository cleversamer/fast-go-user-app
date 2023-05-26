import { useContext } from "react";
import { PixelRatio } from "react-native";
import AuthContext from "../auth/context";

const useScreen = () => {
  const { screenDimensions } = useContext(AuthContext);

  const getHorizontalPixelSize = (pixels) => {
    return screenDimensions.width * pixels * 0.0025510204081633;
  };

  const getVerticalPixelSize = (pixels) => {
    return screenDimensions.height * pixels * 0.0011752262310495;
  };

  const getScreenWidth = () => {
    return screenDimensions.width;
  };

  const getScreenHeight = () => {
    return screenDimensions.height;
  };

  const getResponsiveFontSize = (fontSize) => {
    const { width: screenWidth, height: screenHeight } = screenDimensions;
    const standardScreenSize = 375; // Standard screen width to calculate font size

    const scaleFactor =
      Math.min(screenWidth, screenHeight) / standardScreenSize;
    const responsiveFontSize = fontSize * scaleFactor;

    // Adjust font size for device pixel ratio (optional, but recommended)
    const pixelRatio = PixelRatio.getFontScale();
    const adjustedFontSize = responsiveFontSize / pixelRatio;

    return adjustedFontSize;
  };

  return {
    getHorizontalPixelSize,
    getVerticalPixelSize,
    getScreenWidth,
    getScreenHeight,
    getResponsiveFontSize,
  };
};

export default useScreen;
