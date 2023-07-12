import { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  ActivityIndicator,
} from "react-native";
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
import data from "../../static/data.json";
import * as challengesApi from "../../api/user/challenges";
import PopupLoading from "../../components/popups/PopupLoading";
import PopupError from "../../components/popups/PopupError";

export default function ChallengesPanelScreen({ navigation }) {
  const screen = useScreen();
  const { lang, i18n } = useLocale();
  const [challenges, setChallenges] = useState({ list: [], loading: true });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [context, setContext] = useState({
    tripTarget: "",
    referralTarget: "",
    reward: "",
    role: "",
  });

  useEffect(() => {
    challengesApi
      .getAllChallenges()
      .then((res) => {
        setChallenges({ list: res.data.challenges, loading: false });
      })
      .catch(() => {
        setChallenges({ list: [], loading: false });
      });
  }, []);

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
    noChallengesText: {
      fontFamily: "cairo-600",
      fontSize: screen.getResponsiveFontSize(14),
      textAlign: lang === "ar" ? "right" : "left",
    },
  });

  const handleAddChallenge = async () => {
    try {
      setLoading(true);
      const { referralTarget, reward, role, tripTarget } = context;

      const res = await challengesApi.addChallenge(
        parseInt(tripTarget),
        parseInt(referralTarget),
        parseFloat(reward),
        role
      );

      setChallenges({ ...challenges, list: [res.data, ...challenges.list] });
      setContext({ tripTarget: "", referralTarget: "", reward: "", role: "" });

      setLoading(false);
    } catch (err) {
      setLoading(false);
      const message =
        err?.response?.data?.message?.[lang] || i18n("networkError");
      setError(message);
    }
  };

  const handleDeleteChallenge = async (challenge) => {
    try {
      setLoading(true);

      const res = await challengesApi.deleteChallenge(challenge._id);

      const newChallenges = [...challenges.list];
      const index = newChallenges.findIndex((c) => c._id === challenge._id);
      if (index >= 0) {
        newChallenges.splice(index, 1);
        setChallenges({ ...challenges, list: newChallenges });
      }

      setLoading(false);
    } catch (err) {
      setLoading(false);
      const message =
        err?.response?.data?.message?.[lang] || i18n("networkError");
      setError(message);
    }
  };

  const handleGoBack = () => {
    try {
      navigation.goBack();
    } catch (err) {}
  };

  const handleKeyChange = (key) => (value) => {
    try {
      setContext({ ...context, [key]: value });
    } catch (err) {}
  };

  const checkIfAddButtonDisabled = () => {
    try {
      const { referralTarget, reward, role, tripTarget } = context;
      return (
        referralTarget < 0 ||
        referralTarget > 1000 ||
        tripTarget < 0 ||
        tripTarget > 1000 ||
        reward < 1 ||
        reward > 10000 ||
        !["driver", "passenger"].includes(role)
      );
    } catch (err) {
      return false;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <DefaultScreenTitle title={i18n("challenges")} onPrev={handleGoBack} />

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
          title={i18n("tripsNumber")}
          placeholder={i18n("tripsNumber")}
          keyboardType="number-pad"
          Icon={() => (
            <MaterialCommunityIcons
              name="google-analytics"
              style={styles.inputIcon}
            />
          )}
          value={`${context.tripTarget}`}
          onChange={handleKeyChange("tripTarget")}
        />

        <InputIcon
          title={i18n("referralsNumber")}
          placeholder={i18n("referralsNumber")}
          keyboardType="number-pad"
          Icon={() => (
            <FontAwesome5 name="user-friends" style={styles.inputIcon} />
          )}
          value={`${context.referralTarget}`}
          onChange={handleKeyChange("referralTarget")}
        />

        <InputIcon
          title={i18n("reward")}
          placeholder={i18n("reward")}
          keyboardType="number-pad"
          Icon={() => <FontAwesome name="dollar" style={styles.inputIcon} />}
          value={`${context.reward}`}
          onChange={handleKeyChange("reward")}
        />

        <SelectInput
          title={i18n("userCategory")}
          placeholder={i18n("userCategory")}
          options={data.userTypes.map((g) => ({ key: g, value: i18n(g) }))}
          value={context.role}
          onChange={handleKeyChange("role")}
        />

        <CustomButton
          text={i18n("add")}
          textStyle={styles.buttonText}
          disabled={checkIfAddButtonDisabled()}
          onPress={handleAddChallenge}
        />

        <Text style={styles.title}>{i18n("addedChallenges")}</Text>

        {challenges.loading ? (
          <ActivityIndicator
            animating={true}
            size="large"
            color={theme.primaryColor}
          />
        ) : challenges.list.length ? (
          <View style={styles.challengesContainer}>
            {challenges.list.map((challenge, index) => (
              <Challenge
                key={index}
                challenge={challenge}
                onDelete={() => handleDeleteChallenge(challenge)}
              />
            ))}
          </View>
        ) : (
          <Text style={styles.noChallengesText}>
            {i18n("noChallengesAdded")}
          </Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
