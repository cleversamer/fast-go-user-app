import { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import DefaultScreenTitle from "../../components/screenTitles/DefaultScreenTitle";
import ReservedTrip from "../../components/common/ReservedTrip";
import useLocale from "../../hooks/useLocale";
import NetworkStatusLine from "../../components/common/NetworkStatusLine";
import screens from "../../static/screens.json";
import useScreen from "../../hooks/useScreen";
import * as tripsApi from "../../api/user/trips";
import * as theme from "../../constants/theme";
import PopupLoading from "../../components/popups/PopupLoading";

const reservedTrips = [
  {
    carType: "luxury",
    from: "فلسطين,قطاع غزة, غزة, محافظة غزة, الزيتون, 890",
    to: "فلسطين,قطاع غزة, غزة, محافظة غزة, الصبرة, 200",
    price: 63.21,
    startDate: "2023-05-14T21:17:48.446Z",
    endDate: "2023-05-26T17:57:10.446Z",
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
  const screen = useScreen();
  const { i18n } = useLocale();
  const [trips, setTrips] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    tripsApi
      .getMyPassengerTrips(currentPage, 10)
      .then((res) => setTrips([...trips, ...res.data.trips]))
      .catch(() => {})
      .finally(() => setIsLoading(false));
  }, [currentPage]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: screen.getHorizontalPixelSize(15),
      paddingVertical: screen.getVerticalPixelSize(15),
      paddingTop: screen.getVerticalPixelSize(50),
    },
    tripsContainer: {
      gap: screen.getVerticalPixelSize(10),
      marginTop: screen.getVerticalPixelSize(20),
    },
    emptyTripsContainer: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: "center",
      alignItems: "center",
      gap: screen.getVerticalPixelSize(25),
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
  });

  const handleGoBack = () => {
    try {
      navigation.goBack();
    } catch (err) {}
  };

  const handleTripPress = (trip) => {
    try {
      navigation.navigate(screens.tripDetails);
    } catch (err) {}
  };

  const renderItem = ({ item }) => {
    return <ReservedTrip trip={item} onPress={() => handleTripPress(item)} />;
  };

  const renderLoader = () => {
    return isLoading ? (
      <ActivityIndicator size="large" color={theme.primaryColor} />
    ) : null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <NetworkStatusLine />

      <DefaultScreenTitle title={i18n("reservedTrips")} onPrev={handleGoBack} />

      <PopupLoading visible={currentPage === 1 && isLoading} />

      {!!trips.length && (
        <FlatList
          contentContainerStyle={styles.tripsContainer}
          data={trips}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
          onEndReached={() => setCurrentPage(currentPage + 1)}
          onEndReachedThreshold={0}
          scrollEnabled={true}
          ListFooterComponent={renderLoader}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      )}

      {!trips.length && (
        <View style={styles.emptyTripsContainer}>
          <Image
            source={require("../../assets/images/empty-trips.png")}
            resizeMode="contain"
            style={styles.emptyImage}
          />

          <Text style={styles.emptyText}>{i18n("noTrips")}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}
