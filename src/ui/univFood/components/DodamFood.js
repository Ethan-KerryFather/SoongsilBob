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

function DodamFood() {
  const [dodamLunch, setDodamLunch] = useState({
    lunch1: "로딩중",
    lunch2: "로딩중",
    dinner1: "로딩중",
  });

  useEffect(() => {
    axios
      .get("https://soongguri.com/main.php?mkey=2&w=3")
      .then((response) => {
        // parsing
        const html = response.data;
        const cheerioedHtml = cheerio.load(html);

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
    <View>
      <View style={styles.foodCardWrapper}>
        <View style={styles.menuTitle}>
          <BigTitle style={styles.bigTitle}>도담식당</BigTitle>
          <SmallTitle>Dodam Cafeteria</SmallTitle>
          <SmallText>신양관 2층</SmallText>
        </View>

        <FoodCard title="점심1코너" text={dodamLunch.lunch1} />

        <FoodCard title="점심2코너" text={dodamLunch.lunch2} />

        <FoodCard title="저녁1코너" text={dodamLunch.dinner1} />
      </View>
    </View>
  );
}

export default DodamFood;

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
