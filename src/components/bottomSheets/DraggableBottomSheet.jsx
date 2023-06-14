import { useEffect, useRef } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import * as theme from "../../constants/theme";
import useScreen from "../../hooks/useScreen";

const screenHeight = Dimensions.get("screen").height || 850.9;
const defaultHeight = screenHeight * 0.35;

export default function DraggableBottomSheet({
  contentStyle,
  height = defaultHeight,
  children,
  visible,
  onClose,
}) {
  const screen = useScreen();
  const ref = useRef(null);

  const styles = StyleSheet.create({
    wrapper: {
      backgroundColor: "rgba(0, 0, 0, 0.65)",
    },
    container: {
      borderTopLeftRadius: screen.getHorizontalPixelSize(25),
      borderTopRightRadius: screen.getHorizontalPixelSize(25),
    },
    draggableIcon: {
      width: screen.getHorizontalPixelSize(65),
      height: screen.getVerticalPixelSize(6),
      backgroundColor: theme.primaryColor,
    },
    contentContainer: {
      flex: 1,
      paddingVertical: screen.getVerticalPixelSize(10),
      paddingHorizontal: screen.getHorizontalPixelSize(10),
    },
  });

  useEffect(() => {
    try {
      if (ref && visible) {
        ref.current.open();
      }
    } catch (err) {}
  }, [ref, visible]);

  if (!visible) {
    return null;
  }

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
