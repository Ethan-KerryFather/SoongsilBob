import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { Pressable, Text, Image, StyleSheet, View } from "react-native";
import { BigText, SmallTitle } from "../../../../styled/styledComponents";
import { GetDistance } from "./GetDistance";
import Colors from "../../../../../assets/Colors";
import { RFPercentage } from "react-native-responsive-fontsize";

function StoreCard({ item, index, width, latitude, longtitude }) {
  const navigation = useNavigation();
  const [isMenuShown, setMenuShown] = useState(false);
  return (
    <Pressable
      style={[
        styles.itemContainer,
        {
          width: width * 1,
          marginBottom: RFPercentage(10),
        },
      ]}
      key={index}
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
      <View style={{ marginVertical: RFPercentage(1.3) }}>
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
          <Image source={{ uri: item.imageList[0] }} style={styles.itemImage} />
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
        <Text style={[styles.normalText, { fontSize: 25, marginBottom: 8 }]}>
          {item.name}
        </Text>
        <Text style={[styles.normalText, { fontSize: 13, marginBottom: 8 }]}>
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
      {isMenuShown ? (
        <View>
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
                        <BigText style={{ textDecorationLine: "underline" }}>
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
          <Pressable
            onPress={() => {
              setMenuShown(!isMenuShown);
            }}
            style={{
              alignSelf: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text>간략히보기 </Text>
              <Ionicons
                name="arrow-up-circle-outline"
                size={40}
                color="black"
              />
            </View>
          </Pressable>
        </View>
      ) : (
        <Pressable
          onPress={() => {
            setMenuShown(!isMenuShown);
          }}
          style={{
            alignSelf: "center",
            marginBottom: RFPercentage(1),
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>메뉴판 열기 </Text>
            <Ionicons
              name="arrow-down-circle-outline"
              size={40}
              color="black"
            />
          </View>
        </Pressable>
      )}
    </Pressable>
  );
}

export default StoreCard;

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

  itemContainer: {
    // padding: 20,
    backgroundColor: Colors.basicColor.magentaTrans2,
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
  itemToggleBtn: {},
});
