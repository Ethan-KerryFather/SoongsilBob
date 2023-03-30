import React, { useEffect } from "react";
import {
  FlatList,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Colors from "../../../assets/Colors";
import { BigText, BigTitle, SmallTitle } from "../../styled/styledComponents";
import { Feather } from "@expo/vector-icons";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Avatar } from "react-native-paper";
import stores from "../../resource/stores";

function RankingHome({ navigation }) {
  const foodStores = (category) => {
    return stores.western;
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView stickyHeaderIndices={[1]}>
        <View style={styles.upperContainer}>
          <View style={{ alignItems: "flex-start" }}>
            <Avatar.Image
              size={RFPercentage(8)}
              source={require("../../../assets/horseIcon.png")}
            />
            <BigTitle style={{ color: "white" }}>Total heart</BigTitle>
            <BigText style={{ color: "white" }}>4000</BigText>
          </View>

          <View style={{ position: "absolute", right: 20, top: 30 }}>
            <Feather name="menu" size={40} color="black" />
          </View>
        </View>
        <Pressable>
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
              data={foodStores()}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <ImageBackground
                    source={{ uri: item.imageList[3] }}
                    style={{
                      marginLeft: 10,
                      marginRight: 10,
                      borderRadius: 20,
                      overflow: "hidden",
                    }}
                    resizeMode="cover"
                  >
                    <View
                      style={{
                        width: RFPercentage(20),
                        height: RFPercentage(15),
                        backgroundColor: Colors.basicColor.grayTrans1,
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 2,
                      }}
                    >
                      <Text style={{ color: "white" }}>{item.name}</Text>
                    </View>
                  </ImageBackground>
                );
              }}
            />
          </View>
        </View>
        <View>
          <View
            style={{
              width: "100%",
              alignItems: "flex-start",
              paddingLeft: 10,
              marginTop: RFPercentage(3),
            }}
          >
            <SmallTitle>숭밥랭킹</SmallTitle>
          </View>
          <View style={{ width: "100%", alignSelf: "center" }}>
            <FlatList
              data={foodStores()}
              showsHorizontalScrollIndicator={false}
              style={{ marginTop: 30 }}
              renderItem={({ item, index }) => {
                return (
                  <ImageBackground
                    source={{ uri: item.imageList[3] }}
                    style={{
                      overflow: "hidden",
                      marginBottom: 30,
                    }}
                    resizeMode="cover"
                  >
                    <View
                      style={{
                        width: "100%",
                        height: RFPercentage(18),
                        alignItems: "flex-end",
                        justifyContent: "flex-end",
                        padding: 2,
                      }}
                    >
                      <SmallTitle style={{ color: "white" }}>
                        {index + 1}위
                      </SmallTitle>
                      <BigTitle style={{ color: "white" }}>
                        {item.name}
                      </BigTitle>
                    </View>
                  </ImageBackground>
                );
              }}
            />
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
    paddingTop: 30,
  },
  lowerContainer: {
    flex: 3.3,
    borderRadius: 30,
  },
});
