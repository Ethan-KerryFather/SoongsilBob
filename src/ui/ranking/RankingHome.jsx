import React, { useEffect, useRef, Animated } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  GestureDetector,
  PanGestureHandler,
  Gesture,
} from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";

function RankingHome({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 20, fontFamily: "gowun-regular" }}>
          숭실밥집에서 가장 인기있는 맛집은?!{"\n"}곧 랭킹 기능이 찾아옵니다
        </Text>
      </View>
    </View>
  );
}

export default RankingHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
