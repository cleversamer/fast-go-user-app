import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import ScreenTitle from "../../components/screenTitle";
import { FontAwesome } from "@expo/vector-icons";
import useLocale from "../../hooks/useLocale";
import * as theme from "../../constants/theme";

export default function WalletScreen() {
  const { i18n, lang } = useLocale();

  return (
    <SafeAreaView style={styles.container}>
      <ScreenTitle title={i18n("wallet")} />

      <View
        style={
          lang === "ar"
            ? styles.arWalletBoxContainer
            : styles.enWalletBoxContainer
        }
      >
        <Text style={styles.walletBoxTitle}>{i18n("walletTitle")}</Text>

        <View
          style={
            lang === "ar"
              ? styles.arWalletBoxBottomContainer
              : styles.enWalletBoxBottomContainer
          }
        >
          <Text style={styles.balanceText}>00.0</Text>

          <View style={styles.balanceIconContainer}>
            <FontAwesome name="dollar" style={styles.balanceIcon} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 50,
  },
  arWalletBoxContainer: {
    backgroundColor: theme.primaryColor,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 16,
    height: 150,
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 25,
  },
  enWalletBoxContainer: {
    backgroundColor: theme.primaryColor,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 16,
    height: 150,
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 25,
  },
  walletBoxTitle: {
    fontFamily: "cairo-800",
    fontSize: 16,
    color: "#fff",
  },
  arWalletBoxBottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  enWalletBoxBottomContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    gap: 7,
  },
  balanceText: {
    fontFamily: "cairo-700",
    fontSize: 26,
    color: "#fff",
  },
  balanceIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 6,
    width: 40,
    height: 40,
  },
  balanceIcon: {
    fontSize: 30,
    color: theme.primaryColor,
  },
});
