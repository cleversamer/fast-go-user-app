import { ScrollView, View, StyleSheet } from "react-native";
import * as theme from "../../constants/theme";
import useScreen from "../../hooks/useScreen";

export default function StaticBottomSheet({
  containerStyle,
  contentStyle,
  children,
}) {
  const screen = useScreen();

  const styles = StyleSheet.create({
    container: {
      paddingVertical: screen.getVerticalPixelSize(20),
      paddingHorizontal: screen.getHorizontalPixelSize(10),
      borderTopLeftRadius: screen.getHorizontalPixelSize(25),
      borderTopRightRadius: screen.getHorizontalPixelSize(25),
      backgroundColor: "#fff",
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      width: screen.getScreenWidth(),
    },
    indicatorStyle: {
      alignSelf: "center",
      width: screen.getHorizontalPixelSize(65),
      height: screen.getVerticalPixelSize(6),
      borderRadius: 8,
      backgroundColor: theme.primaryColor,
    },
    contentContainer: {
      paddingVertical: screen.getVerticalPixelSize(10),
      paddingHorizontal: screen.getHorizontalPixelSize(15),
      gap: screen.getVerticalPixelSize(10),
    },
  });

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
