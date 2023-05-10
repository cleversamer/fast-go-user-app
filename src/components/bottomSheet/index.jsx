import { useEffect, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import * as theme from "../../constants/theme";

const defaultSnapPoints = ["25%", "50%"];

export default function BottomSheet({
  contentStyle,
  snapPoints = defaultSnapPoints,
  children,
}) {
  const bottomSheetModalRef = useRef(null);

  useEffect(() => {
    if (bottomSheetModalRef) {
      bottomSheetModalRef.current.present();
    }
  }, [bottomSheetModalRef]);

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        snapPoints={snapPoints}
        handleIndicatorStyle={styles.indicatorStyle}
        backgroundStyle={styles.modal}
      >
        <View style={[styles.contentContainer, contentStyle || {}]}>
          {children}
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  indicatorStyle: {
    width: 65,
    height: 6,
    backgroundColor: theme.primaryColor,
  },
  modal: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  contentContainer: {
    flex: 1,
    padding: 10,
  },
});
