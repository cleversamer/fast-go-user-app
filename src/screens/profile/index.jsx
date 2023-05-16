import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import ProfileScreenTitle from "../../components/profileScreenTitle";
import { FontAwesome, Ionicons, Feather } from "@expo/vector-icons";
import * as theme from "../../constants/theme";
import InputIcon from "../../components/inputIcon";
import PhoneInput from "../../components/phoneInput";
import SelectInput from "../../components/selectInput";
import CustomButton from "../../components/button";
import PopupConfirm from "../../components/popup/PopupConfirm";
import useLocale from "../../hooks/useLocale";

export default function ProfileScreen({ navigation }) {
  const { i18n, lang } = useLocale();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedGender, setSelectedGender] = useState("male");

  const handleSelectGender = (gender) => {
    setSelectedGender(gender);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleRequestAccountDeletion = () => {
    setShowPopup(true);
  };

  const handleConfirmAccountDeletion = () => {
    alert("Confirmed");
  };

  const handleChangeAvatar = () => {};

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <PopupConfirm
        title={i18n("popupDeleteAccountTitle")}
        subtitle={i18n("popupDeleteAccountSubtitle")}
        hint={i18n("popupDeleteAccountHint")}
        visible={showPopup}
        onClose={handleClosePopup}
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

        <TouchableOpacity
          style={styles.avatarContainer}
          onPress={handleChangeAvatar}
        >
          <TouchableOpacity style={styles.cameraIconContainer}>
            <FontAwesome name="camera" style={styles.cameraIcon} />
          </TouchableOpacity>

          <Image
            source={require("../../assets/images/avatar.png")}
            resizeMode="contain"
            style={styles.avatar}
          />
        </TouchableOpacity>

        <View style={styles.inputsContainer}>
          <InputIcon
            title={i18n("firstname")}
            placeholder={i18n("firstname")}
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
            Icon={() => (
              <Feather
                name="mail"
                style={lang === "ar" ? styles.arIcon : styles.enIcon}
              />
            )}
          />

          <PhoneInput />

          <SelectInput onChange={handleSelectGender} placeholder="اختر الجنس" />

          <CustomButton
            text={i18n("save")}
            containerStyle={styles.buttonContainer}
            textStyle={styles.buttonText}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 50,
  },
  avatarContainer: {
    alignSelf: "center",
    marginVertical: 35,
    padding: 1,
    borderColor: "#929292",
    shadowColor: "#929292",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.21,
    shadowRadius: 6.65,
    elevation: 9,
  },
  cameraIconContainer: {
    position: "absolute",
    top: -10,
    right: -10,
    zIndex: 1,
  },
  cameraIcon: {
    color: theme.primaryColor,
    fontSize: 24,
  },
  avatar: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    width: 100,
    height: 100,
  },
  arIcon: {
    marginRight: 10,
    fontSize: 24,
    color: theme.primaryColor,
  },
  enIcon: {
    marginLeft: 10,
    fontSize: 24,
    color: theme.primaryColor,
  },
  inputsContainer: {
    gap: 17,
  },
  buttonContainer: {
    paddingVertical: 10,
  },
  buttonText: {
    fontFamily: "cairo-800",
    fontSize: 18,
  },
});
