import { StyleSheet, View, Text } from "react-native";
import DraggableBottomSheet from "./DraggableBottomSheet";
import useLocale from "../../hooks/useLocale";
import CircularAvatar from "../common/CircularAvatar";
import CircularButton from "../buttons/CircularButton";
import { Ionicons } from "@expo/vector-icons";

export default function CallDriverBottomSheet({
  driver,
  onCallInApp,
  onCallOutOfApp,
  visible,
  onClose,
}) {
  const { i18n, lang } = useLocale();

  return (
    <DraggableBottomSheet
      contentStyle={styles.container}
      visible={visible}
      onClose={onClose}
      height={320}
    >
      <View style={styles.avatarContainer}>
        <CircularAvatar url={driver?.avatarURL} />
        <Text style={styles.driverName}>{driver?.name || i18n("unknown")}</Text>
        <Text style={styles.driverCar}>{driver?.car || "Toyota"}</Text>
      </View>

      <View
        style={lang === "ar" ? styles.arInfoContainer : styles.enInfoContainer}
      >
        <View style={styles.buttonContainer}>
          <CircularButton
            Icon={() => (
              <Ionicons name="call-outline" style={styles.callIcon} />
            )}
            onPress={onCallOutOfApp}
          />

          <Text style={styles.buttonTitle}>{i18n("callOutApp")}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <CircularButton
            Icon={() => (
              <Ionicons name="call-outline" style={styles.callIcon} />
            )}
            onPress={onCallInApp}
          />

          <Text style={styles.buttonTitle}>{i18n("callInApp")}</Text>
        </View>
      </View>
    </DraggableBottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 15,
    alignItems: "center",
  },
  avatarContainer: {
    alignItems: "center",
    gap: 7,
  },
  driverName: {
    fontFamily: "cairo-700",
    fontSize: 16,
  },
  driverCar: {
    fontFamily: "cairo-700",
    fontSize: 14,
    color: "#747474",
  },
  arInfoContainer: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  enInfoContainer: {
    alignSelf: "stretch",
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    alignItems: "center",
  },
  callIcon: {
    color: "#fff",
    fontSize: 30,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 7,
  },
  buttonTitle: {
    fontFamily: "cairo-600",
    fontSize: 13,
    color: "#747474",
    textTransform: "capitalize",
  },
});
