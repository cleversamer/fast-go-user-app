import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
} from "react-native";
import useLocale from "../../hooks/useLocale";
import ScreenTitle from "../../components/screenTitle";

export default function AboutScreen({ navigation }) {
  const { i18n } = useLocale();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenTitle onPrev={handleGoBack} title={i18n("about")} />

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 50,
    gap: 30,
  },
  image: {
    width: 250,
    height: 250,
    alignSelf: "center",
    marginBottom: 20,
  },
  text: {
    fontFamily: "cairo-500",
    fontSize: 14,
  },
});
