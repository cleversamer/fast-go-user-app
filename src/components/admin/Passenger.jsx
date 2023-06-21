import { StyleSheet, TouchableOpacity, Text, Image, View } from "react-native";
import useLocale from "../../hooks/useLocale";
import useDateTimer from "../../hooks/useDateTimer";
import useScreen from "../../hooks/useScreen";
import { Entypo, Feather } from "@expo/vector-icons";
import * as theme from "../../constants/theme";

export default function Passenger({ data: passenger }) {
  const screen = useScreen();
  const { i18n, lang } = useLocale();
  const { value: date } = useDateTimer(passenger.lastLogin, lang, [lang]);

  const styles = StyleSheet.create({
    container: {
      borderWidth: screen.getHorizontalPixelSize(1),
      borderColor: "#ababab",
      width: "100%",
      borderRadius: 8,
      justifyContent: "center",
      paddingHorizontal: screen.getHorizontalPixelSize(10),
      paddingVertical: screen.getVerticalPixelSize(15),
      paddingBottom: screen.getVerticalPixelSize(25),
      gap: screen.getVerticalPixelSize(7),
    },
    itemContainer: {
      flexDirection: lang === "ar" ? "row-reverse" : "row",

      alignItems: "center",
      gap: screen.getHorizontalPixelSize(7),
    },
    icon: {
      color: theme.primaryColor,
      fontSize: screen.getResponsiveFontSize(30),
    },
    avatar: {
      width: screen.getHorizontalPixelSize(30),
      height: screen.getHorizontalPixelSize(30),
      borderRadius: screen.getHorizontalPixelSize(100),
      borderWidth: screen.getHorizontalPixelSize(1),
      borderColor: "#ababab",
    },
    itemText: {
      fontFamily: "cairo-600",
      fontSize: screen.getResponsiveFontSize(14),
    },
    arDate: {
      position: "absolute",
      bottom: screen.getVerticalPixelSize(7),
      left: screen.getHorizontalPixelSize(7),
      fontSize: screen.getResponsiveFontSize(11),
      fontFamily: "cairo-400",
    },
    enDate: {
      position: "absolute",
      bottom: screen.getVerticalPixelSize(7),
      right: screen.getHorizontalPixelSize(7),
      fontSize: screen.getResponsiveFontSize(11),
      fontFamily: "cairo-400",
    },
  });

  const getImageSource = (url) => {
    return url
      ? { uri: url }
      : require("../../assets/images/default-avatar.png");
  };

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.itemContainer}>
        <Image
          source={getImageSource(passenger.avatarURL)}
          resizeMode="contain"
          style={styles.avatar}
        />
        <Text style={styles.itemText}>
          {passenger.firstName} {passenger.lastName}
        </Text>
      </View>

      <View style={styles.itemContainer}>
        <Entypo name="phone" style={styles.icon} />
        <Text style={styles.itemText}>{passenger.phone.full}</Text>
      </View>

      <View style={styles.itemContainer}>
        <Feather name="mail" style={styles.icon} />
        <Text style={styles.itemText}>
          {passenger.email || i18n("notSpecified")}
        </Text>
      </View>

      <Text style={lang === "ar" ? styles.arDate : styles.enDate}>{date}</Text>
    </TouchableOpacity>
  );
}
