import { View, StyleSheet } from "react-native";
import ICCInput from "./ICCInput";
import NSNInput from "./NSNInput";
import useScreen from "../../hooks/useScreen";

export default function PhoneInput({ icc, nsn, onICCChange, onNSNChange }) {
  const screen = useScreen();

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      gap: screen.getHorizontalPixelSize(10),
    },
  });

  return (
    <View style={styles.container}>
      <ICCInput value={icc} onChange={onICCChange} />
      <NSNInput value={nsn} onChange={onNSNChange} />
    </View>
  );
}
