import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import * as theme from "../../constants/theme";
import useDateTimer from "../../hooks/useDateTimer";

export default function Notification({ notification }) {
  const { value: notificationDate } = useDateTimer(new Date(notification.date));

  return (
    <TouchableOpacity
      style={notification.seen ? styles.seenContainer : styles.unseenContainer}
    >
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{notification.title.ar}</Text>
        <Text style={styles.body}>{notification.body.ar}</Text>
        <Text style={styles.date}>{notificationDate}</Text>
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
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 15,
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: theme.primaryColor,
  },
  unseenContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 15,
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: "#929292",
  },
  infoContainer: {
    flex: 1,
    gap: 12,
  },
  title: {
    textAlign: "right",
    fontFamily: "cairo-700",
    fontSize: 12,
  },
  body: {
    textAlign: "right",
    fontFamily: "cairo-500",
    fontSize: 11,
  },
  date: {
    alignSelf: "flex-start",
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
