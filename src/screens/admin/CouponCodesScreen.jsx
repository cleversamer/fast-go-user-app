import { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import useScreen from "../../hooks/useScreen";
import DefaultScreenTitle from "../../components/screenTitles/DefaultScreenTitle";
import useLocale from "../../hooks/useLocale";
import { Entypo, Feather } from "@expo/vector-icons";
import * as theme from "../../constants/theme";
import InputIcon from "../../components/inputs/InputIcon";
import CustomButton from "../../components/buttons/CustomButton";
import CouponCode from "../../components/admin/CouponCode";
import * as couponCodesApi from "../../api/user/couponCodes";
import PopupLoading from "../../components/popups/PopupLoading";
import PopupError from "../../components/popups/PopupError";

export default function CouponCodesScreen({ navigation }) {
  const screen = useScreen();
  const { i18n, lang } = useLocale();
  const [couponCodes, setCouponCodes] = useState({ list: [], loading: true });
  const [context, setContext] = useState({ code: "", discountPercentage: 0 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!couponCodes.loading) {
      setCouponCodes({ ...couponCodes, loading: true });
    }

    couponCodesApi
      .getAllCouponCodes(1, 1000)
      .then((res) => {
        setCouponCodes({ list: res.data.couponCodes, loading: false });
      })
      .catch(() => {
        setCouponCodes({ list: [], loading: false });
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
    couponCodesTitle: {
      marginTop: screen.getVerticalPixelSize(10),
      marginBottom: screen.getVerticalPixelSize(5),
      fontFamily: "cairo-700",
      fontSize: screen.getResponsiveFontSize(16),
    },
    noCouponCodesText: {
      fontFamily: "cairo-600",
      fontSize: screen.getResponsiveFontSize(14),
      textAlign: lang === "ar" ? "right" : "left",
    },
  });

  const handleDeleteCouponCode = async (couponCode) => {
    try {
      if (loading) return;
      setLoading(true);

      const res = await couponCodesApi.deleteCouponCode(couponCode._id);

      const newCouponCodes = [...couponCodes.list];
      const index = newCouponCodes.findIndex((c) => c._id === res.data._id);
      if (index >= 0) {
        newCouponCodes.splice(index, 1);
        setCouponCodes({ list: newCouponCodes, loading: false });
      }

      setLoading(false);
    } catch (err) {
      setLoading(false);
      const message =
        err?.response?.data?.message?.[lang] || i18n("networkError");
      setError(message);
    }
  };

  const handleAddCouponCode = async () => {
    try {
      if (loading) return;
      setLoading(true);

      const res = await couponCodesApi.addCouponCode(
        context.code,
        context.discountPercentage
      );

      setContext({ code: "", discountPercentage: 0 });
      setCouponCodes({ ...couponCodes, list: [res.data, ...couponCodes.list] });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      const message =
        err?.response?.data?.message?.[lang] || i18n("networkError");
      setError(message);
    }
  };

  const handleKeyChange = (key) => (value) => {
    try {
      if (key === "code" && value.length > 64) {
        return;
      }

      setContext({ ...context, [key]: value });
    } catch (err) {}
  };

  const handleGoBack = () => {
    try {
      navigation.goBack();
    } catch (err) {}
  };

  const renderCouponCode = (item, index) => {
    return (
      <CouponCode
        key={index}
        couponCode={item}
        showBreakline={index < couponCodes.list.length - 1}
        onDelete={() => handleDeleteCouponCode(item)}
      />
    );
  };

  const checkIfAddButtonDisabled = () => {
    const { code, discountPercentage } = context;
    return (
      code.length < 3 ||
      code.length > 64 ||
      discountPercentage <= 0 ||
      discountPercentage > 1
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <DefaultScreenTitle title={i18n("couponCodes")} onPrev={handleGoBack} />

      <PopupLoading visible={loading} />

      <PopupError
        onClose={() => setError("")}
        visible={!!error}
        message={error}
      />

      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <InputIcon
          title={i18n("couponCode")}
          placeholder={i18n("couponCode")}
          value={context.code}
          onChange={handleKeyChange("code")}
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
          value={`${context.discountPercentage}`}
          onChange={handleKeyChange("discountPercentage")}
          Icon={() => (
            <Feather
              name="percent"
              style={lang === "ar" ? styles.arIcon : styles.enIcon}
            />
          )}
        />

        <CustomButton
          text={i18n("add")}
          textStyle={styles.buttonText}
          onPress={handleAddCouponCode}
          disabled={checkIfAddButtonDisabled()}
        />

        <Text style={styles.couponCodesTitle}>{i18n("couponCodes")}</Text>

        {couponCodes.loading ? (
          <ActivityIndicator
            animating={true}
            size="large"
            color={theme.primaryColor}
          />
        ) : couponCodes.list.length ? (
          couponCodes.list.map(renderCouponCode)
        ) : (
          <Text style={styles.noCouponCodesText}>{i18n("noCouponCodes")}</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
