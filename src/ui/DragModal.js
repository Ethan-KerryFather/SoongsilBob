import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  PanResponder,
  Animated,
  useWindowDimensions,
} from "react-native";

function DragModal({ children, visible }) {
  const [isVisible, setVisible] = useState(visible);

  const { height: windowHeight } = useWindowDimensions();
  const height = useRef(new Animated.Value(300)).current;

  const position = useRef(new Animated.ValueXY());
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        position.current.setValue({
          x: gestureState.dx,
          y: gestureState.dy,
        });

        const newHeight = gestureState.dy;
        height.setValue(newHeight);
      },
      onPanResponderRelease: () => {
        console.log("터치 종료");
        Animated.spring(position.current, {
          toValue: { x: 0, y: 0 },
          tension: 10,
          friction: 3,
          useNativeDriver: false,
        }).start();
      },
      onPanResponderStart: () => {},
    })
  ).current;

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={{
        height: height,
        transform: [{ translateY: position.current.y }],
        position: "absolute",
        zIndex: 1,
        width: "100%",
        backgroundColor: "red",
      }}
    >
      {children}
    </Animated.View>
  );
}

export default DragModal;
