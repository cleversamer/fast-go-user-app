import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import AvatarInput from "../../components/inputs/AvatarInput";
import useLocale from "../../hooks/useLocale";
import SquarePhotoInput from "../../components/inputs/SquarePhotoInput";
import ScreenSteps from "../../components/common/ScreenSteps";
import screens from "../../static/screens.json";
import useScreen from "../../hooks/useScreen";

export default function AddLegalDocumentsScreen({ navigation }) {
  const screen = useScreen();
  const { i18n, lang } = useLocale();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: screen.getHorizontalPixelSize(15),
      paddingVertical: screen.getVerticalPixelSize(15),
      paddingTop: screen.getVerticalPixelSize(50),
      gap: screen.getVerticalPixelSize(30),
    },
    inputsContainer: {
      gap: screen.getVerticalPixelSize(10),
    },
    arTitle: {
      fontFamily: "cairo-700",
      fontSize: 18,
      textAlign: "right",
    },
    enTitle: {
      fontFamily: "cairo-700",
      fontSize: 18,
      textAlign: "left",
      textTransform: "capitalize",
    },
    arSubtitle: {
      fontFamily: "cairo-500",
      fontSize: 14,
      color: "#747474",
      textAlign: "right",
      marginBottom: screen.getVerticalPixelSize(7),
    },
    enSubtitle: {
      fontFamily: "cairo-500",
      fontSize: 14,
      color: "#747474",
      textAlign: "left",
      textTransform: "capitalize",
      marginBottom: screen.getVerticalPixelSize(7),
    },
    avatarContainer: {
      alignSelf: "flex-end",
      marginVertical: 0,
      marginTop: screen.getVerticalPixelSize(15),
    },
    photosRowContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: screen.getVerticalPixelSize(10),
    },
    screenStepsContainer: {
      marginTop: "auto",
      marginBottom: screen.getVerticalPixelSize(20),
    },
  });

  const handleGoBack = () => {
    try {
      navigation.goBack();
    } catch (err) {}
  };

  const handleNext = () => {
    try {
      navigation.navigate(screens.pendingRequest);
    } catch (err) {}
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputsContainer}>
        <Text style={lang === "ar" ? styles.arTitle : styles.enTitle}>
          {i18n("uploadPersonalPhoto")}
        </Text>

        <Text style={lang === "ar" ? styles.arSubtitle : styles.enSubtitle}>
          {i18n("personalPhotoConditions")}
        </Text>

        <AvatarInput containerStyles={styles.avatarContainer} />
      </View>

      <View style={styles.inputsContainer}>
        <Text style={lang === "ar" ? styles.arTitle : styles.enTitle}>
          {i18n("uploadRequiredDocuments")}
        </Text>

        <Text style={lang === "ar" ? styles.arSubtitle : styles.enSubtitle}>
          {i18n("uploadRequiredDocumentsRequest")}
        </Text>

        <View style={styles.photosRowContainer}>
          <SquarePhotoInput title={i18n("drivingLicense")} />
          <SquarePhotoInput title={i18n("carBrochure")} />
        </View>

        <View style={styles.photosRowContainer}>
          <SquarePhotoInput title={i18n("passport")} />
          <SquarePhotoInput title={i18n("carInsurance")} />
        </View>
      </View>

      <ScreenSteps
        containerStyle={styles.screenStepsContainer}
        onNext={handleNext}
        onPrev={handleGoBack}
      />
    </SafeAreaView>
  );
}
