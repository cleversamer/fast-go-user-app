import { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, View, Image, Text } from "react-native";
import useScreen from "../../hooks/useScreen";
import DefaultScreenTitle from "../../components/screenTitles/DefaultScreenTitle";
import useLocale from "../../hooks/useLocale";
import FilterItem from "../../components/common/FilterItem";
import { FlatList } from "react-native";
import Driver from "../../components/admin/Driver";
import screens from "../../static/screens.json";
import * as usersApi from "../../api/user/users";
import { ActivityIndicator } from "react-native";
import * as theme from "../../constants/theme";

export default function DriversScreen({ navigation }) {
  const screen = useScreen();
  const { i18n, lang } = useLocale();
  const [displayDrivers, setDisplayDrivers] = useState({
    list: [],
    loading: true,
  });
  const [query, setQuery] = useState({ page: 1, filter: "all" });

  useEffect(() => {
    if (!displayDrivers.loading) {
      setDisplayDrivers({ ...displayDrivers, loading: true });
    }

    const { filter, page } = query;
    usersApi
      .getAllDrivers(filter, page, 10)
      .then((res) => {
        setDisplayDrivers({
          list: res.data.inverifiedDrivers,
          loading: false,
        });
      })
      .catch(() => {
        setDisplayDrivers({
          list: [],
          loading: false,
        });
      });
  }, [query]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      gap: screen.getVerticalPixelSize(15),
      paddingHorizontal: screen.getHorizontalPixelSize(15),
      paddingVertical: screen.getVerticalPixelSize(15),
      paddingTop: screen.getVerticalPixelSize(50),
    },
    emptyDriversContainer: {
      marginTop: screen.getVerticalPixelSize(100),
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

  const getSelectFilterHandler = (filter) => () => {
    setQuery({
      ...query,
      filter,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <DefaultScreenTitle title={i18n("drivers")} onPrev={handleGoBack} />

      <View style={styles.filtersContainer}>
        <FilterItem
          title={i18n("all")}
          selected={query.filter === "all"}
          onSelect={getSelectFilterHandler("all")}
        />

        <FilterItem
          title={i18n("pending")}
          selected={query.filter === "pending"}
          onSelect={getSelectFilterHandler("pending")}
        />

        <FilterItem
          title={i18n("rejected")}
          selected={query.filter === "rejected"}
          onSelect={getSelectFilterHandler("rejected")}
        />
      </View>

      {displayDrivers.loading ? (
        <View style={styles.emptyDriversContainer}>
          <ActivityIndicator
            animating={true}
            size="large"
            color={theme.primaryColor}
          />
        </View>
      ) : displayDrivers.list.length ? (
        <FlatList
          contentContainerStyle={styles.driversList}
          data={displayDrivers.list}
          renderItem={({ item }) => (
            <Driver
              data={item}
              onCall={() => handleCall(item)}
              onPress={() =>
                navigation.navigate(screens.driverRequest, { driver: item })
              }
            />
          )}
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

          <Text style={styles.emptyText}>{i18n("noDrivers")}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}
