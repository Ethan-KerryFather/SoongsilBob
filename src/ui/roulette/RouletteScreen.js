import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Text, StyleSheet, Pressable, View, ScrollView } from "react-native";
import SlotMachine from "react-native-slot-machine";
import stores from "../../resource/stores";
import Colors from "../../../assets/Colors";
import { BigTitle, SmallTitle } from "../../styled/styledComponents";

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
    let temp = "";
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
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {categoryList.map((element) => {
          return (
            <Pressable
              style={{
                width: 100,
                height: 100,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: Colors.basicColor.grayTrans1,
                margin: 5,
                borderRadius: 20,
              }}
              onPress={() => {
                console.log(element);
              }}
            >
              <SmallTitle>{element.name}</SmallTitle>
            </Pressable>
          );
        })}
      </ScrollView>

      <View>
        <BigTitle>오늘</BigTitle>
        <SlotMachine
          text="JM호프바"
          range={uniqueWords}
          width={50}
          height={80}
        />
        <BigTitle>어때요</BigTitle>
      </View>
      <Text>{uniqueWords}</Text>
    </View>
  );
}

export default RouletteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
