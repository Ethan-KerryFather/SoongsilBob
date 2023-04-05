import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";
import * as cheerio from "cheerio";

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
