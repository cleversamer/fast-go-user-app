import { Dimensions } from "react-native";

export const primaryColor = "#43D777";

export const primaryColorLight = "#c6f3d6";

export const getPixelSize = (pixels) => {
  return getWidth() * pixels * 0.0025510204081633;
};

export const getWidth = () => Dimensions.get("screen").width;

export const getHeight = () => Dimensions.get("screen").height;
