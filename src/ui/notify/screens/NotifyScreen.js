import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";
import RenderHTML from "react-native-render-html";
import * as cheerio from "cheerio";
import { ScrollView } from "react-native-gesture-handler";

const NotifyScreen = () => {
  const [source, setSource] = useState(null);
  const noticeList = [];
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
    <ScrollView style={styles.container}>
      <View>
        <Text>{source}</Text>
      </View>
    </ScrollView>
  );
};

export default NotifyScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  //
});
