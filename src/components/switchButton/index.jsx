import { View, Switch, StyleSheet } from "react-native";
import * as theme from "../../constants/theme";

const SwitchButton = ({ enabled = true, onToggle }) => {
  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#ccc", true: theme.primaryColor }}
        thumbColor={theme.primaryColor}
        ios_backgroundColor="#747474"
        onValueChange={onToggle}
        value={enabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SwitchButton;
