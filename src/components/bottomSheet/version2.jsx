import { useEffect, useRef } from "react";
import { Pressable, View, StyleSheet, Text } from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import * as theme from "../../../constants/theme";

export default function version2({ onClose, visible, children }) {
  const bottomSheetModalRef = useRef(null);
  const snapPoints = ["25%", "50%"];

  useEffect(() => {
    if (bottomSheetModalRef) {
      bottomSheetModalRef.current.present();
    }
  }, [bottomSheetModalRef]);

  return (
    <>
      <Pressable onPress={onClose} style={styles.touchable} />

      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          snapPoints={snapPoints}
          handleIndicatorStyle={styles.indicatorStyle}
        >
          <View style={styles.contentContainer}>
            <Text>Awesome 🎉</Text>
          </View>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  indicatorStyle: {
    width: 55,
    height: 6,
    backgroundColor: theme.primaryColor,
  },
});
