import { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
} from "react-native";
import useScreen from "../../hooks/useScreen";
import useLocale from "../../hooks/useLocale";
import DefaultScreenTitle from "../../components/screenTitles/DefaultScreenTitle";
import ScreenSteps from "../../components/common/ScreenSteps";
import screens from "../../static/screens.json";
import SquarePhotoInput from "../../components/inputs/SquarePhotoInput";
import InputIcon from "../../components/inputs/InputIcon";
import SelectInput from "../../components/inputs/SelectInput";
import useCameraRoll from "../../hooks/useCameraRoll";
import imagePicker from "../../utils/imagePicker";
import data from "../../static/data.json";
import * as usersApi from "../../api/user/users";
import PopupLoading from "../../components/popups/PopupLoading";
import PopupError from "../../components/popups/PopupError";

export default function AddDriverScreen3({ navigation, route }) {
  const driverData = route?.params?.context;
  const screen = useScreen();
  const { i18n, lang } = useLocale();
  const { cameraRollPermissionsStatus, requestCameraRollPermissions } =
    useCameraRoll();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [context, setContext] = useState({
    plateNumber: "",
    productionYear: "",
    model: "",
    color: "",
    type: "",
    photo1: null,
    photo2: null,
    photo3: null,
    photo4: null,
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      gap: screen.getVerticalPixelSize(15),
      paddingHorizontal: screen.getHorizontalPixelSize(15),
      paddingVertical: screen.getVerticalPixelSize(15),
      paddingTop: screen.getVerticalPixelSize(50),
    },
    contentContainer: {
      gap: screen.getVerticalPixelSize(15),
      paddingBottom: screen.getVerticalPixelSize(120),
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

  const handleAddDriver = async () => {
    try {
      setLoading(true);
      const formData = { ...driverData, ...context };

      // Process phone number
      formData.phoneICC = formData.phone.icc;
      formData.phoneNSN = formData.phone.nsn;
      delete formData.phone;

      const res = await usersApi.addDriver(formData);
      setLoading(false);
      navigation.navigate(screens.addDriver4);
    } catch (err) {
      setLoading(false);
      const error =
        err?.response?.data?.message?.[lang] || i18n("networkError");
      setError(error);
    }
  };

  const handleKeyChange = (key) => (value) => {
    try {
      setContext({ ...context, [key]: value });
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

  const checkIfAddButtonDisabled = () => {
    try {
      const {
        color,
        model,
        plateNumber,
        productionYear,
        type,
        photo1,
        photo2,
        photo3,
        photo4,
      } = context;

      return (
        !color ||
        !model ||
        !plateNumber ||
        !productionYear ||
        !type ||
        !photo1 ||
        !photo2 ||
        !photo3 ||
        !photo4
      );
    } catch (err) {
      return false;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <DefaultScreenTitle title={i18n("addDriver")} onPrev={handleGoBack} />

      <PopupLoading visible={loading} />

      <PopupError
        visible={!!error}
        onClose={() => setError("")}
        message={error}
      />

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.inputsContainer}>
          <Text style={styles.title}>{i18n("addCarInfoTitle")}</Text>

          <InputIcon
            placeholder={i18n("plateNumber")}
            value={context.plateNumber}
            onChange={handleKeyChange("plateNumber")}
            Icon={() => (
              <Image
                source={require("../../assets/icons/car-number.png")}
                resizeMode="contain"
                style={
                  lang === "ar"
                    ? styles.arCarNumberIcon
                    : styles.enCarNumberIcon
                }
              />
            )}
          />

          <SelectInput
            placeholder={i18n("manufactureYear")}
            options={data.productionYears.map((v) => ({ key: v, value: v }))}
            value={context.productionYear}
            onChange={handleKeyChange("productionYear")}
          />

          <SelectInput
            placeholder={i18n("carModel")}
            options={data.models.map((v) => ({ key: v, value: i18n(v) }))}
            value={context.model}
            onChange={handleKeyChange("model")}
          />

          <SelectInput
            placeholder={i18n("carColor")}
            options={data.colors.map((v) => ({
              key: v,
              value: i18n(v),
            }))}
            value={context.color}
            onChange={handleKeyChange("color")}
          />

          <SelectInput
            placeholder={i18n("carType")}
            options={data.carTypes.map((v) => ({
              key: v,
              value: i18n(v),
            }))}
            value={context.type}
            onChange={handleKeyChange("type")}
          />
        </View>

        <View style={styles.inputsContainer}>
          <Text style={styles.title}>{i18n("addCarPhotosTitle")}</Text>

          <View style={styles.photosRowContainer}>
            <SquarePhotoInput
              value={getImageSource("photo1")}
              onChange={handlePickImage("photo1")}
            />

            <SquarePhotoInput
              value={getImageSource("photo2")}
              onChange={handlePickImage("photo2")}
            />
          </View>

          <View style={styles.photosRowContainer}>
            <SquarePhotoInput
              value={getImageSource("photo3")}
              onChange={handlePickImage("photo3")}
            />

            <SquarePhotoInput
              value={getImageSource("photo4")}
              onChange={handlePickImage("photo4")}
            />
          </View>
        </View>
      </ScrollView>

      <View style={styles.screenStepsContainer}>
        <ScreenSteps
          onNext={handleAddDriver}
          onPrev={handleGoBack}
          disableNext={checkIfAddButtonDisabled()}
          nextButtonTitle={i18n("add")}
        />
      </View>
    </SafeAreaView>
  );
}
