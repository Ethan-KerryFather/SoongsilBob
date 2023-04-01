import React, { useEffect } from "react";
import {
  FlatList,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  View,
} from "react-native";
import Colors from "../../../assets/Colors";
import {
  BigText,
  BigTitle,
  SmallText,
  SmallTitle,
} from "../../styled/styledComponents";
import { Feather } from "@expo/vector-icons";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Avatar, Divider } from "react-native-paper";
import stores from "../../resource/stores";
import { Entypo } from "@expo/vector-icons";

function RankingHome({ navigation }) {
  const statusBarHeight = StatusBar.currentHeight;

  const foodStores = (category) => {
    return stores[category];
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView stickyHeaderIndices={[1]}>
        <View style={[styles.upperContainer, { paddingTop: statusBarHeight }]}>
          <View style={{ alignItems: "flex-start" }}>
            <Avatar.Image
              size={RFPercentage(8)}
              source={require("../../../assets/horseIcon.png")}
            />
            <BigTitle style={{ color: "white" }}>Total heart</BigTitle>
            <BigText style={{ color: "white" }}>4000</BigText>
          </View>

          <Pressable
            style={{ position: "absolute", right: 20, top: 30 }}
            onPress={() => {
              console.log("menu");
            }}
          >
            <Feather name="menu" size={40} color="black" />
          </Pressable>
        </View>
        <Pressable
          onPress={() => {
            console.log("pressed");
            navigation.navigate("Alliance");
          }}
        >
          <View
            style={{
              flexDirection: "row",
              paddingVertical: RFPercentage(2),
              paddingLeft: RFPercentage(3),
              alignItems: "center",
              marginVertical: 20,
              backgroundColor: Colors.basicColor.magentaTrans2,
              width: "100%",
              alignSelf: "center",
              justifyContent: "space-between",
            }}
          >
            <SmallTitle>숭실밥집 사용하시고 혜택 받아가세요</SmallTitle>
            <Pressable
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Feather
                name="chevron-right"
                size={RFPercentage(5)}
                color="black"
              />
            </Pressable>
          </View>
        </Pressable>
        <View style={styles.lowerContainer}>
          <View>
            <FlatList
              horizontal={true}
              data={[
                ...foodStores("alcohol"),
                ...foodStores("western"),
                ...foodStores("asian"),
                ...foodStores("cafe"),
              ]}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => {
                return (
                  <ImageBackground
                    source={{ uri: item.imageList[3] }}
                    style={{
                      marginLeft: 10,
                      marginRight: 10,
                      borderRadius: 12,
                      overflow: "hidden",
                    }}
                    resizeMode="cover"
                    key={index}
                  >
                    <View
                      style={{
                        width: RFPercentage(20),
                        height: RFPercentage(15),
                        backgroundColor: Colors.basicColor.grayTrans1,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <SmallTitle style={{ color: "white", fontSize: 20 }}>
                        {item.name}
                      </SmallTitle>
                    </View>
                  </ImageBackground>
                );
              }}
            />
          </View>
        </View>
        <Divider style={{ marginTop: 50 }} />
        <View>
          <View
            style={{
              width: "100%",
              alignItems: "flex-start",
              paddingLeft: 10,
              marginTop: RFPercentage(3),
              marginBottom: RFPercentage(1),
            }}
          >
            <BigTitle>숭밥랭킹</BigTitle>
          </View>
          <View style={{ width: "100%", alignSelf: "center" }}>
            {foodStores("western").map((item, index) => {
              return (
                <ImageBackground
                  source={{ uri: item.imageList[3] }}
                  style={{
                    marginBottom: 30,
                    flexDirection: "row",
                  }}
                  resizeMode="cover"
                  key={index}
                >
                  {Array(5 - index)
                    .fill()
                    .map((_, index) => {
                      return (
                        <View
                          style={{
                            position: "absolute",
                            top: 2,
                            left: index * 30 + 2,
                          }}
                          key={index}
                        >
                          <Entypo
                            name="star"
                            color={Colors.basicColor.gold}
                            size={40}
                          />
                        </View>
                      );
                    })}

                  <View
                    style={{
                      width: "100%",
                      height: RFPercentage(30),
                      alignItems: "flex-end",
                      justifyContent: "flex-end",
                      padding: 2,
                    }}
                  >
                    <SmallTitle style={{ color: "white" }}>
                      {index + 1}위
                    </SmallTitle>
                    <BigTitle style={{ color: "white" }}>{item.name}</BigTitle>
                  </View>
                </ImageBackground>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default RankingHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  upperContainer: {
    flex: 1,
    backgroundColor: Colors.basicColor.magentaTrans1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 30,
    paddingBottom: 10,
  },
  lowerContainer: {
    flex: 3.3,
    borderRadius: 30,
  },
  drawer: {
    width: "70%",
    height: "100%",
    backgroundColor: "#fff",
    position: "absolute",
    zIndex: 3,
    paddingTop: 50,
    paddingLeft: 20,
  },
});
