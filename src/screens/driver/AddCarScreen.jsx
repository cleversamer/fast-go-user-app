import { useState } from "react";
import { StyleSheet, SafeAreaView, View, Text, Image } from "react-native";
import InputIcon from "../../components/inputs/InputIcon";
import SelectInput from "../../components/inputs/SelectInput";
import SquarePhotoInput from "../../components/inputs/SquarePhotoInput";
import ScreenSteps from "../../components/common/ScreenSteps";
import useLocale from "../../hooks/useLocale";
import screens from "../../static/screens.json";
import useScreen from "../../hooks/useScreen";

export default function AddCarScreen({ navigation }) {
  const screen = useScreen();
  const [option, setOption] = useState(null);
  const { i18n, lang } = useLocale();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: screen.getHorizontalPixelSize(15),
      paddingVertical: screen.getVerticalPixelSize(15),
      paddingTop: screen.getVerticalPixelSize(50),
      gap: screen.getVerticalPixelSize(25),
    },
    arTitle: {
      fontFamily: "cairo-700",
      fontSize: 18,
      textAlign: "right",
      marginBottom: screen.getVerticalPixelSize(7),
    },
    enTitle: {
      fontFamily: "cairo-700",
      fontSize: 18,
      textAlign: "left",
      textTransform: "capitalize",
      marginBottom: screen.getVerticalPixelSize(7),
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
    inputsContainer: {
      gap: screen.getVerticalPixelSize(15),
    },
    photosRowContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
    },
    screenStepsContainer: {
      marginTop: "auto",
      marginBottom: screen.getVerticalPixelSize(20),
    },
  });

  const handleNext = () => {
    try {
      navigation.navigate(screens.addLegalDocuments);
    } catch (err) {}
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputsContainer}>
        <Text style={lang === "ar" ? styles.arTitle : styles.enTitle}>
          {i18n("addCarInfoTitle")}
        </Text>

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
          onChange={setOption}
        />

        <SelectInput
          placeholder={i18n("carModel")}
          options={[{ key: 1, value: "opt 1" }]}
          onChange={setOption}
        />

        <SelectInput
          placeholder={i18n("carColor")}
          options={[{ key: 1, value: "opt 1" }]}
          onChange={setOption}
        />
      </View>

      <View style={styles.inputsContainer}>
        <Text style={lang === "ar" ? styles.arTitle : styles.enTitle}>
          {i18n("addCarPhotosTitle")}
        </Text>

        <View style={styles.photosRowContainer}>
          <SquarePhotoInput />
          <SquarePhotoInput />
        </View>

        <View style={styles.photosRowContainer}>
          <SquarePhotoInput />
          <SquarePhotoInput />
        </View>
      </View>

      <ScreenSteps
        containerStyle={styles.screenStepsContainer}
        showPrev={false}
        onNext={handleNext}
      />
    </SafeAreaView>
  );
}
