import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import useScreen from "../../hooks/useScreen";
import { Entypo, Feather } from "@expo/vector-icons";
import * as FileSystem from "expo-file-system";
import { shareAsync } from "expo-sharing";

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

  const handleShare = () => {};

  const getCurrentDate = () => {
    try {
      const date = new Date();

      // Get day, month, and year values
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
      const year = String(date.getFullYear());

      // Format the date as "DD-MM-YYYY"
      const formattedDate = `${day}-${month}-${year}`;

      return formattedDate;
    } catch (err) {
      return Date.now();
    }
  };

  const downloadImage = async () => {
    try {
      const filename = `FastGo_${getCurrentDate}_${Date.now()}.jpg`;
      const result = await FileSystem.downloadAsync(
        source.uri,
        FileSystem.documentDirectory + filename
      );

      await save(result.uri, filename, result.headers["Content-Type"]);
    } catch (err) {}
  };

  const save = async (uri, filename, mimetype) => {
    try {
      if (Platform.OS === "android") {
        const permissions =
          await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();

        if (permissions.granted) {
          const base64 = await FileSystem.readAsStringAsync(uri, {
            encoding: FileSystem.EncodingType.Base64,
          });

          await FileSystem.StorageAccessFramework.createFileAsync(
            permissions.directoryUri,
            filename,
            mimetype
          )
            .then(async (uri) => {
              try {
                await FileSystem.writeAsStringAsync(uri, base64, {
                  encoding: FileSystem.EncodingType.Base64,
                });
              } catch (err) {}
            })
            .catch(() => {});
        } else {
          shareAsync(uri);
        }
      } else {
        shareAsync(uri);
      }
    } catch (err) {}
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light" />

      <View style={styles.topBarContainer}>
        {/* <TouchableOpacity style={styles.iconContainer}>
          <Entypo name="share" style={styles.icon} />
        </TouchableOpacity> */}
        <View></View>

        <TouchableOpacity style={styles.iconContainer} onPress={downloadImage}>
          <Feather name="download" style={styles.icon} />
        </TouchableOpacity>
      </View>

      <Image source={source} resizeMode="contain" style={styles.image} />
    </SafeAreaView>
  );
}
