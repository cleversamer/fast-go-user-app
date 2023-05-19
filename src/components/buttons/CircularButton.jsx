import { StyleSheet, TouchableOpacity } from "react-native";
import * as theme from "../../constants/theme";

export default function CircularButton({ Icon, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {Icon && <Icon />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.primaryColor,
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});
