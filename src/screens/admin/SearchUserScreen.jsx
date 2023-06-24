import { useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView, Text, View } from "react-native";
import DefaultScreenTitle from "../../components/screenTitles/DefaultScreenTitle";
import useScreen from "../../hooks/useScreen";
import useLocale from "../../hooks/useLocale";
import InputIcon from "../../components/inputs/InputIcon";
import { Feather } from "@expo/vector-icons";
import * as theme from "../../constants/theme";
import useAuth from "../../auth/useAuth";
import PhoneInput from "../../components/inputs/PhoneInput";
import data from "../../static/data.json";
import SelectInput from "../../components/inputs/SelectInput";
import CustomButton from "../../components/buttons/CustomButton";
import PopupConfirm from "../../components/popups/PopupConfirm";

export default function SearchUserScreen({ navigation }) {
  const { user: admin } = useAuth();
  const screen = useScreen();
  const { i18n, lang } = useLocale();
  const [user, setUser] = useState(admin);
  const [showPopupConfirm, setShowPopupConfirm] = useState(false);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: screen.getHorizontalPixelSize(15),
      paddingVertical: screen.getVerticalPixelSize(15),
      paddingTop: screen.getVerticalPixelSize(50),
      gap: screen.getVerticalPixelSize(25),
    },
    contentContainer: {
      gap: screen.getVerticalPixelSize(15),
      paddingBottom: screen.getVerticalPixelSize(20),
    },
    icon: {
      color: theme.primaryColor,
      fontSize: screen.getResponsiveFontSize(30),
      marginRight: lang === "ar" ? screen.getHorizontalPixelSize(10) : 0,
      marginLeft: lang === "en" ? screen.getHorizontalPixelSize(10) : 0,
    },
    infoTitle: {
      fontSize: screen.getResponsiveFontSize(18),
      fontFamily: "cairo-700",
      color: theme.primaryColor,
      marginTop: screen.getVerticalPixelSize(10),
    },
    buttonsContainer: {
      justifyContent: "center",
      gap: screen.getVerticalPixelSize(10),
    },
    buttonText: {
      fontFamily: "cairo-800",
      fontSize: screen.getResponsiveFontSize(18),
    },
    blockButtonContainer: {
      backgroundColor: "#f00",
    },
  });

  const handleGoBack = () => {
    try {
      navigation.goBack();
    } catch (err) {}
  };

  const getInfoTitle = () => {
    return user.role === "driver"
      ? i18n("driverInfo")
      : user.role === "passenger"
      ? i18n("passengerInfo")
      : i18n("adminInfo");
  };

  return (
    <SafeAreaView style={styles.container}>
      <DefaultScreenTitle title={i18n("searchUser")} onPrev={handleGoBack} />

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <InputIcon
          title={i18n("emailOrPhone")}
          placeholder={i18n("emailOrPhone")}
          Icon={() => <Feather name="search" style={styles.icon} />}
          keyboardType="email-address"
        />

        <PopupConfirm
          title={i18n("popupBlockUserTitle")}
          subtitle={i18n("popupBlockUserSubtitle")}
          hint={i18n("popupBlockUserHint")}
          visible={showPopupConfirm}
          onClose={() => setShowPopupConfirm(false)}
          onConfirm={() => setShowPopupConfirm(false)}
        />

        {!!user && (
          <>
            <Text style={styles.infoTitle}>{getInfoTitle()}</Text>

            <InputIcon
              title={i18n("firstname")}
              placeholder={i18n("firstname")}
              Icon={() => <Feather name="search" style={styles.icon} />}
            />

            <InputIcon
              title={i18n("lastname")}
              placeholder={i18n("lastname")}
              Icon={() => <Feather name="search" style={styles.icon} />}
            />

            <InputIcon
              title={i18n("email")}
              placeholder={i18n("email")}
              Icon={() => <Feather name="search" style={styles.icon} />}
              keyboardType="email-address"
            />

            <PhoneInput title={i18n("phone")} />

            <SelectInput
              title={i18n("gender")}
              value={i18n(user.gender)}
              options={data.genders.map((g) => ({ key: g, value: i18n(g) }))}
              placeholder={i18n("gender")}
            />

            {user.role !== "admin" && (
              <>
                <InputIcon
                  title={i18n("balance")}
                  placeholder={i18n("balance")}
                  Icon={() => <Feather name="search" style={styles.icon} />}
                />

                <InputIcon
                  title={i18n("referralsNumber")}
                  placeholder={i18n("referralsNumber")}
                  Icon={() => <Feather name="search" style={styles.icon} />}
                />
              </>
            )}

            {user.role === "driver" && (
              <>
                <SelectInput
                  title={i18n("carType")}
                  placeholder={i18n("carType")}
                  value={i18n("commercial")}
                  options={data.carTypes.map((type) => ({
                    key: type,
                    value: i18n(type),
                  }))}
                />

                <InputIcon
                  title={i18n("driverProfitRate")}
                  placeholder={i18n("driverProfitRate")}
                  Icon={() => <Feather name="search" style={styles.icon} />}
                  keyboardType="number-pad"
                />
              </>
            )}

            <View style={styles.buttonsContainer}>
              <CustomButton
                text={i18n("saveUser")}
                textStyle={styles.buttonText}
              />

              <CustomButton
                text={i18n("blockUser")}
                containerStyle={styles.blockButtonContainer}
                textStyle={styles.buttonText}
                onPress={() => setShowPopupConfirm(true)}
              />
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
