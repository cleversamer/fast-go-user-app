import { useState } from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import DefaultScreenTitle from "../../components/screenTitles/DefaultScreenTitle";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import useLocale from "../../hooks/useLocale";
import * as theme from "../../constants/theme";
import NetworkStatusLine from "../../components/common/NetworkStatusLine";
import useAuth from "../../auth/useAuth";
import InputIcon from "../../components/inputs/InputIcon";
import CustomButton from "../../components/buttons/CustomButton";
import PopupConfirm from "../../components/popups/PopupConfirm";
import PopupLoading from "../../components/popups/PopupLoading";
import PopupError from "../../components/popups/PopupError";
import useScreen from "../../hooks/useScreen";
import * as paymentCardsApi from "../../api/user/paymentCards";

export default function WalletScreen({ navigation }) {
  const screen = useScreen();
  const { user, setUser } = useAuth();
  const { i18n, lang } = useLocale();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [paymentCard, setPaymentCard] = useState(null);
  const [code, setCode] = useState("");
  const [popupAddBalance, setPopupAddBalance] = useState({
    visible: false,
    title: i18n("cardBalance"),
    subtitle: "",
    hint: "",
    onConfirm: () => {},
    onClose: () => {},
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: screen.getHorizontalPixelSize(15),
      paddingVertical: screen.getVerticalPixelSize(15),
      paddingTop: screen.getVerticalPixelSize(50),
    },
    arWalletBoxContainer: {
      backgroundColor: theme.primaryColor,
      paddingVertical: screen.getVerticalPixelSize(20),
      paddingHorizontal: screen.getHorizontalPixelSize(15),
      borderRadius: 16,
      height: screen.getVerticalPixelSize(150),
      minHeight: 150,
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginVertical: screen.getVerticalPixelSize(25),
    },
    enWalletBoxContainer: {
      backgroundColor: theme.primaryColor,
      paddingVertical: screen.getVerticalPixelSize(20),
      paddingHorizontal: screen.getHorizontalPixelSize(15),
      borderRadius: 16,
      height: screen.getVerticalPixelSize(150),
      minHeight: 150,
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginVertical: screen.getVerticalPixelSize(25),
    },
    walletBoxTitle: {
      fontFamily: "cairo-800",
      fontSize: screen.getResponsiveFontSize(16),
      color: "#fff",
    },
    arWalletBoxBottomContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: screen.getHorizontalPixelSize(7),
    },
    enWalletBoxBottomContainer: {
      flexDirection: "row-reverse",
      alignItems: "center",
      gap: screen.getHorizontalPixelSize(7),
    },
    balanceText: {
      fontFamily: "cairo-700",
      fontSize: screen.getResponsiveFontSize(26),
      color: "#fff",
    },
    balanceIconContainer: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      borderRadius: 6,
      width: screen.getHorizontalPixelSize(40),
      maxWidth: 40,
      height: screen.getHorizontalPixelSize(40),
      maxHeight: 40,
    },
    balanceIcon: {
      fontSize: screen.getResponsiveFontSize(30),
      color: theme.primaryColor,
    },
    addBalanceFormContainer: {
      gap: screen.getVerticalPixelSize(15),
    },
    addBalanceFormTitle: {
      fontFamily: "cairo-700",
      fontSize: screen.getResponsiveFontSize(20),
      color: theme.primaryColor,
      textTransform: "capitalize",
    },
    arCardIcon: {
      color: theme.primaryColor,
      fontSize: screen.getResponsiveFontSize(24),
      marginRight: screen.getHorizontalPixelSize(10),
    },
    enCardIcon: {
      color: theme.primaryColor,
      fontSize: screen.getResponsiveFontSize(24),
      marginLeft: screen.getHorizontalPixelSize(10),
    },
    buttonText: {
      fontFamily: "cairo-700",
      fontSize: screen.getResponsiveFontSize(20),
    },
    buttonContainer: {
      paddingVertical: screen.getVerticalPixelSize(8),
    },
    popupHint: {
      fontFamily: "cairo-700",
      fontSize: screen.getResponsiveFontSize(18),
      color: theme.primaryColor,
    },
    popupSubtitle: {
      fontFamily: "cairo-700",
      fontSize: screen.getResponsiveFontSize(32),
      color: theme.primaryColor,
    },
  });

  const handleGoBack = () => {
    try {
      navigation.goBack();
    } catch (err) {}
  };

  const mapBalance = (balance = 0) => {
    try {
      // Convert the number to a string with two decimal places
      let formattedNumber = balance.toFixed(2);

      // Split the number into integer and decimal parts
      let parts = formattedNumber.split(".");

      // Add leading zeros to the integer part
      let integerPart = parts[0].padStart(2, "0");

      // Combine the integer part with the decimal part
      return integerPart + "." + parts[1];
    } catch (err) {
      return balance.toFixed(2);
    }
  };

  const handleCodeChange = (code) => {
    try {
      if (code.length > 14) return;
      const alphanumericRegex = /^[a-zA-Z0-9]+$/;
      const isValid = !code || alphanumericRegex.test(code);
      if (isValid) {
        setCode(code);
      }
    } catch (err) {}
  };

  const handleCheckCode = async () => {
    try {
      setIsLoading(true);
      const res = await paymentCardsApi.checkPaymentCard(code);
      setPaymentCard(res.data);
      setIsLoading(false);

      const onClose = () => {
        setPopupAddBalance({ ...popupAddBalance, visible: false });
      };

      const onConfirm = async () => {
        try {
          setPopupAddBalance({ ...popupAddBalance, visible: false });
          setIsLoading(true);
          const { data: card } = await paymentCardsApi.chargePaymentCard(code);
          setIsLoading(false);
          setCode("");
          setUser({ ...user, balance: user.balance + card.balance });
          setPopupAddBalance({
            ...popupAddBalance,
            subtitle: "",
            hint: i18n("balanceAdded"),
            visible: true,
            onConfirm: () =>
              setPopupAddBalance({
                ...popupAddBalance,
                visible: false,
                subtitle: "",
                onConfirm: () => {},
                onClose: () => {},
              }),
            onClose: () =>
              setPopupAddBalance({
                ...popupAddBalance,
                visible: false,
                subtitle: "",
                onConfirm: () => {},
                onClose: () => {},
              }),
          });
        } catch (err) {
          setCode("");
          setIsLoading(false);
          const message =
            err?.response?.data?.message?.[lang] || i18n("networkError");
          setError(message);
        }
      };

      setPopupAddBalance({
        ...popupAddBalance,
        subtitle: `${paymentCard.balance} LYD`,
        visible: true,
        onClose,
        onConfirm,
      });
    } catch (err) {
      setIsLoading(false);
      const message =
        err?.response?.data?.message?.[lang] || i18n("networkError");
      setError(message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <NetworkStatusLine />

      <PopupLoading visible={isLoading} />

      <PopupConfirm
        title={popupAddBalance.title}
        subtitle={popupAddBalance.subtitle}
        hint={popupAddBalance.hint}
        visible={popupAddBalance.visible}
        onClose={popupAddBalance.onClose}
        onConfirm={popupAddBalance.onConfirm}
        subtitleStyle={styles.popupSubtitle}
        hintStyle={styles.popupHint}
      />

      <PopupError
        visible={!!error}
        onClose={() => setError("")}
        message={error}
      />

      <DefaultScreenTitle title={i18n("wallet")} onPrev={handleGoBack} />

      <View
        style={
          lang === "ar"
            ? styles.arWalletBoxContainer
            : styles.enWalletBoxContainer
        }
      >
        <Text style={styles.walletBoxTitle}>{i18n("walletTitle")}</Text>

        <View
          style={
            lang === "ar"
              ? styles.arWalletBoxBottomContainer
              : styles.enWalletBoxBottomContainer
          }
        >
          <Text style={styles.balanceText}>{mapBalance(user.balance)}</Text>

          <View style={styles.balanceIconContainer}>
            <FontAwesome name="dollar" style={styles.balanceIcon} />
          </View>
        </View>
      </View>

      {user.role === "driver" && (
        <View style={styles.addBalanceFormContainer}>
          <Text style={styles.addBalanceFormTitle}>{i18n("addBalance")}</Text>

          <InputIcon
            placeholder={i18n("cardCodeInputTitle")}
            title={i18n("cardCode")}
            value={code}
            onChange={handleCodeChange}
            Icon={() => (
              <AntDesign
                name="creditcard"
                style={lang === "ar" ? styles.arCardIcon : styles.enCardIcon}
              />
            )}
          />

          <CustomButton
            text={i18n("add")}
            containerStyle={styles.buttonContainer}
            textStyle={styles.buttonText}
            onPress={handleCheckCode}
            disabled={code.length !== 14}
          />
        </View>
      )}
    </SafeAreaView>
  );
}
