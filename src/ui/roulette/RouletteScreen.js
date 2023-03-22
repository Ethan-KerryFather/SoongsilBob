import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import WheelOfFortune from "react-native-wheel-of-fortune/src";

function RouletteScreen({ route }) {
  const navigation = useNavigation();
  const participants = [
    "%10",
    "%20",
    "%30",
    "%40",
    "%50",
    "%60",
    "%70",
    "%90",
    "FREE",
  ];
  const wheelOptions = {
    rewards: participants,
    knobSize: 50,
    borderWidth: 5,
    borderColor: "#000",
    innerRadius: 50,
    duration: 4000,
    backgroundColor: "transparent",
    textAngle: "horizontal",
    knobSource: require("../../../assets/knob.png"),
    getWinner: (value, index) => {
      this.setState({ winnerValue: value, winnerIndex: index });
    },
    onRef: (ref) => (this.child = ref),
  };
  useEffect(() => {
    navigation.setOptions({
      title: `${route.params.category}`,
      headerShown: false,
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <WheelOfFortune options={wheelOptions} />
      <Button
        title="Press me"
        onPress={() => {
          this.child._onPress();
        }}
      />
    </View>
  );
}

export default RouletteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
