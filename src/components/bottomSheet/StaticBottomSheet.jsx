import { useEffect, useRef } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import * as theme from "../../constants/theme";

const defaultSnapPoints = ["25%", "50%"];

export default function StaticBottomSheet({
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View style={[styles.contentContainer, contentStyle || {}]}>
            {children}
          </View>
        </ScrollView>
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
    paddingHorizontal: 15,
    gap: 10,
  },
});
