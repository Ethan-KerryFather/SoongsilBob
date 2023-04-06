import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { RFPercentage } from "react-native-responsive-fontsize";
import Colors from "../../../../assets/Colors";
import stores from "../../../resource/stores";
import { SmallTitle } from "../../../styled/styledComponents";
import { GetDistance } from "./components/GetDistance";
import CustomSnackbar from "../../../styled/CustomSnackbar";
import StoreCard from "./components/StoreCard";

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
              marginBottom: 30,
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
        renderItem={({ item, index }) => {
          return (
            <StoreCard
              item={item}
              index={index}
              width={width}
              latitude={latitude}
              longtitude={longtitude}
              key={index}
            />
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
