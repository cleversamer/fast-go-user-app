import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import StaticBottomSheet from "./StaticBottomSheet";
import { Ionicons, FontAwesome5, AntDesign } from "@expo/vector-icons";
import useLocale from "../../hooks/useLocale";
import * as theme from "../../constants/theme";
import useScreen from "../../hooks/useScreen";

export default function DriverHomeBottomSheet({
  isDriverConnected,
  onWalletClick,
  onNotificationsClick,
}) {
  const screen = useScreen();
  const { i18n } = useLocale();

  const styles = StyleSheet.create({
    container: {
      gap: screen.getVerticalPixelSize(15),
      paddingTop: screen.getVerticalPixelSize(20),
      paddingBottom: screen.getVerticalPixelSize(30),
    },
    titleConnected: {
      fontFamily: "cairo-700",
      fontSize: screen.getResponsiveFontSize(18),
      color: theme.primaryColor,
      textAlign: "center",
    },
    titleNotConnected: {
      fontFamily: "cairo-700",
      fontSize: screen.getResponsiveFontSize(18),
      color: "#f00",
      textAlign: "center",
    },
    iconsContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },
    iconContainer: {
      paddingVertical: screen.getVerticalPixelSize(10),
      paddingHorizontal: screen.getHorizontalPixelSize(10),
    },
    icon: {
      fontSize: screen.getResponsiveFontSize(28),
      color: "#747474",
    },
    activeIcon: {
      fontSize: screen.getResponsiveFontSize(28),
      color: theme.primaryColor,
    },
  });

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
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={onNotificationsClick}
        >
          <Ionicons name="notifications" style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer} onPress={onWalletClick}>
          <FontAwesome5 name="dollar-sign" style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer}>
          <AntDesign name="car" style={styles.activeIcon} />
        </TouchableOpacity>
      </View>
    </StaticBottomSheet>
  );
}
