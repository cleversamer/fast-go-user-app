import { ScrollView, View, StyleSheet } from "react-native";
import * as theme from "../../constants/theme";

export default function StaticBottomSheet({
  containerStyle,
  contentStyle,
  children,
}) {
  return (
    <View style={[styles.container, containerStyle || {}]}>
      <ScrollView>
        <View style={styles.indicatorStyle}></View>
        <View style={[styles.contentContainer, contentStyle || {}]}>
          {children}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: theme.getWidth(),
  },
  indicatorStyle: {
    alignSelf: "center",
    width: 65,
    height: 6,
    borderRadius: 8,
    backgroundColor: theme.primaryColor,
  },
  contentContainer: {
    padding: 10,
    paddingHorizontal: 15,
    gap: 10,
  },
});
