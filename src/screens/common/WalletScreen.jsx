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
import useScreen from "../../hooks/useScreen";

export default function WalletScreen({ navigation }) {
  const screen = useScreen();
  const { user } = useAuth();
  const { i18n, lang } = useLocale();
  const [popupAddBalance, setPopupAddBalance] = useState({
    visible: false,
    title: i18n("cardBalance"),
    subtitle: "20 LYD",
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
      fontSize: 16,
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
      fontSize: 26,
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
      fontSize: 30,
      color: theme.primaryColor,
    },
    addBalanceFormContainer: {
      gap: screen.getVerticalPixelSize(15),
    },
    addBalanceFormTitle: {
      fontFamily: "cairo-700",
      fontSize: 20,
      color: theme.primaryColor,
      textTransform: "capitalize",
    },
    arCardIcon: {
      color: theme.primaryColor,
      fontSize: 24,
      marginRight: screen.getHorizontalPixelSize(10),
    },
    enCardIcon: {
      color: theme.primaryColor,
      fontSize: 24,
      marginLeft: screen.getHorizontalPixelSize(10),
    },
    buttonText: {
      fontFamily: "cairo-700",
      fontSize: 20,
    },
    buttonContainer: {
      paddingVertical: screen.getVerticalPixelSize(8),
    },
    popupSubtitle: {
      fontFamily: "cairo-700",
      fontSize: 32,
      color: theme.primaryColor,
    },
  });

  const handleGoBack = () => {
    try {
      navigation.goBack();
    } catch (err) {}
  };

  const handleAddBalance = () => {
    try {
      const onClose = () => {
        setPopupAddBalance({ ...popupAddBalance, visible: false });
      };

      const onConfirm = () => {
        setPopupAddBalance({ ...popupAddBalance, visible: false });
      };

      setPopupAddBalance({
        ...popupAddBalance,
        visible: true,
        onClose,
        onConfirm,
      });
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

  return (
    <SafeAreaView style={styles.container}>
      <NetworkStatusLine />

      <PopupConfirm
        title={popupAddBalance.title}
        subtitle={popupAddBalance.subtitle}
        hint={popupAddBalance.hint}
        visible={popupAddBalance.visible}
        onClose={popupAddBalance.onClose}
        onConfirm={popupAddBalance.onConfirm}
        subtitleStyle={styles.popupSubtitle}
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
            placeholder={i18n("cardCode")}
            title={i18n("cardCode")}
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
            onPress={handleAddBalance}
          />
        </View>
      )}
    </SafeAreaView>
  );
}
