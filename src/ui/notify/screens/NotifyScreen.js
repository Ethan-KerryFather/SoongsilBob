import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../../../assets/Colors";

function NotifyScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.notifyContainer}>
        <Text
          style={{ fontFamily: "gowun-bold", fontSize: 40, paddingTop: 20 }}
        >
          공지
        </Text>
      </View>
      <View style={styles.notifyContentContainer}>
        <Text>준비중입니다</Text>
      </View>
      <View style={styles.eventContainer}>
        <Text style={{ fontFamily: "gowun-bold", fontSize: 40 }}>이벤트</Text>
      </View>
      <View style={styles.eventContentContainer}>
        <Text>준비중입니다</Text>
      </View>
    </View>
  );
}
ㄴ;

export default NotifyScreen;

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
    flex: 2,
  },
  eventContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.basicColor.magenta,
  },
  eventContentContainer: {
    flex: 3,
  },
});
