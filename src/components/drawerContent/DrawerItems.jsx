import { StyleSheet, ScrollView } from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";
import DrawerItem from "./DrawerItem";

export default function DrawerItems({ navigation }) {
  const navigateTo = (screen) => () => {
    try {
      navigation.navigate(screen);
    } catch (err) {}
  };

  return (
    <ScrollView
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <DrawerItem
        title="الملف الشخصي"
        onPress={navigateTo("ProfileScreen")}
        Icon={() => <Ionicons name="person" style={styles.itemIcon} />}
      />

      <DrawerItem
        title="الإشعارات"
        onPress={navigateTo("NotificationsScreen")}
        badge
        badgeCount={7}
        Icon={() => <Ionicons name="notifications" style={styles.itemIcon} />}
      />

      <DrawerItem
        title="التحديات"
        onPress={navigateTo("home")}
        Icon={() => (
          <MaterialCommunityIcons
            name="google-analytics"
            style={styles.itemIcon}
          />
        )}
      />

      <DrawerItem
        title="الأماكن المحفوظة"
        onPress={navigateTo("home")}
        Icon={() => <Ionicons name="compass" style={styles.itemIcon} />}
      />

      <DrawerItem
        title="الرحلات المحجوزة"
        onPress={navigateTo("home")}
        Icon={() => (
          <FontAwesome5 name="calendar-alt" style={styles.itemIcon} />
        )}
      />

      <DrawerItem
        title="المحفظة"
        onPress={navigateTo("home")}
        Icon={() => <FontAwesome name="dollar" style={styles.itemIcon} />}
      />

      <DrawerItem
        title="إكسب أكثر"
        onPress={navigateTo("home")}
        Icon={() => <FontAwesome5 name="gift" style={styles.itemIcon} />}
      />

      <DrawerItem
        title="تغيير اللغة"
        onPress={navigateTo("home")}
        Icon={() => (
          <MaterialCommunityIcons
            name="google-translate"
            style={styles.itemIcon}
          />
        )}
      />

      <DrawerItem
        title="تواصل عبر الواتساب"
        onPress={navigateTo("home")}
        Icon={() => <FontAwesome5 name="whatsapp" style={styles.itemIcon} />}
      />

      <DrawerItem
        title="حول"
        onPress={navigateTo("home")}
        Icon={() => <FontAwesome5 name="info-circle" style={styles.itemIcon} />}
      />

      <DrawerItem
        title="تسجيل الخروج"
        onPress={navigateTo("home")}
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
