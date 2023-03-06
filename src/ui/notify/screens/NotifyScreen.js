import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Touchable,
  TouchableOpacity,
  Linking,
} from "react-native";
import Colors from "../../../../assets/Colors";
import DragModal from "../../DragModal";

function NotifyScreen() {
  const [isDragModalVisible, setDragModalVisible] = useState(true);
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
        <Text style={{ fontFamily: "gowun-regular" }}>사장님 공지추가</Text>

        <Entypo
          name="squared-plus"
          size={40}
          color="black"
          style={{ margin: 3 }}
        />
      </Pressable>
      <View style={styles.notifyContainer}>
        <Text style={{ fontFamily: "gowun-bold", fontSize: 40 }}>공지</Text>
      </View>

      <View style={styles.notifyContentContainer}>
        <Text style={{ fontSize: 25, fontFamily: "gowun-bold" }}>
          등록된 공지가 없습니다
        </Text>
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
  //
  normalText: {
    fontFamily: "gowun-regular",
  },
});
