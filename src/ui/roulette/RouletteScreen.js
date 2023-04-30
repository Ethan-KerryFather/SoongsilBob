import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Text, StyleSheet, Pressable, View, ScrollView } from "react-native";
import SlotMachine from "react-native-slot-machine";
import stores from "../../resource/stores";
import Colors from "../../../assets/Colors";
import { BigTitle, SmallTitle } from "../../styled/styledComponents";

// 전체추가 버튼
// 카테고리 선택 후 매장 빼고 넣을 수 있게
function RouletteScreen() {
  const navigation = useNavigation();
  const [names, setNames] = useState("");
  const [uniqueWords, setUniqueWords] = useState("");

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
    let temp = "뭐먹을래요?";
    let name = [];
    stores.alcohol.forEach((element) => {
      temp = temp.concat(element.name);
      name.push(element.name);
    });
    // stores.asian.forEach((element) => {
    //   temp = temp.concat(element.name);
    //   name.push(element.name);
    // });
    // stores.western.forEach((element) => {
    //   temp = temp.concat(element.name);
    //   name.push(element.name);
    // });
    // stores.cafe.forEach((element) => {
    //   temp = temp.concat(element.name);
    //   name.push(element.name);
    // });
    // stores.chickenPizza.forEach((element) => {
    //   temp = temp.concat(element.name);
    //   name.push(element.name);
    // });
    // stores.japanese.forEach((element) => {
    //   temp = temp.concat(element.name);
    //   name.push(element.name);
    // });
    // stores.korean.forEach((element) => {
    //   temp = temp.concat(element.name);
    //   name.push(element.name);
    // });
    // stores.takeout.forEach((element) => {
    //   temp = temp.concat(element.name);
    //   name.push(element.name);
    // });

    const removedName = temp.replace(/\s/g, "");
    result = [...new Set(removedName)].join("");
    console.log(name);
    setUniqueWords(result);
    setNames(name);
  }, []);

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
              onPress={() => {
                console.log(element.name);
              }}
            >
              <SmallTitle style={{ marginBottom: 10 }}>
                {element.name}
              </SmallTitle>
              <Pressable
                style={{
                  width: "80%",
                  alignItems: "center",
                  borderRadius: 30,
                  backgroundColor: Colors.basicColor.green,
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
              text="으리으리"
              range={uniqueWords}
              width={50}
              height={80}
              duration={3000}
              delay={1}
            />
          </View>
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
