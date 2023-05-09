import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as theme from "../../constants/theme";

export default function ScreenSteps({
  containerStyle,
  onNext,
  onPrev,
  showNext = true,
  showPrev = true,
  disableNext = false,
}) {
  if (!showNext && !showPrev) {
    return null;
  }

  return (
    <View style={[styles.container, containerStyle || {}]}>
      {showNext && (
        <TouchableOpacity disabled={disableNext} onPress={onNext}>
          <View
            style={
              disableNext
                ? styles.disabledNextButtonContainer
                : styles.activeNextButtonContainer
            }
          >
            <AntDesign name="arrowleft" style={styles.nextButtonIcon} />
            <Text style={styles.nextButtonText}>التالي</Text>
          </View>
        </TouchableOpacity>
      )}

      {showPrev && (
        <TouchableOpacity onPress={onPrev}>
          <View style={styles.prevButtonContainer}>
            <AntDesign name="arrowright" style={styles.prevButtonIcon} />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  prevButtonContainer: {
    padding: 10,
    backgroundColor: theme.primaryColor,
    borderRadius: 100,
  },
  prevButtonIcon: {
    color: "#fff",
    fontSize: 24,
    fontFamily: "cairo-400",
  },
  activeNextButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 7,
    backgroundColor: theme.primaryColor,
    borderRadius: 100,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  disabledNextButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 7,
    backgroundColor: "#747474",
    borderRadius: 100,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 15,
    fontFamily: "cairo-700",
  },
  nextButtonIcon: {
    color: "#fff",
    fontSize: 24,
    fontFamily: "cairo-400",
  },
});
