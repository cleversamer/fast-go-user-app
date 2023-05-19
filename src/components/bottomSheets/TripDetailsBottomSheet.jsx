import { StyleSheet, View, Text } from "react-native";
import StaticBottomSheet from "./StaticBottomSheet";
import useLocale from "../../hooks/useLocale";
import CircularAvatar from "../common/CircularAvatar";
import CircularButton from "../buttons/CircularButton";
import { Ionicons } from "@expo/vector-icons";

export default function TripDetailsBottomSheet({ driver, onCallDriver }) {
  const { i18n, lang } = useLocale();

  return (
    <StaticBottomSheet contentStyle={styles.container}>
      <View style={styles.avatarContainer}>
        <CircularAvatar url={driver?.avatarURL} />
        <Text style={styles.driverName}>{driver?.name || i18n("unknown")}</Text>
        <Text style={styles.driverCar}>{driver?.car || "Toyota"}</Text>
      </View>

      <View
        style={lang === "ar" ? styles.arInfoContainer : styles.enInfoContainer}
      >
        <View style={styles.statsContainer}>
          <Text style={styles.statsTitle}>100+</Text>
          <Text style={styles.statsSubtitle}>{i18n("totalTrips")}</Text>
        </View>

        <CircularButton
          Icon={() => <Ionicons name="call-outline" style={styles.callIcon} />}
          onPress={onCallDriver}
        />

        <View style={styles.statsContainer}>
          <Text style={styles.statsTitle}>6 أشهر</Text>
          <Text style={styles.statsSubtitle}>{i18n("beginningWork")}</Text>
        </View>
      </View>
    </StaticBottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 15,
    alignItems: "center",
  },
  avatarContainer: {
    alignItems: "center",
    gap: 7,
  },
  driverName: {
    fontFamily: "cairo-700",
    fontSize: 16,
  },
  driverCar: {
    fontFamily: "cairo-700",
    fontSize: 14,
    color: "#747474",
  },
  arInfoContainer: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  enInfoContainer: {
    alignSelf: "stretch",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statsContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    textAlign: "center",
    width: 100,
    marginTop: 20,
  },
  statsTitle: {
    fontFamily: "cairo-700",
    fontSize: 16,
    textAlign: "center",
  },
  statsSubtitle: {
    fontFamily: "cairo-500",
    fontSize: 12,
    color: "#747474",
    textAlign: "center",
    textTransform: "capitalize",
  },
  callIcon: {
    color: "#fff",
    fontSize: 30,
  },
});
