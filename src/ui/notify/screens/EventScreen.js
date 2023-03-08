import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable, Linking } from "react-native";
import Colors from "../../../../assets/Colors";
import { Entypo } from "@expo/vector-icons";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

function EventScreen() {
  const start = useSharedValue({ x: 0, y: 0 });
  const [height, setHeight] = useState(start.y);
  const isPressed = useSharedValue(false);
  const offset = useSharedValue({ y: 150 });
  const animatedStyle = useAnimatedStyle(() => {
    let translateYValue = offset.value.y;
    if (translateYValue < 0) {
      translateYValue = 0;
    }
    return {
      backgroundColor: isPressed.value ? "yellow" : "blue",
      height: withSpring(translateYValue, {
        damping: 15,
        stiffness: 150,
        restSpeedThreshold: 0.1,
        restDisplacementThreshold: 0.1,
      }),
    };
  });

  console.log(start.value.y);

  const gesture = Gesture.Pan()
    .onBegin(() => {
      isPressed.value = true;
    })
    .onUpdate((e) => {
      console.log(e.translationY + start.value.y);
      offset.value = {
        y: e.translationY + start.value.y,
        x: e.translationX + start.value.x,
      };
    })
    .onEnd(() => {
      start.value = {
        y: offset.value.y,
      };
    })
    .onFinalize(() => {
      isPressed.value = false;
    });

  return (
    <GestureHandlerRootView style={styles.container}>
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.notifyDragView, animatedStyle]}>
          <View
            style={{
              height: 100,
              alignItems: "center",
              justifyContent: "center",
              height: "50%",
              borderRadius: 20,
              backgroundColor: Colors.basicColor.gray,
              width: "80%",
              marginVertical: 10,
            }}
          >
            <Text style={{ fontFamily: "gowun-regular" }}>
              이벤트가 곧 시작됩니다
            </Text>
          </View>
        </Animated.View>
      </GestureDetector>
      <Pressable
        style={styles.notifyAddBtn}
        onPress={() => {
          console.log("clicked");
          Linking.openURL("https://forms.gle/Rw8rduVAd26maDxm8");
        }}
      >
        <Text style={{ fontFamily: "gowun-regular" }}>사장님 이벤트추가</Text>

        <Entypo
          name="squared-plus"
          size={40}
          color="black"
          style={{ margin: 3 }}
        />
      </Pressable>
      <View style={styles.notifyContainer}>
        <Text style={{ fontFamily: "gowun-bold", fontSize: 40 }}>이벤트</Text>
      </View>
      <View style={styles.notifyContentContainer}>
        <Text style={{ fontSize: 25, fontFamily: "gowun-regular" }}>
          등록된 이벤트가 없습니다
        </Text>
      </View>
    </GestureHandlerRootView>
  );
}
export default EventScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  notifyContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.basicColor.magenta,
  },
  //
  notifyDragView: {
    position: "absolute",
    zIndex: 5,
    width: "100%",
    alignItems: "center",
  },
  //
  notifyAddBtn: {
    position: "absolute",
    bottom: 10,
    right: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.basicColor.gray,
    padding: 10,
    borderRadius: 10,
    zIndex: 1,
  },
  notifyContentContainer: {
    flex: 10,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
