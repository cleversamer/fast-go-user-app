import { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  ActivityIndicator,
} from "react-native";
import useScreen from "../../hooks/useScreen";
import useLocale from "../../hooks/useLocale";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import * as theme from "../../constants/theme";
import InputIcon from "../../components/inputs/InputIcon";
import CustomButton from "../../components/buttons/CustomButton";
import PaymentCard from "../../components/admin/PaymentCard";
import PaymentCardsScreenTitle from "../../components/screenTitles/PaymentCardsScreenTitle";
import PopupForm from "../../components/popups/PopupForm";
import * as paymentCardsApi from "../../api/user/paymentCards";
import PopupLoading from "../../components/popups/PopupLoading";
import PopupError from "../../components/popups/PopupError";

export default function PaymentCardsScreen({ navigation }) {
  const screen = useScreen();
  const { i18n, lang } = useLocale();
  const [popupForm, setPopupForm] = useState({
    visible: false,
    balance: 0,
    count: 0,
  });
  const [paymentCards, setPaymentCards] = useState({ list: [], loading: true });
  const [context, setContext] = useState({ code: "", balance: 0 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!paymentCards.loading) {
      setPaymentCards({ ...paymentCards, loading: true });
    }

    paymentCardsApi
      .getAllPaymentCards(1, 50)
      .then((res) => {
        setPaymentCards({ list: res.data.paymentCards, loading: false });
      })
      .catch(() => {
        setPaymentCards({ list: [], loading: false });
      });
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      gap: screen.getVerticalPixelSize(15),
      paddingHorizontal: screen.getHorizontalPixelSize(15),
      paddingVertical: screen.getVerticalPixelSize(15),
      paddingTop: screen.getVerticalPixelSize(50),
    },
    contentContainer: {
      gap: screen.getVerticalPixelSize(17),
      marginTop: screen.getVerticalPixelSize(15),
      paddingBottom: screen.getVerticalPixelSize(50),
    },
    arIcon: {
      marginRight: screen.getHorizontalPixelSize(10),
      fontSize: screen.getResponsiveFontSize(24),
      color: theme.primaryColor,
    },
    enIcon: {
      marginLeft: screen.getHorizontalPixelSize(10),
      fontSize: screen.getResponsiveFontSize(24),
      color: theme.primaryColor,
    },
    buttonText: {
      fontFamily: "cairo-700",
      fontSize: screen.getResponsiveFontSize(16),
    },
    paymentCardsTitle: {
      marginTop: screen.getVerticalPixelSize(10),
      marginBottom: screen.getVerticalPixelSize(5),
      fontFamily: "cairo-700",
      fontSize: screen.getResponsiveFontSize(16),
    },
    noPaymentCardsText: {
      fontFamily: "cairo-600",
      fontSize: screen.getResponsiveFontSize(14),
      textAlign: lang === "ar" ? "right" : "left",
    },
  });

  const handleAddPaymentCard = async () => {
    try {
      if (loading) return;
      setLoading(true);

      const { code, balance } = context;
      const res = await paymentCardsApi.addPaymentCard(code, parseInt(balance));

      setPaymentCards({
        list: [res.data, ...paymentCards.list],
        loading: false,
      });

      setContext({ balance: 0, code: "" });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      const message =
        err?.response?.data?.message?.[lang] || i18n("networkError");
      setError(message);
    }
  };

  const handleDeletePaymentCard = async (paymentCard) => {
    try {
      if (loading) return;
      setLoading(true);

      const res = await paymentCardsApi.deletePaymentCard(paymentCard._id);

      const newPaymentCards = [...paymentCards.list];
      const index = newPaymentCards.findIndex((c) => c._id === res.data._id);
      if (index >= 0) {
        newPaymentCards.splice(index, 1);
        setPaymentCards({ list: newPaymentCards, loading: false });
      }

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

  const renderPaymentCard = (item, index) => {
    return (
      <PaymentCard
        key={index}
        paymentCard={item}
        showBreakline={index < paymentCards.list.length - 1}
        onDelete={() => handleDeletePaymentCard(item)}
      />
    );
  };

  const handlePopupFormSubmit = async () => {
    try {
      if (loading) return;
      setPopupForm({ visible: false, balance: 0, count: 0 });
      setLoading(true);

      const { balance, count } = popupForm;
      await paymentCardsApi.autoAddPaymentCards(
        parseInt(balance),
        parseInt(count)
      );

      setLoading(false);
    } catch (err) {
      setLoading(false);
      const message =
        err?.response?.data?.message?.[lang] || i18n("networkError");
      setError(message);
    }
  };

  const checkIfAddButtonDisabled = () => {
    const { code, balance } = context;
    return code.length !== 14 || balance < 20 || balance > 1000;
  };

  const handleFormChange = (key) => (value) => {
    try {
      if (key === "code" && value.length > 14) {
        return;
      }

      setContext({ ...context, [key]: value });
    } catch (err) {}
  };

  const handlePopupFormChange = (key) => (value) => {
    try {
      setPopupForm({ ...popupForm, [key]: value });
    } catch (err) {}
  };

  return (
    <SafeAreaView style={styles.container}>
      <PaymentCardsScreenTitle
        title={i18n("paymentCards")}
        onPrev={handleGoBack}
        onButtonPress={() => setPopupForm(true)}
      />

      <PopupLoading visible={loading} />

      <PopupError
        onClose={() => setError("")}
        visible={!!error}
        message={error}
      />

      <PopupForm
        visible={popupForm.visible}
        title={i18n("autoCode")}
        onClose={() =>
          setPopupForm({
            visible: false,
            balance: 0,
            count: 0,
          })
        }
        onConfirm={handlePopupFormSubmit}
      >
        <InputIcon
          title={i18n("cardsCount")}
          placeholder={i18n("cardsCount")}
          keyboardType="number-pad"
          value={popupForm.count}
          onChange={handlePopupFormChange("count")}
          Icon={() => (
            <Entypo
              name="credit-card"
              style={lang === "ar" ? styles.arIcon : styles.enIcon}
            />
          )}
        />

        <InputIcon
          title={i18n("cardBalance")}
          placeholder={i18n("cardBalance")}
          keyboardType="number-pad"
          value={popupForm.balance}
          onChange={handlePopupFormChange("balance")}
          Icon={() => (
            <Entypo
              name="credit-card"
              style={lang === "ar" ? styles.arIcon : styles.enIcon}
            />
          )}
        />
      </PopupForm>

      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <InputIcon
          title={i18n("cardCode")}
          placeholder={i18n("cardCode")}
          value={context.code}
          onChange={handleFormChange("code")}
          Icon={() => (
            <Entypo
              name="credit-card"
              style={lang === "ar" ? styles.arIcon : styles.enIcon}
            />
          )}
        />

        <InputIcon
          title={i18n("cardBalance")}
          placeholder={i18n("cardBalance")}
          value={`${context.balance}`}
          onChange={handleFormChange("balance")}
          keyboardType="number-pad"
          Icon={() => (
            <FontAwesome
              name="dollar"
              style={lang === "ar" ? styles.arIcon : styles.enIcon}
            />
          )}
        />

        <CustomButton
          text={i18n("add")}
          textStyle={styles.buttonText}
          onPress={handleAddPaymentCard}
          disabled={checkIfAddButtonDisabled()}
        />

        <Text style={styles.paymentCardsTitle}>{i18n("paymentCards")}</Text>

        {paymentCards.loading ? (
          <ActivityIndicator
            animating={true}
            size="large"
            color={theme.primaryColor}
          />
        ) : paymentCards.list.length ? (
          paymentCards.list.map(renderPaymentCard)
        ) : (
          <Text style={styles.noPaymentCardsText}>
            {i18n("noPaymentCards")}
          </Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
