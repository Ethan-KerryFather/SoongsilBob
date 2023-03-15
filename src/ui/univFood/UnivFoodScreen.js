import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import axios from "axios";
import * as cheerio from "cheerio";
import { Divider } from "react-native-paper";
import styled from "styled-components";
import { RFPercentage } from "react-native-responsive-fontsize";
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
        const html = response.data;
        const cheerioedHtml = cheerio.load(html);
        const element1 = cheerioedHtml(
          "body > div.sub_layout > div.sub_mid > div.smid > div.detail_center > div > table > tbody > tr:nth-child(5) > td > table > tbody > tr:nth-child(3) > td:nth-child(1) > table > tbody > tr > td > div "
        );

        setStudentLunch({ lunch1: element1.text() });

        const element2 = cheerioedHtml(
          "body > div.sub_layout > div.sub_mid > div.smid > div.detail_center > div > table > tbody > tr:nth-child(5) > td > table > tbody > tr:nth-child(3) > td:nth-child(2) > table > tbody > tr > td:nth-child(1) > div"
        );

        setStudentLunch((prevState) => ({
          ...prevState,
          lunch2: element2.text(),
        }));

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

  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView>
        <View>
          <BigTitle>학생식당</BigTitle>
          <SmallTitle>점심 1코너</SmallTitle>
          <NormalText>{studentLunch.lunch1}</NormalText>
          <Divider />
          <SmallTitle>점심 2코너</SmallTitle>
          <NormalText>{studentLunch.lunch2}</NormalText>
        </View>

        <Divider />
        <View>
          <BigTitle>도담식당</BigTitle>
          <SmallTitle>점심 1코너</SmallTitle>
          <NormalText>{dodamLunch.lunch1}</NormalText>
          <Divider />
          <SmallTitle>점심 2코너</SmallTitle>
          <NormalText>{dodamLunch.lunch2}</NormalText>
          <Divider />
          <SmallTitle>저녁 1코너</SmallTitle>
          <NormalText>{dodamLunch.dinner1}</NormalText>
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

const BigTitle = styled(Text)`
  font-family: "gowun-bold";
  font-size: ${RFPercentage(3.5)}px;
  text-align: center;
`;

const SmallTitle = styled(Text)`
  font-family: "gowun-bold";
  font-size: ${RFPercentage(2.3)}px;
  text-align: center;
`;

const NormalText = styled(Text)`
  font-family: "gowun-regular";
  font-size: ${RFPercentage(2)}px;
`;
