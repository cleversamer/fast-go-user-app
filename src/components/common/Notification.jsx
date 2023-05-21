import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import * as theme from "../../constants/theme";
import useDateTimer from "../../hooks/useDateTimer";
import useLocale from "../../hooks/useLocale";

export default function Notification({ notification, onPress }) {
  const { lang } = useLocale();
  const { value: notificationDate } = useDateTimer(
    new Date(notification.date),
    lang,
    [lang]
  );

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
          {notificationDate}
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

const styles = StyleSheet.create({
  seenContainer: {
    gap: 15,
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: theme.primaryColor,
  },
  unseenContainer: {
    gap: 15,
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
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
    gap: 12,
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
    width: 90,
    height: 90,
    alignSelf: "center",
  },
});
