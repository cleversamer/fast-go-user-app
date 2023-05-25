import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as theme from "../../constants/theme";
import useLocale from "../../hooks/useLocale";

export default function ScreenSteps({
  containerStyle,
  onNext,
  onPrev,
  showNext = true,
  showPrev = true,
  disableNext,
}) {
  const { lang, i18n } = useLocale();

  if (!showNext && !showPrev) {
    return null;
  }

  return (
    <View
      style={[
        lang === "ar" ? styles.arContainer : styles.enContainer,
        containerStyle || {},
      ]}
    >
      {showNext && (
        <TouchableOpacity disabled={disableNext} onPress={onNext}>
          <View
            style={[
              disableNext
                ? styles.disabledNextButtonContainer
                : styles.activeNextButtonContainer,
              lang === "ar"
                ? styles.arNextButtonContainer
                : styles.enNextButtonContainer,
            ]}
          >
            <AntDesign
              name={lang === "ar" ? "arrowleft" : "arrowright"}
              style={styles.nextButtonIcon}
            />
            <Text style={styles.nextButtonText}>{i18n("next")}</Text>
          </View>
        </TouchableOpacity>
      )}

      {showPrev && (
        <TouchableOpacity onPress={onPrev}>
          <View style={styles.prevButtonContainer}>
            <AntDesign
              name={lang === "ar" ? "arrowright" : "arrowleft"}
              style={styles.prevButtonIcon}
            />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  arContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  enContainer: {
    flexDirection: "row-reverse",
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
    gap: 7,
    backgroundColor: theme.primaryColor,
    borderRadius: 100,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  disabledNextButtonContainer: {
    gap: 7,
    backgroundColor: "#747474",
    borderRadius: 100,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  arNextButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  enNextButtonContainer: {
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
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
