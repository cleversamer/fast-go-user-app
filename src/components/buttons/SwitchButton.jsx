import { View, Switch, StyleSheet } from "react-native";
import * as theme from "../../constants/theme";

const SwitchButton = ({ enabled, onToggle }) => {
  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#f00", true: theme.primaryColor }}
        thumbColor={enabled ? theme.primaryColor : "#f00"}
        ios_backgroundColor={enabled ? theme.primaryColor : "#f00"}
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
