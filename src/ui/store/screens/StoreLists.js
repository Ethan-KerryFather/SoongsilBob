import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { RFPercentage } from "react-native-responsive-fontsize";
import Colors from "../../../../assets/Colors";
import stores from "../../../resource/stores";
import {
  BigText,
  BigTitle,
  SmallText,
  SmallTitle,
} from "../../../styled/styledComponents";
import { GetDistance } from "./components/GetDistance";
import CustomSnackbar from "../../../styled/CustomSnackbar";
import { Divider } from "react-native-paper";

function StoreLists({ route }) {
  // 컴포넌트 보여줄때 한번 위치 초기화
  const navigation = useNavigation();
  const { width } = useWindowDimensions("window");
  const { latitude, longtitude } = route.params;
  const [arrangeMode, setArrangeMode] = useState("거리순");
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      title: `숭밥${route.params.category}코너`,
    });
  }, [navigation]);

  const getCategoryStores = (category) => {
    let storesArray = [];
    switch (category) {
      case "한식":
        storesArray = stores.korean;
        break;
      case "양식":
        storesArray = stores.western;
        break;
      case "아시안":
        storesArray = stores.asian;
        break;
      case "치킨/피자":
        storesArray = stores.chickenPizza;
        break;
      case "테이크아웃":
        storesArray = stores.takeout;
        break;
      case "술집":
        storesArray = stores.alcohol;
        break;
      case "카페":
        storesArray = stores.cafe;
        break;
      case "일식":
        storesArray = stores.japanese;
        break;
      default:
        storesArray = [];
    }

    if (arrangeMode === "거리순") {
      storesArray.sort((a, b) => {
        const distanceA = GetDistance(
          latitude,
          longtitude,
          a.location.Y,
          a.location.X
        );
        const distanceB = GetDistance(
          latitude,
          longtitude,
          b.location.Y,
          b.location.X
        );
        return distanceA - distanceB;
      });
    }

    return storesArray;
  };

  return (
    <View style={styles.container}>
      <CustomSnackbar
        visible={snackbarVisible}
        setVisible={setSnackbarVisible}
      />
      <FlatList
        ListHeaderComponent={
          <View
            style={{
              marginTop: 20,
              marginBottom: 10,
              alignSelf: "flex-end",
              width: "100%",
              height: RFPercentage(5),
            }}
          >
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Pressable
                style={
                  arrangeMode === "거리순"
                    ? [
                        styles.arrangeSelectIcon,
                        { backgroundColor: Colors.basicColor.magenta },
                      ]
                    : [styles.arrangeSelectIcon]
                }
              >
                <SmallTitle>가까운밥집부터</SmallTitle>
              </Pressable>
              <Pressable
                style={styles.arrangeSelectIcon}
                onPress={() => {
                  setSnackbarVisible(true);
                }}
              >
                <SmallTitle>인기많은밥집부터</SmallTitle>
              </Pressable>
            </ScrollView>
          </View>
        }
        style={styles.flatListContainer}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
        //data={stores.korean}
        data={getCategoryStores(route.params.category)}
        renderItem={({ item }) => {
          if (item.menu.length !== 0) console.log(item.menu[1][1]);
          return (
            <Pressable
              style={[
                styles.itemContainer,
                {
                  width: width * 1,
                },
              ]}
              onPress={() => {
                navigation.navigate("StorePage", {
                  storeInfo: {
                    name: item.name,
                    price: item.price,
                    area: item.area,
                    workingTime: item.workingTime,
                    description: item.description,
                    imageList: item.imageList,
                    storeNumber: item.phoneNum,
                  },
                  location: item.location,
                });
              }}
            >
              <View>
                <SmallTitle>
                  나로부터{" "}
                  {GetDistance(
                    latitude,
                    longtitude,
                    item.location.Y,
                    item.location.X
                  ).toFixed(2)}
                  km 떨어져있어요
                </SmallTitle>
              </View>
              <View
                style={{
                  alignSelf: "center",
                  width: "100%",
                  height: RFPercentage(25),
                  resizeMode: "cover",
                  marginBottom: 10,
                  flexDirection: "row",
                  borderWidth: 2,
                  borderColor: "white",
                }}
              >
                <View
                  style={{
                    flex: 2,
                    borderRightColor: "white",
                    borderRightWidth: 2,
                  }}
                >
                  <Image
                    source={{ uri: item.imageList[0] }}
                    style={styles.itemImage}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <View
                    style={{
                      flex: 1,
                      borderBottomColor: "white",
                      borderBottomWidth: 2,
                    }}
                  >
                    <Image
                      source={{ uri: item.imageList[1] }}
                      style={styles.itemImage}
                    />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Image
                      source={{ uri: item.imageList[2] }}
                      style={styles.itemImage}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  paddingTop: 10,
                  flexDirection: "column",
                  alignItems: "center",
                  paddingBottom: 5,
                  marginBottom: 5,
                  paddingLeft: 10,
                  paddingRight: 10,
                }}
              >
                <Text
                  style={[styles.normalText, { fontSize: 25, marginBottom: 8 }]}
                >
                  {item.name}
                </Text>
                <Text
                  style={[styles.normalText, { fontSize: 13, marginBottom: 8 }]}
                >
                  {item.description}
                </Text>

                <View
                  style={{
                    flexDirection: "row",

                    alignSelf: "flex-start",
                  }}
                >
                  <Ionicons
                    name="star"
                    color="red"
                    size={15}
                    style={{ paddingLeft: 5 }}
                  />
                  <Text> 0</Text>
                </View>
              </View>
              <View
                style={{
                  margin: 10,
                  width: "95%",
                  alignSelf: "center",
                  backgroundColor: "white",
                  borderRadius: 20,
                  borderWidth: 3,
                  borderColor: Colors.basicColor.magentaTrans1,
                }}
              >
                <View>
                  <View
                    style={{
                      marginTop: RFPercentage(3),
                      marginBottom: RFPercentage(2),
                      alignSelf: "center",
                    }}
                  >
                    <View
                      style={{
                        height: 30,
                        backgroundColor: "yellow",
                        opacity: 0.5,
                        justifyContent: "center",
                        zIndex: 1,
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "black-sans",
                          fontSize: 20,
                          color: "black",
                          zIndex: 1,
                        }}
                      >
                        MENU
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      borderBottomWidth: 0.5,
                      width: "95%",
                      alignSelf: "center",
                      borderBottomColor: "black",
                    }}
                  />
                  <View
                    style={{
                      alignItems: "center",
                      marginBottom: RFPercentage(5),
                    }}
                  >
                    {item.menu.length !== 0 &&
                      item.menu.map((item) => {
                        return (
                          <View
                            style={{
                              flexDirection: "row",
                              width: "80%",
                              justifyContent: "space-between",
                              marginBottom: RFPercentage(1),
                              marginTop: RFPercentage(2.5),
                            }}
                          >
                            <SmallTitle>{item[0]}</SmallTitle>
                            <BigText
                              style={{ textDecorationLine: "underline" }}
                            >
                              {item[1]}
                            </BigText>
                          </View>
                        );
                      })}
                  </View>
                </View>
              </View>
              <View style={{ padding: 20 }}>
                <View style={{ alignSelf: "center", marginBottom: 30 }}>
                  <SmallTitle>밥집 살펴보기</SmallTitle>
                </View>
                <Text style={[styles.normalText, { fontSize: 15 }]}>
                  {item.area} 근처에 있어요
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
              </View>
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
    backgroundColor: "white",
  },
  //
  itemImageView: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    marginBottom: 10,
  },
  itemImage: {
    width: "100%",
    height: "100%",
    borderRadius: 3,
  },

  flatListContainer: {
    flex: 1,
  },
  itemContainer: {
    // padding: 20,
    backgroundColor: Colors.basicColor.magentaTrans2,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: Colors.basicColor.magenta,
    borderWidth: 1,
  },
  arrangeSelectIcon: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    height: "100%",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: RFPercentage(1),
    borderColor: "black",
    borderWidth: 2,
  },

  //
  normalText: {
    fontFamily: "gowun-regular",
    color: "black",
    fontSize: 20,
  },
});
