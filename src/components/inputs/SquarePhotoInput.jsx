import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import * as theme from "../../constants/theme";

export default function SquarePhotoInput() {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.cameraIconContainer}>
        <FontAwesome name="camera" style={styles.cameraIcon} />
      </View>

      <Ionicons name="image-sharp" style={styles.galleryIcon} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.primaryColor,
    width: 100,
    height: 100,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  galleryIcon: {
    fontSize: 56,
    color: "#fff",
  },
  cameraIconContainer: {
    position: "absolute",
    top: -10,
    right: -10,
    zIndex: 1,
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#B1B1B140",
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  cameraIcon: {
    color: theme.primaryColor,
    fontSize: 20,
  },
});
