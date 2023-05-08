import { StyleSheet, View, Image, Text, SafeAreaView } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { AntDesign } from "@expo/vector-icons";
import * as theme from "../../constants/theme";

const slides = [
  {
    key: 1,
    image: require("../../assets/images/onboarding1.png"),
    title: "الأمان والحماية",
    description:
      "بما أن الأمان يعتبر أحد الأولويات الرئيسية في تطبيق Taxilen , نقوم بتوفير خيارات متعددة للتأكد من هوية السائقين و المستخدمين",
  },
  {
    key: 2,
    image: require("../../assets/images/onboarding2.png"),
    title: "الاتصال بالسائق",
    description:
      "يمكن للمستخدمين الاتصال بالسائق المعين للرحلة عبر التطبيق، مما يتيح التواصل معه في حالة تغيير في الخطة أو الوقت المحدد للرحلة.",
  },
  {
    key: 3,
    image: require("../../assets/images/onboarding3.png"),
    title: "الرحلات المتعددة",
    description:
      "يمكن حجز رحلات متعددة في تطبيق Taxilen، مثل الحجز لعدة أيام أو لعدة مواقع. يمكن تحديد مواعيد الرحلات ونقاط الانطلاق والوصول لكل رحلة",
  },
];
``;
export default function Onboarding({ onDone }) {
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
        <Text style={styles.skipButtonText}>تخطي</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
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
    width: theme.sizes.width,
    height: 400,
  },
  sliderTitle: {
    fontFamily: "cairo-800",
    fontSize: theme.sizes.h1,
    color: "#000",
    marginBottom: 15,
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
