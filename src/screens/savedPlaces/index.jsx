import { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from "react-native";
import ScreenTitle from "../../components/screenTitle";
import AddLocation from "../../components/addLocation";
import Place from "../../components/place";
import AddPlaceBottomSheet from "../../components/addPlaceBottomSheet";
import useLocale from "../../hooks/useLocale";

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
  const { i18n, lang } = useLocale();
  const [locations, setLocations] = useState([]);
  const [place, setPlace] = useState({ type: "", title: "" });
  const [showSheet, setShowSheet] = useState(false);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSelectLocation = (location) => {
    setLocations([location]);
  };

  const handleDeleteLocation = (markerLocation) => {
    const newLocations = locations.filter(
      (location) =>
        location.latitude !== markerLocation.latitude &&
        location.longitude !== markerLocation.longitude
    );

    setLocations(newLocations);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ScreenTitle title={i18n("savedPlaces")} onPrev={handleGoBack} />

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

        <AddLocation
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 50,
  },
  arHintText: {
    fontFamily: "cairo-600",
    fontSize: 12,
    color: "#747474",
    marginTop: 10,
    marginBottom: 20,
    textAlign: "right",
  },
  enHintText: {
    fontFamily: "cairo-600",
    fontSize: 12,
    color: "#747474",
    marginTop: 10,
    marginBottom: 20,
    textAlign: "left",
  },
  placesContainer: {
    gap: 20,
    marginBottom: 15,
  },
  breakLine: {
    borderWidth: 0.5,
    borderColor: "#ababab",
    backgroundColor: "#ababab",
  },
});
