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
import useScreen from "../../hooks/useScreen";

export default function EarnMoreScreen({ navigation }) {
  const screen = useScreen();
  const { user } = useAuth();
  const { i18n } = useLocale();
  const { copyText, showCopiedIcon } = useClipboard();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      paddingHorizontal: screen.getHorizontalPixelSize(15),
      paddingVertical: screen.getVerticalPixelSize(15),
      paddingTop: screen.getVerticalPixelSize(50),
    },
    inviteImage: {
      width: screen.getHorizontalPixelSize(200),
      height: screen.getVerticalPixelSize(200),
      marginTop: screen.getVerticalPixelSize(35),
    },
    title: {
      fontFamily: "cairo-700",
      fontSize: 18,
      marginTop: screen.getVerticalPixelSize(20),
      textTransform: "capitalize",
    },
    subtitle: {
      fontFamily: "cairo-500",
      fontSize: 14,
      marginTop: screen.getVerticalPixelSize(10),
      textAlign: "center",
      color: "#747474",
    },
    boxContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: theme.primaryColorLight,
      width: "100%",
      paddingHorizontal: screen.getHorizontalPixelSize(25),
      marginTop: screen.getVerticalPixelSize(30),
      height: screen.getVerticalPixelSize(150),
      borderRadius: 6,
    },
    giftImage: {
      width: screen.getHorizontalPixelSize(45),
      height: screen.getVerticalPixelSize(56),
    },
    codeContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: screen.getHorizontalPixelSize(180),
      gap: screen.getHorizontalPixelSize(7),
      backgroundColor: theme.primaryColor,
      borderRadius: 30,
      paddingVertical: screen.getVerticalPixelSize(3),
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
      marginTop: screen.getVerticalPixelSize(35),
      textAlign: "center",
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
