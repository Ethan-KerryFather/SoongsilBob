import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

function RankingHome({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontFamily: "gowun-bold" }}>
        숭실밥집 랭킹탭!
      </Text>
      <Text style={{ fontSize: 20, fontFamily: "gowun-bold" }}>
        준비중입니다
      </Text>
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
