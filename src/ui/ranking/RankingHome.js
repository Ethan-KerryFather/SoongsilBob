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
        <Text style={{ fontSize: 30, fontFamily: "gowun-bold" }}>
          숭실밥집 랭킹탭!
        </Text>
        <Text style={{ fontSize: 20, fontFamily: "gowun-bold" }}>
          준비중입니다
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
