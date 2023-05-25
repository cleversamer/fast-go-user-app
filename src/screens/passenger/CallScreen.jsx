import { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CircularAvatar from "../../components/common/CircularAvatar";
import CircularButton from "../../components/buttons/CircularButton";
import useLocale from "../../hooks/useLocale";
import * as theme from "../../constants/theme";

export default function CallScreen({ navigation }) {
  const [isSpeaker, setIsSpeaker] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const { i18n } = useLocale();

  const handleEndCall = () => {
    try {
      navigation.goBack();
    } catch (err) {}
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.receiverContainer}>
        <CircularAvatar imageStyle={styles.image} />
        <Text style={styles.receiverName}>معتز أبو نهيان</Text>
        <Text style={styles.callStatus}>{i18n("calling")}</Text>
      </View>

      <View style={styles.callActionsContainer}>
        <TouchableOpacity
          style={[styles.iconContainer, isSpeaker ? styles.highVolume : {}]}
          onPress={() => setIsSpeaker(!isSpeaker)}
        >
          <Image
            source={require("../../assets/icons/volume-high.png")}
            resizeMode="contain"
            style={styles.volumeIcon}
          />
        </TouchableOpacity>

        <CircularButton
          Icon={() => <Ionicons name="call-outline" style={styles.callIcon} />}
          containerStyle={styles.endCallButton}
          onPress={handleEndCall}
        />

        <TouchableOpacity
          style={[styles.iconContainer, isMuted ? styles.muted : {}]}
          onPress={() => setIsMuted(!isMuted)}
        >
          <Image
            source={require("../../assets/icons/microphone.png")}
            resizeMode="contain"
            style={styles.microphoneIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 50,
    justifyContent: "space-between",
    paddingBottom: "11%", // TODO: fix
  },
  receiverContainer: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: "center",
  },
  receiverName: {
    fontFamily: "cairo-700",
    fontSize: 20,
  },
  callStatus: {
    fontFamily: "cairo-600",
    fontSize: 14,
    color: "#747474",
  },
  callActionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  callIcon: {
    color: "#fff",
    fontSize: 30,
  },
  iconContainer: {
    borderRadius: 50,
    padding: 10,
    width: 50,
    borderRadius: 50,
    padding: 10,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  highVolume: {
    backgroundColor: theme.primaryColorLight,
  },
  muted: {
    backgroundColor: theme.primaryColorLight,
  },
  volumeIcon: {
    width: 32,
    height: 32,
  },
  microphoneIcon: {
    width: 32,
    height: 32,
  },
  endCallButton: {
    backgroundColor: "#f00",
  },
});
