import { useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView, Text } from "react-native";
import useScreen from "../../hooks/useScreen";
import DefaultScreenTitle from "../../components/screenTitles/DefaultScreenTitle";
import useLocale from "../../hooks/useLocale";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import * as theme from "../../constants/theme";
import InputIcon from "../../components/inputs/InputIcon";
import CustomButton from "../../components/buttons/CustomButton";
import ChargeCard from "../../components/admin/ChargeCard";
import ChargeCardsScreenTitle from "../../components/screenTitles/ChargeCardsScreenTitle";
import PopupForm from "../../components/popups/PopupForm";

export default function ChargeCardsScreen({ navigation }) {
  const screen = useScreen();
  const { i18n, lang } = useLocale();
  const [showPopupForm, setShowPopupForm] = useState(false);

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
    couponCodesTitle: {
      marginTop: screen.getVerticalPixelSize(10),
      marginBottom: screen.getVerticalPixelSize(5),
      fontFamily: "cairo-700",
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
      <ChargeCardsScreenTitle
        title={i18n("chargeCards")}
        onPrev={handleGoBack}
        onButtonPress={() => setShowPopupForm(true)}
      />

      <PopupForm
        visible={showPopupForm}
        title={i18n("autoCode")}
        onClose={() => setShowPopupForm(false)}
        onConfirm={() => setShowPopupForm(false)}
      >
        <InputIcon
          title={i18n("cardsCount")}
          placeholder={i18n("cardsCount")}
          keyboardType="number-pad"
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
          Icon={() => (
            <FontAwesome
              name="dollar"
              style={lang === "ar" ? styles.arIcon : styles.enIcon}
            />
          )}
        />

        <CustomButton text={i18n("add")} textStyle={styles.buttonText} />

        <Text style={styles.couponCodesTitle}>{i18n("chargeCards")}</Text>

        <ChargeCard />
        <ChargeCard />
        <ChargeCard />
        <ChargeCard />
        <ChargeCard />
        <ChargeCard />
        <ChargeCard />
        <ChargeCard />
        <ChargeCard />
        <ChargeCard />
        <ChargeCard />
        <ChargeCard showBreakline={false} />
      </ScrollView>
    </SafeAreaView>
  );
}
