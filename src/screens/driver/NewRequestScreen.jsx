import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import GoogleMap from "../../components/common/GoogleMap";
import NewRequestBottomSheet from "../../components/bottomSheets/NewRequestBottomSheet";

export default function NewRequestScreen({ navigation }) {
  const handleTimerDone = () => {
    try {
      navigation.goBack();
    } catch (err) {}
  };

  return (
    <SafeAreaView style={styles.container}>
      <GoogleMap />
      <NewRequestBottomSheet onTimerDone={handleTimerDone} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
