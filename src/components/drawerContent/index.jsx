import { StyleSheet, View } from "react-native";
import DrawerHeader from "./DrawerHeader";
import DrawerItems from "./DrawerItems";
import Copyrights from "./Copyrights";

export default function DrawerContent(props) {
  return (
    <View style={styles.container} {...props}>
      <DrawerHeader />
      <DrawerItems />
      <Copyrights />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
});
