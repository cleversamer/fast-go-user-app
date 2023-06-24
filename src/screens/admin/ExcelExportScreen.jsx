import { StyleSheet, SafeAreaView, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import useScreen from "../../hooks/useScreen";
import * as theme from "../../constants/theme";
import DefaultScreenTitle from "../../components/screenTitles/DefaultScreenTitle";
import useLocale from "../../hooks/useLocale";
import CustomButton from "../../components/buttons/CustomButton";

export default function ExcelExportScreen({ navigation }) {
  const screen = useScreen();
  const { i18n } = useLocale();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: screen.getHorizontalPixelSize(15),
      paddingVertical: screen.getVerticalPixelSize(15),
      paddingTop: screen.getVerticalPixelSize(50),
      gap: screen.getVerticalPixelSize(15),
    },
    contentContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      gap: screen.getVerticalPixelSize(40),
      marginBottom: screen.getHorizontalPixelSize(100),
    },
    excelIcon: {
      color: theme.primaryColor,
      fontSize: screen.getResponsiveFontSize(120),
    },
    buttonsContainer: {
      flexDirection: "row",
      gap: screen.getHorizontalPixelSize(15),
    },
    buttonContainer: {
      width: screen.getHorizontalPixelSize(150),
    },
    buttonText: {
      fontFamily: "cairo-800",
      fontSize: screen.getResponsiveFontSize(16),
    },
  });

  const handleGoBack = () => {
    try {
      navigation.goBack();
    } catch (err) {}
  };

  return (
    <SafeAreaView style={styles.container}>
      <DefaultScreenTitle
        title={i18n("exportExcelFile")}
        onPrev={handleGoBack}
      />

      <View style={styles.contentContainer}>
        <MaterialCommunityIcons
          name="microsoft-excel"
          style={styles.excelIcon}
        />

        <View style={styles.buttonsContainer}>
          <CustomButton
            text={i18n("openFile")}
            containerStyle={styles.buttonContainer}
            textStyle={styles.buttonText}
          />

          <CustomButton
            text={i18n("saveFile")}
            containerStyle={styles.buttonContainer}
            textStyle={styles.buttonText}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
