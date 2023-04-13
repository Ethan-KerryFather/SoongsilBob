import React, { useEffect, useState } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import axios from "axios";
import * as cheerio from "cheerio";
import { BigTitle, SmallText, SmallTitle } from "../../styled/styledComponents";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import FoodCard from "./components/FoodCard";
import { RFPercentage } from "react-native-responsive-fontsize";
import Colors from "../../../assets/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DormFood from "./components/DormFood";
import DodamFood from "./components/DodamFood";

function UnivFoodScreen({ navigation }) {
  const [screenMenu, setScreenMenu] = useState(2);
  const [studentLunch, setStudentLunch] = useState({
    lunch1: { menu: "로딩중" },
    lunch2: "로딩중",
  });
  const [dodamLunch, setDodamLunch] = useState({
    lunch1: "로딩중",
    lunch2: "로딩중",
    dinner1: "로딩중",
  });

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    axios
      .get("https://soongguri.com/main.php?mkey=2&w=3")
      .then((response) => {
        // fetchImageUrl()
        //   .then((imageUrl) => {
        //     setStudentLunch((prevState) => {
        //       return {
        //         ...prevState,
        //         lunch1: { imageUrl: imageUrl, ...prevState.lunch1 },
        //       };
        //     });
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });

        // parsing
        const html = response.data;
        const cheerioedHtml = cheerio.load(html);
        const element1 = cheerioedHtml(
          "body > div.sub_layout > div.sub_mid > div.smid > div.detail_center > div > table > tbody > tr:nth-child(5) > td > table > tbody > tr:nth-child(3) > td:nth-child(1) > table > tbody > tr > td > div "
        );

        // lunch1의 imageUrl은 유지하고 menu만 바꿈
        setStudentLunch((prevState) => {
          return {
            ...prevState,
            lunch1: {
              ...prevState.lunch1,
              menu: element1.text(),
            },
          };
        });

        const element2 = cheerioedHtml(
          "body > div.sub_layout > div.sub_mid > div.smid > div.detail_center > div > table > tbody > tr:nth-child(5) > td > table > tbody > tr:nth-child(3) > td:nth-child(2) > table > tbody > tr > td:nth-child(1) > div"
        );

        setStudentLunch((prevState) => {
          return {
            ...prevState,
            lunch2: element2.text(),
          };
        });
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {
      console.log("clean up");
    };
  }, []);

  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView>
        <View style={styles.upperContainer}>
          <BigTitle>숭실밥집 _학식</BigTitle>
          <MaterialCommunityIcons name="silverware-spoon" size={30} />
        </View>
        <View
          style={{
            width: "95%",
            alignSelf: "center",
            flexDirection: "row",
            marginBottom: 10,
            justifyContent: "space-around",
            borderWidth: 1,
            borderColor: Colors.basicColor.greenTrans1,
            paddingVertical: 5,
            borderRadius: 20,
          }}
        >
          <Pressable
            style={[
              styles.menuButton,
              {
                backgroundColor:
                  screenMenu === 2
                    ? Colors.basicColor.magentaTrans1
                    : Colors.basicColor.magentaTrans2,
              },
            ]}
            onPress={() => {
              setScreenMenu(2);
            }}
          >
            <Text>학생식당</Text>
          </Pressable>
          <Pressable
            style={[
              styles.menuButton,
              {
                backgroundColor:
                  screenMenu === 3
                    ? Colors.basicColor.magentaTrans1
                    : Colors.basicColor.magentaTrans2,
              },
            ]}
            onPress={() => {
              setScreenMenu(3);
            }}
          >
            <Text>도담식당</Text>
          </Pressable>
          <Pressable
            style={[
              styles.menuButton,
              {
                backgroundColor:
                  screenMenu === 4
                    ? Colors.basicColor.magentaTrans1
                    : Colors.basicColor.magentaTrans2,
              },
            ]}
            onPress={() => {
              setScreenMenu(4);
            }}
          >
            <Text>기숙사식당</Text>
          </Pressable>
        </View>
        {screenMenu === 2 && (
          <View style={styles.foodCardWrapper}>
            <View>
              <View style={styles.menuTitle}>
                <BigTitle style={styles.bigTitle}>학생식당</BigTitle>
                <SmallTitle>Students Cafeteria</SmallTitle>
                <SmallText>학생회관 지하1층</SmallText>
              </View>

              {studentLunch === "로딩중" ? (
                <ActivityIndicator animating={true} color={MD2Colors.red800} />
              ) : (
                <FoodCard
                  title="점심1코너"
                  text={studentLunch.lunch1.menu}
                  imageUrl={studentLunch.lunch1.imageUrl}
                />
              )}

              {studentLunch === "로딩중" ? (
                <ActivityIndicator animating={true} color={MD2Colors.red800} />
              ) : (
                <FoodCard title="점심2코너" text={studentLunch.lunch2} />
              )}
            </View>
          </View>
        )}

        {screenMenu === 3 && <DodamFood />}
        {screenMenu === 4 && (
          <View>
            <DormFood />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default UnivFoodScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "white",
  },
  upperContainer: {
    alignItems: "center",
    paddingLeft: RFPercentage(2),
    paddingTop: RFPercentage(2),
    paddingBottom: RFPercentage(2),
    flexDirection: "row",
  },
  //
  bigTitle: {},
  foodCardWrapper: {
    backgroundColor: Colors.basicColor.magentaTrans2,
    borderRadius: 20,
    width: "95%",
    alignSelf: "center",
    marginBottom: RFPercentage(5),
  },
  menuTitle: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  menuButton: {
    backgroundColor: Colors.basicColor.magentaTrans2,
    height: 50,
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  //
  normalText: {
    fontFamily: "gowun-regular",
  },
});
