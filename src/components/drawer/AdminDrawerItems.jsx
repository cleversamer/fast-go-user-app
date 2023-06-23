import { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
  FontAwesome5,
  Entypo,
  MaterialIcons,
} from "@expo/vector-icons";
import DrawerItem from "./DrawerItem";
import useAuth from "../../auth/useAuth";
import useLocale from "../../hooks/useLocale";
import PopupConfirm from "../popups/PopupConfirm";
import screens from "../../static/screens.json";
import useScreen from "../../hooks/useScreen";
import * as usersApi from "../../api/user/users";

export default function AdminDrawerItems({ navigation }) {
  const screen = useScreen();
  const { user, logout } = useAuth();
  const { switchLang, i18n } = useLocale();
  const [showPopupConfirmLogout, setShowPopupConfirmLogout] = useState(false);

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

  return (
    <ScrollView style={styles.container} showsHorizontalScrollIndicator={false}>
      <PopupConfirm
        title={i18n("popupLogoutTitle")}
        subtitle={i18n("popupLogoutSubtitle")}
        hint={i18n("popupLogoutHint")}
        visible={showPopupConfirmLogout}
        onClose={() => setShowPopupConfirmLogout(false)}
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

      <DrawerItem
        title={i18n("drivers")}
        onPress={navigateTo(screens.drivers)}
        Icon={() => (
          <MaterialCommunityIcons name="taxi" style={styles.itemIcon} />
        )}
      />

      <DrawerItem
        title={i18n("requests")}
        onPress={navigateTo(screens.trips)}
        Icon={() => (
          <MaterialCommunityIcons
            name="file-document-outline"
            style={styles.itemIcon}
          />
        )}
      />

      <DrawerItem
        title={i18n("passengers")}
        onPress={navigateTo(screens.passengers)}
        Icon={() => (
          <MaterialCommunityIcons
            name="seat-passenger"
            style={styles.itemIcon}
          />
        )}
      />

      <DrawerItem
        title={i18n("financialManagement")}
        onPress={navigateTo(screens.financialManagement)}
        Icon={() => <FontAwesome name="dollar" style={styles.itemIcon} />}
      />

      <DrawerItem
        title={i18n("addDriver")}
        onPress={navigateTo(screens.addDriver1)}
        Icon={() => <Entypo name="add-user" style={styles.itemIcon} />}
      />

      <DrawerItem
        title={i18n("regions")}
        onPress={navigateTo(screens.regions)}
        Icon={() => (
          <MaterialIcons name="location-city" style={styles.itemIcon} />
        )}
      />

      <DrawerItem
        title={i18n("challenges")}
        onPress={navigateTo(screens.challengesPanel)}
        Icon={() => (
          <MaterialCommunityIcons
            name="google-analytics"
            style={styles.itemIcon}
          />
        )}
      />

      <DrawerItem
        title={i18n("sendNotification")}
        onPress={navigateTo(screens.challenges)}
        Icon={() => <FontAwesome name="send" style={styles.itemIcon} />}
      />

      <DrawerItem
        title={i18n("searchUser")}
        onPress={navigateTo(screens.challenges)}
        Icon={() => (
          <MaterialIcons name="person-search" style={styles.itemIcon} />
        )}
      />

      <DrawerItem
        title={i18n("exportExcelFile")}
        onPress={navigateTo(screens.challenges)}
        Icon={() => (
          <MaterialCommunityIcons
            name="microsoft-excel"
            style={styles.itemIcon}
          />
        )}
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
        title={i18n("about")}
        onPress={navigateTo(screens.about)}
        Icon={() => <FontAwesome5 name="info-circle" style={styles.itemIcon} />}
      />

      <DrawerItem
        title={i18n("logout")}
        onPress={() => setShowPopupConfirmLogout(true)}
        Icon={() => (
          <MaterialCommunityIcons name="logout" style={styles.itemIcon} />
        )}
      />
    </ScrollView>
  );
}
