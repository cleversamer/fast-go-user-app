import { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import ScreenSteps from "../../components/screenSteps";
import Checkbox from "../../components/checkbox";
import PopupError from "../../components/popup/PopupError";

export default function LoginScreen2() {
  const [error, setError] = useState(true);
  const [isPrivacyApproved, setIsPrivacyApproved] = useState(false);

  const handleClosePopup = () => setError(false);

  return (
    <SafeAreaView style={styles.container}>
      <PopupError visible={error} onClose={handleClosePopup} />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          قبول شروط Fast Go و مراجعة إشعار الخصوصية.
        </Text>

        <Image
          source={require("../../assets/images/privacy.png")}
          resizeMode="contain"
          style={styles.image}
        />
      </View>

      <Text style={styles.privacyText}>
        باختيار "أوافق" أدناه ، فقد راجعت شروط الاستخدام و أوافق عليها وأقر
        بإشعار الخصوصية. عمري 18 سنة على الأقل.
      </Text>

      <View style={styles.screenStepsContainer}>
        <View style={styles.breakLine}></View>
        <Checkbox
          text="أوافق على الشروط"
          checked={isPrivacyApproved}
          onCheck={() => setIsPrivacyApproved(!isPrivacyApproved)}
        />
        <ScreenSteps disableNext={!isPrivacyApproved} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 70,
  },
  titleContainer: {
    flexDirection: "row",
    gap: 15,
  },
  title: {
    fontFamily: "cairo-700",
    flexShrink: 1,
  },
  image: {
    width: 50,
    height: 50,
  },
  privacyText: {
    fontFamily: "cairo-400",
    fontSize: 13,
    marginTop: 40,
  },
  screenStepsContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 15,
    marginBottom: 50,
    gap: 20,
  },
  breakLine: {
    borderWidth: 0.5,
    borderColor: "#ababab",
    backgroundColor: "#ababab",
  },
});
