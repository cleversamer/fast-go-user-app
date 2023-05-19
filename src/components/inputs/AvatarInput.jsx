import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as theme from "../../constants/theme";

export default function AvatarInput({ value, onChange, containerStyles }) {
  return (
    <TouchableOpacity
      style={[styles.avatarContainer, containerStyles || {}]}
      onPress={onChange}
    >
      <TouchableOpacity style={styles.cameraIconContainer}>
        <FontAwesome name="camera" style={styles.cameraIcon} />
      </TouchableOpacity>

      <Image
        source={require("../../assets/images/avatar.png")}
        resizeMode="contain"
        style={styles.avatar}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  avatarContainer: {
    alignSelf: "center",
    marginVertical: 35,
    padding: 1,
    borderColor: "#929292",
    shadowColor: "#929292",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.21,
    shadowRadius: 6.65,
    elevation: 9,
  },
  cameraIconContainer: {
    position: "absolute",
    top: -10,
    right: -10,
    zIndex: 1,
  },
  cameraIcon: {
    color: theme.primaryColor,
    fontSize: 24,
  },
  avatar: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    width: 100,
    height: 100,
  },
});
