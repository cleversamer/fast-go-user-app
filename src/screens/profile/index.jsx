import { StyleSheet, View } from "react-native";
import ProfileScreenTitle from "../../components/profileScreenTitle";

export default function ProfileScreen({ navigation }) {
  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleRequestAccountDeletion = () => {
    alert("Request account deletion?");
  };

  return (
    <View style={styles.container}>
      <ProfileScreenTitle
        title="الملف الشخصي"
        showMoreButton
        onPrev={handleGoBack}
        onRequestAccountDeletion={handleRequestAccountDeletion}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 50,
  },
});
