import { useState } from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import useScreen from "../../hooks/useScreen";
import useLocale from "../../hooks/useLocale";
import DefaultScreenTitle from "../../components/screenTitles/DefaultScreenTitle";
import ScreenSteps from "../../components/common/ScreenSteps";
import screens from "../../static/screens.json";
import SquarePhotoInput from "../../components/inputs/SquarePhotoInput";
import AvatarInput from "../../components/inputs/AvatarInput";
import useCameraRoll from "../../hooks/useCameraRoll";
import imagePicker from "../../utils/imagePicker";

export default function AddDriverScreen2({ navigation, route }) {
  const driverData = route?.params?.context;
  const screen = useScreen();
  const { i18n } = useLocale();
  const { cameraRollPermissionsStatus, requestCameraRollPermissions } =
    useCameraRoll();
  const [context, setContext] = useState({
    avatar: null,
    brochure: null,
    driverLicense: null,
    insurance: null,
    passport: null,
  });

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
      const data = { ...driverData, ...context };
      navigation.navigate(screens.addDriver3, { context: data });
    } catch (err) {}
  };

  const handlePickImage = (key) => async () => {
    try {
      if (!cameraRollPermissionsStatus) {
        return await requestCameraRollPermissions();
      }

      const image = await imagePicker.pickImage();
      const contextValue = {
        data: image.base64,
        name: Date.now().toString(),
        uri: image.uri,
      };
      setContext({ ...context, [key]: contextValue });
    } catch (err) {}
  };

  const getImageSource = (key) => {
    try {
      const uri = context[key];
      return uri || null;
    } catch (err) {
      return null;
    }
  };

  const checkIfNextButtonDisabled = () => {
    try {
      const { avatar, brochure, driverLicense, insurance, passport } = context;
      return !avatar || !brochure || !driverLicense || !insurance || !passport;
    } catch (err) {
      return false;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <DefaultScreenTitle title={i18n("addDriver")} onPrev={handleGoBack} />

      <View style={styles.inputsContainer}>
        <Text style={styles.title}>{i18n("uploadPersonalPhoto")}</Text>
        <AvatarInput
          containerStyles={styles.avatarContainer}
          value={getImageSource("avatar")}
          onChange={handlePickImage("avatar")}
        />
      </View>

      <View style={styles.inputsContainer}>
        <Text style={styles.title}>{i18n("uploadRequiredDocuments")}</Text>

        <View style={styles.photosRowContainer}>
          <SquarePhotoInput
            title={i18n("drivingLicense")}
            value={getImageSource("driverLicense")}
            onChange={handlePickImage("driverLicense")}
          />

          <SquarePhotoInput
            title={i18n("carBrochure")}
            value={getImageSource("brochure")}
            onChange={handlePickImage("brochure")}
          />
        </View>

        <View style={styles.photosRowContainer}>
          <SquarePhotoInput
            title={i18n("passport")}
            value={getImageSource("passport")}
            onChange={handlePickImage("passport")}
          />

          <SquarePhotoInput
            title={i18n("carInsurance")}
            value={getImageSource("insurance")}
            onChange={handlePickImage("insurance")}
          />
        </View>
      </View>

      <View style={styles.screenStepsContainer}>
        <ScreenSteps
          onNext={handleNext}
          onPrev={handleGoBack}
          disableNext={checkIfNextButtonDisabled()}
        />
      </View>
    </SafeAreaView>
  );
}
