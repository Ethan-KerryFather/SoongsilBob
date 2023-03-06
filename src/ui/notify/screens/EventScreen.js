import React from "react";
import { StyleSheet, Text, View, Pressable, Linking } from "react-native";
import Colors from "../../../../assets/Colors";
import { Entypo } from "@expo/vector-icons";

function EventScreen() {
  return (
    <View style={styles.container}>
      <Pressable
        style={{
          position: "absolute",
          bottom: 10,
          right: 10,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: Colors.basicColor.gray,
          padding: 10,
          borderRadius: 10,
          zIndex: 1,
        }}
        onPress={() => {
          console.log("clicked");
          Linking.openURL("https://forms.gle/Rw8rduVAd26maDxm8");
        }}
      >
        <Text style={{ fontFamily: "gowun-regular" }}>사장님 이벤트추가</Text>

        <Entypo
          name="squared-plus"
          size={40}
          color="black"
          style={{ margin: 3 }}
        />
      </Pressable>
      <View style={styles.notifyContainer}>
        <Text style={{ fontFamily: "gowun-bold", fontSize: 40 }}>이벤트</Text>
      </View>
      <View style={styles.notifyContentContainer}>
        <Text style={{ fontSize: 25, fontFamily: "gowun-bold" }}>
          등록된 이벤트가 없습니다
        </Text>
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
    justifyContent: "center",
    alignItems: "center",
  },
});
