import { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import useLocale from "../../hooks/useLocale";
import useScreen from "../../hooks/useScreen";
import * as theme from "../../constants/theme";

import AdminHomeScreenTitle from "../../components/screenTitles/AdminHomeScreenTitle";
import GoogleMap from "../../components/common/GoogleMap";
import StatsCard from "../../components/admin/StatsCard";
import useAuth from "../../auth/useAuth";
import Driver from "../../components/admin/Driver";
import screens from "../../static/screens.json";

export default function AdminHomeSceen({ navigation }) {
  const { user } = useAuth();
  const screen = useScreen();
  const { i18n, lang } = useLocale();
  const [statsCards, setStatsCards] = useState([
    { title: "pendingDrivers", value: 10, iconName: "timer-sand" },
    { title: "activeDrivers", value: 10, iconName: "taxi" },
    { title: "approvedDrivers", value: 10, iconName: "taxi" },
    { title: "noOfTrips", value: 10, iconName: "file-document-outline" },
  ]);
  const [pendingDrivers, setPendingDrivers] = useState([
    { ...user, status: "pending" },
    { ...user, status: "rejected" },
    { ...user, status: "pending" },
    { ...user, status: "rejected" },
    { ...user, status: "pending" },
    { ...user, status: "rejected" },
    { ...user, status: "pending" },
    { ...user, status: "rejected" },
  ]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingHorizontal: screen.getHorizontalPixelSize(10),
      gap: screen.getVerticalPixelSize(20),
    },
    contentContainer: {
      flex: 1,
      backgroundColor: "#fff",
      gap: screen.getVerticalPixelSize(20),
    },
    header: {
      height: screen.getVerticalPixelSize(100),
      backgroundColor: "#fff",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    cardsContainer: {
      maxHeight: screen.getVerticalPixelSize(100),
    },
    cardsContentContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: screen.getHorizontalPixelSize(12),
      maxHeight: screen.getVerticalPixelSize(100),
    },
    mapContainer: {
      minHeight: screen.getScreenHeight() * 0.45,
      maxHeight: screen.getVerticalPixelSize(400),
      alignSelf: "center",
    },
    pendingDriversContainer: {
      flex: 1,
      gap: screen.getHorizontalPixelSize(12),
    },
    pendingDriversTopContainer: {
      flexDirection: lang === "ar" ? "row" : "row-reverse",
      alignItems: "center",
      justifyContent: "space-between",
    },
    morePendingDriversContainer: {
      flexDirection: lang === "ar" ? "row" : "row-reverse",
      alignItems: "center",
    },
    arrowIcon: {
      fontSize: screen.getResponsiveFontSize(14),
      color: theme.primaryColor,
    },
    morePendingDriversTitle: {
      fontFamily: "cairo-800",
      fontSize: screen.getResponsiveFontSize(12),
      color: theme.primaryColor,
      textAlign: lang === "ar" ? "right" : "left",
      textTransform: "capitalize",
    },
    pendingDriversTitleContainer: {
      flexDirection: lang === "ar" ? "row" : "row-reverse",
      alignItems: "center",
      gap: screen.getHorizontalPixelSize(7),
    },
    pendingDriversTitle: {
      fontFamily: "cairo-800",
      fontSize: screen.getResponsiveFontSize(16),
      color: "#000",
      textAlign: lang === "ar" ? "right" : "left",
      textTransform: "capitalize",
    },
    timerIcon: {
      fontSize: screen.getResponsiveFontSize(32),
      color: theme.primaryColor,
    },
    driversContainer: {
      maxHeight: screen.getVerticalPixelSize(130),
    },
    driversContentContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: screen.getHorizontalPixelSize(12),
      maxHeight: screen.getVerticalPixelSize(130),
    },
    driverContainer: {
      width: screen.getHorizontalPixelSize(240),
    },
  });

  const handleOpenDrawer = () => {
    try {
      navigation.openDrawer();
    } catch (err) {}
  };

  const handleMoreDrivers = () => {
    try {
      navigation.navigate(screens.drivers);
    } catch (err) {}
  };

  const handleCallDriver = (driver) => {
    try {
      navigation.navigate(screens.call, { receiver: driver });
    } catch (err) {}
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <AdminHomeScreenTitle
          title={i18n("mainScreen")}
          onOpenDrawer={handleOpenDrawer}
        />
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <FlatList
          style={styles.cardsContainer}
          contentContainerStyle={styles.cardsContentContainer}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          scrollEnabled
          scrollToOverflowEnabled
          alwaysBounceHorizontal
          horizontal
          data={statsCards}
          renderItem={({ item }) => <StatsCard item={item} />}
          keyExtractor={(item, index) => index}
        />

        <GoogleMap containerStyles={styles.mapContainer} />

        <View style={styles.pendingDriversContainer}>
          <View style={styles.pendingDriversTopContainer}>
            <TouchableOpacity
              style={styles.morePendingDriversContainer}
              onPress={handleMoreDrivers}
            >
              <MaterialIcons
                name={lang === "ar" ? "arrow-back-ios" : "arrow-forward-ios"}
                style={styles.arrowIcon}
              />

              <Text style={styles.morePendingDriversTitle}>{i18n("more")}</Text>
            </TouchableOpacity>

            <View style={styles.pendingDriversTitleContainer}>
              <Text style={styles.pendingDriversTitle}>
                {i18n("pendingDrivers")}
              </Text>

              <MaterialCommunityIcons
                name="timer-sand"
                style={styles.timerIcon}
              />
            </View>
          </View>

          <FlatList
            style={styles.driversContainer}
            contentContainerStyle={styles.driversContentContainer}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            scrollEnabled
            scrollToOverflowEnabled
            alwaysBounceHorizontal
            horizontal
            data={pendingDrivers}
            renderItem={({ item }) => (
              <Driver
                data={item}
                containerStyle={styles.driverContainer}
                onCall={() => handleCallDriver(item)}
                onPress={() =>
                  navigation.navigate(screens.driverRequest, { driver: item })
                }
              />
            )}
            keyExtractor={(item, index) => item._id + index}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
