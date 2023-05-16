import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
} from "react-native";
import NotificationsScreenTitle from "../../components/notificationsScreenTitle";
import Notification from "../../components/notification";
import useLocale from "../../hooks/useLocale";

const notifications = [
  {
    title: {
      en: "Notification title",
      ar: "عنوان الاشعار",
    },
    body: {
      en: "Notification body",
      ar: "محتوى الاشعار محتوى الاشعار",
    },
    photoURL: "",
    seen: true,
    date: "2023-05-16T15:00:00.446Z",
    data: {
      screen: "home",
      id: "",
    },
  },
  {
    title: {
      en: "Notification title",
      ar: "عنوان الاشعار",
    },
    body: {
      en: "Notification body",
      ar: "محتوى الاشعار",
    },
    photoURL: "",
    seen: false,
    date: "2023-05-16T15:00:00.446Z",
    data: {
      screen: "home",
      id: "",
    },
  },
  {
    title: {
      en: "Notification title",
      ar: "عنوان الاشعار",
    },
    body: {
      en: "Notification body",
      ar: "محتوى الاشعار",
    },
    photoURL: "",
    seen: false,
    date: "2023-05-16T15:00:00.446Z",
    data: {
      screen: "home",
      id: "",
    },
  },
  {
    title: {
      en: "Notification title",
      ar: "عنوان الاشعار",
    },
    body: {
      en: "Notification body",
      ar: "محتوى الاشعار",
    },
    photoURL: "",
    seen: false,
    date: "2023-05-16T15:00:00.446Z",
    data: {
      screen: "home",
      id: "",
    },
  },
  {
    title: {
      en: "Notification title",
      ar: "عنوان الاشعار",
    },
    body: {
      en: "Notification body",
      ar: "محتوى الاشعار",
    },
    photoURL: "",
    seen: false,
    date: "2023-05-16T15:00:00.446Z",
    data: {
      screen: "home",
      id: "",
    },
  },
  {
    title: {
      en: "Notification title",
      ar: "عنوان الاشعار",
    },
    body: {
      en: "Notification body",
      ar: "محتوى الاشعار",
    },
    photoURL: "",
    seen: false,
    date: "2023-05-16T15:00:00.446Z",
    data: {
      screen: "home",
      id: "",
    },
  },
];

export default function NotificationsScreen({ navigation }) {
  const { i18n, lang } = useLocale();

  const handleToggleNotifications = () => {};

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <NotificationsScreenTitle
        title={i18n("notifications")}
        onPrev={handleGoBack}
        onToggleNotifications={handleToggleNotifications}
      />

      {!!notifications.length && (
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.notificationsContainer}>
            {notifications.map((notification, index) => (
              <Notification key={index} notification={notification} />
            ))}
          </View>
        </ScrollView>
      )}

      {!notifications.length && (
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
