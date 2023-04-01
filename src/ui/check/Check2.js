import AnimatedLottieView from "lottie-react-native";
import { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Pressable, Text, StatusBar } from "react-native";
import { BigTitle, SmallTitle } from "../../styled/styledComponents";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../../assets/Colors";
import { RFPercentage } from "react-native-responsive-fontsize";

function Check2({ route, navigation }) {
  const animationRef = useRef(null);
  const [second, setSecond] = useState(5);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    const timer =
      second > 0 &&
      setInterval(() => {
        setSecond(second - 1);
      }, 1000);

    if (second === 0) {
      navigation.popToTop();
    }

    return () => {
      clearInterval(timer);
    };
  }, [second]);

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.closeBtn}
        onPress={() => {
          console.log("pressed");
          navigation.popToTop();
        }}
      >
        <AntDesign name="close" size={40} color="black" />
      </Pressable>
      <View style={styles.upperContainer}>
        <View style={{ alignSelf: "center", paddingTop: RFPercentage(20) }}>
          <Text
            style={{
              fontSize: 50,
              fontFamily: "black-sans",
              letterSpacing: 3,
            }}
          >
            확인되었습니다!
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <AnimatedLottieView
            autoPlay
            ref={animationRef}
            style={{ flex: 1 }}
            source={require("../../../assets/finish.json")}
          />
        </View>
      </View>
      <View style={styles.lowerContainer}>
        <View>
          <SmallTitle style={{ fontSize: RFPercentage(3) }}>
            {second}초 후에 홈화면으로 돌아갑니다
          </SmallTitle>
        </View>
      </View>
    </View>
  );
}

export default Check2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.basicColor.green,
  },
  upperContainer: { flex: 5, backgroundColor: Colors.basicColor.green },
  lowerContainer: {
    flex: 2,
    backgroundColor: "white",
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    alignItems: "center",
    justifyContent: "space-around",
  },
  //
  closeBtn: {
    position: "absolute",
    top: StatusBar.currentHeight,
    right: 10,
    zIndex: 2,
  },
});
