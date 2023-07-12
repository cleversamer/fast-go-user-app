import { useState } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import useScreen from "../../hooks/useScreen";
import * as theme from "../../constants/theme";
import DefaultScreenTitle from "../../components/screenTitles/DefaultScreenTitle";
import useLocale from "../../hooks/useLocale";
import CustomButton from "../../components/buttons/CustomButton";
import * as usersApi from "../../api/user/users";
import PopupLoading from "../../components/popups/PopupLoading";
import PopupError from "../../components/popups/PopupError";
import downloadFile from "../../utils/downloadFile";

export default function ExcelExportScreen({ navigation }) {
  const screen = useScreen();
  const { i18n, lang } = useLocale();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
    buttonContainer: {
      width: screen.getHorizontalPixelSize(150),
    },
    buttonText: {
      fontFamily: "cairo-800",
      fontSize: screen.getResponsiveFontSize(16),
    },
  });

  const handleDownloadFile = async () => {
    try {
      setLoading(true);
      const res = await usersApi.exportUsersToExcel();

      const fileName = `fastgo_users_${Date.now()}.xlsx`;
      await downloadFile(res.data.url, fileName, "file/xlsx");

      setLoading(false);
    } catch (err) {
      setLoading(false);
      const message =
        err?.response?.data?.message?.[lang] || i18n("networkError");
      setError(message);
    }
  };

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

      <PopupLoading visible={loading} />

      <PopupError
        onClose={() => setError("")}
        visible={!!error}
        message={error}
      />

      <View style={styles.contentContainer}>
        <MaterialCommunityIcons
          name="microsoft-excel"
          style={styles.excelIcon}
        />

        <CustomButton
          text={i18n("downloadFile")}
          containerStyle={styles.buttonContainer}
          textStyle={styles.buttonText}
          onPress={handleDownloadFile}
        />
      </View>
    </SafeAreaView>
  );
}
