import { useState } from "react";
import { TouchableOpacity, SafeAreaView, StyleSheet } from "react-native";
import Map from "../../components/map";
import HomeBottomSheet2 from "../../components/homeBottomSheet2";
import { AntDesign } from "@expo/vector-icons";
import NetworkStatusLine from "../../components/networkStatusLine";

export default function HomeScreen3({ navigation }) {
  const [paymentType, setPaymentType] = useState("cash");
  const [carType, setCarType] = useState("luxury");

  const handleRequestNow = () => {};

  const handlePaymentTypeChange = (paymentType) => {
    setPaymentType(paymentType);
  };

  const handleCarTypeChange = (carType) => {
    setCarType(carType);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <NetworkStatusLine />

      <TouchableOpacity style={styles.iconContainer} onPress={handleGoBack}>
        <AntDesign name="arrowright" size={24} color="black" />
      </TouchableOpacity>

      <Map />

      <HomeBottomSheet2
        paymentType={paymentType}
        onPaymentTypeChange={handlePaymentTypeChange}
        carType={carType}
        onCarTypeChange={handleCarTypeChange}
        onRequestNow={handleRequestNow}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    position: "absolute",
    top: 55,
    right: 20,
    backgroundColor: "#fff",
    width: 45,
    height: 45,
    borderRadius: 50,
    zIndex: 1,
    padding: 12,
  },
});
