import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import axios from "axios";
import * as cheerio from "cheerio";
import { Divider } from "react-native-paper";

function UnivFoodScreen({ navigation }) {
  const [lunchMenu1, setLunchMenu1] = useState("로딩중");
  const [lunchMenu2, setLunchMenu2] = useState("로딩중");
  const [dodamLunch, setDodamLunch] = useState("로딩중");
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    axios
      .get("https://soongguri.com/main.php?mkey=2&w=3")
      .then((response) => {
        const html = response.data;
        const cheerioedHtml = cheerio.load(html);
        const element1 = cheerioedHtml(
          "body > div.sub_layout > div.sub_mid > div.smid > div.detail_center > div > table > tbody > tr:nth-child(5) > td > table > tbody > tr:nth-child(3) > td:nth-child(1) > table > tbody > tr > td > div "
        );

        setLunchMenu1(element1.text());

        const element2 = cheerioedHtml(
          "body > div.sub_layout > div.sub_mid > div.smid > div.detail_center > div > table > tbody > tr:nth-child(5) > td > table > tbody > tr:nth-child(3) > td:nth-child(2) > table > tbody > tr > td:nth-child(1) > div"
        );

        setLunchMenu2(element2.text());

        const element3 = cheerioedHtml(
          "body > div.sub_layout > div.sub_mid > div.smid > div.detail_center > div > table > tbody > tr:nth-child(7) > td > table > tbody > tr:nth-child(3) > td:nth-child(1) > table > tbody > tr > td:nth-child(1) > div"
        );
        setDodamLunch(element3.text());
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {
      console.log("clean up");
    };
  }, []);

  console.log("univ food screen");
  return (
    <SafeAreaView style={[styles.container]}>
      <Text>학생식당</Text>
      <Text>점심 1코너</Text>
      <Text>{lunchMenu1}</Text>
      <Divider />
      <Text>점심 2코너</Text>
      <Text>{lunchMenu2}</Text>
      <Divider />
      <Text>도담 점심 1코너</Text>
      <Text>{dodamLunch}</Text>
    </SafeAreaView>
  );
}

export default UnivFoodScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
  },
});
