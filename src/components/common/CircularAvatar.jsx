import { StyleSheet, Image } from "react-native";
import useScreen from "../../hooks/useScreen";

export default function CircularAvatar({ url, imageStyle }) {
  const screen = useScreen();

  const styles = StyleSheet.create({
    image: {
      width: screen.getHorizontalPixelSize(80),
      height: screen.getVerticalPixelSize(80),
      borderRadius: 500,
    },
  });

  const getImageSource = () => {
    return !!url
      ? { uri: url }
      : require("../../assets/images/default-avatar.png");
  };

  return (
    <Image
      source={getImageSource()}
      resizeMode="contain"
      style={[styles.image, imageStyle || {}]}
    />
  );
}
