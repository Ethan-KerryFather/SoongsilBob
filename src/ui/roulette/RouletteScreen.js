import { useNavigation } from "@react-navigation/native";
import AnimatedLottieView from "lottie-react-native";
import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
//@ts-ignore
import SlotMachine from "react-native-slot-machine";
import { BigTitle } from "../../styled/styledComponents";
import * as Animatable from "react-native-animatable";

function RouletteScreen({ route }) {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View style={styles.container}>
      <Animatable.Text
        animation="slideInDown"
        iterationCount={5}
        direction="alternate"
        style={{
          fontFamily: "black-sans",
          fontSize: 30,
          alignSelf: "center",
          marginTop: 80,
          color: "white",
          zIndex: 3,
          backgroundColor: "brown",
          padding: 30,
          borderRadius: 50,
        }}
      >
        밥집 룰렛 준비중
      </Animatable.Text>
      <AnimatedLottieView
        style={{ flex: 1, borderWidth: 0.5, backgroundColor: "blue" }}
        source={require("../../../assets/roulette.json")}
        autoPlay
      />
    </View>
  );
}

export default RouletteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
