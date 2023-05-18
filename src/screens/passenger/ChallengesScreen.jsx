import { Fragment } from "react";
import { StyleSheet, SafeAreaView, View, Image } from "react-native";
import DefaultScreenTitle from "../../components/screenTitles/DefaultScreenTitle";
import useLocale from "../../hooks/useLocale";
import Challenge from "../../components/common/Challenge";
import NetworkStatusLine from "../../components/common/NetworkStatusLine";

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
  const { i18n } = useLocale();

  const handleGoBack = () => {
    navigation.goBack();
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 50,
  },
  image: {
    width: 280,
    height: 280,
    alignSelf: "center",
    marginBottom: 20,
  },
  breakLine: {
    borderWidth: 0.5,
    borderColor: "#ababab",
    backgroundColor: "#ababab",
    marginVertical: 15,
  },
});
