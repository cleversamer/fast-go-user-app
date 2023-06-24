import { View, StyleSheet, Text } from "react-native";
import ICCInput from "./ICCInput";
import NSNInput from "./NSNInput";
import useScreen from "../../hooks/useScreen";

export default function PhoneInput({
  title,
  icc,
  nsn,
  onICCChange,
  onNSNChange,
}) {
  const screen = useScreen();

  const styles = StyleSheet.create({
    container: {
      gap: screen.getVerticalPixelSize(7),
    },
    inputsContainer: {
      flexDirection: "row",
      gap: screen.getHorizontalPixelSize(10),
    },
    title: {
      fontFamily: "cairo-700",
      fontSize: screen.getResponsiveFontSize(15),
      paddingHorizontal: screen.getHorizontalPixelSize(10),
    },
  });

  return (
    <View style={styles.container}>
      {!!title && <Text style={styles.title}>{title}</Text>}

      <View style={styles.inputsContainer}>
        <ICCInput value={icc} onChange={onICCChange} />
        <NSNInput value={nsn} onChange={onNSNChange} />
      </View>
    </View>
  );
}
