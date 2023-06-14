import { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from "react-native";
import DefaultScreenTitle from "../../components/screenTitles/DefaultScreenTitle";
import AddLocationButton from "../../components/buttons/AddLocationButton";
import Place from "../../components/common/Place";
import AddPlaceBottomSheet from "../../components/bottomSheets/AddPlaceBottomSheet";
import EditPlaceBottomSheet from "../../components/bottomSheets/EditPlaceBottomSheet";
import useLocale from "../../hooks/useLocale";
import NetworkStatusLine from "../../components/common/NetworkStatusLine";
import useScreen from "../../hooks/useScreen";
import useAuth from "../../auth/useAuth";
import * as usersApi from "../../api/user/users";
import PopupLoading from "../../components/popups/PopupLoading";

export default function SavedPlacesScreen({ navigation }) {
  const screen = useScreen();
  const { user, setUser } = useAuth();
  const { i18n, lang } = useLocale();
  const [place, setPlace] = useState(null);
  const [showAddPlaceSheet, setShowAddPlaceSheet] = useState(false);
  const [showEditPlaceSheet, setShowEditPlaceSheet] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: screen.getHorizontalPixelSize(15),
      paddingTop: screen.getVerticalPixelSize(50),
    },
    arHintText: {
      fontFamily: "cairo-600",
      fontSize: screen.getResponsiveFontSize(12),
      color: "#747474",
      marginTop: screen.getVerticalPixelSize(10),
      marginBottom: screen.getVerticalPixelSize(20),
      textAlign: "right",
    },
    enHintText: {
      fontFamily: "cairo-600",
      fontSize: screen.getResponsiveFontSize(12),
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

  const handleAddPlace = async (type, location) => {
    try {
      setShowAddPlaceSheet(false);
      setIsLoading(true);

      const body = {
        ...location,
        type,
      };

      const res = await usersApi.savePlace(body);
      const { savedPlaces } = res.data;
      setUser({ ...user, savedPlaces });
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };

  const handleEditPlace = async (placeId, type, location) => {
    try {
      setShowEditPlaceSheet(false);
      setPlace(null);
      setIsLoading(true);

      const { title, longitude, latitude } = location;

      const res = await usersApi.updatePlace(
        placeId,
        title,
        type,
        longitude,
        latitude
      );
      const { savedPlaces } = res.data;
      setUser({ ...user, savedPlaces });
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };

  const handleDeletePlace = async (placeId) => {
    try {
      setShowEditPlaceSheet(false);
      setPlace(null);
      setIsLoading(true);

      const res = await usersApi.deletePlace(placeId);
      const { savedPlaces } = res.data;
      setUser({ ...user, savedPlaces });
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <NetworkStatusLine />

      <PopupLoading visible={isLoading} />

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <DefaultScreenTitle title={i18n("savedPlaces")} onPrev={handleGoBack} />

        <Text style={lang === "ar" ? styles.arHintText : styles.enHintText}>
          {i18n("savedPlacesScreenHint")}
        </Text>

        {!!user?.savedPlaces?.length && (
          <View style={styles.placesContainer}>
            {user?.savedPlaces?.map?.((place, index) => (
              <Place
                key={index}
                place={place}
                onEdit={() => {
                  setPlace(place);
                  setShowEditPlaceSheet(true);
                }}
              />
            ))}

            <View style={styles.breakLine}></View>
          </View>
        )}

        <AddLocationButton
          text={i18n("addFavLocation")}
          onPress={() => {
            setPlace(null);
            setShowAddPlaceSheet(true);
          }}
        />
      </ScrollView>

      {showAddPlaceSheet && (
        <AddPlaceBottomSheet
          onClose={() => setShowAddPlaceSheet(false)}
          visible={showAddPlaceSheet}
          onAddPlace={handleAddPlace}
        />
      )}

      {!!place && showEditPlaceSheet && (
        <EditPlaceBottomSheet
          place={place}
          onClose={() => setShowEditPlaceSheet(false)}
          visible={!!place && showEditPlaceSheet}
          onEditPlace={handleEditPlace}
          onDeletePlace={handleDeletePlace}
        />
      )}
    </SafeAreaView>
  );
}
