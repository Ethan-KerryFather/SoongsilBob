import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import axios from "axios";
import * as cheerio from "cheerio";
import { Divider } from "react-native-paper";
import { BigTitle } from "../../styled/styledComponents";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import FoodCard from "./components/FoodCard";

function UnivFoodScreen({ navigation }) {
  const [studentLunch, setStudentLunch] = useState({
    lunch1: "로딩중",
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
        // 어차피 블록 단위여서 곧 사라짐
        fetchImageUrl()
          .then((imageUrl) => {
            setStudentLunch((prevState) => {
              return {
                ...prevState,
                lunch1: { imageUrl: imageUrl, ...prevState.lunch1 },
              };
            });
          })
          .catch((error) => {
            console.log(error);
          });

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

        const element3 = cheerioedHtml(
          "body > div.sub_layout > div.sub_mid > div.smid > div.detail_center > div > table > tbody > tr:nth-child(7) > td > table > tbody > tr:nth-child(3) > td:nth-child(1) > table > tbody > tr > td:nth-child(1) > div"
        );
        setDodamLunch({ lunch1: element3.text() });

        const element4 = cheerioedHtml(
          "body > div.sub_layout > div.sub_mid > div.smid > div.detail_center > div > table > tbody > tr:nth-child(7) > td > table > tbody > tr:nth-child(3) > td:nth-child(2) > table > tbody > tr > td:nth-child(1) > div"
        );
        setDodamLunch((prevState) => ({
          ...prevState,
          lunch2: element4.text(),
        }));

        const element5 = cheerioedHtml(
          "body > div.sub_layout > div.sub_mid > div.smid > div.detail_center > div > table > tbody > tr:nth-child(7) > td > table > tbody > tr:nth-child(3) > td:nth-child(3) > table > tbody > tr > td:nth-child(1)  > div"
        );
        setDodamLunch((prevState) => ({
          ...prevState,
          dinner1: element5.text(),
        }));
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {
      console.log("clean up");
    };
  }, []);

  // fetch studentlunch1
  const fetchImageUrl = async () => {
    try {
      const response = await axios.get(
        "https://soongguri.com/main.php?mkey=2&w=3"
      );
      const $ = cheerio.load(response.data);
      const imageUrl = $('img[src*="menu_file"]').attr("src");
      const baseUrl = $("base").attr("href");
      const absoluteUrl = baseUrl + imageUrl;
      console.log(`가져온 imageUrl : ${absoluteUrl}`);
      return absoluteUrl;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView>
        <View>
          <BigTitle>학생식당</BigTitle>
          {studentLunch === "로딩중" ? (
            <ActivityIndicator animating={true} color={MD2Colors.red800} />
          ) : (
            <FoodCard
              title="점심1코너"
              text={studentLunch.lunch1.menu}
              imageUrl={studentLunch.lunch1.imageUrl}
            />
          )}

          <Divider />
          {studentLunch === "로딩중" ? (
            <ActivityIndicator animating={true} color={MD2Colors.red800} />
          ) : (
            <FoodCard title="점심2코너" text={studentLunch.lunch2} />
          )}
        </View>

        <Divider />
        <View>
          <BigTitle>도담식당</BigTitle>
          {studentLunch === "로딩중" ? (
            <ActivityIndicator animating={true} color={MD2Colors.red800} />
          ) : (
            <FoodCard title="점심1코너" text={dodamLunch.lunch1} />
          )}
          <Divider />
          {studentLunch === "로딩중" ? (
            <ActivityIndicator animating={true} color={MD2Colors.red800} />
          ) : (
            <FoodCard title="점심2코너" text={dodamLunch.lunch2} />
          )}
          <Divider />
          {studentLunch === "로딩중" ? (
            <ActivityIndicator animating={true} color={MD2Colors.red800} />
          ) : (
            <FoodCard title="저녁1코너" text={dodamLunch.dinner1} />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default UnivFoodScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  //
  //
  normalText: {
    fontFamily: "gowun-regular",
  },
});
