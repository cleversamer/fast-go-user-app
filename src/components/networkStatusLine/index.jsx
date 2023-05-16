import { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, Text, StatusBar } from "react-native";
import useLocale from "../../hooks/useLocale";
import * as theme from "../../constants/theme";
import useAuth from "../../auth/useAuth";

export default function NetworkStatusLine() {
  const [showComponent, setShowComponent] = useState(true);
  const { i18n } = useLocale();
  const { isOnline } = useAuth();

  useEffect(() => {
    let timeoutId;

    if (isOnline) {
      timeoutId = setTimeout(() => {
        setShowComponent(false);
      }, 2000);
    } else {
      setShowComponent(true);
      clearTimeout(timeoutId);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isOnline]);

  if (!showComponent) {
    return null;
  }

  return (
    <SafeAreaView
      style={[
        styles.container,
        isOnline ? styles.onlineContainer : styles.offlineContainer,
      ]}
    >
      <Text style={styles.text}>
        {isOnline ? i18n("online") : i18n("offline")}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    position: "absolute",
    top: StatusBar.currentHeight || 0,
    left: 0,
    right: 0,
  },
  onlineContainer: {
    backgroundColor: theme.primaryColor,
  },
  offlineContainer: {
    backgroundColor: "#f00",
  },
  text: {
    color: "#fff",
    fontFamily: "cairo-700",
    textAlign: "center",
    fontSize: 13,
  },
});
