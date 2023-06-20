import { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, View, Image, Text } from "react-native";
import useScreen from "../../hooks/useScreen";
import DefaultScreenTitle from "../../components/screenTitles/DefaultScreenTitle";
import useLocale from "../../hooks/useLocale";
import FilterItem from "../../components/common/FilterItem";
import useAuth from "../../auth/useAuth";
import { FlatList } from "react-native";
import Driver from "../../components/admin/Driver";
import screens from "../../static/screens.json";

export default function DriversScreen({ navigation }) {
  const screen = useScreen();
  const { i18n, lang } = useLocale();
  const { user } = useAuth();
  const [drivers, setDrivers] = useState([
    { ...user, status: "pending" },
    { ...user, status: "rejected" },
    { ...user, status: "pending" },
    { ...user, status: "rejected" },
    { ...user, status: "pending" },
    { ...user, status: "rejected" },
    { ...user, status: "pending" },
    { ...user, status: "rejected" },
  ]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    // TODO: fetch pending and rejected drivers
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

  const handleCall = (driver) => {
    try {
      navigation.navigate(screens.call, { receiver: driver });
    } catch (err) {}
  };

  return (
    <SafeAreaView style={styles.container}>
      <DefaultScreenTitle title={i18n("drivers")} onPrev={handleGoBack} />

      {!!drivers.length && (
        <View style={styles.filtersContainer}>
          <FilterItem
            title={i18n("all")}
            selected={filter === "all"}
            onSelect={() => setFilter("all")}
          />

          <FilterItem
            title={i18n("pending")}
            selected={filter === "pending"}
            onSelect={() => setFilter("pending")}
          />

          <FilterItem
            title={i18n("rejected")}
            selected={filter === "rejected"}
            onSelect={() => setFilter("rejected")}
          />
        </View>
      )}

      {!!drivers.length && (
        <FlatList
          contentContainerStyle={styles.driversList}
          data={drivers}
          renderItem={({ item }) => (
            <Driver data={item} onCall={() => handleCall(item)} />
          )}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      )}

      {!drivers.length && (
        <View style={styles.emptyDriversContainer}>
          <Image
            source={require("../../assets/images/no-drivers.png")}
            resizeMode="contain"
            style={styles.emptyImage}
          />

          <Text style={styles.emptyText}>{i18n("noDrivers")}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}
