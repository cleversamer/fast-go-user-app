import { launchImageLibraryAsync, MediaTypeOptions } from "expo-image-picker";

export const pickImage = async () => {
  try {
    let result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      allowsMultipleSelection: false,
      base64: true,
    });

    if (!result.canceled) {
      // Do something with the selected image URI
      return result?.assets?.[0] || null;
    } else {
      return null;
    }
  } catch (err) {
    return null;
  }
};

export default {
  pickImage,
};
