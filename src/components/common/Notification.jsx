import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import * as theme from "../../constants/theme";
import useDateTimer from "../../hooks/useDateTimer";
import useLocale from "../../hooks/useLocale";
import useScreen from "../../hooks/useScreen";

export default function Notification({ notification, onPress }) {
  const screen = useScreen();
  const { lang } = useLocale();
  const { value: date } = useDateTimer(notification.date, lang, [lang]);

  const styles = StyleSheet.create({
    seenContainer: {
      gap: screen.getHorizontalPixelSize(15),
      borderWidth: screen.getHorizontalPixelSize(1.5),
      borderRadius: 8,
      paddingHorizontal: screen.getHorizontalPixelSize(10),
      paddingVertical: screen.getVerticalPixelSize(10),
      borderColor: theme.primaryColor,
    },
    unseenContainer: {
      gap: screen.getHorizontalPixelSize(15),
      borderWidth: screen.getHorizontalPixelSize(1.5),
      borderRadius: 8,
      paddingHorizontal: screen.getHorizontalPixelSize(10),
      paddingVertical: screen.getVerticalPixelSize(10),
      borderColor: "#929292",
    },
    arContainer: {
      flexDirection: "row",
      justifyContent: "flex-end",
    },
    enContainer: {
      flexDirection: "row-reverse",
      justifyContent: "flex-start",
    },
    infoContainer: {
      flex: 1,
      gap: screen.getVerticalPixelSize(12),
    },
    arTitle: {
      textAlign: "right",
      fontFamily: "cairo-700",
      fontSize: 12,
    },
    enTitle: {
      textAlign: "left",
      fontFamily: "cairo-700",
      fontSize: 12,
    },
    arBody: {
      textAlign: "right",
      fontFamily: "cairo-500",
      fontSize: 11,
    },
    enBody: {
      textAlign: "left",
      fontFamily: "cairo-500",
      fontSize: 11,
    },
    arDate: {
      alignSelf: "flex-start",
      textAlign: "left",
      fontFamily: "cairo-400",
      fontSize: 11,
    },
    enDate: {
      alignSelf: "flex-end",
      textAlign: "right",
      fontFamily: "cairo-400",
      fontSize: 11,
    },
    image: {
      width: screen.getHorizontalPixelSize(90),
      maxWidth: 90,
      height: screen.getHorizontalPixelSize(90),
      maxHeight: 90,
      alignSelf: "center",
    },
  });

  const getContainerStyles = () => {
    try {
      const themeStyle = notification.seen
        ? styles.seenContainer
        : styles.unseenContainer;

      const langStyle = lang === "ar" ? styles.arContainer : styles.enContainer;

      return [themeStyle, langStyle];
    } catch (err) {
      return [styles.unseenContainer, styles.arContainer];
    }
  };

  return (
    <TouchableOpacity style={getContainerStyles()} onPress={onPress}>
      <View style={styles.infoContainer}>
        <Text style={lang === "ar" ? styles.arTitle : styles.enTitle}>
          {notification.title[lang]}
        </Text>

        <Text style={lang === "ar" ? styles.arBody : styles.enBody}>
          {notification.body[lang]}
        </Text>

        <Text style={lang === "ar" ? styles.arDate : styles.enDate}>
          {date}
        </Text>
      </View>

      <Image
        source={
          notification.photoURL ||
          require("../../assets/images/notification.png")
        }
        resizeMode="contain"
        style={styles.image}
      />
    </TouchableOpacity>
  );
}
