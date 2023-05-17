import { useState } from "react";
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
import PopupError from "../../components/popup/PopupError";
import PopupConfirm from "../../components/popup/PopupConfirm";

export default function DrawerItems({ navigation }) {
  const { logout } = useAuth();
  const { switchLang, i18n } = useLocale();
  const [showPopupError, setShowPopupError] = useState(false);
  const [showPopupConfirm, setShowPopupConfirm] = useState(false);

  const navigateTo = (screen) => () => {
    try {
      navigation.navigate(screen);
    } catch (err) {}
  };

  const openWhatsAppChat = () => {
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
        onPress={navigateTo("ProfileScreen")}
        Icon={() => <Ionicons name="person" style={styles.itemIcon} />}
      />

      <DrawerItem
        title={i18n("notifications")}
        onPress={navigateTo("NotificationsScreen")}
        badge
        badgeCount={7}
        Icon={() => <Ionicons name="notifications" style={styles.itemIcon} />}
      />

      <DrawerItem
        title={i18n("challenges")}
        onPress={navigateTo("home")}
        Icon={() => (
          <MaterialCommunityIcons
            name="google-analytics"
            style={styles.itemIcon}
          />
        )}
      />

      <DrawerItem
        title={i18n("savedPlaces")}
        onPress={navigateTo("SavedPlacesScreen")}
        Icon={() => <Ionicons name="compass" style={styles.itemIcon} />}
      />

      <DrawerItem
        title={i18n("reservedTrips")}
        onPress={navigateTo("ReservedTripsScreen")}
        Icon={() => (
          <FontAwesome5 name="calendar-alt" style={styles.itemIcon} />
        )}
      />

      <DrawerItem
        title={i18n("wallet")}
        onPress={navigateTo("home")}
        Icon={() => <FontAwesome name="dollar" style={styles.itemIcon} />}
      />

      <DrawerItem
        title={i18n("earnMore")}
        onPress={navigateTo("home")}
        Icon={() => <FontAwesome5 name="gift" style={styles.itemIcon} />}
      />

      <DrawerItem
        title={i18n("switchLang")}
        onPress={switchLang}
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
        onPress={navigateTo("AboutScreen")}
        Icon={() => <FontAwesome5 name="info-circle" style={styles.itemIcon} />}
      />

      <DrawerItem
        title={i18n("logout")}
        onPress={() => setShowPopupConfirm(true)}
        Icon={() => (
          <MaterialCommunityIcons name="logout" style={styles.itemIcon} />
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  itemIcon: {
    width: 30,
    textAlign: "center",
    color: "#747474",
    fontSize: 28,
  },
});
