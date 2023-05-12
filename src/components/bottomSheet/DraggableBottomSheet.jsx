import { useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import * as theme from "../../constants/theme";

const defaultHeight = theme.sizes.height * 0.35;

export default function DraggableBottomSheet({
  contentStyle,
  height = defaultHeight,
  children,
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref) {
      ref.current.open();
    }
  }, []);

  return (
    <RBSheet
      ref={ref}
      height={height}
      closeOnDragDown={true}
      closeOnPressMask={false}
      closeOnPressBack
      openDuration={200}
      closeDuration={200}
      animationType="fade"
      customStyles={{
        wrapper: {
          backgroundColor: "transparent",
        },
        container: {
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        },
        draggableIcon: {
          width: 65,
          height: 6,
          backgroundColor: theme.primaryColor,
        },
      }}
    >
      <View style={[styles.contentContainer, contentStyle || {}]}>
        {children}
      </View>
    </RBSheet>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "transparent",
  },
  container: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  draggableIcon: {
    width: 65,
    height: 6,
    backgroundColor: theme.primaryColor,
  },
  contentContainer: {
    flex: 1,
    padding: 10,
  },
});
