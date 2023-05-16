import { TouchableOpacity, StyleSheet, Image, View, Text } from "react-native";
import useLocale from "../../hooks/useLocale";

export default function Place({ place, onEdit }) {
  const { i18n } = useLocale();

  const getPlaceIcon = () => {
    switch (place.type) {
      case "cafe":
        return require("../../assets/icons/cafe-loc.png");

      case "club":
        return require("../../assets/icons/club-loc.png");

      case "family home":
        return require("../../assets/icons/family-home-loc.png");

      case "main":
        return require("../../assets/icons/main-loc.png");

      case "other":
        return require("../../assets/icons/other-loc.png");

      case "park":
        return require("../../assets/icons/park-loc.png");

      case "partners":
        return require("../../assets/icons/partners-loc.png");

      case "work":
        return require("../../assets/icons/work-loc.png");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onEdit}>
        <Image
          source={require("../../assets/icons/edit.png")}
          resizeMode="contain"
          style={styles.editIconImage}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.contentContainer}>
        <View style={styles.textContentContainer}>
          <Text style={styles.type}>{i18n(place.type)}</Text>
          <Text style={styles.title}>{place.title}</Text>
        </View>

        <Image
          source={getPlaceIcon()}
          resizeMode="contain"
          style={styles.placeIconImage}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 10,
  },
  textContentContainer: {
    gap: 10,
    alignItems: "flex-end",
  },
  type: {
    fontFamily: "cairo-500",
    fontSize: 14,
  },
  title: {
    fontFamily: "cairo-500",
    fontSize: 11,
    color: "#747474",
  },
  editIconImage: {
    width: 28,
    height: 28,
  },
  placeIconImage: {
    width: 35,
    height: 35,
  },
});
