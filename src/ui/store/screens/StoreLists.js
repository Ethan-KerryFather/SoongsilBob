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
      title: `숭밥 ${route.params.category}코너`,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatListContainer}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
        data={stores.korean}
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
                  },
                  location: item.location,
                });
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={[styles.normalText, { fontSize: 25 }]}>
                  {item.name} -
                </Text>
                <Ionicons
                  name="star"
                  color="red"
                  size={15}
                  style={{ paddingLeft: 5 }}
                />
                <Text> 10</Text>
              </View>

              <Text style={[styles.normalText, { fontSize: 15 }]}>
                {item.area}
              </Text>
              <Text style={[styles.normalText, { fontSize: 15 }]}>
                가격대 {item.price}
              </Text>
              <Text style={[styles.normalText, { fontSize: 15 }]}>
                내 위치에서{" "}
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
  },
  //
  normalText: {
    fontFamily: "gowun-regular",
    color: "black",
    fontSize: 20,
  },
});
