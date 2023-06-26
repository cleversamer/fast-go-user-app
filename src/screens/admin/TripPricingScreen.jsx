import { StyleSheet, SafeAreaView, View, ScrollView } from "react-native";
import useScreen from "../../hooks/useScreen";
import DefaultScreenTitle from "../../components/screenTitles/DefaultScreenTitle";
import useLocale from "../../hooks/useLocale";
import { FontAwesome } from "@expo/vector-icons";
import * as theme from "../../constants/theme";
import SelectInput from "../../components/inputs/SelectInput";
import InputIcon from "../../components/inputs/InputIcon";
import CustomButton from "../../components/buttons/CustomButton";
import data from "../../static/data.json";

export default function TripPricingScreen({ navigation }) {
  const screen = useScreen();
  const { i18n, lang } = useLocale();

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

  const handleGoBack = () => {
    try {
      navigation.goBack();
    } catch (err) {}
  };

  const getDistanceOptions = () => {
    return data.distances.map((distance) => {
      const from = distance[0];
      const to = distance[1];
      return `${from}-${to} Km`;
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <DefaultScreenTitle title={i18n("tripsPricing")} onPrev={handleGoBack} />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <SelectInput title={i18n("carType")} placeholder={i18n("carType")} />

        <SelectInput
          title={i18n("distance")}
          placeholder={i18n("distance")}
          options={getDistanceOptions()}
        />

        <InputIcon
          title={i18n("price")}
          placeholder={i18n("price")}
          keyboardType="number-pad"
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
          Icon={() => (
            <FontAwesome
              name="dollar"
              style={lang === "ar" ? styles.arIcon : styles.enIcon}
            />
          )}
        />

        <CustomButton text={i18n("edit")} textStyle={styles.buttonText} />
      </ScrollView>
    </SafeAreaView>
  );
}
