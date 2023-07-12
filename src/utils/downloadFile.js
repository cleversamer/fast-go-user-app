import { Platform } from "react-native";
import * as FileSystem from "expo-file-system";

export default async function downloadFile(
  fileURL,
  fileName = `${Date.now()}`,
  mimetype = "image/jpg"
) {
  try {
    const fileUri = FileSystem.documentDirectory + fileName;
    const result = await FileSystem.downloadAsync(fileURL, fileUri);
    await save(result.uri, fileName, mimetype);
  } catch (err) {}
}

async function save(uri, fileName, mimetype) {
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
          fileName,
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
}
