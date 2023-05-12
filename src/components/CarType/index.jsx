import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import * as theme from "../../constants/theme";

export default function CarType({ amount, title, image, selected, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, selected ? styles.selected : {}]}
    >
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
  selected: {
    backgroundColor: theme.primaryColorLight,
    borderRadius: 15,
    padding: 3,
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
