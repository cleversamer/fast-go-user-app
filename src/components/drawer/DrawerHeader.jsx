import { TouchableOpacity, StyleSheet, View, Text, Image } from "react-native";
import * as theme from "../../constants/theme";
import useDateTimer from "../../hooks/useDateTimer";
import useLocale from "../../hooks/useLocale";
import useAuth from "../../auth/useAuth";
import useScreen from "../../hooks/useScreen";

export default function DrawerHeader({ navigation }) {
  const screen = useScreen();
  const { user } = useAuth();
  const { i18n, lang } = useLocale();
  const { value: lastLogin } = useDateTimer(user.lastLogin, lang, [lang, user]);

  const styles = StyleSheet.create({
    arContainer: {
      width: "100%",
      height: screen.getVerticalPixelSize(160),
      backgroundColor: theme.primaryColor,
      justifyContent: "flex-end",
      alignItems: "flex-end",
      paddingVertical: screen.getVerticalPixelSize(15),
      paddingHorizontal: screen.getHorizontalPixelSize(15),
      gap: screen.getVerticalPixelSize(10),
    },
    enContainer: {
      width: "100%",
      height: screen.getVerticalPixelSize(160),
      backgroundColor: theme.primaryColor,
      justifyContent: "flex-end",
      alignItems: "flex-start",
      paddingVertical: screen.getVerticalPixelSize(15),
      paddingHorizontal: screen.getHorizontalPixelSize(15),
      gap: screen.getVerticalPixelSize(10),
    },
    arUserInfoContainer: {
      gap: screen.getHorizontalPixelSize(7),
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "flex-end",
    },
    enUserInfoContainer: {
      gap: screen.getHorizontalPixelSize(7),
      flexDirection: "row-reverse",
      alignItems: "flex-end",
      justifyContent: "flex-end",
    },
    welcomingContainer: {
      gap: screen.getVerticalPixelSize(7),
      height: screen.getVerticalPixelSize(70),
      justifyContent: "center",
    },
    welcomingMssg: {
      fontFamily: "cairo-700",
      fontSize: 12,
      color: "#fff",
    },
    userName: {
      fontFamily: "cairo-700",
      fontSize: 15,
      color: "#fff",
    },
    avatar: {
      backgroundColor: "#fff",
      paddingVertical: screen.getVerticalPixelSize(10),
      paddingHorizontal: screen.getHorizontalPixelSize(10),
      borderRadius: 8,
      width: screen.getHorizontalPixelSize(65),
      height: screen.getVerticalPixelSize(65),
    },
    lastLoginText: {
      fontFamily: "cairo-700",
      fontSize: 12,
      color: "#fff",
    },
  });

  const getWelcomingMssg = () => {
    try {
      const currentHour = new Date().getHours();
      return currentHour < 12 ? i18n("goodMorning") : i18n("goodEvening");
    } catch (err) {
      return i18n("welcome");
    }
  };

  const handleAvatarPress = () => {
    try {
      navigation.navigate("ProfileScreen");
    } catch (err) {}
  };

  const getAvatarSource = () => {
    try {
      if (user.avatarURL) {
        return { uri: user.avatarURL };
      }

      return require("../../assets/images/avatar.png");
    } catch (err) {
      return require("../../assets/images/avatar.png");
    }
  };

  return (
    <View style={lang === "ar" ? styles.arContainer : styles.enContainer}>
      <View
        style={
          lang === "ar"
            ? styles.arUserInfoContainer
            : styles.enUserInfoContainer
        }
      >
        <View style={styles.welcomingContainer}>
          <Text style={styles.welcomingMssg}>{getWelcomingMssg()}</Text>

          <Text style={styles.userName}>
            {user.firstName} {user.lastName}
          </Text>
        </View>

        <TouchableOpacity onPress={handleAvatarPress}>
          <Image
            source={getAvatarSource()}
            resizeMode="contain"
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.lastLoginText}>
        {i18n("lastLogin")} {lastLogin}
      </Text>
    </View>
  );
}
