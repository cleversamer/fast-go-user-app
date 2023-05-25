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

  return (
    <Image
      source={url || require("../../assets/images/default-avatar.png")}
      resizeMode="contain"
      style={[styles.image, imageStyle || {}]}
    />
  );
}
