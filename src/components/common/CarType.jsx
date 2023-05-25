import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import * as theme from "../../constants/theme";
import useScreen from "../../hooks/useScreen";

export default function CarType({ amount, title, image, selected, onPress }) {
  const screen = useScreen();

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    selected: {
      backgroundColor: theme.primaryColorLight,
      borderRadius: 15,
      paddingVertical: screen.getVerticalPixelSize(3),
      paddingHorizontal: screen.getHorizontalPixelSize(3),
    },
    amount: {
      fontFamily: "cairo-600",
      fontSize: 15,
    },
    infoContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: screen.getHorizontalPixelSize(15),
    },
    title: {
      fontFamily: "cairo-600",
      fontSize: 15,
      textTransform: "capitalize",
    },
    image: {
      width: screen.getHorizontalPixelSize(45),
      height: screen.getVerticalPixelSize(45),
    },
  });

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
