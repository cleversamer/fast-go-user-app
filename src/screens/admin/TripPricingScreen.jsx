import { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import useScreen from "../../hooks/useScreen";
import DefaultScreenTitle from "../../components/screenTitles/DefaultScreenTitle";
import useLocale from "../../hooks/useLocale";
import { FontAwesome } from "@expo/vector-icons";
import * as theme from "../../constants/theme";
import SelectInput from "../../components/inputs/SelectInput";
import InputIcon from "../../components/inputs/InputIcon";
import CustomButton from "../../components/buttons/CustomButton";
import data from "../../static/data.json";
import * as tripPricingsApi from "../../api/user/tripPricings";
import PopupLoading from "../../components/popups/PopupLoading";
import PopupError from "../../components/popups/PopupError";

export default function TripPricingScreen({ navigation }) {
  const screen = useScreen();
  const { i18n, lang } = useLocale();
  const [carType, setCarType] = useState("commercial");
  const [distance, setDistance] = useState("0-10");
  const [pricePerKm, setPricePerKm] = useState(0);
  const [doorOpeningPrice, setDoorOpeningPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!loading) {
      setLoading(true);
    }

    const distanceArray = distance.split("-");
    const minDistance = parseInt(distanceArray[0]);
    const maxDistance = parseInt(distanceArray[1]);

    tripPricingsApi
      .getTripPricing(carType, minDistance, maxDistance)
      .then((res) => {
        const { carType, pricePerKm, doorOpeningPrice } = res.data;
        const { from, to } = res.data.distanceInKm;
        setCarType(carType);
        setPricePerKm(pricePerKm);
        setDoorOpeningPrice(doorOpeningPrice);
        setDistance(`${from}-${to}`);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        const message =
          err?.response?.data?.message?.[lang] || i18n("networkError");
        setError(message);
      });
  }, [carType, distance]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      gap: screen.getVerticalPixelSize(15),
      paddingHorizontal: screen.getHorizontalPixelSize(15),
      paddingVertical: screen.getVerticalPixelSize(15),
      paddingTop: screen.getVerticalPixelSize(50),
    },
    contentContainer: {
      gap: screen.getVerticalPixelSize(17),
      marginTop: screen.getVerticalPixelSize(15),
    },
    arIcon: {
      marginRight: screen.getHorizontalPixelSize(10),
      fontSize: screen.getResponsiveFontSize(24),
      color: theme.primaryColor,
    },
    enIcon: {
      marginLeft: screen.getHorizontalPixelSize(10),
      fontSize: screen.getResponsiveFontSize(24),
      color: theme.primaryColor,
    },
    buttonText: {
      fontFamily: "cairo-700",
      fontSize: screen.getResponsiveFontSize(16),
    },
  });

  const handleEditTripPricing = async () => {
    try {
      if (loading) return;
      setLoading(true);

      const distanceArray = distance.split("-");
      const minDistance = parseInt(distanceArray[0]);
      const maxDistance = parseInt(distanceArray[1]);

      const res = await tripPricingsApi.updateTripPricing(
        carType,
        minDistance,
        maxDistance,
        pricePerKm,
        doorOpeningPrice
      );

      setCarType(res.data.carType);
      setPricePerKm(res.data.pricePerKm);
      setDoorOpeningPrice(res.data.doorOpeningPrice);
      setDistance(`${res.data.distanceInKm.from}-${res.data.distanceInKm.to}`);

      setLoading(false);
    } catch (err) {
      setLoading(false);
      const message =
        err?.response?.data?.message?.[lang] || i18n("networkError");
      setError(message);
    }
  };

  const handleGoBack = () => {
    try {
      navigation.goBack();
    } catch (err) {}
  };

  const getDistanceOptions = () => {
    return data.distances.map((distance) => {
      const from = distance[0];
      const to = distance[1];
      return { key: `${from}-${to}`, value: `${from}-${to} Km` };
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <DefaultScreenTitle title={i18n("tripsPricing")} onPrev={handleGoBack} />

      <PopupLoading visible={loading} />

      <PopupError
        onClose={() => setError("")}
        visible={!!error}
        message={error}
      />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <SelectInput
          title={i18n("carType")}
          placeholder={i18n("carType")}
          onChange={setCarType}
          value={i18n(carType)}
          options={data.carTypes.map((carType) => ({
            key: carType,
            value: i18n(carType),
          }))}
        />

        <SelectInput
          title={i18n("distance")}
          placeholder={i18n("distance")}
          value={distance}
          onChange={setDistance}
          options={getDistanceOptions()}
        />

        <InputIcon
          title={i18n("price")}
          placeholder={i18n("price")}
          keyboardType="number-pad"
          value={`${pricePerKm}`}
          onChange={setPricePerKm}
          Icon={() => (
            <FontAwesome
              name="dollar"
              style={lang === "ar" ? styles.arIcon : styles.enIcon}
            />
          )}
        />

        <InputIcon
          title={i18n("doorOpening")}
          placeholder={i18n("doorOpening")}
          keyboardType="number-pad"
          value={`${doorOpeningPrice}`}
          onChange={setDoorOpeningPrice}
          Icon={() => (
            <FontAwesome
              name="dollar"
              style={lang === "ar" ? styles.arIcon : styles.enIcon}
            />
          )}
        />

        <CustomButton
          text={i18n("edit")}
          textStyle={styles.buttonText}
          onPress={handleEditTripPricing}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
