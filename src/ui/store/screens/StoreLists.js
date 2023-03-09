import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import Colors from "../../../../assets/Colors";
import stores from "../../../resource/stores";
import { GetDistance } from "./components/GetDistance";

function StoreLists({ route }) {
  // 컴포넌트 보여줄때 한번 위치 초기화
  const navigation = useNavigation();
  const { width } = useWindowDimensions("window");
  const { latitude, longtitude } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: `숭밥${route.params.category}코너`,
    });
  }, [navigation]);

  const getCategoryStores = (category) => {
    switch (category) {
      case "한식":
        return stores.korean;
      case "양식":
        return stores.western;
      case "아시안":
        return stores.asian;
      case "치킨/피자":
        return stores.chickenPizza;
      case "테이크아웃":
        return stores.takeout;
      case "술집":
        return stores.alcohol;
      case "카페":
        return stores.cafe;
      case "일식":
        return stores.japanese;
      default:
        return [];
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatListContainer}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
        //data={stores.korean}
        data={getCategoryStores(route.params.category)}
        renderItem={({ item }) => {
          return (
            <Pressable
              style={[styles.itemContainer, { width: width * 0.8 }]}
              onPress={() => {
                navigation.navigate("StorePage", {
                  storeInfo: {
                    name: item.name,
                    price: item.price,
                    area: item.area,
                    workingTime: item.workingTime,
                    description: item.description,
                    imageList: item.imageList,
                  },
                  location: item.location,
                });
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  borderBottomWidth: 0.5,
                  borderBottomColor: "black",
                  paddingBottom: 5,
                  marginBottom: 5,
                }}
              >
                <Text style={[styles.normalText, { fontSize: 25 }]}>
                  {item.name}
                </Text>
                <Text style={[styles.normalText, { fontSize: 10 }]}>
                  {item.description}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    paddingVertical: 10,
                    alignSelf: "flex-start",
                    paddingLeft: 10,
                  }}
                >
                  <Ionicons
                    name="star"
                    color="red"
                    size={15}
                    style={{ paddingLeft: 5 }}
                  />
                  <Text> 10</Text>
                </View>
              </View>

              <Text style={[styles.normalText, { fontSize: 15 }]}>
                {item.area}근처에 있어요
                {"\n"}가격대는 {item.price}이에요
                {"\n"}내 위치에서{" "}
                {GetDistance(
                  latitude,
                  longtitude,
                  item.location.Y,
                  item.location.X
                ).toFixed(2)}
                km 떨어져있어요
              </Text>
            </Pressable>
          );
        }}
      />
    </View>
  );
}

export default StoreLists;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  //
  flatListContainer: {
    flex: 1,
  },
  itemContainer: {
    padding: 20,
    backgroundColor: Colors.basicColor.gray,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: Colors.basicColor.magenta,
    borderWidth: 1,
  },
  //
  normalText: {
    fontFamily: "gowun-regular",
    color: "black",
    fontSize: 20,
  },
});
