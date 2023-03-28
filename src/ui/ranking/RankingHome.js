import React, { useEffect } from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
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
    return stores.asian;
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
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
      <View style={styles.lowerContainer}>
        <Pressable
          style={{
            flexDirection: "row",
            paddingVertical: RFPercentage(2),
            paddingLeft: RFPercentage(3),
            alignItems: "center",
            marginVertical: 20,
            backgroundColor: Colors.basicColor.grayTrans1,
            width: "100%",
            alignSelf: "center",
            justifyContent: "space-between",
          }}
        >
          <SmallTitle>숭실밥집 사용하시고 혜택 받아가세요</SmallTitle>
          <Pressable style={{ justifyContent: "center", alignItems: "center" }}>
            <Feather
              name="chevron-right"
              size={RFPercentage(5)}
              color="black"
            />
          </Pressable>
        </Pressable>
        <View>
          <FlatList data={foodStores} renderItem={}/>
        </View>
      </View>
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
    backgroundColor: Colors.basicColor.green,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 30,
    paddingBottom: 10,
  },
  lowerContainer: {
    flex: 3.3,
    borderRadius: 30,
  },
});
