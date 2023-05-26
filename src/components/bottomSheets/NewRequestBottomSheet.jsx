import { useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import StaticBottomSheet from "./StaticBottomSheet";
import useLocale from "../../hooks/useLocale";
import { EvilIcons } from "@expo/vector-icons";
import * as theme from "../../constants/theme";
import useTimer from "../../hooks/useTimer";
import CustomButton from "../../components/buttons/CustomButton";
import useScreen from "../../hooks/useScreen";

const defaultTrip = {
  carType: "luxury",
  from: "فلسطين,قطاع غزة, غزة, محافظة غزة, الزيتون, 890",
  to: "فلسطين,قطاع غزة, غزة, محافظة غزة, الصبرة, 200",
  price: 63.21,
  startDate: "2023-05-14T21:17:48.446Z",
  endDate: "2023-05-19T17:57:10.446Z",
};

export default function NewRequestBottomSheet({
  onTimerDone,
  trip = defaultTrip,
}) {
  const screen = useScreen();
  const { i18n, lang } = useLocale();
  const { remainingSeconds, isTimerDone } = useTimer(30);

  const styles = StyleSheet.create({
    container: {
      gap: screen.getVerticalPixelSize(20),
    },
    arTitle: {
      fontFamily: "cairo-700",
      fontSize: screen.getResponsiveFontSize(18),
      textAlign: "right",
    },
    enTitle: {
      fontFamily: "cairo-700",
      fontSize: screen.getResponsiveFontSize(18),
      textAlign: "left",
      textTransform: "capitalize",
    },
    arFromContainer: {
      flexDirection: "row",
      gap: screen.getHorizontalPixelSize(7),
      alignItems: "center",
    },
    enFromContainer: {
      flexDirection: "row-reverse",
      gap: screen.getHorizontalPixelSize(7),
      alignItems: "center",
    },
    arFromText: {
      textAlign: "right",
      fontFamily: "cairo-500",
      fontSize: screen.getResponsiveFontSize(12),
      flexWrap: "wrap",
      flex: 1,
    },
    enFromText: {
      textAlign: "left",
      fontFamily: "cairo-500",
      fontSize: screen.getResponsiveFontSize(12),
      flexWrap: "wrap",
      flex: 1,
    },
    arFromIcon: {
      width: screen.getHorizontalPixelSize(30),
      height: screen.getVerticalPixelSize(30),
      marginRight: screen.getHorizontalPixelSize(10),
    },
    enFromIcon: {
      width: screen.getHorizontalPixelSize(30),
      height: screen.getVerticalPixelSize(30),
      marginLeft: screen.getHorizontalPixelSize(10),
    },
    arToContainer: {
      flexDirection: "row",
      gap: screen.getHorizontalPixelSize(7),
      alignItems: "center",
    },
    enToContainer: {
      flexDirection: "row-reverse",
      gap: screen.getHorizontalPixelSize(7),
      alignItems: "center",
    },
    arToText: {
      textAlign: "right",
      fontFamily: "cairo-500",
      fontSize: screen.getResponsiveFontSize(11),
      flex: 1,
    },
    enToText: {
      textAlign: "left",
      fontFamily: "cairo-500",
      fontSize: screen.getResponsiveFontSize(11),
      flex: 1,
    },
    toIcon: {
      fontSize: screen.getResponsiveFontSize(40),
      color: theme.primaryColor,
    },
    timerText: {
      color: theme.primaryColor,
      fontFamily: "cairo-700",
      fontSize: screen.getResponsiveFontSize(32),
      alignSelf: "center",
    },
    arButtonsContainer: {
      flexDirection: "row-reverse",
      justifyContent: "space-around",
      alignItems: "center",
      gap: screen.getHorizontalPixelSize(15),
    },
    enButtonsContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      gap: screen.getHorizontalPixelSize(15),
    },
    approveButtonContainer: {
      flex: 1,
      borderWidth: screen.getHorizontalPixelSize(1.5),
      borderColor: theme.primaryColor,
    },
    approveButtonText: {
      fontFamily: "cairo-800",
      fontSize: screen.getResponsiveFontSize(18),
    },
    rejectButtonContainer: {
      flex: 1,
      backgroundColor: "#fff",
      borderWidth: screen.getHorizontalPixelSize(1.5),
      borderColor: theme.primaryColor,
    },
    rejectButtonText: {
      fontFamily: "cairo-800",
      fontSize: screen.getResponsiveFontSize(18),
      color: "#000",
    },
  });

  useEffect(() => {
    try {
      if (isTimerDone) {
        onTimerDone();
      }
    } catch (err) {}
  }, [isTimerDone]);

  return (
    <StaticBottomSheet contentStyle={styles.container}>
      <Text style={lang === "ar" ? styles.arTitle : styles.enTitle}>
        {i18n("newRequest")}
      </Text>

      <View
        style={lang === "ar" ? styles.arFromContainer : styles.enFromContainer}
      >
        <Text style={lang === "ar" ? styles.arFromText : styles.enFromText}>
          {trip.from}
        </Text>

        <Image
          source={require("../../assets/icons/start-point.png")}
          resizeMode="contain"
          style={lang === "ar" ? styles.arFromIcon : styles.enFromIcon}
        />
      </View>

      <View style={lang === "ar" ? styles.arToContainer : styles.enToContainer}>
        <Text style={lang === "ar" ? styles.arToText : styles.enToText}>
          {trip.to}
        </Text>
        <EvilIcons name="location" style={styles.toIcon} />
      </View>

      <Text style={styles.timerText}>{remainingSeconds}:00</Text>

      <View
        style={
          lang === "ar" ? styles.arButtonsContainer : styles.enButtonsContainer
        }
      >
        <CustomButton
          containerStyle={styles.approveButtonContainer}
          textStyle={styles.approveButtonText}
          text={i18n("approve")}
        />

        <CustomButton
          containerStyle={styles.rejectButtonContainer}
          textStyle={styles.rejectButtonText}
          text={i18n("reject")}
        />
      </View>
    </StaticBottomSheet>
  );
}
