import { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import ProfileScreenTitle from "../../components/screenTitles/ProfileScreenTitle";
import { Ionicons, Feather } from "@expo/vector-icons";
import * as theme from "../../constants/theme";
import InputIcon from "../../components/inputs/InputIcon";
import PhoneInput from "../../components/inputs/PhoneInput";
import SelectInput from "../../components/inputs/SelectInput";
import CustomButton from "../../components/buttons/CustomButton";
import PopupConfirm from "../../components/popups/PopupConfirm";
import PopupLoading from "../../components/popups/PopupLoading";
import PopupError from "../../components/popups/PopupError";
import useLocale from "../../hooks/useLocale";
import NetworkStatusLine from "../../components/common/NetworkStatusLine";
import AvatarInput from "../../components/inputs/AvatarInput";
import useAuth from "../../auth/useAuth";
import data from "../../static/data.json";
import useScreen from "../../hooks/useScreen";
import * as usersApi from "../../api/user/users";
import useCameraRoll from "../../hooks/useCameraRoll";
import imagePicker from "../../utils/imagePicker";
import checkEmail from "../../utils/checkEmail";

export default function ProfileScreen({ navigation }) {
  const screen = useScreen();
  const { user, setUser, login } = useAuth();
  const { i18n, lang } = useLocale();
  const [showDeleteAccountPopup, setShowDeleteAccountPopup] = useState(false);
  const [showDeletionLinkSentPopup, setShowDeletionLinkSentPopup] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { cameraRollPermissionsStatus, requestCameraRollPermissions } =
    useCameraRoll();
  const [error, setError] = useState("");
  const [context, setContext] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    phoneICC: user?.phone?.icc || "+218",
    phoneNSN: user?.phone?.nsn || "",
    gender: user?.gender || data.genders[0],
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: screen.getHorizontalPixelSize(15),
      paddingVertical: screen.getVerticalPixelSize(15),
      paddingTop: screen.getVerticalPixelSize(50),
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
    inputsContainer: {
      gap: screen.getVerticalPixelSize(17),
    },
    buttonContainer: {
      paddingVertical: screen.getVerticalPixelSize(10),
    },
    buttonText: {
      fontFamily: "cairo-800",
      fontSize: screen.getResponsiveFontSize(18),
    },
  });

  const handleKeyChange = (key) => (value) =>
    setContext({ ...context, [key]: value });

  const handleGoBack = () => {
    try {
      navigation.goBack();
    } catch (err) {}
  };

  const handleRequestAccountDeletion = () => {
    try {
      setShowDeleteAccountPopup(true);
    } catch (err) {}
  };

  const handleConfirmAccountDeletion = async () => {
    try {
      setShowDeleteAccountPopup(false);
      setIsLoading(true);

      await usersApi.requestAccountDeletion();
      setShowDeletionLinkSentPopup(true);
    } catch (err) {
      const error =
        err?.response?.data?.message?.[lang] || i18n("networkError");
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeAvatar = async () => {
    try {
      if (!cameraRollPermissionsStatus) {
        return await requestCameraRollPermissions();
      }

      const image = await imagePicker.pickImage();
      if (image) {
        setIsLoading(true);
        const res = await usersApi.updateAvatar(image);
        setUser(res.data);
        setIsLoading(false);
      }
    } catch (err) {}
  };

  const getAvatarSource = () => {
    try {
      if (user.avatarURL) {
        return { uri: user.avatarURL };
      }

      return null;
    } catch (err) {
      return null;
    }
  };

  const checkIfSaveButtonDisabled = () => {
    return (
      (context.firstName === user.firstName &&
        context.lastName === user.lastName &&
        context.email === user.email &&
        context.phoneNSN === user.phone.nsn &&
        context.gender === user.gender) ||
      context.firstName.length < 3 ||
      context.firstName.length > 32 ||
      context.lastName.length < 3 ||
      context.lastName.length > 32 ||
      !checkEmail(context.email) ||
      context.phoneNSN.length !== 9
    );
  };

  const handleUpdateProfile = async () => {
    try {
      setIsLoading(true);
      const res = await usersApi.updateProfile(context);
      const { user, token } = res.data;
      await login(user, token);
    } catch (err) {
      const message = err.response.data.message[lang] || i18n("networkError");
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <NetworkStatusLine />

      <PopupLoading visible={isLoading} />

      <PopupError
        onClose={() => setError("")}
        visible={!!error}
        message={error}
      />

      <PopupConfirm
        title={i18n("popupDeletionLinkSentTitle")}
        subtitle={i18n("popupDeletionLinkSentSubtitle")}
        visible={showDeletionLinkSentPopup}
        onClose={() => setShowDeletionLinkSentPopup(false)}
        onConfirm={() => setShowDeletionLinkSentPopup(false)}
      />

      <PopupConfirm
        title={i18n("popupDeleteAccountTitle")}
        subtitle={i18n("popupDeleteAccountSubtitle")}
        hint={i18n("popupDeleteAccountHint")}
        visible={showDeleteAccountPopup}
        onClose={() => setShowDeleteAccountPopup(false)}
        onConfirm={handleConfirmAccountDeletion}
      />

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <ProfileScreenTitle
          title={i18n("profile")}
          showMoreButton
          onPrev={handleGoBack}
          onRequestAccountDeletion={handleRequestAccountDeletion}
        />

        <AvatarInput onChange={handleChangeAvatar} value={getAvatarSource()} />

        <View style={styles.inputsContainer}>
          <InputIcon
            title={i18n("firstname")}
            placeholder={i18n("firstname")}
            value={context.firstName}
            onChange={handleKeyChange("firstName")}
            Icon={() => (
              <Ionicons
                name="person"
                style={lang === "ar" ? styles.arIcon : styles.enIcon}
              />
            )}
          />

          <InputIcon
            title={i18n("lastname")}
            placeholder={i18n("lastname")}
            value={context.lastName}
            onChange={handleKeyChange("lastName")}
            Icon={() => (
              <Ionicons
                name="person"
                style={lang === "ar" ? styles.arIcon : styles.enIcon}
              />
            )}
          />

          <InputIcon
            title={i18n("email")}
            placeholder={i18n("email")}
            keyboardType="email-address"
            value={context.email}
            onChange={handleKeyChange("email")}
            Icon={() => (
              <Feather
                name="mail"
                style={lang === "ar" ? styles.arIcon : styles.enIcon}
              />
            )}
          />

          <PhoneInput
            nsn={context.phoneNSN}
            onNSNChange={handleKeyChange("phoneNSN")}
          />

          <SelectInput
            value={context.gender}
            options={data.genders}
            onChange={handleKeyChange("gender")}
            placeholder={i18n("selectGender")}
          />

          <CustomButton
            text={i18n("save")}
            containerStyle={styles.buttonContainer}
            textStyle={styles.buttonText}
            disabled={checkIfSaveButtonDisabled()}
            onPress={handleUpdateProfile}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
