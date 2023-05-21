import { useState } from "react";
import { StyleSheet, SafeAreaView, View, Text, Image } from "react-native";
import InputIcon from "../../components/inputs/InputIcon";
import SelectInput from "../../components/inputs/SelectInput";
import SquarePhotoInput from "../../components/inputs/SquarePhotoInput";
import ScreenSteps from "../../components/common/ScreenSteps";
import useLocale from "../../hooks/useLocale";
import screens from "../../static/screens.json";

export default function AddCarScreen({ navigation }) {
  const [option, setOption] = useState(null);
  const { i18n, lang } = useLocale();

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 50,
    gap: 25,
  },
  arTitle: {
    fontFamily: "cairo-700",
    fontSize: 18,
    textAlign: "right",
    marginBottom: 7,
  },
  enTitle: {
    fontFamily: "cairo-700",
    fontSize: 18,
    textAlign: "left",
    textTransform: "capitalize",
    marginBottom: 7,
  },
  arCarNumberIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  enCarNumberIcon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  inputsContainer: {
    gap: 15,
  },
  photosRowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  screenStepsContainer: {
    marginTop: "auto",
    marginBottom: 20,
  },
});
