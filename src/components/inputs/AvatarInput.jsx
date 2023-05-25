import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as theme from "../../constants/theme";
import useScreen from "../../hooks/useScreen";

export default function AvatarInput({ value, onChange, containerStyles }) {
  const screen = useScreen();

  const styles = StyleSheet.create({
    avatarContainer: {
      alignSelf: "center",
      marginVertical: screen.getVerticalPixelSize(35),
      paddingVertical: screen.getVerticalPixelSize(1),
      paddingHorizontal: screen.getHorizontalPixelSize(1),
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
      top: -screen.getVerticalPixelSize(15),
      right: -screen.getHorizontalPixelSize(15),
      zIndex: 1,
      backgroundColor: theme.primaryColorLight,
      paddingHorizontal: screen.getHorizontalPixelSize(5),
      paddingVertical: screen.getHorizontalPixelSize(5),
      borderRadius: 50,
    },
    cameraIcon: {
      color: theme.primaryColor,
      fontSize: 24,
    },
    avatar: {
      backgroundColor: "#fff",
      paddingVertical: screen.getVerticalPixelSize(10),
      paddingHorizontal: screen.getHorizontalPixelSize(10),
      borderRadius: 8,
      width: screen.getHorizontalPixelSize(100),
      maxWidth: 120,
      height: screen.getHorizontalPixelSize(100),
      maxHeight: 120,
    },
  });

  return (
    <TouchableOpacity
      style={[styles.avatarContainer, containerStyles || {}]}
      onPress={onChange}
    >
      <TouchableOpacity style={styles.cameraIconContainer}>
        <FontAwesome name="camera" style={styles.cameraIcon} />
      </TouchableOpacity>

      <Image
        source={value || require("../../assets/images/avatar.png")}
        resizeMode="contain"
        style={styles.avatar}
      />
    </TouchableOpacity>
  );
}
