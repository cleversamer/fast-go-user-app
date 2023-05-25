import { useState } from "react";
import { TouchableOpacity, SafeAreaView, StyleSheet } from "react-native";
import GoogleMap from "../../components/common/GoogleMap";
import HomeBottomSheet2 from "../../components/bottomSheets/HomeBottomSheet2";
import { AntDesign } from "@expo/vector-icons";
import NetworkStatusLine from "../../components/common/NetworkStatusLine";
import useScreen from "../../hooks/useScreen";

export default function PassengerHomeScreen3({ navigation }) {
  const screen = useScreen();
  const [paymentType, setPaymentType] = useState("cash");
  const [carType, setCarType] = useState("luxury");

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    iconContainer: {
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      top: screen.getVerticalPixelSize(55),
      right: screen.getHorizontalPixelSize(20),
      backgroundColor: "#fff",
      width: screen.getHorizontalPixelSize(45),
      height: screen.getVerticalPixelSize(45),
      borderRadius: 50,
      zIndex: 1,
      paddingHorizontal: screen.getHorizontalPixelSize(12),
      paddingVertical: screen.getVerticalPixelSize(12),
    },
  });

  const handleRequestNow = () => {};

  const handlePaymentTypeChange = (paymentType) => {
    try {
      setPaymentType(paymentType);
    } catch (err) {}
  };

  const handleCarTypeChange = (carType) => {
    try {
      setCarType(carType);
    } catch (err) {}
  };

  const handleGoBack = () => {
    try {
      navigation.goBack();
    } catch (err) {}
  };

  return (
    <SafeAreaView style={styles.container}>
      <NetworkStatusLine />

      <TouchableOpacity style={styles.iconContainer} onPress={handleGoBack}>
        <AntDesign name="arrowright" size={24} color="black" />
      </TouchableOpacity>

      <GoogleMap />

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
