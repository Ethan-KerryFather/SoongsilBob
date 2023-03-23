import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

function RouletteScreen({ route }) {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: `${route.params.category}`,
      headerShown: false,
    });
  }, [navigation]);
  return <View style={styles.container}></View>;
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
