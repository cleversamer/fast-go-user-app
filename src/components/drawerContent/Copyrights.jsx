import { StyleSheet, View, Text } from "react-native";

export default function Copyrights() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Copyright © 2023 Fast Go</Text>
      <Text style={styles.text}>All rights reserved.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 7,
  },
  text: {
    fontFamily: "cairo-600",
    fontSize: 15,
    color: "#747474",
  },
});
