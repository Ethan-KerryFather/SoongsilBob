import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../../../assets/Colors";

function NotifyScreen() {
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
        <Text>사장님 공지추가</Text>
        <Pressable style={({ pressed }) => (pressed ? [] : [{}])}>
          <MaterialCommunityIcons name="plus" size={40} color="blue" />
        </Pressable>
      </View>
      <View style={styles.notifyContainer}>
        <Text style={{ fontFamily: "gowun-bold", fontSize: 40 }}>공지</Text>
      </View>
      <View style={styles.notifyContentContainer}>
        <Text>준비중입니다</Text>
      </View>
    </View>
  );
}
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
    flex: 10,
  },
});
