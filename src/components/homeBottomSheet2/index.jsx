import { StyleSheet, View } from "react-native";
import { RadioButton } from "react-native-paper";
import StaticBottomSheet from "../bottomSheet/StaticBottomSheet";
import CustomButton from "../button";
import CarType from "../CarType";
import CouponCodeInput from "../couponCodeInput";
import ButtonIcon from "../buttonIcon";
import * as theme from "../../constants/theme";
import { AntDesign } from "@expo/vector-icons";

export default function HomeBottomSheet1({
  paymentType,
  onPaymentTypeChange,
  carType,
  onCarTypeChange,
  onRequestNow,
}) {
  return (
    <StaticBottomSheet contentStyle={styles.container} snapPoints={["51%"]}>
      <View style={styles.carTypesContainer}>
        <CarType
          selected={carType === "luxury"}
          onPress={() => onCarTypeChange("luxury")}
          amount={63.21}
          title="سيارة فاخرة"
          image={require("../../assets/images/luxury-car.png")}
        />

        <CarType
          selected={carType === "women"}
          onPress={() => onCarTypeChange("women")}
          amount={16.21}
          title="سيارة نسائية"
          image={require("../../assets/images/women-car.png")}
        />

        <CarType
          selected={carType === "commercial"}
          onPress={() => onCarTypeChange("commercial")}
          amount={17.21}
          title="سيارة تجارية"
          image={require("../../assets/images/commercial-car.png")}
        />
      </View>

      <View style={styles.paymentContainer}>
        <View style={styles.breakLine}></View>

        <RadioButton.Group
          onValueChange={onPaymentTypeChange}
          value={paymentType}
        >
          <View style={styles.radioButtonsContainer}>
            <RadioButton.Item
              color={theme.primaryColor}
              uncheckedColor={theme.primaryColor}
              labelStyle={styles.radioButtonText}
              label="الدفع من المحفظة"
              value="wallet"
            />

            <RadioButton.Item
              color={theme.primaryColor}
              uncheckedColor={theme.primaryColor}
              labelStyle={styles.radioButtonText}
              label="الدفع كاش"
              value="cash"
            />
          </View>
        </RadioButton.Group>
      </View>

      <CouponCodeInput placeholder="أدخل كود الخصم (اختياري)" />

      <View style={styles.buttonsContainer}>
        <ButtonIcon>
          <AntDesign name="calendar" size={30} color="#fff" />
        </ButtonIcon>

        <CustomButton
          text="اطلب الآن"
          onPress={onRequestNow}
          containerStyle={styles.submitButtonContainer}
          textStyle={styles.submitButtonText}
        />
      </View>
    </StaticBottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
  carTypesContainer: {
    gap: 10,
  },
  paymentContainer: {
    gap: 10,
  },
  breakLine: {
    borderWidth: 0.5,
    borderColor: "#ababab",
    backgroundColor: "#ababab",
  },
  radioButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  radioButtonText: {
    fontFamily: "cairo-600",
    fontSize: 14,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  submitButtonContainer: {
    flex: 1,
  },
  submitButtonText: {
    fontFamily: "cairo-800",
    fontSize: 16,
  },
});
