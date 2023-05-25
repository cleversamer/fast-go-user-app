import { StyleSheet, View, Image, Text, SafeAreaView } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { AntDesign } from "@expo/vector-icons";
import * as theme from "../../constants/theme";
import useLocale from "../../hooks/useLocale";
import NetworkStatusLine from "../../components/common/NetworkStatusLine";

export default function Onboarding({ onDone }) {
  const { i18n } = useLocale();

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
        onDone={onDone}
        onSkip={onDone}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderContainer: {
    flex: 1,
    alignItems: "center",
    padding: 15,
    paddingTop: 100,
  },
  sliderImage: {
    width: "100%", // TODO: fix
    height: 400,
  },
  sliderTitle: {
    fontFamily: "cairo-800",
    fontSize: 22, // TODO: fix
    color: "#000",
    marginBottom: 15,
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
    width: 40,
  },
  nextButtonContainer: {
    padding: 12,
    backgroundColor: theme.primaryColor,
    borderRadius: 100,
  },
  nextButtonIcon: {
    color: "#fff",
    fontSize: 24,
    fontFamily: "cairo-400",
  },
  skipButtonContainer: {
    padding: 12,
  },
  skipButtonText: {
    color: "#747474",
    fontSize: 15,
    fontFamily: "cairo-500",
  },
});
