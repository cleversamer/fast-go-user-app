import { useEffect, useState } from "react";
import { StyleSheet, View, Image, Text, SafeAreaView } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { AntDesign } from "@expo/vector-icons";
import useLocale from "../../hooks/useLocale";
import NetworkStatusLine from "../../components/common/NetworkStatusLine";
import * as theme from "../../constants/theme";
import useScreen from "../../hooks/useScreen";
import authStorage from "../../auth/storage";

export default function Onboarding({ onDone }) {
  const [isLoading, setIsLoading] = useState(true);
  const { i18n } = useLocale();
  const screen = useScreen();

  useEffect(() => {
    const prepare = async () => {
      const isShownBefore = await authStorage.getOnboardingShown();
      if (isShownBefore) {
        onDone();
      } else {
        setIsLoading(false);
      }
    };

    prepare();
  }, []);

  const slides = [
    {
      key: 1,
      image: require("../../assets/images/onboarding1.png"),
      title: i18n("onboardingOneTitle"),
      description: i18n("onboardingOneSubtitle"),
    },
    {
      key: 2,
      image: require("../../assets/images/onboarding2.png"),
      title: i18n("onboardingTwoTitle"),
      description: i18n("onboardingTwoSubtitle"),
    },
    {
      key: 3,
      image: require("../../assets/images/onboarding3.png"),
      title: i18n("onboardingThreeTitle"),
      description: i18n("onboardingThreeSubtitle"),
    },
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    sliderContainer: {
      flex: 1,
      alignItems: "center",
      paddingBottom: screen.getVerticalPixelSize(15),
      paddingHorizontal: screen.getHorizontalPixelSize(15),
      paddingTop: screen.getHorizontalPixelSize(100),
    },
    sliderImage: {
      width: screen.getScreenWidth(),
      maxWidth: screen.getHorizontalPixelSize(400),
      height: screen.getHorizontalPixelSize(400),
    },
    sliderTitle: {
      fontFamily: "cairo-800",
      fontSize: screen.getResponsiveFontSize(22),
      color: "#000",
      marginBottom: screen.getVerticalPixelSize(15),
      textAlign: "center",
      textTransform: "capitalize",
    },
    sliderDescription: {
      fontFamily: "cairo-500",
      textAlign: "center",
      color: "#000",
    },
    activeDotStyle: {
      backgroundColor: theme.primaryColor,
      width: screen.getHorizontalPixelSize(40),
    },
    nextButtonContainer: {
      paddingVertical: screen.getVerticalPixelSize(12),
      paddingHorizontal: screen.getHorizontalPixelSize(12),
      backgroundColor: theme.primaryColor,
      borderRadius: 100,
    },
    nextButtonIcon: {
      color: "#fff",
      fontSize: screen.getResponsiveFontSize(24),
      fontFamily: "cairo-400",
    },
    skipButtonContainer: {
      paddingVertical: screen.getVerticalPixelSize(12),
      paddingHorizontal: screen.getHorizontalPixelSize(12),
    },
    skipButtonText: {
      color: "#747474",
      fontSize: screen.getResponsiveFontSize(15),
      fontFamily: "cairo-500",
    },
  });

  const renderNextButton = () => {
    return (
      <View style={styles.nextButtonContainer}>
        <AntDesign name="arrowright" style={styles.nextButtonIcon} />
      </View>
    );
  };

  const renderSkipButton = () => {
    return (
      <View style={styles.skipButtonContainer}>
        <Text style={styles.skipButtonText}>{i18n("skip")}</Text>
      </View>
    );
  };

  const handleDone = async () => {
    try {
      onDone();
      await authStorage.markOnboardingShown();
    } catch (err) {}
  };

  if (isLoading) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <NetworkStatusLine />

      <AppIntroSlider
        data={slides}
        activeDotStyle={styles.activeDotStyle}
        renderNextButton={renderNextButton}
        renderSkipButton={renderSkipButton}
        showSkipButton
        renderDoneButton={renderNextButton}
        onDone={handleDone}
        onSkip={handleDone}
        renderItem={({ item }) => (
          <View style={styles.sliderContainer}>
            <Image
              source={item.image}
              style={styles.sliderImage}
              resizeMode="contain"
            />
            <Text style={styles.sliderTitle}>{item.title}</Text>
            <Text style={styles.sliderDescription}>{item.description}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
