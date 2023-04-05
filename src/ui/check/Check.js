import React, { useEffect, useRef } from "react";
import { Text, View, StatusBar, StyleSheet, Pressable } from "react-native";
import Colors from "../../../assets/Colors";
import AnimatedLottieView from "lottie-react-native";
import { BigTitle, SmallTitle } from "../../styled/styledComponents";
import { AntDesign } from "@expo/vector-icons";
function Check({ navigation }) {
  const animationRef = useRef(null);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });

    if (animationRef.current) animationRef.current.play();
  }, []);
  return (
    <View style={styles.container}>
      <Pressable
        style={{
          position: "absolute",
          top: StatusBar.currentHeight,
          right: 10,
          zIndex: 2,
        }}
        onPress={() => {
          console.log("pressed");
          navigation.pop();
        }}
      >
        <AntDesign name="close" size={40} color="black" />
      </Pressable>
      <View style={{ flex: 5, backgroundColor: Colors.basicColor.green }}>
        <View style={{ paddingLeft: 30, paddingTop: 30 }}>
          <Text
            style={{
              fontSize: 40,
              fontFamily: "black-sans",
              letterSpacing: 3,
            }}
          >
            이 화면을{"\n"}사장님께{"\n"}보여주세요
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <AnimatedLottieView
            ref={animationRef}
            source={require("../../../assets/man-holding-note.json")}
            style={{ flex: 1 }}
          />
        </View>
      </View>
      <View
        style={{
          flex: 2,
          backgroundColor: "white",
          borderTopStartRadius: 40,
          borderTopEndRadius: 40,
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <View>
          <SmallTitle>숭실밥집을 이용해주셔서 감사합니다</SmallTitle>
          <BigTitle>할인을 적용하시겠습니까</BigTitle>
        </View>
        <Pressable
          style={{
            width: "90%",
            height: "30%",
            backgroundColor: Colors.basicColor.magentaTrans1,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
            borderColor: "black",
            borderWidth: 0.5,
          }}
          onPress={() => {
            navigation.navigate("Check2");
          }}
        >
          <BigTitle style={{ color: "black", letterSpacing: 3 }}>
            확인하였습니다
          </BigTitle>
        </Pressable>
      </View>
    </View>
  );
}

export default Check;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.basicColor.green,
    paddingTop: StatusBar.currentHeight,
  },
});
