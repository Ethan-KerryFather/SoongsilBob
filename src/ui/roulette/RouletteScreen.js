import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Text, StyleSheet, Pressable, View, ScrollView } from "react-native";
import SlotMachine from "react-native-slot-machine";
import stores from "../../resource/stores";
import Colors from "../../../assets/Colors";
import { BigTitle, SmallTitle } from "../../styled/styledComponents";

/*
RouletteScreen
  밥집 카테고리 별 랜덤추천 컴포넌트
TODO:
  1. 전체추가버튼
  2. 카테고리 선택 후 매장 빼고 넣을 수 있게
  3. 디자인 수정
*/

function RouletteScreen() {
  const getUniqueWord = (words) => {
    // 공백제거
    let removedName = words.replace(/\s/g, "");
    // 중복글자 제거
    result = [...new Set(removedName)].join("");
    return result;
  };

  const addCategoryStores = (element, store) => {
    if (!element.isSelected) {
      store.map((element) => {
        setUniqueWords((prevState) => {
          return UniqueWords.concat(getUniqueWord(element.name));
        });
        setNames((prevState) => {
          return prevState.concat(element.name);
        });
      });
    } else {
      console.log("already Selected");
    }
  };

  const navigation = useNavigation();

  // states
  // names : array[string] - 선택된 카테고리의 밥집을 모은 배열
  const [names, setNames] = useState(["학식"]);
  // uniqueWords : String - 선택된 카테고리의 모든 밥집에 들어가는 유니크한 글자이다.
  const [uniqueWords, setUniqueWords] = useState("학식");

  // temp에는 Unique한 글자들의 모음이 들어와야한다.
  let UniqueWords = "뭐먹을래요?";

  const [categoryList, setCategoryList] = useState([
    { name: "한식", isSelected: false },
    { name: "일식", isSelected: false },
    { name: "양식", isSelected: false },
    { name: "아시안", isSelected: false },
    { name: "술집", isSelected: false },
    { name: "테이크아웃", isSelected: false },
    { name: "치킨/피자", isSelected: false },
    { name: "카페", isSelected: false },
  ]);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });

    categoryList.map((element) => {
      if (element.isSelected === true) {
        switch (element.name) {
          case "한식":
            console.log("한식");
            addCategoryStores(element, stores.korean);
            break;
          case "양식":
            console.log("양식추가");
            addCategoryStores(element, stores.western);
            break;
          case "아시안":
            console.log("아시안 추가");
            addCategoryStores(element, stores.asian);
            break;
          case "일식":
            console.log("일식추가");
            addCategoryStores(element, stores.japanese);
            break;
          case "술집":
            console.log("술집추가");
            addCategoryStores(element, stores.alcohol);
            break;
          case "테이크아웃":
            console.log("takeout 추가");
            addCategoryStores(element, stores.takeout);
            break;
          case "치킨/피자":
            console.log("치킨/피자 추가");
            addCategoryStores(element, stores.chickenPizza);
            break;
          case "카페":
            console.log("카페추가");
            addCategoryStores(element, stores.cafe);
            break;

          default:
            console.log("**category select exception**");
            break;
        }
        console.log(names);
        console.log(uniqueWords);
      }
    });
  }, [categoryList]);

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1.5,
          backgroundColor: Colors.basicColor.magentaTrans1,
          borderBottomRightRadius: 40,
        }}
      ></View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ position: "absolute", zIndex: 3, top: "20%" }}
      >
        {categoryList.map((element) => {
          return (
            <Pressable
              style={{
                width: 100,
                height: 100,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                margin: 5,
                borderRadius: 20,
                borderWidth: 0.5,
                borderColor: "black",
              }}
            >
              <SmallTitle style={{ marginBottom: 10 }}>
                {element.name}
              </SmallTitle>
              <Pressable
                style={{
                  width: "80%",
                  height: "50%",
                  alignItems: "center",
                  borderRadius: 30,
                  backgroundColor: Colors.basicColor.green,
                }}
                onPress={() => {
                  console.log(element.name);
                  setCategoryList((prevState) =>
                    prevState.map((category) =>
                      category.name === element.name
                        ? { ...category, isSelected: true }
                        : category
                    )
                  );
                }}
              >
                <SmallTitle>추가</SmallTitle>
              </Pressable>
            </Pressable>
          );
        })}
      </ScrollView>
      <View
        style={{ flex: 3, backgroundColor: Colors.basicColor.magentaTrans1 }}
      >
        <View
          style={{
            height: "100%",
            width: "100%",
            borderTopLeftRadius: 40,
            backgroundColor: "white",
            paddingTop: "20%",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <BigTitle>오늘</BigTitle>
            <SlotMachine
              text={names[Math.floor(Math.random() * names.length)]}
              range={uniqueWords}
              height={80}
              duration={3000}
              delay={1}
            />
          </View>
          <BigTitle>어때요?</BigTitle>
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: Colors.basicColor.magentaTrans1,
            borderTopLeftRadius: 40,
          }}
        ></View>
      </View>
    </View>
  );
}

export default RouletteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
