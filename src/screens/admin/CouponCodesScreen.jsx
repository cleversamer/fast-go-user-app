import { StyleSheet, SafeAreaView, ScrollView, Text } from "react-native";
import useScreen from "../../hooks/useScreen";
import DefaultScreenTitle from "../../components/screenTitles/DefaultScreenTitle";
import useLocale from "../../hooks/useLocale";
import { Entypo, Feather } from "@expo/vector-icons";
import * as theme from "../../constants/theme";
import InputIcon from "../../components/inputs/InputIcon";
import CustomButton from "../../components/buttons/CustomButton";
import CouponCode from "../../components/admin/CouponCode";

export default function CouponCodesScreen({ navigation }) {
  const screen = useScreen();
  const { i18n, lang } = useLocale();

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
      <DefaultScreenTitle title={i18n("couponCodes")} onPrev={handleGoBack} />

      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <InputIcon
          title={i18n("couponCode")}
          placeholder={i18n("couponCode")}
          Icon={() => (
            <Entypo
              name="credit-card"
              style={lang === "ar" ? styles.arIcon : styles.enIcon}
            />
          )}
        />

        <InputIcon
          title={i18n("discountPercentage")}
          placeholder={i18n("discountPercentage")}
          keyboardType="number-pad"
          Icon={() => (
            <Feather
              name="percent"
              style={lang === "ar" ? styles.arIcon : styles.enIcon}
            />
          )}
        />

        <CustomButton text={i18n("add")} textStyle={styles.buttonText} />

        <Text style={styles.couponCodesTitle}>{i18n("couponCodes")}</Text>

        <CouponCode />
        <CouponCode />
        <CouponCode />
        <CouponCode />
        <CouponCode />
        <CouponCode />
        <CouponCode />
        <CouponCode />
        <CouponCode />
        <CouponCode />
        <CouponCode />
        <CouponCode showBreakline={false} />
      </ScrollView>
    </SafeAreaView>
  );
}
