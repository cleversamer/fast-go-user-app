import { useContext } from "react";
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

  return {
    getHorizontalPixelSize,
    getVerticalPixelSize,
    getScreenWidth,
    getScreenHeight,
  };
};

export default useScreen;
