import { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import useScreen from "../../hooks/useScreen";
import useLocale from "../../hooks/useLocale";
import DefaultScreenTitle from "../../components/screenTitles/DefaultScreenTitle";
import InputIcon from "../../components/inputs/InputIcon";
import TextAreaInput from "../../components/inputs/TextAreaInput";
import CustomButton from "../../components/buttons/CustomButton";
import * as usersApi from "../../api/user/users";
import PopupLoading from "../../components/popups/PopupLoading";
import PopupError from "../../components/popups/PopupError";

export default function SendNotificationScreen({ navigation }) {
  const screen = useScreen();
  const { i18n, lang } = useLocale();
  const [context, setContext] = useState({ title: "", body: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

  const handleSendNotification = async () => {
    try {
      setLoading(true);

      const { title, body } = context;
      const res = await usersApi.sendNotification([], title, title, body, body);

      setContext({ title: "", body: "" });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      const error =
        err?.response?.data?.message?.[lang] || i18n("networkError");
      setError(error);
    }
  };

  const handleGoBack = () => {
    try {
      navigation.goBack();
    } catch (err) {}
  };

  const handleKeyChange = (key) => (value) => {
    try {
      if (key === "title" && value.length > 128) return;
      if (key === "body" && value.length > 256) return;
      setContext({ ...context, [key]: value });
    } catch (err) {}
  };

  const checkIfButtonDisabled = () => {
    try {
      const { title, body } = context;
      return (
        title.length < 3 ||
        title.length > 128 ||
        body.length < 3 ||
        body.length > 256
      );
    } catch (err) {
      return false;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <DefaultScreenTitle
        title={i18n("sendNotification")}
        onPrev={handleGoBack}
      />

      <PopupLoading visible={loading} />

      <PopupError
        visible={!!error}
        onClose={() => setError("")}
        message={error}
      />

      <InputIcon
        title={i18n("notificationTitle")}
        placeholder={i18n("notificationTitle")}
        value={context.title}
        onChange={handleKeyChange("title")}
      />

      <TextAreaInput
        title={i18n("notificationBody")}
        placeholder={i18n("notificationBody")}
        value={context.body}
        onChange={handleKeyChange("body")}
      />

      <CustomButton
        text={i18n("send")}
        textStyle={styles.buttonText}
        disabled={checkIfButtonDisabled()}
        onPress={handleSendNotification}
      />
    </SafeAreaView>
  );
}
