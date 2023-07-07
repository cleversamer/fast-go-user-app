import { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  ActivityIndicator,
} from "react-native";
import useScreen from "../../hooks/useScreen";
import DefaultScreenTitle from "../../components/screenTitles/DefaultScreenTitle";
import useLocale from "../../hooks/useLocale";
import { FlatList } from "react-native";
import Passenger from "../../components/admin/Passenger";
import * as usersApi from "../../api/user/users";
import * as theme from "../../constants/theme";

export default function PassengersScreen({ navigation }) {
  const screen = useScreen();
  const { i18n, lang } = useLocale();
  const [passengers, setPassengers] = useState({ list: [], loading: true });
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    usersApi
      .getAllPassengers(currentPage, 10)
      .then((res) => {
        setPassengers({ list: res.data.passengers, loading: false });
      })
      .catch(() => {
        setPassengers({ list: [], loading: false });
      });
  }, [currentPage]);

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
      gap: screen.getHorizontalPixelSize(15),
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
      <DefaultScreenTitle title={i18n("passengers")} onPrev={handleGoBack} />

      {passengers.loading ? (
        <View style={styles.emptyDriversContainer}>
          <ActivityIndicator
            animating={true}
            size="large"
            color={theme.primaryColor}
          />
        </View>
      ) : passengers.list.length ? (
        <FlatList
          contentContainerStyle={styles.driversList}
          data={passengers.list}
          renderItem={({ item }) => <Passenger data={item} />}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={styles.emptyDriversContainer}>
          <Image
            source={require("../../assets/images/no-drivers.png")}
            resizeMode="contain"
            style={styles.emptyImage}
          />

          <Text style={styles.emptyText}>{i18n("noPassengers")}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}
