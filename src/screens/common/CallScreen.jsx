import { useEffect, useState } from "react";
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
import useScreen from "../../hooks/useScreen";
import useSoundPlayer from "../../hooks/useSoundPlayer";

export default function CallScreen({ navigation, route }) {
  const receiver = route?.params?.receiver;
  useSoundPlayer(require("../../assets/audio/dial.mp3"), false, true, 10);
  const screen = useScreen();
  const [isSpeaker, setIsSpeaker] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const { i18n } = useLocale();

  useEffect(() => {
    if (!receiver) {
      navigation.goBack();
    }
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: screen.getHorizontalPixelSize(15),
      paddingVertical: screen.getVerticalPixelSize(15),
      paddingTop: screen.getVerticalPixelSize(50),
      justifyContent: "space-between",
      paddingBottom: screen.getScreenHeight() * 0.11,
    },
    receiverContainer: {
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      gap: screen.getVerticalPixelSize(12),
    },
    image: {
      width: screen.getHorizontalPixelSize(120),
      height: screen.getVerticalPixelSize(120),
      alignSelf: "center",
    },
    receiverName: {
      fontFamily: "cairo-700",
      fontSize: screen.getResponsiveFontSize(20),
    },
    callStatus: {
      fontFamily: "cairo-600",
      fontSize: screen.getResponsiveFontSize(14),
      color: "#747474",
    },
    callActionsContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },
    callIcon: {
      color: "#fff",
      fontSize: screen.getResponsiveFontSize(30),
    },
    iconContainer: {
      borderRadius: 50,
      paddingHorizontal: screen.getHorizontalPixelSize(10),
      paddingVertical: screen.getVerticalPixelSize(10),
      width: screen.getHorizontalPixelSize(50),
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
      width: screen.getHorizontalPixelSize(32),
      minHeight: screen.getHorizontalPixelSize(16),
      height: screen.getVerticalPixelSize(32),
    },
    microphoneIcon: {
      width: screen.getHorizontalPixelSize(32),
      minHeight: screen.getHorizontalPixelSize(16),
      height: screen.getVerticalPixelSize(32),
    },
    endCallButton: {
      backgroundColor: "#f00",
    },
  });

  const handleEndCall = () => {
    try {
      navigation.goBack();
    } catch (err) {}
  };

  if (!receiver) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.receiverContainer}>
        <CircularAvatar url={receiver.avatarURL} imageStyle={styles.image} />
        <Text style={styles.receiverName}>
          {receiver.firstName} {receiver.lastName}
        </Text>
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
