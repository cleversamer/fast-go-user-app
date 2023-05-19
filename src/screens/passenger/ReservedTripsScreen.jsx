import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
} from "react-native";
import DefaultScreenTitle from "../../components/screenTitles/DefaultScreenTitle";
import ReservedTrip from "../../components/common/ReservedTrip";
import useLocale from "../../hooks/useLocale";
import NetworkStatusLine from "../../components/common/NetworkStatusLine";

const reservedTrips = [
  {
    carType: "luxury",
    from: "فلسطين,قطاع غزة, غزة, محافظة غزة, الزيتون, 890",
    to: "فلسطين,قطاع غزة, غزة, محافظة غزة, الصبرة, 200",
    price: 63.21,
    startDate: "2023-05-14T21:17:48.446Z",
    endDate: "2023-05-19T17:57:10.446Z",
  },
  {
    carType: "women",
    from: "فلسطين,قطاع غزة, غزة, محافظة غزة, الزيتون, 890",
    to: "فلسطين,قطاع غزة, غزة, محافظة غزة, الصبرة, 200",
    price: 63.21,
    startDate: "2023-05-14T21:17:48.446Z",
    endDate: "2023-05-16T06:57:10.446Z",
  },
  {
    carType: "commercial",
    from: "فلسطين,قطاع غزة, غزة, محافظة غزة, الزيتون, 890",
    to: "فلسطين,قطاع غزة, غزة, محافظة غزة, الصبرة, 200",
    price: 63.21,
    startDate: "2023-05-14T21:17:48.446Z",
    endDate: "2023-05-16T06:57:10.446Z",
  },
  {
    carType: "luxury",
    from: "فلسطين,قطاع غزة, غزة, محافظة غزة, الزيتون, 890",
    to: "فلسطين,قطاع غزة, غزة, محافظة غزة, الصبرة, 200",
    price: 63.21,
    startDate: "2023-05-14T21:17:48.446Z",
    endDate: "2023-05-19T17:57:10.446Z",
  },
  {
    carType: "women",
    from: "فلسطين,قطاع غزة, غزة, محافظة غزة, الزيتون, 890",
    to: "فلسطين,قطاع غزة, غزة, محافظة غزة, الصبرة, 200",
    price: 63.21,
    startDate: "2023-05-14T21:17:48.446Z",
    endDate: "2023-05-16T06:57:10.446Z",
  },
  {
    carType: "commercial",
    from: "فلسطين,قطاع غزة, غزة, محافظة غزة, الزيتون, 890",
    to: "فلسطين,قطاع غزة, غزة, محافظة غزة, الصبرة, 200",
    price: 63.21,
    startDate: "2023-05-14T21:17:48.446Z",
    endDate: "2023-05-16T06:57:10.446Z",
  },
];

export default function ReservedTripsScreen({ navigation }) {
  const { i18n } = useLocale();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <NetworkStatusLine />

      <DefaultScreenTitle title={i18n("reservedTrips")} onPrev={handleGoBack} />

      {!!reservedTrips.length && (
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.tripsContainer}>
            {reservedTrips.map((trip, index) => (
              <ReservedTrip key={index} trip={trip} />
            ))}
          </View>
        </ScrollView>
      )}

      {!reservedTrips.length && (
        <View style={styles.emptyTripsContainer}>
          <Image
            source={require("../../assets/images/empty-trips.png")}
            resizeMode="contain"
            style={styles.emptyImage}
          />

          <Text style={styles.emptyText}>لا يوجد حجوزات قادمة</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 50,
  },
  tripsContainer: {
    flex: 1,
    gap: 10,
    marginTop: 20,
  },
  emptyTripsContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
  },
  emptyImage: {
    alignSelf: "center",
    width: 250,
    height: 250,
  },
  emptyText: {
    fontFamily: "cairo-700",
    fontSize: 15,
  },
});