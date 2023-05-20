import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";
import * as cheerio from "cheerio";

/*
NotifyScreen 
  슈투데이 기능을 그대로 가져와야함
TODO:
  1. 공지는 새로 올라올 때마다 어플리케이션 내 state에 반영해야함 
    - 왠만하면 전역상태관리 라이브러리 쓸 것 - Redux, Recoil, Jotai 중에 하나 골라서 쓸 것
FIXME:
*/

const NotifyScreen = () => {
  const [source, setSource] = useState(null);
  useEffect(() => {
    axios
      .get("https://scatch.ssu.ac.kr/%ea%b3%b5%ec%a7%80%ec%82%ac%ed%95%ad/")
      .then((response) => {
        const html = response.data;
        const $ = cheerio.load(html);
        const container = $(".notice-lists").html();
        setSource(container);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text>{source}</Text>
      </View>
    </View>
  );
};

export default NotifyScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  //
});
