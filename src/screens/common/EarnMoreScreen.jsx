import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  Image,
} from "react-native";
import DefaultScreenTitle from "../../components/screenTitles/DefaultScreenTitle";
import useLocale from "../../hooks/useLocale";
import { MaterialIcons } from "@expo/vector-icons";
import * as theme from "../../constants/theme";
import useClipboard from "../../hooks/useClipboard";
import NetworkStatusLine from "../../components/common/NetworkStatusLine";
import useAuth from "../../auth/useAuth";

export default function EarnMoreScreen({ navigation }) {
  const { user } = useAuth();
  const { i18n } = useLocale();
  const { copyText, showCopiedIcon } = useClipboard();

  const handleGoBack = () => {
    try {
      navigation.goBack();
    } catch (err) {}
  };

  return (
    <SafeAreaView style={styles.container}>
      <NetworkStatusLine />

      <DefaultScreenTitle title={i18n("earnMore")} onPrev={handleGoBack} />

      <Image
        source={require("../../assets/images/invite.png")}
        resizeMode="contain"
        style={styles.inviteImage}
      />

      <Text style={styles.title}>{i18n("earnMoreTitle")}</Text>

      <Text style={styles.subtitle}>{i18n("earnMoreSubtitle")} </Text>

      <View style={styles.boxContainer}>
        <Image
          source={require("../../assets/images/gift.png")}
          resizeMode="contain"
          style={styles.giftImage}
        />

        <TouchableOpacity
          style={styles.codeContainer}
          onPress={() => copyText(user.referral.code)}
        >
          <MaterialIcons
            name={showCopiedIcon ? "done" : "content-copy"}
            style={styles.copyIcon}
          />
          <Text style={styles.codeText}>{user.referral.code}</Text>
        </TouchableOpacity>

        <Image
          source={require("../../assets/images/gift.png")}
          resizeMode="contain"
          style={styles.giftImage}
        />
      </View>

      <Text style={styles.giftHintText}>{i18n("earnMoreGift")}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 50,
    alignItems: "center",
  },
  inviteImage: {
    width: 200,
    height: 200,
    marginTop: 35,
  },
  title: {
    fontFamily: "cairo-700",
    fontSize: 18,
    marginTop: 20,
    textTransform: "capitalize",
  },
  subtitle: {
    fontFamily: "cairo-500",
    fontSize: 14,
    marginTop: 10,
    textAlign: "center",
    color: "#747474",
  },
  boxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.primaryColorLight,
    width: "100%",
    paddingHorizontal: 25,
    marginTop: 30,
    height: 150,
    borderRadius: 6,
  },
  giftImage: {
    width: 45,
    height: 56,
  },
  codeContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 180,
    gap: 7,
    backgroundColor: theme.primaryColor,
    borderRadius: 30,
    paddingVertical: 3,
  },
  codeText: {
    fontFamily: "cairo-700",
    fontSize: 14,
    color: "#fff",
  },
  copyIcon: {
    fontSize: 20,
    color: "#fff",
  },
  giftHintText: {
    fontFamily: "cairo-500",
    fontSize: 14,
    color: "#747474",
    marginTop: 35,
    textAlign: "center",
  },
});
