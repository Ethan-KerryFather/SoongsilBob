import { useNavigation } from "@react-navigation/native";
import React, { useRef, useEffect, useMemo, useLayoutEffect } from "react";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import Colors from "../../assets/Colors";
import BottomSheet from "react-native-gesture-bottom-sheet";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RFPercentage } from "react-native-responsive-fontsize";
import AnimatedLottieView from "lottie-react-native";
import CategoryItem from "./CategoryItem";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

function HomeScreen({}) {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions("window");
  const snapPoints = React.useMemo(() => ["20%", "100%"], []);

  const [fontsLoaded] = useFonts({
    "gowun-regular": require("../../assets/font/gowun-regular.ttf"),
    "gowun-bold": require("../../assets/font/gowun-bold.ttf"),
    "black-sans": require("../../assets/font/black-sans.ttf"),
  });

  const bottomSheet = useRef();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  useEffect(() => {
    if (fontsLoaded) {
      bottomSheet.current.show();
    }
  }, [fontsLoaded]);
  return (
    <View style={styles.container}>
      {fontsLoaded ? (
        <View style={{ flex: 1 }}>
          <Pressable
            style={{
              position: "absolute",
              right: 10,
              bottom: 10,
              zIndex: 1,
            }}
            onPress={() => {
              navigation.navigate("Check");
            }}
          >
            <Image
              source={require("../../assets/identificationIcon.png")}
              resizeMode="cover"
              style={{ height: RFPercentage(10), width: RFPercentage(10) }}
            />
          </Pressable>
          <BottomSheet hasDraggableIcon ref={bottomSheet} height={300}>
            <View style={styles.bottomsheet}>
              <View
                style={{
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: "80%",
                    borderBottomColor: "black",
                    borderBottomWidth: 0.5,
                    alignItems: "center",
                    marginBottom: 30,
                    marginTop: 20,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "gowun-bold",
                      fontSize: 30,
                      marginBottom: 10,
                      letterSpacing: 3,
                    }}
                  >
                    알려드립니다
                  </Text>
                </View>

                <View style={{ alignItems: "flex-start" }}>
                  <Text
                    style={{
                      fontFamily: "gowun-regular",
                      fontSize: 15,
                      letterSpacing: 1,
                    }}
                  >
                    해당 버전은 베타테스트 중입니다
                    {"\n"}
                    베타 서비스 중에는 사용이 불안정할 수 있습니다{"\n"}
                    양해부탁드립니다(*´∪`)
                    {"\n\n"}다운로드해주셔서 감사해요:)
                  </Text>
                </View>
              </View>
            </View>
          </BottomSheet>
          <Pressable
            style={styles.upperContainer}
            onPress={() => {
              console.log("routtlete");
              navigation.navigate("RouletteScreen", {
                category: "밥집 정하기",
              });
            }}
          >
            <Text
              style={{
                fontFamily: "gowun-bold",
                fontSize: 50,
                letterSpacing: 13,
              }}
            >
              숭실밥집
            </Text>
          </Pressable>
          <View style={styles.middleContainer}></View>
          <View style={styles.lowerContainer}>
            <CategoryItem
              category={"한식"}
              jsonRoute={require("../../assets/kimchi.json")}
            />

            <CategoryItem
              category={"일식"}
              jsonRoute={require("../../assets/japan.json")}
            />
            <CategoryItem
              category={"양식"}
              jsonRoute={require("../../assets/western.json")}
            />
            <CategoryItem
              category={"아시안"}
              jsonRoute={require("../../assets/asian.json")}
            />

            <CategoryItem
              category={"테이크아웃"}
              jsonRoute={require("../../assets/takeout.json")}
            />

            <CategoryItem
              category={"술집"}
              jsonRoute={require("../../assets/beer.json")}
            />

            <CategoryItem
              category={"치킨/피자"}
              jsonRoute={require("../../assets/pizza.json")}
            />
            <CategoryItem
              category="카페"
              jsonRoute={require("../../assets/cafe.json")}
            />
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <AnimatedLottieView
            source={require("../../assets/loading.json")}
            autoPlay
            style={{ flex: 1 }}
          />
        </View>
      )}
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  upperContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: Colors.basicColor.magenta,
  },
  middleContainer: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 5,
  },
  lowerContainer: {
    flex: 10,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    flexWrap: "wrap",
    paddingTop: 10,
  },
  //
  itemContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: "42%",
    height: "20%",
    backgroundColor: Colors.basicColor.magentaTrans2,
    borderRadius: 20,
    margin: "1%",
    borderWidth: 0.5,
    borderColor: Colors.basicColor.magenta,
  },
  bottomsheet: {
    flex: 1,
  },
  //
  normalText: {
    fontFamily: "gowun-regular",
    fontSize: 20,
  },
});
