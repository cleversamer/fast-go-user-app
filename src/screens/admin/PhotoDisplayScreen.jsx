import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import useScreen from "../../hooks/useScreen";
import { Feather } from "@expo/vector-icons";
import downloadFile from "../../utils/downloadFile";
import getCurrentDate from "../../utils/getCurrentDate";

export default function PhotoDisplayScreen({ route }) {
  const { source } = route.params;
  const screen = useScreen();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      gap: screen.getVerticalPixelSize(15),
      paddingVertical: screen.getVerticalPixelSize(15),
      paddingTop: screen.getVerticalPixelSize(50),
      backgroundColor: "#303030",
      justifyContent: "center",
    },
    topBarContainer: {
      position: "absolute",
      top: StatusBar.currentHeight * 2,
      left: screen.getHorizontalPixelSize(20),
      right: screen.getHorizontalPixelSize(20),
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    iconContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
    icon: {
      fontSize: screen.getResponsiveFontSize(42),
      color: "#fff",
    },
    image: {
      width: screen.getScreenWidth(),
      height: screen.getScreenWidth(),
    },
  });

  const downloadImage = async () => {
    try {
      const fileName = `FastGo_${getCurrentDate}_${Date.now()}.jpg`;
      await downloadFile(source.uri, fileName, "image/jpg");
    } catch (err) {}
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light" />

      <View style={styles.topBarContainer}>
        <View></View>

        <TouchableOpacity style={styles.iconContainer} onPress={downloadImage}>
          <Feather name="download" style={styles.icon} />
        </TouchableOpacity>
      </View>

      <Image source={source} resizeMode="contain" style={styles.image} />
    </SafeAreaView>
  );
}
