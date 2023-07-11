import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import * as theme from "../../constants/theme";
import useScreen from "../../hooks/useScreen";

export default function SquarePhotoInput({ title, value, onChange }) {
  const screen = useScreen();

  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      gap: screen.getVerticalPixelSize(7),
    },
    boxContainer: {
      backgroundColor: theme.primaryColor,
      width: screen.getHorizontalPixelSize(100),
      height: screen.getVerticalPixelSize(100),
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
    galleryIcon: {
      fontSize: screen.getResponsiveFontSize(56),
      color: "#fff",
    },
    cameraIconContainer: {
      position: "absolute",
      top: -screen.getVerticalPixelSize(10),
      right: -screen.getHorizontalPixelSize(10),
      zIndex: 1,
      backgroundColor: "#fff",
      borderWidth: screen.getHorizontalPixelSize(0.5),
      borderColor: "#B1B1B140",
      width: screen.getHorizontalPixelSize(36),
      height: screen.getVerticalPixelSize(36),
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 100,
    },
    cameraIcon: {
      color: theme.primaryColor,
      fontSize: screen.getResponsiveFontSize(20),
    },
    title: {
      fontFamily: "cairo-500",
      fontSize: screen.getResponsiveFontSize(13),
      color: "#747474",
    },
    avatar: {
      width: "100%",
      height: "100%",
      borderWidth: screen.getHorizontalPixelSize(0.5),
      borderColor: "#B1B1B190",
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.boxContainer} onPress={onChange}>
        <View style={styles.cameraIconContainer}>
          <FontAwesome name="camera" style={styles.cameraIcon} />
        </View>

        {value ? (
          <Image source={value} resizeMode="contain" style={styles.avatar} />
        ) : (
          <Ionicons name="image-sharp" style={styles.galleryIcon} />
        )}
      </TouchableOpacity>

      {!!title && <Text style={styles.title}>{title}</Text>}
    </View>
  );
}
