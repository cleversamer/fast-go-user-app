import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import * as theme from "../../constants/theme";

export default function DrawerItem({
  Icon,
  title,
  onPress,
  badge,
  badgeCount,
}) {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      {badge && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeCount}>{badgeCount}</Text>
        </View>
      )}

      <Text style={styles.itemTitle}>{title}</Text>
      <Icon />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: "100%",
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 10,
    marginBottom: 7,
  },
  badgeContainer: {
    marginRight: "auto",
    backgroundColor: theme.primaryColor,
    width: 30,
    height: 30,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeCount: {
    color: "#fff",
    fontFamily: "cairo-800",
    fontSize: 16,
  },
  itemTitle: {
    fontFamily: "cairo-600",
    fontSize: 14,
  },
});
