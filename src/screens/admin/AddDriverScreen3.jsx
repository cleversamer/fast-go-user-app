import { StyleSheet, SafeAreaView, View, Text, Image } from "react-native";
import useScreen from "../../hooks/useScreen";
import useLocale from "../../hooks/useLocale";
import DefaultScreenTitle from "../../components/screenTitles/DefaultScreenTitle";
import ScreenSteps from "../../components/common/ScreenSteps";
import screens from "../../static/screens.json";
import SquarePhotoInput from "../../components/inputs/SquarePhotoInput";
import InputIcon from "../../components/inputs/InputIcon";
import SelectInput from "../../components/inputs/SelectInput";

export default function AddDriverScreen3({ navigation, route }) {
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
    arCarNumberIcon: {
      width: screen.getHorizontalPixelSize(30),
      height: screen.getHorizontalPixelSize(30),
      marginRight: screen.getHorizontalPixelSize(10),
    },
    enCarNumberIcon: {
      width: screen.getHorizontalPixelSize(30),
      height: screen.getHorizontalPixelSize(30),
      marginLeft: screen.getHorizontalPixelSize(10),
    },
    photosRowContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: screen.getVerticalPixelSize(10),
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
        <Text style={styles.title}>{i18n("addCarInfoTitle")}</Text>

        <InputIcon
          placeholder={i18n("plateNumber")}
          Icon={() => (
            <Image
              source={require("../../assets/icons/car-number.png")}
              resizeMode="contain"
              style={
                lang === "ar" ? styles.arCarNumberIcon : styles.enCarNumberIcon
              }
            />
          )}
        />

        <SelectInput
          placeholder={i18n("manufactureYear")}
          options={[{ key: 1, value: "opt 1" }]}
        />

        <SelectInput
          placeholder={i18n("carModel")}
          options={[{ key: 1, value: "opt 1" }]}
        />

        <SelectInput
          placeholder={i18n("carColor")}
          options={[{ key: 1, value: "opt 1" }]}
        />
      </View>

      <View style={styles.inputsContainer}>
        <Text style={styles.title}>{i18n("addCarPhotosTitle")}</Text>

        <View style={styles.photosRowContainer}>
          <SquarePhotoInput />
          <SquarePhotoInput />
        </View>

        <View style={styles.photosRowContainer}>
          <SquarePhotoInput />
          <SquarePhotoInput />
        </View>
      </View>

      <View style={styles.screenStepsContainer}>
        <ScreenSteps
          onNext={handleNext}
          onPrev={handleGoBack}
          disableNext={true}
          nextButtonTitle={i18n("add")}
        />
      </View>
    </SafeAreaView>
  );
}
