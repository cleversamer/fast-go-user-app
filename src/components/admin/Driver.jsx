import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import useLocale from "../../hooks/useLocale";
import useDateTimer from "../../hooks/useDateTimer";
import useScreen from "../../hooks/useScreen";
import CircularButton from "../buttons/CircularButton";
import { Ionicons } from "@expo/vector-icons";
import CircularAvatar from "../common/CircularAvatar";

export default function Driver({ data, onCall, onPress }) {
  const screen = useScreen();
  const { i18n, lang } = useLocale();
  const { value: date } = useDateTimer(data.lastLogin, lang, [lang]);

  const styles = StyleSheet.create({
    container: {
      borderWidth: screen.getHorizontalPixelSize(1),
      borderColor: "#ababab",
      width: "100%",
      height: screen.getVerticalPixelSize(130),
      borderRadius: 8,
      justifyContent: "center",
    },
    arStatusContainer: {
      position: "absolute",
      top: 0,
      right: 0,
      backgroundColor: getStatusColor(),
      paddingVertical: screen.getVerticalPixelSize(3),
      paddingHorizontal: screen.getHorizontalPixelSize(5),
      borderTopRightRadius: 4,
      borderBottomLeftRadius: 6,
    },
    enStatusContainer: {
      position: "absolute",
      top: 0,
      left: 0,
      backgroundColor: getStatusColor(),
      paddingVertical: screen.getVerticalPixelSize(3),
      paddingHorizontal: screen.getHorizontalPixelSize(5),
      borderTopLeftRadius: 4,
      borderBottomRightRadius: 6,
    },
    statusText: {
      fontFamily: "cairo-700",
      fontSize: screen.getResponsiveFontSize(12),
      color: "#fff",
    },
    middleContainer: {
      flexDirection: lang === "ar" ? "row" : "row-reverse",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: screen.getHorizontalPixelSize(10),
    },
    callIcon: {
      color: "#fff",
      fontSize: screen.getResponsiveFontSize(30),
    },
    callButton: {
      width: screen.getHorizontalPixelSize(40),
      height: screen.getVerticalPixelSize(40),
    },
    infoContainer: {
      flexDirection: lang === "ar" ? "row" : "row-reverse",
      alignItems: "center",
      gap: screen.getHorizontalPixelSize(10),
    },
    driverName: {
      fontFamily: "cairo-700",
      fontSize: screen.getResponsiveFontSize(12),
    },
    avatar: {
      width: screen.getHorizontalPixelSize(40),
      height: screen.getVerticalPixelSize(40),
      borderWidth: screen.getHorizontalPixelSize(0.5),
      borderColor: "#ababab",
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

  function getStatusColor() {
    switch (data.status) {
      case "pending":
        return "#eed202";

      case "rejected":
        return "#f00";

      default:
        return "#eed202";
    }
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View
        style={
          lang === "ar" ? styles.arStatusContainer : styles.enStatusContainer
        }
      >
        <Text style={styles.statusText}>{i18n(data.status)}</Text>
      </View>

      <View style={styles.middleContainer}>
        <CircularButton
          Icon={() => <Ionicons name="call-outline" style={styles.callIcon} />}
          containerStyle={styles.callButton}
          onPress={onCall}
        />

        <View style={styles.infoContainer}>
          <Text style={styles.driverName}>
            {data.firstName} {data.lastName}
          </Text>
          <CircularAvatar url={data.avatarURL} imageStyle={styles.avatar} />
        </View>
      </View>

      <Text style={lang === "ar" ? styles.arDate : styles.enDate}>{date}</Text>
    </TouchableOpacity>
  );
}
