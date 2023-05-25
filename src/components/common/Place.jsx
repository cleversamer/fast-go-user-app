import { TouchableOpacity, StyleSheet, Image, View, Text } from "react-native";
import useLocale from "../../hooks/useLocale";
import useScreen from "../../hooks/useScreen";

export default function Place({ place, onEdit }) {
  const screen = useScreen();
  const { i18n, lang } = useLocale();

  const styles = StyleSheet.create({
    arContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    enContainer: {
      flexDirection: "row-reverse",
      justifyContent: "space-between",
      alignItems: "center",
    },
    arContentContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      gap: screen.getHorizontalPixelSize(10),
    },
    enContentContainer: {
      flex: 1,
      flexDirection: "row-reverse",
      justifyContent: "flex-end",
      alignItems: "center",
      gap: screen.getHorizontalPixelSize(10),
    },
    arTextContentContainer: {
      gap: screen.getVerticalPixelSize(10),
      alignItems: "flex-end",
    },
    enTextContentContainer: {
      gap: screen.getVerticalPixelSize(10),
      alignItems: "flex-start",
    },
    arType: {
      fontFamily: "cairo-500",
      fontSize: 14,
      textAlign: "right",
    },
    enType: {
      fontFamily: "cairo-500",
      fontSize: 14,
      textAlign: "left",
      textTransform: "capitalize",
    },
    arTitle: {
      fontFamily: "cairo-500",
      fontSize: 11,
      color: "#747474",
      textAlign: "right",
    },
    enTitle: {
      fontFamily: "cairo-500",
      fontSize: 11,
      color: "#747474",
      textAlign: "left",
    },
    editIconImage: {
      width: screen.getHorizontalPixelSize(28),
      minHeight: screen.getHorizontalPixelSize(14),
      height: screen.getVerticalPixelSize(28),
    },
    placeIconImage: {
      width: screen.getHorizontalPixelSize(35),
      minHeight: screen.getHorizontalPixelSize(18),
      height: screen.getVerticalPixelSize(35),
    },
  });

  const getPlaceIcon = () => {
    try {
      switch (place.type) {
        case "cafe":
          return require("../../assets/icons/cafe-loc.png");

        case "club":
          return require("../../assets/icons/club-loc.png");

        case "family-home":
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

        default:
          return require("../../assets/icons/other-loc.png");
      }
    } catch (err) {
      return require("../../assets/icons/other-loc.png");
    }
  };

  return (
    <View style={lang === "ar" ? styles.arContainer : styles.enContainer}>
      <TouchableOpacity onPress={onEdit}>
        <Image
          source={require("../../assets/icons/edit.png")}
          resizeMode="contain"
          style={styles.editIconImage}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={
          lang === "ar" ? styles.arContentContainer : styles.enContentContainer
        }
      >
        <View
          style={
            lang === "ar"
              ? styles.arTextContentContainer
              : styles.enTextContentContainer
          }
        >
          <Text style={lang === "ar" ? styles.arType : styles.enType}>
            {i18n(place.type)}
          </Text>

          <Text style={lang === "ar" ? styles.arTitle : styles.enTitle}>
            {place.title}
          </Text>
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
