import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

export default function CarType({ amount, title, image }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.amount}>{amount} LYD</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Image source={image} style={styles.image} resizeMode="contain" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  amount: {
    fontFamily: "cairo-600",
    fontSize: 15,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  title: {
    fontFamily: "cairo-600",
    fontSize: 15,
  },
  image: {
    width: 45,
    height: 45,
  },
});
