import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
} from "react-native";
import NotificationsScreenTitle from "../../components/screenTitles/NotificationsScreenTitle";
import Notification from "../../components/common/Notification";
import useLocale from "../../hooks/useLocale";
import NetworkStatusLine from "../../components/common/NetworkStatusLine";
import screens from "../../static/screens.json";
import useAuth from "../../auth/useAuth";

export default function NotificationsScreen({ navigation }) {
  const { user } = useAuth();
  const { i18n } = useLocale();

  const handleToggleNotifications = () => {};

  const handleGoBack = () => {
    try {
      navigation.goBack();
    } catch (err) {}
  };

  const handleNotificationPress = (notification) => () => {
    try {
      navigation.navigate(screens[notification.data.screen]);
    } catch (err) {}
  };

  return (
    <SafeAreaView style={styles.container}>
      <NetworkStatusLine />

      <NotificationsScreenTitle
        title={i18n("notifications")}
        onPrev={handleGoBack}
        onToggleNotifications={handleToggleNotifications}
      />

      {!!user?.notifications?.list?.length && (
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.notificationsContainer}>
            {user?.notifications?.list?.map?.((notification, index) => (
              <Notification
                key={index}
                notification={notification}
                onPress={handleNotificationPress(notification)}
              />
            ))}
          </View>
        </ScrollView>
      )}

      {!user?.notifications?.list?.length && (
        <View style={styles.emptyNotificationsContainer}>
          <Image
            source={require("../../assets/images/empty-notifications.png")}
            resizeMode="contain"
            style={styles.emptyImage}
          />

          <Text style={styles.emptyText}>لا يوجد إشعارات حتى الآن</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 50,
  },
  notificationsContainer: {
    flex: 1,
    gap: 10,
    marginTop: 20,
  },
  emptyNotificationsContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
  },
  emptyImage: {
    alignSelf: "center",
    width: 200,
    height: 200,
  },
  emptyText: {
    fontFamily: "cairo-700",
    fontSize: 15,
  },
});
