import { StyleSheet, View, Image, StatusBar } from "react-native";

export default function SplashScreen({ screen }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight || 0,
      justifyContent: "center",
      alignItems: "center",
    },
    logo: {
      width: screen.width * 0.781333333,
      height: screen.width * 0.781333333 * 0.235,
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <Image
        source={require("../../assets/icons/logo.png")}
        resizeMode="contain"
        style={styles.logo}
      />
    </View>
  );
}
