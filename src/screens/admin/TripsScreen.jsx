import { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, View, Image, Text } from "react-native";
import useScreen from "../../hooks/useScreen";
import DefaultScreenTitle from "../../components/screenTitles/DefaultScreenTitle";
import useLocale from "../../hooks/useLocale";
import FilterItem from "../../components/common/FilterItem";
import useAuth from "../../auth/useAuth";
import { FlatList } from "react-native";
import Trip from "../../components/common/Trip";

const _trips = [
  {
    carType: "luxury",
    from: "فلسطين,قطاع غزة, غزة, محافظة غزة, الزيتون, 890",
    to: "فلسطين,قطاع غزة, غزة, محافظة غزة, الصبرة, 200",
    price: 63.21,
    startDate: "2023-05-14T21:17:48.446Z",
    endDate: "2023-05-19T17:57:10.446Z",
    status: "active",
  },
  {
    carType: "women",
    from: "فلسطين,قطاع غزة, غزة, محافظة غزة, الزيتون, 890",
    to: "فلسطين,قطاع غزة, غزة, محافظة غزة, الصبرة, 200",
    price: 63.21,
    startDate: "2023-05-14T21:17:48.446Z",
    endDate: "2023-05-16T06:57:10.446Z",
    status: "reserved",
  },
  {
    carType: "commercial",
    from: "فلسطين,قطاع غزة, غزة, محافظة غزة, الزيتون, 890",
    to: "فلسطين,قطاع غزة, غزة, محافظة غزة, الصبرة, 200",
    price: 63.21,
    startDate: "2023-05-14T21:17:48.446Z",
    endDate: "2023-05-16T06:57:10.446Z",
    status: "rejected",
  },
  {
    carType: "luxury",
    from: "فلسطين,قطاع غزة, غزة, محافظة غزة, الزيتون, 890",
    to: "فلسطين,قطاع غزة, غزة, محافظة غزة, الصبرة, 200",
    price: 63.21,
    startDate: "2023-05-14T21:17:48.446Z",
    endDate: "2023-05-19T17:57:10.446Z",
    status: "active",
  },
  {
    carType: "women",
    from: "فلسطين,قطاع غزة, غزة, محافظة غزة, الزيتون, 890",
    to: "فلسطين,قطاع غزة, غزة, محافظة غزة, الصبرة, 200",
    price: 63.21,
    startDate: "2023-05-14T21:17:48.446Z",
    endDate: "2023-05-16T06:57:10.446Z",
    status: "reserved",
  },
  {
    carType: "commercial",
    from: "فلسطين,قطاع غزة, غزة, محافظة غزة, الزيتون, 890",
    to: "فلسطين,قطاع غزة, غزة, محافظة غزة, الصبرة, 200",
    price: 63.21,
    startDate: "2023-05-14T21:17:48.446Z",
    endDate: "2023-05-16T06:57:10.446Z",
    status: "rejected",
  },
];

export default function TripsScreen({ navigation }) {
  const screen = useScreen();
  const { i18n, lang } = useLocale();
  const { user } = useAuth();
  const [allTrips, setAllTrips] = useState(_trips);
  const [displayTrips, setDisplayTrips] = useState(allTrips);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    // TODO: fetch requests
    const newTrips =
      filter === "all"
        ? allTrips
        : allTrips.filter((trip) => trip.status === filter);
    setDisplayTrips(newTrips);
  }, [currentPage, filter]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      gap: screen.getVerticalPixelSize(15),
      paddingHorizontal: screen.getHorizontalPixelSize(15),
      paddingVertical: screen.getVerticalPixelSize(15),
      paddingTop: screen.getVerticalPixelSize(50),
    },
    emptyDriversContainer: {
      marginTop: -screen.getVerticalPixelSize(100),
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    emptyImage: {
      alignSelf: "center",
      width: screen.getHorizontalPixelSize(250),
      height: screen.getVerticalPixelSize(250),
    },
    emptyText: {
      fontFamily: "cairo-700",
      fontSize: screen.getResponsiveFontSize(15),
    },
    filtersContainer: {
      flexDirection: lang === "en" ? "row" : "row-reverse",
      gap: screen.getHorizontalPixelSize(7),
    },
    driversList: {
      alignItems: "stretch",
      gap: screen.getVerticalPixelSize(12),
      marginTop: screen.getVerticalPixelSize(15),
      paddingBottom: screen.getVerticalPixelSize(30),
    },
  });

  const handleGoBack = () => {
    try {
      navigation.goBack();
    } catch (err) {}
  };

  return (
    <SafeAreaView style={styles.container}>
      <DefaultScreenTitle title={i18n("requests")} onPrev={handleGoBack} />

      {!!displayTrips.length && (
        <View style={styles.filtersContainer}>
          <FilterItem
            title={i18n("all")}
            selected={filter === "all"}
            onSelect={() => setFilter("all")}
          />

          <FilterItem
            title={i18n("activeRequests")}
            selected={filter === "active"}
            onSelect={() => setFilter("active")}
          />

          <FilterItem
            title={i18n("reservedRequests")}
            selected={filter === "reserved"}
            onSelect={() => setFilter("reserved")}
          />

          <FilterItem
            title={i18n("rejectedRequests")}
            selected={filter === "rejected"}
            onSelect={() => setFilter("rejected")}
          />
        </View>
      )}

      {!!displayTrips.length && (
        <FlatList
          contentContainerStyle={styles.driversList}
          data={displayTrips}
          renderItem={({ item }) => <Trip trip={item} />}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      )}

      {!displayTrips.length && (
        <View style={styles.emptyDriversContainer}>
          <Image
            source={require("../../assets/images/no-drivers.png")}
            resizeMode="contain"
            style={styles.emptyImage}
          />

          <Text style={styles.emptyText}>{i18n("noRequests")}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}
