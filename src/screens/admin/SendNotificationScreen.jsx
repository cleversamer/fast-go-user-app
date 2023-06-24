import { StyleSheet, SafeAreaView } from "react-native";
import useScreen from "../../hooks/useScreen";
import useLocale from "../../hooks/useLocale";
import DefaultScreenTitle from "../../components/screenTitles/DefaultScreenTitle";
import InputIcon from "../../components/inputs/InputIcon";
import TextAreaInput from "../../components/inputs/TextAreaInput";
import CustomButton from "../../components/buttons/CustomButton";

export default function SendNotificationScreen({ navigation }) {
  const screen = useScreen();
  const { i18n } = useLocale();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: screen.getHorizontalPixelSize(15),
      paddingVertical: screen.getVerticalPixelSize(15),
      paddingTop: screen.getVerticalPixelSize(50),
      gap: screen.getVerticalPixelSize(25),
    },
    buttonText: {
      fontFamily: "cairo-800",
      fontSize: screen.getResponsiveFontSize(18),
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
        title={i18n("sendNotification")}
        onPrev={handleGoBack}
      />

      <InputIcon
        title={i18n("notificationTitle")}
        placeholder={i18n("notificationTitle")}
      />

      <TextAreaInput
        title={i18n("notificationBody")}
        placeholder={i18n("notificationBody")}
      />

      <CustomButton text={i18n("send")} textStyle={styles.buttonText} />
    </SafeAreaView>
  );
}
