import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import * as theme from "../../constants/theme";
import useDateTimer from "../../hooks/useDateTimer";

export default function Trip({ trip }) {
  const { value: tripDate } = useDateTimer(trip.endDate);

  const isActiveTrip = () => {
    const endDate = new Date(trip.endDate);
    return new Date() <= endDate;
  };

  const getContainerStyles = () => {
    return isActiveTrip() ? styles.activeContainer : styles.inactiveContainer;
  };

  return (
    <TouchableOpacity style={getContainerStyles()}>
      <View style={styles.infoContainer}>
        <View style={styles.carTypeContainer}>
          <Text style={styles.carTypeText}>سيارة فاخرة</Text>
          <Image
            source={require("")}
            resizeMode="contain"
            style={styles.carTypeImage}
          />
        </View>

        <View style={styles.fromContainer}>
          <Text style={styles.fromText}>{trip.from}</Text>
        </View>

        <View style={styles.toContainer}>
          <Text style={styles.toText}>{trip.to}</Text>
        </View>

        <Text style={isActiveTrip() ? styles.happeningNow : styles.date}>
          {tripDate || "جاري الآن"}
        </Text>
      </View>

      <Image
        source={require("../../assets/images/trip.png")}
        resizeMode="contain"
        style={styles.image}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  activeContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 15,
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: theme.primaryColor,
  },
  inactiveContainer: {
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
  carTypeContainer: {},
  carTypeText: {},
  carTypeImage: {},
  fromContainer: {},
  fromText: {
    textAlign: "right",
    fontFamily: "cairo-700",
    fontSize: 12,
  },
  toContainer: {},
  toText: {
    textAlign: "right",
    fontFamily: "cairo-500",
    fontSize: 11,
  },
  happeningNow: {
    alignSelf: "flex-start",
    textAlign: "right",
    fontFamily: "cairo-800",
    color: theme.primaryColor,
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
