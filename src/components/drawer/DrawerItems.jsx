import { useEffect, useState } from "react";
import { StyleSheet, ScrollView, Linking } from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";
import DrawerItem from "./DrawerItem";
import useAuth from "../../auth/useAuth";
import useLocale from "../../hooks/useLocale";
import PopupError from "../popups/PopupError";
import PopupConfirm from "../popups/PopupConfirm";
import screens from "../../static/screens.json";
import useScreen from "../../hooks/useScreen";
import * as usersApi from "../../api/user/users";

export default function DrawerItems({ navigation }) {
  const screen = useScreen();
  const { user, displayMode, returnToDriver, switchToPassenger, logout } =
    useAuth();
  const { switchLang, i18n } = useLocale();
  const [showPopupError, setShowPopupError] = useState(false);
  const [showPopupConfirm, setShowPopupConfirm] = useState(false);

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: screen.getHorizontalPixelSize(10),
      paddingVertical: screen.getVerticalPixelSize(10),
    },
    itemIcon: {
      width: 30,
      textAlign: "center",
      color: "#747474",
      fontSize: screen.getResponsiveFontSize(28),
    },
  });

  const navigateTo = (screen) => () => {
    try {
      navigation.navigate(screen);
    } catch (err) {}
  };

  const openWhatsAppChat = () => {
    try {
      const phoneNumber = "+971544274978";
      const url = `whatsapp://send?phone=${phoneNumber}`;

      Linking.canOpenURL(url)
        .then((supported) => {
          if (!supported) {
            setShowPopupError(true);
          } else {
            return Linking.openURL(url);
          }
        })
        .catch((err) => {
          setShowPopupError(true);
        });
    } catch (err) {
      setShowPopupError(true);
    }
  };

  const handleSwitchLanguage = async () => {
    try {
      switchLang();
      await usersApi.switchLanguage();
    } catch (err) {}
  };

  const getUnseenNotificationsCount = () => {
    try {
      return user?.notifications?.list?.filter?.((n) => !n.seen).length || 0;
    } catch (err) {
      return 0;
    }
  };

  const checkIfPassenger = () => {
    try {
      return user.role === "passenger" || displayMode === "passenger";
    } catch (err) {
      return true;
    }
  };

  const checkIfDriver = () => {
    try {
      return user.role === "driver" && displayMode !== "passenger";
    } catch (err) {
      return true;
    }
  };

  const checkIfDriverInPassengerMode = () => {
    try {
      return user.role === "driver" && displayMode === "passenger";
    } catch (err) {
      return true;
    }
  };

  return (
    <ScrollView
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <PopupError
        visible={showPopupError}
        onClose={() => setShowPopupError(false)}
        message={i18n("whatsAppNotInstalled")}
      />

      <PopupConfirm
        title={i18n("popupLogoutTitle")}
        subtitle={i18n("popupLogoutSubtitle")}
        hint={i18n("popupLogoutHint")}
        visible={showPopupConfirm}
        onClose={() => setShowPopupConfirm(false)}
        onConfirm={logout}
      />

      <DrawerItem
        title={i18n("profile")}
        onPress={navigateTo(screens.profile)}
        Icon={() => <Ionicons name="person" style={styles.itemIcon} />}
      />

      <DrawerItem
        title={i18n("notifications")}
        onPress={navigateTo(screens.notifications)}
        badge
        badgeCount={getUnseenNotificationsCount() || 0}
        Icon={() => <Ionicons name="notifications" style={styles.itemIcon} />}
      />

      {checkIfDriver() && (
        <DrawerItem
          title={i18n("tripsHistory")}
          onPress={navigateTo(screens.tripsHistory)}
          Icon={() => (
            <MaterialCommunityIcons name="steering" style={styles.itemIcon} />
          )}
        />
      )}

      {checkIfPassenger() && (
        <DrawerItem
          title={i18n("challenges")}
          onPress={navigateTo(screens.challenges)}
          Icon={() => (
            <MaterialCommunityIcons
              name="google-analytics"
              style={styles.itemIcon}
            />
          )}
        />
      )}

      {checkIfPassenger() && (
        <DrawerItem
          title={i18n("savedPlaces")}
          onPress={navigateTo(screens.savedPlaces)}
          Icon={() => <Ionicons name="compass" style={styles.itemIcon} />}
        />
      )}

      {checkIfPassenger() && (
        <DrawerItem
          title={i18n("reservedTrips")}
          onPress={navigateTo(screens.reservedTrips)}
          Icon={() => (
            <FontAwesome5 name="calendar-alt" style={styles.itemIcon} />
          )}
        />
      )}

      <DrawerItem
        title={i18n("wallet")}
        onPress={navigateTo(screens.wallet)}
        Icon={() => <FontAwesome name="dollar" style={styles.itemIcon} />}
      />

      <DrawerItem
        title={i18n("earnMore")}
        onPress={navigateTo(screens.earnMore)}
        Icon={() => <FontAwesome5 name="gift" style={styles.itemIcon} />}
      />

      <DrawerItem
        title={i18n("switchLang")}
        onPress={handleSwitchLanguage}
        Icon={() => (
          <MaterialCommunityIcons
            name="google-translate"
            style={styles.itemIcon}
          />
        )}
      />

      <DrawerItem
        title={i18n("contactWhatsapp")}
        onPress={openWhatsAppChat}
        Icon={() => <FontAwesome5 name="whatsapp" style={styles.itemIcon} />}
      />

      <DrawerItem
        title={i18n("about")}
        onPress={navigateTo(screens.about)}
        Icon={() => <FontAwesome5 name="info-circle" style={styles.itemIcon} />}
      />

      <DrawerItem
        title={i18n("logout")}
        onPress={() => setShowPopupConfirm(true)}
        Icon={() => (
          <MaterialCommunityIcons name="logout" style={styles.itemIcon} />
        )}
      />

      {checkIfDriver() && (
        <DrawerItem
          title={i18n("switchToPassenger")}
          onPress={switchToPassenger}
          Icon={() => (
            <MaterialCommunityIcons name="steering" style={styles.itemIcon} />
          )}
        />
      )}

      {checkIfDriverInPassengerMode() && (
        <DrawerItem
          title={i18n("returnToDriver")}
          onPress={returnToDriver}
          Icon={() => (
            <MaterialCommunityIcons name="steering" style={styles.itemIcon} />
          )}
        />
      )}
    </ScrollView>
  );
}
