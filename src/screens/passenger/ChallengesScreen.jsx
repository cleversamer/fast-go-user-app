import { Fragment } from "react";
import { StyleSheet, SafeAreaView, View, Image } from "react-native";
import DefaultScreenTitle from "../../components/screenTitles/DefaultScreenTitle";
import useLocale from "../../hooks/useLocale";
import Challenge from "../../components/common/Challenge";
import NetworkStatusLine from "../../components/common/NetworkStatusLine";
import useScreen from "../../hooks/useScreen";

const _challenges = [
  {
    title: {
      en: "Complete 100 trips and invite 20 friends",
      ar: "أنجز 100 رحلة وقم بدعوة 20 من الأصدقاء",
    },
    scores: {
      total: 120,
      number: 1,
    },
    rewardAmount: 120,
  },
  {
    title: {
      en: "Complete 30 trips and invite 10 friends",
      ar: "أنجز 30 رحلة وقم بدعوة 10 من الأصدقاء",
    },
    scores: {
      total: 40,
      number: 1,
    },
    rewardAmount: 40,
  },
  {
    title: {
      en: "Complete 10 trips and invite 5 friends",
      ar: "أنجز 10 رحلات وقم بدعوة 5 من الأصدقاء",
    },
    scores: {
      total: 15,
      number: 1,
    },
    rewardAmount: 15,
  },
];

export default function ChallengesScreen({ navigation }) {
  const screen = useScreen();
  const { i18n } = useLocale();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: screen.getHorizontalPixelSize(15),
      paddingVertical: screen.getVerticalPixelSize(15),
      paddingTop: screen.getVerticalPixelSize(50),
    },
    image: {
      width: screen.getHorizontalPixelSize(280),
      maxWidth: 280,
      height: screen.getVerticalPixelSize(280),
      maxHeight: 280,
      alignSelf: "center",
      marginBottom: screen.getVerticalPixelSize(20),
    },
    breakLine: {
      borderWidth: screen.getHorizontalPixelSize(0.5),
      borderColor: "#ababab",
      backgroundColor: "#ababab",
      marginVertical: screen.getVerticalPixelSize(15),
    },
  });

  const handleGoBack = () => {
    try {
      navigation.goBack();
    } catch (err) {}
  };

  return (
    <SafeAreaView style={styles.container}>
      <NetworkStatusLine />

      <DefaultScreenTitle title={i18n("challenges")} onPrev={handleGoBack} />

      <Image
        source={require("../../assets/images/challenges.png")}
        resizeMode="contain"
        style={styles.image}
      />

      {_challenges.map((challenge, index) => (
        <Fragment key={index}>
          <Challenge key={index} challenge={challenge} />
          {index < _challenges.length - 1 && (
            <View style={styles.breakLine}></View>
          )}
        </Fragment>
      ))}
    </SafeAreaView>
  );
}
