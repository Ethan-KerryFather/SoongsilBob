import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../../../assets/Colors";

function EventScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.notifyContainer}>
        <Text style={{ fontFamily: "gowun-bold", fontSize: 40 }}>이벤트</Text>
      </View>
      <View style={styles.notifyContentContainer}>
        <Text>준비중입니다</Text>
      </View>
    </View>
  );
}
export default EventScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  notifyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.basicColor.magenta,
  },
  notifyContentContainer: {
    flex: 10,
  },
});
