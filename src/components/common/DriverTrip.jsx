import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import * as theme from "../../constants/theme";
import useDateTimer from "../../hooks/useDateTimer";
import useLocale from "../../hooks/useLocale";

export default function DriverTrip({ trip, onPress }) {
  const { i18n, lang } = useLocale();
  const { value: tripDate } = useDateTimer(trip.endDate, lang, [lang]);

  const isActiveTrip = () => {
    try {
      const endDate = new Date(trip.endDate);
      return new Date() <= endDate;
    } catch (err) {
      return false;
    }
  };

  const getContainerStyles = () => {
    try {
      const themeStyle = isActiveTrip()
        ? styles.activeContainer
        : styles.inactiveContainer;

      const languageStyle =
        lang === "ar" ? styles.arContainer : styles.enContainer;

      return [themeStyle, languageStyle];
    } catch (err) {
      return [styles.inactiveContainer, styles.arContainer];
    }
  };

  const getDateStyles = () => {
    try {
      const themeStyle = isActiveTrip() ? styles.happeningNow : styles.date;
      const languageStyle = lang === "ar" ? styles.arDate : styles.enDate;
      return [themeStyle, languageStyle];
    } catch (err) {
      return [styles.date, styles.arDate];
    }
  };

  const getCarTypeIcon = () => {
    try {
      switch (trip.carType) {
        case "luxury":
          return require("../../assets/images/luxury-car.png");

        case "women":
          return require("../../assets/images/women-car.png");

        case "commercial":
          return require("../../assets/images/commercial-car.png");

        default:
          return require("../../assets/images/luxury-car.png");
      }
    } catch (err) {
      return require("../../assets/images/luxury-car.png");
    }
  };

  return (
    <TouchableOpacity style={getContainerStyles()} onPress={onPress}>
      <View
        style={
          lang === "ar" ? styles.arPriceContainer : styles.enPriceContainer
        }
      >
        <Text style={styles.priceText}>{trip.price} LYD</Text>
      </View>

      <View style={styles.infoContainer}>
        <View
          style={
            lang === "ar"
              ? styles.arCarTypeContainer
              : styles.enCarTypeContainer
          }
        >
          <Text style={styles.carTypeText}>{i18n(trip.carType)}</Text>

          <Image
            source={getCarTypeIcon()}
            resizeMode="contain"
            style={styles.carTypeImage}
          />
        </View>

        <View
          style={
            lang === "ar" ? styles.arFromContainer : styles.enFromContainer
          }
        >
          <Text style={lang === "ar" ? styles.arFromText : styles.enFromText}>
            {trip.from}
          </Text>

          <Image
            source={require("../../assets/icons/start-point.png")}
            resizeMode="contain"
            style={styles.fromIcon}
          />
        </View>

        <View
          style={lang === "ar" ? styles.arToContainer : styles.enToContainer}
        >
          <Text style={lang === "ar" ? styles.arToText : styles.enToText}>
            {trip.to}
          </Text>
          <EvilIcons name="location" style={styles.toIcon} />
        </View>

        <Text style={getDateStyles()}>{tripDate || i18n("happeningNow")}</Text>
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
    gap: 15,
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: theme.primaryColor,
  },
  inactiveContainer: {
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
    justifyContent: "flex-end",
  },
  arPriceContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: theme.primaryColor,
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderTopLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  enPriceContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: theme.primaryColor,
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
  },
  priceText: {
    fontFamily: "cairo-700",
    fontSize: 12,
    color: "#fff",
  },
  infoContainer: {
    flex: 1,
    gap: 12,
  },
  arCarTypeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  enCarTypeContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  carTypeText: {
    fontFamily: "cairo-700",
    fontSize: 16,
    textTransform: "capitalize",
  },
  carTypeImage: {
    width: 30,
    height: 30,
  },
  arFromContainer: {
    flexDirection: "row",
    gap: 7,
    alignItems: "center",
  },
  enFromContainer: {
    flexDirection: "row-reverse",
    gap: 7,
    alignItems: "center",
  },
  arFromText: {
    textAlign: "right",
    fontFamily: "cairo-500",
    fontSize: 12,
    flexWrap: "wrap",
    flex: 1,
  },
  enFromText: {
    textAlign: "left",
    fontFamily: "cairo-500",
    fontSize: 12,
    flexWrap: "wrap",
    flex: 1,
  },
  fromIcon: {
    width: 30,
    height: 30,
  },
  arToContainer: {
    flexDirection: "row",
    gap: 7,
    alignItems: "center",
  },
  enToContainer: {
    flexDirection: "row-reverse",
    gap: 7,
    alignItems: "center",
  },
  arToText: {
    textAlign: "right",
    fontFamily: "cairo-500",
    fontSize: 11,
    flex: 1,
  },
  enToText: {
    textAlign: "left",
    fontFamily: "cairo-500",
    fontSize: 11,
    flex: 1,
  },
  toIcon: {
    fontSize: 40,
    color: theme.primaryColor,
  },
  happeningNow: {
    fontFamily: "cairo-800",
    color: theme.primaryColor,
    fontSize: 11,
  },
  date: {
    fontFamily: "cairo-400",
    fontSize: 11,
  },
  arDate: {
    alignSelf: "flex-start",
    textAlign: "right",
  },
  enDate: {
    alignSelf: "flex-end",
    textAlign: "right",
  },
  image: {
    width: 80,
    height: 80,
    alignSelf: "center",
  },
});
