import { StyleSheet, SafeAreaView, ScrollView, View, Text } from "react-native";
import DefaultScreenTitle from "../../components/screenTitles/DefaultScreenTitle";
import useScreen from "../../hooks/useScreen";
import useLocale from "../../hooks/useLocale";
import InputIcon from "../../components/inputs/InputIcon";
import {
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import * as theme from "../../constants/theme";
import SelectInput from "../../components/inputs/SelectInput";
import CustomButton from "../../components/buttons/CustomButton";
import Challenge from "../../components/admin/Challenge";

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

export default function ChallengesPanelScreen({ navigation }) {
  const screen = useScreen();
  const { lang, i18n } = useLocale();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: screen.getHorizontalPixelSize(15),
      paddingVertical: screen.getVerticalPixelSize(15),
      paddingTop: screen.getVerticalPixelSize(50),
      gap: screen.getVerticalPixelSize(15),
    },
    contentContainer: {
      gap: screen.getVerticalPixelSize(15),
    },
    inputIcon: {
      width: screen.getHorizontalPixelSize(30),
      textAlign: "center",
      marginRight: lang === "ar" ? screen.getHorizontalPixelSize(10) : 0,
      marginLeft: lang === "en" ? screen.getHorizontalPixelSize(10) : 0,
      fontSize: screen.getResponsiveFontSize(30),
      color: theme.primaryColor,
    },
    buttonText: {
      fontFamily: "cairo-800",
      fontSize: screen.getResponsiveFontSize(18),
    },
    title: {
      fontFamily: "cairo-700",
      fontSize: screen.getResponsiveFontSize(16),
      marginTop: screen.getVerticalPixelSize(10),
    },
    challengesContainer: {
      gap: screen.getVerticalPixelSize(20),
      paddingBottom: screen.getVerticalPixelSize(15),
    },
  });

  const handleGoBack = () => {
    try {
      navigation.goBack();
    } catch (err) {}
  };

  return (
    <SafeAreaView style={styles.container}>
      <DefaultScreenTitle title={i18n("challenges")} onPrev={handleGoBack} />

      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <InputIcon
          title={i18n("tripsNumber")}
          placeholder={i18n("tripsNumber")}
          keyboardType="number-pad"
          Icon={() => (
            <MaterialCommunityIcons
              name="google-analytics"
              style={styles.inputIcon}
            />
          )}
        />

        <InputIcon
          title={i18n("referralsNumber")}
          placeholder={i18n("referralsNumber")}
          keyboardType="number-pad"
          Icon={() => (
            <FontAwesome5 name="user-friends" style={styles.inputIcon} />
          )}
        />

        <InputIcon
          title={i18n("reward")}
          placeholder={i18n("reward")}
          keyboardType="number-pad"
          Icon={() => <FontAwesome name="dollar" style={styles.inputIcon} />}
        />

        <SelectInput
          title={i18n("userCategory")}
          placeholder={i18n("userCategory")}
        />

        <CustomButton text={i18n("add")} textStyle={styles.buttonText} />

        <Text style={styles.title}>{i18n("addedChallenges")}</Text>

        {!!_challenges.length && (
          <View style={styles.challengesContainer}>
            {_challenges.map((challenge, index) => (
              <Challenge key={index} challenge={challenge} />
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
