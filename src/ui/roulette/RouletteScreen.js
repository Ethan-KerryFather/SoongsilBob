import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import SlotMachine from "react-native-slot-machine";

function RouletteScreen({ route }) {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: `${route.params.category}`,
      headerShown: false,
    });
  }, [navigation]);

  const slotRef = useRef(null);

  const startSlot = () => {
    slotRef.current.spin();
  };

  return (
    <View style={styles.container}>
      <SlotMachine
        ref={slotRef}
        initialAnimation={false}
        textStyles={{ fontSize: 30, color: "white" }}
        reels={[
          {
            values: ["A", "B", "C"],
            loop: 5,
            speed: 200,
            textStyle: { fontWeight: "bold" },
          },
          {
            values: ["1", "2", "3"],
            loop: 5,
            speed: 200,
            textStyle: { fontWeight: "bold" },
          },
          {
            values: ["X", "Y", "Z"],
            loop: 5,
            speed: 200,
            textStyle: { fontWeight: "bold" },
          },
        ]}
        reelConfig={{ tension: 200, friction: 10, mass: 0.5 }}
        style={{ height: 600 }}
      />
      <Pressable onPress={startSlot}>
        <Text>시작</Text>
      </Pressable>
    </View>
  );
}

export default RouletteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
