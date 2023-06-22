import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as theme from "../../constants/theme";
import useLocale from "../../hooks/useLocale";
import useScreen from "../../hooks/useScreen";

export default function ScreenSteps({
  containerStyle,
  onNext,
  onPrev,
  showNext = true,
  showPrev = true,
  disableNext,
  nextButtonTitle,
}) {
  const screen = useScreen();
  const { lang, i18n } = useLocale();

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
      paddingVertical: screen.getVerticalPixelSize(10),
      paddingHorizontal: screen.getHorizontalPixelSize(10),
      backgroundColor: theme.primaryColor,
      borderRadius: 100,
    },
    prevButtonIcon: {
      color: "#fff",
      fontSize: screen.getResponsiveFontSize(24),
      fontFamily: "cairo-400",
    },
    activeNextButtonContainer: {
      gap: screen.getHorizontalPixelSize(7),
      backgroundColor: theme.primaryColor,
      borderRadius: 100,
      paddingHorizontal: screen.getHorizontalPixelSize(20),
      paddingVertical: screen.getVerticalPixelSize(10),
    },
    disabledNextButtonContainer: {
      gap: screen.getHorizontalPixelSize(7),
      backgroundColor: "#747474",
      borderRadius: 100,
      paddingHorizontal: screen.getHorizontalPixelSize(20),
      paddingVertical: screen.getVerticalPixelSize(10),
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
      fontSize: screen.getResponsiveFontSize(15),
      fontFamily: "cairo-700",
    },
    nextButtonIcon: {
      color: "#fff",
      fontSize: screen.getResponsiveFontSize(24),
      fontFamily: "cairo-400",
    },
  });

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
            <Text style={styles.nextButtonText}>
              {nextButtonTitle || i18n("next")}
            </Text>
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
