import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import useScreen from "../../hooks/useScreen";
import DefaultScreenTitle from "../../components/screenTitles/DefaultScreenTitle";
import useLocale from "../../hooks/useLocale";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import * as theme from "../../constants/theme";

export default function FinancialManagementScreen({ navigation }) {
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
      gap: screen.getVerticalPixelSize(10),
      marginTop: screen.getVerticalPixelSize(15),
    },
    itemContainer: {
      gap: screen.getVerticalPixelSize(7),
    },
    itemTitleContainer: {
      flexDirection: lang === "en" ? "row" : "row-reverse",
      gap: screen.getHorizontalPixelSize(10),
    },
    itemTitle: {
      fontFamily: "cairo-700",
      fontSize: screen.getResponsiveFontSize(16),
    },
    icon: {
      width: screen.getHorizontalPixelSize(28),
      textAlign: "center",
      fontSize: screen.getResponsiveFontSize(28),
      color: theme.primaryColor,
    },
    itemDescription: {
      fontFamily: "cairo-500",
      fontSize: screen.getResponsiveFontSize(13),
      color: "#747474",
    },
    breakLine: {
      marginTop: 7,
      borderTopWidth: 1,
      borderColor: "#ccc",
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
        title={i18n("financialManagement")}
        onPrev={handleGoBack}
      />

      <View style={styles.contentContainer}>
        <TouchableOpacity style={styles.itemContainer}>
          <View style={styles.itemTitleContainer}>
            <FontAwesome name="dollar" style={styles.icon} />
            <Text style={styles.itemTitle}>{i18n("tripsPricing")}</Text>
          </View>

          <Text style={styles.itemDescription}>
            {i18n("tripsPricingDescription")}
          </Text>

          <View style={styles.breakLine}></View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemContainer}>
          <View style={styles.itemTitleContainer}>
            <FontAwesome name="credit-card-alt" style={styles.icon} />
            <Text style={styles.itemTitle}>{i18n("couponCodes")}</Text>
          </View>

          <Text style={styles.itemDescription}>
            {i18n("couponCodesDescription")}
          </Text>

          <View style={styles.breakLine}></View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemContainer}>
          <View style={styles.itemTitleContainer}>
            <FontAwesome5 name="credit-card" style={styles.icon} />
            <Text style={styles.itemTitle}>{i18n("chargeCards")}</Text>
          </View>

          <Text style={styles.itemDescription}>
            {i18n("chargeCardsDescription")}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
