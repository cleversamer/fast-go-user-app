import { StyleSheet, Image } from "react-native";

const defaultImage = require("../../assets/images/default-avatar.png");

export default function CircularAvatar({ url }) {
  return (
    <Image
      source={url || defaultImage}
      resizeMode="contain"
      style={styles.image}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
});
