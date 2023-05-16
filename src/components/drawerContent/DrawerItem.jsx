import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import * as theme from "../../constants/theme";
import useLocale from "../../hooks/useLocale";

export default function DrawerItem({
  Icon,
  title,
  onPress,
  badge,
  badgeCount,
}) {
  const { lang } = useLocale();

  return (
    <TouchableOpacity
      style={lang === "ar" ? styles.arItemContainer : styles.enItemContainer}
      onPress={onPress}
    >
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
  arItemContainer: {
    width: "100%",
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 10,
    marginBottom: 7,
  },
  enItemContainer: {
    width: "100%",
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: "row-reverse",
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
    textTransform: "capitalize",
  },
});
