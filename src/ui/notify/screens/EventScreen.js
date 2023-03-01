import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Colors from "../../../../assets/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function EventScreen() {
  return (
    <View style={styles.container}>
      <View
        style={{
          position: "absolute",
          bottom: 10,
          right: 10,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: Colors.basicColor.gray,
          padding: 10,
          borderRadius: 10,
        }}
      >
        <Text>사장님 이벤트추가</Text>
        <Pressable style={({ pressed }) => (pressed ? [] : [{}])}>
          <MaterialCommunityIcons name="plus" size={40} color="blue" />
        </Pressable>
      </View>
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
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.basicColor.magenta,
  },
  notifyContentContainer: {
    flex: 10,
  },
});
