import React from "react";
import { StyleSheet, StatusBar, View } from "react-native";

import AnimatedLottieView from "lottie-react-native";
import { useEffect } from "react";
import { BigTitle, SmallTitle } from "../../styled/styledComponents";
import { RFPercentage } from "react-native-responsive-fontsize";

function RankingHome({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  const height = StatusBar.currentHeight;
  return (
    <View style={[styles.container, { paddingTop: height }]}>
      <View style={{ paddingTop: 100 }}>
        <BigTitle>준비중이에요</BigTitle>
      </View>
      <AnimatedLottieView
        source={require("../../../assets/cooking.json")}
        style={{ flex: 1 }}
      />
    </View>
  );
}

export default RankingHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-start",
  },
});
