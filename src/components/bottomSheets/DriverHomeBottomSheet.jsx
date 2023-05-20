import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import StaticBottomSheet from "./StaticBottomSheet";
import { Ionicons, FontAwesome5, AntDesign } from "@expo/vector-icons";
import useLocale from "../../hooks/useLocale";
import * as theme from "../../constants/theme";

export default function DriverHomeBottomSheet({ isDriverConnected }) {
  const { i18n } = useLocale();

  return (
    <StaticBottomSheet contentStyle={styles.container}>
      <Text
        style={
          isDriverConnected ? styles.titleConnected : styles.titleNotConnected
        }
      >
        {isDriverConnected
          ? i18n("driverConnected")
          : i18n("driverNotConnected")}
      </Text>

      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="notifications" style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer}>
          <FontAwesome5 name="dollar-sign" style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer}>
          <AntDesign name="car" style={styles.activeIcon} />
        </TouchableOpacity>
      </View>
    </StaticBottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 15,
    paddingTop: 20,
    paddingBottom: 30,
  },
  titleConnected: {
    fontFamily: "cairo-700",
    fontSize: 18,
    color: theme.primaryColor,
    textAlign: "center",
  },
  titleNotConnected: {
    fontFamily: "cairo-700",
    fontSize: 18,
    color: "#f00",
    textAlign: "center",
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  iconContainer: {
    padding: 10,
  },
  icon: {
    fontSize: 28,
    color: "#747474",
  },
  activeIcon: {
    fontSize: 28,
    color: theme.primaryColor,
  },
});
