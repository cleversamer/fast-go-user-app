import { useContext } from "react";
import { PixelRatio } from "react-native";
import AuthContext from "../auth/context";

const useScreen = () => {
  const { screenDimensions } = useContext(AuthContext);

  const getHorizontalPixelSize = (pixels) => {
    try {
      return screenDimensions.width * pixels * 0.0025510204081633;
    } catch (err) {
      return pixels;
    }
  };

  const getVerticalPixelSize = (pixels) => {
    try {
      return screenDimensions.height * pixels * 0.0011752262310495;
    } catch (err) {
      return pixels;
    }
  };

  const getScreenWidth = () => {
    try {
      return screenDimensions.width;
    } catch (err) {
      return 800;
    }
  };

  const getScreenHeight = () => {
    try {
      return screenDimensions.height;
    } catch (err) {
      return 400;
    }
  };

  const getResponsiveFontSize = (fontSize) => {
    try {
      const { width: screenWidth, height: screenHeight } = screenDimensions;
      const standardScreenSize = 375; // Standard screen width to calculate font size

      const scaleFactor =
        Math.min(screenWidth, screenHeight) / standardScreenSize;
      const responsiveFontSize = fontSize * scaleFactor;

      // Adjust font size for device pixel ratio (optional, but recommended)
      const pixelRatio = PixelRatio.getFontScale();
      const adjustedFontSize = responsiveFontSize / pixelRatio;

      return adjustedFontSize;
    } catch (err) {
      return fontSize;
    }
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
