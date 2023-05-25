import { useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import * as theme from "../../constants/theme";

// TODO: fix the bug
const defaultHeight = 700 * 0.35;

export default function DraggableBottomSheet({
  contentStyle,
  height = defaultHeight,
  children,
  visible,
  onClose,
}) {
  const ref = useRef(null);

  useEffect(() => {
    try {
      if (ref && visible) {
        ref.current.open();
      }
    } catch (err) {}
  }, [visible]);

  return (
    <RBSheet
      ref={ref}
      height={height}
      onClose={onClose}
      closeOnDragDown={true}
      closeOnPressMask={false}
      closeOnPressBack
      openDuration={200}
      closeDuration={200}
      animationType="fade"
      customStyles={{
        wrapper: styles.wrapper,
        container: styles.container,
        draggableIcon: styles.draggableIcon,
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
    backgroundColor: "rgba(0, 0, 0, 0.65)",
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
