import { useNavigation } from "@react-navigation/native";
import React, { useRef, useEffect, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";
import Colors from "../../assets/Colors";
import BottomSheet from "react-native-gesture-bottom-sheet";
import { RFPercentage } from "react-native-responsive-fontsize";
import AnimatedLottieView from "lottie-react-native";
import CategoryItem from "./CategoryItem";
import { useFonts } from "expo-font";
import { disassemble, assemble } from "hangul-js";
/*
HomeScreen
  페이지 처음 들어가면 보이는 화면
  1. Font upload
  2. Bottom Sheet
  3. Firebase 초기화
TODO:
  1. Bottom Sheet 파이어베이스 연결 및 페깅
*/

// FireBase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { Searchbar } from "react-native-paper";
import stores from "../resource/stores";
import { BigText, BigTitle, SmallText } from "../styled/styledComponents";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaUudwkSWT-1d541WAUSGwX1fwnpSoAvU",
  authDomain: "soongsilbob-a5800.firebaseapp.com",
  databaseURL: "https://soongsilbob-a5800-default-rtdb.firebaseio.com",
  projectId: "soongsilbob-a5800",
  storageBucket: "soongsilbob-a5800.appspot.com",
  messagingSenderId: "513272092717",
  appId: "1:513272092717:web:3359430222f9fd0ee6c0a4",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);

function HomeScreen({}) {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchBarFocused, setIsSearchBarFocused] = useState(false);
  const [allStores, setAllStores] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const temp = [];
    const keys = Object.keys(stores);
    const mappedArray = keys.map((key) => {
      stores[key].map((element) => {
        temp.push(element.name);
        setAllStores(temp);
      });
    });

    console.log(allStores);
  }, []);

  useEffect(() => {
    setSearchResults(
      allStores.filter((element) => element.includes(searchQuery))
    );
  }, [searchQuery]);

  const [fontsLoaded] = useFonts({
    "gowun-regular": require("../../assets/font/gowun-regular.ttf"),
    "gowun-bold": require("../../assets/font/gowun-bold.ttf"),
    "gangwon-bold": require("../../assets/font/gangwon-bold.ttf"),
    yangjin: require("../../assets/font/yangjin.ttf"),
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
    <KeyboardAvoidingView style={styles.container}>
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
          <BottomSheet hasDraggableIcon ref={bottomSheet} height={290}>
            <BottomSheetView />
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
                fontFamily: "gangwon-bold",
                fontSize: 50,
                letterSpacing: 13,
              }}
            >
              숭실밥집
            </Text>
          </Pressable>
          <View style={styles.middleContainer}>
            <View style={{ width: "100%" }}>
              <TextInput
                placeholder="밥집을 검색해보세요!"
                onChangeText={(text) => {
                  setSearchQuery(text);
                }}
                value={searchQuery}
                inputMode="text"
                textAlign="center"
                style={styles.searchBar}
                caretHidden={true}
                cursorColor="black"
                onFocus={() => {
                  setIsSearchBarFocused(true);
                  console.log(isSearchBarFocused);
                }}
                onEndEditing={() => {
                  setIsSearchBarFocused(false);
                  console.log("onEndEditing");
                }}
              />
            </View>
          </View>
          <View style={styles.lowerContainer}>
            {isSearchBarFocused ? (
              <View style={{ width: "100%" }}>
                <FlatList
                  data={searchResults}
                  renderItem={({ item }) => (
                    <View
                      style={{
                        backgroundColor: Colors.basicColor.magentaTrans2,
                        height: RFPercentage(5),
                        width: "90%",
                        alignSelf: "center",
                        alignItems: "center",
                        justifyContent: "center",
                        marginVertical: 2,
                        borderRadius: 15,
                      }}
                    >
                      <SmallText>{item}</SmallText>
                    </View>
                  )}
                  keyExtractor={(item, index) => index.toString()}
                  ListHeaderComponent={() => {
                    return (
                      <View
                        style={{
                          width: "100%",
                          alignItems: "center",
                          marginBottom: 20,
                        }}
                      >
                        <BigTitle>검색결과</BigTitle>
                      </View>
                    );
                  }}
                />
              </View>
            ) : (
              <CategoryView />
            )}
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
    </KeyboardAvoidingView>
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
  searchBar: {
    borderWidth: 1,
    borderColor: "black",
    width: "90%",
    alignSelf: "center",
    height: RFPercentage(6),
    borderRadius: 15,
  },
  //
  normalText: {
    fontFamily: "gowun-regular",
    fontSize: 20,
  },
});

function CategoryView() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        flexWrap: "wrap",
        paddingTop: 10,
      }}
    >
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
  );
}

function BottomSheetView() {
  return (
    <View style={styles.bottomsheet}>
      <View
        style={{
          alignItems: "center",
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
        <View
          style={{
            width: "80%",
            borderBottomColor: "black",
            borderBottomWidth: 0.5,
            marginBottom: 10,
          }}
        />

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
  );
}
