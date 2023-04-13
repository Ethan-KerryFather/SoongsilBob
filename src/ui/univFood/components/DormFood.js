import { StyleSheet, Text, View } from "react-native";
import FoodCard from "./FoodCard";
import { RFPercentage } from "react-native-responsive-fontsize";
import Colors from "../../../../assets/Colors";
import { useEffect, useState } from "react";
import {
  SmallText,
  SmallTitle,
  BigTitle,
} from "../../../styled/styledComponents";
import axios from "axios";
import * as cheerio from "cheerio";
import iconv from "iconv-lite";
function DormFood() {
  const [dormMenu, setDormMenu] = useState({
    breakfast: "로딩중",
    lunch: "로딩중",
    dinner: "로딩중",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ssudorm.ssu.ac.kr:444/SShostel/mall_main.php?viewform=B0001_foodboard_list&board_no=1",
          { responseType: "arraybuffer" }
        );
        const decodedHtml = iconv.decode(
          new Uint8Array(response.data),
          "EUC-KR"
        );
        const $ = cheerio.load(decodedHtml);

        // 필요한 부분 추출하기
        const morning = $(
          "body > table:nth-child(4) > tbody > tr > td > table > tbody > tr > td:nth-child(3) > table.boxstyle02 > tbody > tr:nth-child(25) > td:nth-child(2)"
        ).text();
        setDormMenu({ breakfast: morning });
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <View>
      <View style={styles.foodCardWrapper}>
        <View style={styles.menuTitle}>
          <BigTitle style={styles.bigTitle}>기숙사식당</BigTitle>
          <SmallTitle>Dormitory Cafeteria</SmallTitle>
          <SmallText>기숙사</SmallText>
        </View>
        <FoodCard title="아침" text={dormMenu.breakfast} />
        <FoodCard title="점심" text={dormMenu.lunch} />
        <FoodCard title="저녁" text={dormMenu.dinner} />
      </View>
    </View>
  );
}

export default DormFood;

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
