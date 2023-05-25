import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
} from "react-native";
import useLocale from "../../hooks/useLocale";
import DefaultScreenTitle from "../../components/screenTitles/DefaultScreenTitle";
import NetworkStatusLine from "../../components/common/NetworkStatusLine";
import useScreen from "../../hooks/useScreen";

export default function AboutScreen({ navigation }) {
  const screen = useScreen();
  const { i18n } = useLocale();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: screen.getHorizontalPixelSize(15),
      paddingVertical: screen.getVerticalPixelSize(15),
      paddingTop: screen.getVerticalPixelSize(50),
      gap: screen.getVerticalPixelSize(40),
    },
    image: {
      alignSelf: "center",
      width: screen.getHorizontalPixelSize(250),
      height: screen.getVerticalPixelSize(250),
      backgroundColor: "red",
      marginBottom: screen.getVerticalPixelSize(20),
    },
    text: {
      fontFamily: "cairo-500",
      fontSize: 14,
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

      <DefaultScreenTitle onPrev={handleGoBack} title={i18n("about")} />

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={require("../../assets/images/about.png")}
          style={styles.image}
        />
        <Text style={styles.text}>{i18n("aboutApp")}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
