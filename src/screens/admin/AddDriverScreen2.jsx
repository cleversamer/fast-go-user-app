import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import useScreen from "../../hooks/useScreen";
import useLocale from "../../hooks/useLocale";
import DefaultScreenTitle from "../../components/screenTitles/DefaultScreenTitle";
import ScreenSteps from "../../components/common/ScreenSteps";
import screens from "../../static/screens.json";
import SquarePhotoInput from "../../components/inputs/SquarePhotoInput";
import AvatarInput from "../../components/inputs/AvatarInput";

export default function AddDriverScreen2({ navigation, route }) {
  const context = route?.params?.context;
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
    title: {
      fontFamily: "cairo-700",
      fontSize: screen.getResponsiveFontSize(16),
      marginTop: screen.getVerticalPixelSize(10),
    },
    inputsContainer: {
      gap: screen.getVerticalPixelSize(15),
    },
    photosRowContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: screen.getVerticalPixelSize(10),
    },
    avatarContainer: {
      alignSelf: "flex-end",
      marginVertical: 0,
      marginTop: screen.getVerticalPixelSize(15),
      marginHorizontal: screen.getHorizontalPixelSize(10),
    },
    screenStepsContainer: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      paddingHorizontal: screen.getHorizontalPixelSize(15),
      marginBottom: screen.getVerticalPixelSize(50),
    },
  });

  const handleGoBack = () => {
    try {
      navigation.goBack();
    } catch (err) {}
  };

  const handleNext = () => {
    try {
      navigation.navigate(screens.addDriver3, {});
    } catch (err) {}
  };

  return (
    <SafeAreaView style={styles.container}>
      <DefaultScreenTitle title={i18n("addDriver")} onPrev={handleGoBack} />

      <View style={styles.inputsContainer}>
        <Text style={styles.title}>{i18n("uploadPersonalPhoto")}</Text>
        <AvatarInput containerStyles={styles.avatarContainer} />
      </View>

      <View style={styles.inputsContainer}>
        <Text style={styles.title}>{i18n("uploadRequiredDocuments")}</Text>

        <View style={styles.photosRowContainer}>
          <SquarePhotoInput title={i18n("drivingLicense")} />
          <SquarePhotoInput title={i18n("carBrochure")} />
        </View>

        <View style={styles.photosRowContainer}>
          <SquarePhotoInput title={i18n("passport")} />
          <SquarePhotoInput title={i18n("carInsurance")} />
        </View>
      </View>

      <View style={styles.screenStepsContainer}>
        <ScreenSteps
          onNext={handleNext}
          onPrev={handleGoBack}
          disableNext={true}
        />
      </View>
    </SafeAreaView>
  );
}
