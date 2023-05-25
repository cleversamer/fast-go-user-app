import { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from "react-native";
import DefaultScreenTitle from "../../components/screenTitles/DefaultScreenTitle";
import AddLocationButton from "../../components/buttons/AddLocationButton";
import Place from "../../components/common/Place";
import AddPlaceBottomSheet from "../../components/bottomSheets/AddPlaceBottomSheet";
import useLocale from "../../hooks/useLocale";
import NetworkStatusLine from "../../components/common/NetworkStatusLine";
import useScreen from "../../hooks/useScreen";

const _savedPlaces = [
  {
    type: "main",
    title: "فلسطين,قطاع غزة,غزة,محافظةغزةالزيتون,890",
  },
  {
    type: "work",
    title: "فلسطين,قطاع غزة,غزة,محافظةغزةالزيتون,890",
  },
  {
    type: "club",
    title: "فلسطين,قطاع غزة,غزة,محافظةغزةالزيتون,890",
  },
  {
    type: "cafe",
    title: "فلسطين,قطاع غزة,غزة,محافظةغزةالزيتون,890",
  },
  {
    type: "park",
    title: "فلسطين,قطاع غزة,غزة,محافظةغزةالزيتون,890",
  },
  {
    type: "family-home",
    title: "فلسطين,قطاع غزة,غزة,محافظةغزةالزيتون,890",
  },
  {
    type: "partners",
    title: "فلسطين,قطاع غزة,غزة,محافظةغزةالزيتون,890",
  },
  {
    type: "other",
    title: "فلسطين,قطاع غزة,غزة,محافظةغزةالزيتون,890",
  },
];

export default function SavedPlacesScreen({ navigation }) {
  const screen = useScreen();
  const { i18n, lang } = useLocale();
  const [locations, setLocations] = useState([]);
  const [place, setPlace] = useState({ type: "", title: "" });
  const [showSheet, setShowSheet] = useState(false);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: screen.getHorizontalPixelSize(15),
      paddingVertical: screen.getVerticalPixelSize(15),
      paddingTop: screen.getVerticalPixelSize(50),
    },
    arHintText: {
      fontFamily: "cairo-600",
      fontSize: 12,
      color: "#747474",
      marginTop: screen.getVerticalPixelSize(10),
      marginBottom: screen.getVerticalPixelSize(20),
      textAlign: "right",
    },
    enHintText: {
      fontFamily: "cairo-600",
      fontSize: 12,
      color: "#747474",
      marginTop: screen.getVerticalPixelSize(10),
      marginBottom: screen.getVerticalPixelSize(20),
      textAlign: "left",
    },
    placesContainer: {
      gap: screen.getVerticalPixelSize(20),
      marginBottom: screen.getVerticalPixelSize(15),
    },
    breakLine: {
      borderWidth: screen.getHorizontalPixelSize(0.5),
      borderColor: "#ababab",
      backgroundColor: "#ababab",
    },
  });

  const handleGoBack = () => {
    try {
      navigation.goBack();
    } catch (err) {}
  };

  const handleSelectLocation = (location) => {
    try {
      setLocations([location]);
    } catch (err) {}
  };

  const handleDeleteLocation = (markerLocation) => {
    try {
      const newLocations = locations.filter(
        (location) =>
          location.latitude !== markerLocation.latitude &&
          location.longitude !== markerLocation.longitude
      );

      setLocations(newLocations);
    } catch (err) {}
  };

  return (
    <SafeAreaView style={styles.container}>
      <NetworkStatusLine />

      <ScrollView>
        <DefaultScreenTitle title={i18n("savedPlaces")} onPrev={handleGoBack} />

        <Text style={lang === "ar" ? styles.arHintText : styles.enHintText}>
          {i18n("savedPlacesScreenHint")}
        </Text>

        {!!_savedPlaces.length && (
          <View style={styles.placesContainer}>
            {_savedPlaces.map((place, index) => (
              <Place
                key={index}
                place={place}
                onEdit={() => setShowSheet(true)}
              />
            ))}

            <View style={styles.breakLine}></View>
          </View>
        )}

        <AddLocationButton
          text={i18n("addFavLocation")}
          onPress={() => setShowSheet(true)}
        />
      </ScrollView>

      <AddPlaceBottomSheet
        onClose={() => setShowSheet(false)}
        visible={showSheet}
        place={place}
        locations={locations}
        onMarkerPress={handleDeleteLocation}
        onSelectLocation={handleSelectLocation}
      />
    </SafeAreaView>
  );
}
