import { TouchableOpacity, StyleSheet, View, Text, Image } from "react-native";
import * as theme from "../../constants/theme";
import useDateTimer from "../../hooks/useDateTimer";

const _lastLogin = new Date();

export default function DrawerHeader({ navigation }) {
  const { value: lastLogin } = useDateTimer(_lastLogin);

  const getWelcomingMssg = () => {
    try {
      const currentHour = new Date().getHours();
      return currentHour < 12 ? "صباح الخير" : "مساء الخير";
    } catch (err) {
      return "مرحبًا بك";
    }
  };

  const handleAvatarPress = () => {
    try {
      navigation.navigate("ProfileScreen");
    } catch (err) {}
  };

  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <View style={styles.welcomingContainer}>
          <Text style={styles.welcomingMssg}>{getWelcomingMssg()}</Text>
          <Text style={styles.userName}>معتز أبو نهيان</Text>
        </View>

        <TouchableOpacity onPress={handleAvatarPress}>
          <Image
            source={require("../../assets/images/avatar.png")}
            resizeMode="contain"
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.lastLoginText}>آخر دخول منذ {lastLogin}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 160,
    backgroundColor: theme.primaryColor,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    alignContent: "flex-end",
    padding: 15,
    gap: 10,
  },
  userInfoContainer: {
    gap: 7,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  welcomingContainer: {
    gap: 7,
    height: 70,
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
    padding: 10,
    borderRadius: 8,
    width: 65,
    height: 65,
  },
  lastLoginText: {
    fontFamily: "cairo-700",
    fontSize: 12,
    color: "#fff",
  },
});
