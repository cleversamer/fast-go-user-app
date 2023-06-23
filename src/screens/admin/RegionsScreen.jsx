import { StyleSheet, SafeAreaView, Text, ScrollView, View } from "react-native";
import useScreen from "../../hooks/useScreen";
import useLocale from "../../hooks/useLocale";
import DefaultScreenTitle from "../../components/screenTitles/DefaultScreenTitle";
import GoogleMap from "../../components/common/GoogleMap";
import InputIcon from "../../components/inputs/InputIcon";
import { Ionicons } from "@expo/vector-icons";
import * as theme from "../../constants/theme";
import CustomButton from "../../components/buttons/CustomButton";
import Region from "../../components/admin/Region";

export default function RegionsScreen({ navigation }) {
  const screen = useScreen();
  const { i18n, lang } = useLocale();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: screen.getHorizontalPixelSize(15),
      paddingVertical: screen.getVerticalPixelSize(15),
      paddingTop: screen.getVerticalPixelSize(50),
      gap: screen.getVerticalPixelSize(15),
    },
    contentContainer: {
      gap: screen.getVerticalPixelSize(15),
    },
    title: {
      fontFamily: "cairo-700",
      fontSize: screen.getResponsiveFontSize(16),
      marginTop: screen.getVerticalPixelSize(10),
    },
    mapContainer: {
      minHeight: screen.getScreenHeight() * 0.45,
      maxHeight: screen.getVerticalPixelSize(400),
      alignSelf: "center",
    },
    inputIcon: {
      marginRight: lang === "ar" ? screen.getHorizontalPixelSize(10) : 0,
      marginLeft: lang === "en" ? screen.getHorizontalPixelSize(10) : 0,
      fontSize: screen.getResponsiveFontSize(30),
      color: theme.primaryColor,
    },
    buttonText: {
      fontFamily: "cairo-800",
      fontSize: screen.getResponsiveFontSize(18),
    },
    regionsContainer: {
      gap: screen.getVerticalPixelSize(20),
      paddingBottom: screen.getVerticalPixelSize(15),
    },
  });

  const handleGoBack = () => {
    try {
      navigation.goBack();
    } catch (err) {}
  };

  return (
    <SafeAreaView style={styles.container}>
      <DefaultScreenTitle title={i18n("regions")} onPrev={handleGoBack} />

      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>{i18n("addRegion")}</Text>

        <GoogleMap containerStyles={styles.mapContainer} />

        <InputIcon
          title={i18n("region")}
          placeholder={i18n("region")}
          Icon={() => <Ionicons name="location" style={styles.inputIcon} />}
        />

        <CustomButton text={i18n("add")} textStyle={styles.buttonText} />

        <Text style={styles.title}>{i18n("addedRegions")}</Text>

        <View style={styles.regionsContainer}>
          <Region title="فلسطين,قطاع غزة,غزة,محافظةغزةالزيتون,890" />
          <Region title="فلسطين,قطاع غزة,غزة,محافظةغزةالزيتون,890" />
          <Region title="فلسطين,قطاع غزة,غزة,محافظةغزةالزيتون,890" />
          <Region title="فلسطين,قطاع غزة,غزة,محافظةغزةالزيتون,890" />
          <Region title="فلسطين,قطاع غزة,غزة,محافظةغزةالزيتون,890" />
          <Region title="فلسطين,قطاع غزة,غزة,محافظةغزةالزيتون,890" />
          <Region title="فلسطين,قطاع غزة,غزة,محافظةغزةالزيتون,890" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
