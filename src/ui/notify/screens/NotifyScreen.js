import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import axios from "axios";

const NotifyScreen = () => {
  const [notice, setNotice] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://scatch.ssu.ac.kr/%ea%b3%b5%ec%a7%80%ec%82%ac%ed%95%ad/?f&category&slug=%EC%88%AD%EC%8B%A4%EB%8C%80%ED%95%99%EA%B5%90-%EC%A7%80%EC%97%AD%EC%A7%80%EB%8A%A5%ED%99%94%ED%98%81%EC%8B%A0%EC%9D%B8%EC%9E%AC%EC%96%91%EC%84%B1%EC%82%AC%EC%97%85-%EC%A0%84%EC%9E%84%EC%97%B0%EA%B5%AC&keyword"
      )
      .then((response) => {
        setNotice(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <View style={{ flex: 1 }}></View>;
};

export default NotifyScreen;
