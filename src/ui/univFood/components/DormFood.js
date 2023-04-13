import { StyleSheet, Text, View } from "react-native";
import FoodCard from "./FoodCard";
import { RFPercentage } from "react-native-responsive-fontsize";
import Colors from "../../../../assets/Colors";
import { useEffect, useState } from "react";
import {
  SmallText,
  SmallTitle,
  BigTitle,
  BigText,
} from "../../../styled/styledComponents";
import axios from "axios";
import * as cheerio from "cheerio";
import iconv from "iconv-lite";
import { prev } from "cheerio/lib/api/traversing";
function DormFood() {
  const [dormMenu, setDormMenu] = useState({
    monday: {
      date: "로딩중",
      breakfast: "로딩중",
      lunch: "로딩중",
      dinner: "로딩중",
    },
    tuesday: {
      date: "로딩중",
      breakfast: "로딩중",
      lunch: "로딩중",
      dinner: "로딩중",
    },
    wednesday: {
      date: "로딩중",
      breakfast: "로딩중",
      lunch: "로딩중",
      dinner: "로딩중",
    },
    thursday: {
      date: "로딩중",
      breakfast: "로딩중",
      lunch: "로딩중",
      dinner: "로딩중",
    },
    friday: {
      date: "로딩중",
      breakfast: "로딩중",
      lunch: "로딩중",
      dinner: "로딩중",
    },
    saturday: {
      date: "로딩중",
      breakfast: "로딩중",
      lunch: "로딩중",
      dinner: "로딩중",
    },
    sunday: {
      date: "로딩중",
      breakfast: "로딩중",
      lunch: "로딩중",
      dinner: "로딩중",
    },
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

        const date = $(
          "body > table:nth-child(4) > tbody > tr > td > table > tbody > tr > td:nth-child(3) > table.boxstyle02 > tbody > tr:nth-child(25) > th"
        ).text();
        const morning = $(
          "body > table:nth-child(4) > tbody > tr > td > table > tbody > tr > td:nth-child(3) > table.boxstyle02 > tbody > tr:nth-child(25) > td:nth-child(2)"
        ).text();

        const lunch = $(
          "body > table:nth-child(4) > tbody > tr > td > table > tbody > tr > td:nth-child(3) > table.boxstyle02 > tbody > tr:nth-child(25) > td:nth-child(3)"
        ).text();

        const dinner = $(
          "body > table:nth-child(4) > tbody > tr > td > table > tbody > tr > td:nth-child(3) > table.boxstyle02 > tbody > tr:nth-child(25) > td:nth-child(4)"
        ).text();

        setDormMenu((prevState) => {
          return {
            ...prevState,
            monday: {
              ...prevState.monday,
              breakfast: morning,
              lunch: lunch,
              dinner: dinner,
              date: date,
            },
          };
        });

        const date2 = $(
          "body > table:nth-child(4) > tbody > tr > td > table > tbody > tr > td:nth-child(3) > table.boxstyle02 > tbody > tr:nth-child(26) > th"
        ).text();
        const morning2 = $(
          "body > table:nth-child(4) > tbody > tr > td > table > tbody > tr > td:nth-child(3) > table.boxstyle02 > tbody > tr:nth-child(26) > td:nth-child(2)"
        ).text();

        const lunch2 = $(
          "body > table:nth-child(4) > tbody > tr > td > table > tbody > tr > td:nth-child(3) > table.boxstyle02 > tbody > tr:nth-child(26) > td:nth-child(3)"
        ).text();

        const dinner2 = $(
          "body > table:nth-child(4) > tbody > tr > td > table > tbody > tr > td:nth-child(3) > table.boxstyle02 > tbody > tr:nth-child(26) > td:nth-child(4)"
        ).text();

        setDormMenu((prevState) => {
          return {
            ...prevState,
            tuesday: {
              breakfast: morning2,
              lunch: lunch2,
              dinner: dinner2,
              date: date2,
            },
          };
        });

        const date3 = $(
          "body > table:nth-child(4) > tbody > tr > td > table > tbody > tr > td:nth-child(3) > table.boxstyle02 > tbody > tr:nth-child(27) > th"
        ).text();
        const morning3 = $(
          "body > table:nth-child(4) > tbody > tr > td > table > tbody > tr > td:nth-child(3) > table.boxstyle02 > tbody > tr:nth-child(27) > td:nth-child(2)"
        ).text();

        const lunch3 = $(
          "body > table:nth-child(4) > tbody > tr > td > table > tbody > tr > td:nth-child(3) > table.boxstyle02 > tbody > tr:nth-child(27) > td:nth-child(3)"
        ).text();

        const dinner3 = $(
          "body > table:nth-child(4) > tbody > tr > td > table > tbody > tr > td:nth-child(3) > table.boxstyle02 > tbody > tr:nth-child(27) > td:nth-child(4)"
        ).text();

        setDormMenu((prevState) => {
          return {
            ...prevState,
            wednesday: {
              breakfast: morning3,
              lunch: lunch3,
              dinner: dinner3,
              date: date3,
            },
          };
        });

        const date4 = $(
          "body > table:nth-child(4) > tbody > tr > td > table > tbody > tr > td:nth-child(3) > table.boxstyle02 > tbody > tr:nth-child(28) > th"
        ).text();
        const morning4 = $(
          "body > table:nth-child(4) > tbody > tr > td > table > tbody > tr > td:nth-child(3) > table.boxstyle02 > tbody > tr:nth-child(28) > td:nth-child(2)"
        ).text();

        const lunch4 = $(
          "body > table:nth-child(4) > tbody > tr > td > table > tbody > tr > td:nth-child(3) > table.boxstyle02 > tbody > tr:nth-child(28) > td:nth-child(3)"
        ).text();

        const dinner4 = $(
          "body > table:nth-child(4) > tbody > tr > td > table > tbody > tr > td:nth-child(3) > table.boxstyle02 > tbody > tr:nth-child(28) > td:nth-child(4)"
        ).text();

        setDormMenu((prevState) => {
          return {
            ...prevState,
            thursday: {
              breakfast: morning4,
              lunch: lunch4,
              dinner: dinner4,
              date: date4,
            },
          };
        });

        const date5 = $(
          "body > table:nth-child(4) > tbody > tr > td > table > tbody > tr > td:nth-child(3) > table.boxstyle02 > tbody > tr:nth-child(29) > th"
        ).text();
        const morning5 = $(
          "body > table:nth-child(4) > tbody > tr > td > table > tbody > tr > td:nth-child(3) > table.boxstyle02 > tbody > tr:nth-child(29) > td:nth-child(2)"
        ).text();

        const lunch5 = $(
          "body > table:nth-child(4) > tbody > tr > td > table > tbody > tr > td:nth-child(3) > table.boxstyle02 > tbody > tr:nth-child(29) > td:nth-child(3)"
        ).text();

        const dinner5 = $(
          "body > table:nth-child(4) > tbody > tr > td > table > tbody > tr > td:nth-child(3) > table.boxstyle02 > tbody > tr:nth-child(29) > td:nth-child(4)"
        ).text();

        setDormMenu((prevState) => {
          return {
            ...prevState,
            friday: {
              breakfast: morning5,
              lunch: lunch5,
              dinner: dinner5,
              date: date5,
            },
          };
        });

        const date6 = $(
          "body > table:nth-child(4) > tbody > tr > td > table > tbody > tr > td:nth-child(3) > table.boxstyle02 > tbody > tr:nth-child(30) > th"
        ).text();
        const morning6 = $(
          "body > table:nth-child(4) > tbody > tr > td > table > tbody > tr > td:nth-child(3) > table.boxstyle02 > tbody > tr:nth-child(30) > td:nth-child(2)"
        ).text();

        const lunch6 = $(
          "body > table:nth-child(4) > tbody > tr > td > table > tbody > tr > td:nth-child(3) > table.boxstyle02 > tbody > tr:nth-child(30) > td:nth-child(3)"
        ).text();

        const dinner6 = $(
          "body > table:nth-child(4) > tbody > tr > td > table > tbody > tr > td:nth-child(3) > table.boxstyle02 > tbody > tr:nth-child(30) > td:nth-child(4)"
        ).text();

        setDormMenu((prevState) => {
          return {
            ...prevState,
            saturday: {
              breakfast: morning6,
              lunch: lunch6,
              dinner: dinner6,
              date: date6,
            },
          };
        });

        const date7 = $(
          "body > table:nth-child(4) > tbody > tr > td > table > tbody > tr > td:nth-child(3) > table.boxstyle02 > tbody > tr:nth-child(31) > th"
        ).text();
        const morning7 = $(
          "body > table:nth-child(4) > tbody > tr > td > table > tbody > tr > td:nth-child(3) > table.boxstyle02 > tbody > tr:nth-child(31) > td:nth-child(2)"
        ).text();

        const lunch7 = $(
          "body > table:nth-child(4) > tbody > tr > td > table > tbody > tr > td:nth-child(3) > table.boxstyle02 > tbody > tr:nth-child(31) > td:nth-child(3)"
        ).text();

        const dinner7 = $(
          "body > table:nth-child(4) > tbody > tr > td > table > tbody > tr > td:nth-child(3) > table.boxstyle02 > tbody > tr:nth-child(31) > td:nth-child(4)"
        ).text();

        setDormMenu((prevState) => {
          return {
            ...prevState,
            sunday: {
              breakfast: morning7,
              lunch: lunch7,
              dinner: dinner7,
              date: date7,
            },
          };
        });
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

        <View style={{ alignItems: "flex-start" }}>
          <View>
            <SmallText
              style={{
                fontSize: 20,
              }}
            >
              {dormMenu.monday.date}
            </SmallText>
          </View>
          <FoodCard title="아침" text={dormMenu.monday.breakfast} />
          <FoodCard title="점심" text={dormMenu.monday.lunch} />
          <FoodCard title="저녁" text={dormMenu.monday.dinner} />
        </View>
        <View style={{ alignItems: "flex-start" }}>
          <View>
            <SmallText
              style={{
                fontSize: 20,
              }}
            >
              {dormMenu.tuesday.date}
            </SmallText>
          </View>
          <FoodCard title="아침" text={dormMenu.tuesday.breakfast} />
          <FoodCard title="점심" text={dormMenu.tuesday.lunch} />
          <FoodCard title="저녁" text={dormMenu.tuesday.dinner} />
        </View>
        <View style={{ alignItems: "flex-start" }}>
          <View>
            <SmallText
              style={{
                fontSize: 20,
              }}
            >
              {dormMenu.wednesday.date}
            </SmallText>
          </View>
          <FoodCard title="아침" text={dormMenu.wednesday.breakfast} />
          <FoodCard title="점심" text={dormMenu.wednesday.lunch} />
          <FoodCard title="저녁" text={dormMenu.wednesday.dinner} />
        </View>
        <View style={{ alignItems: "flex-start" }}>
          <View>
            <SmallText
              style={{
                fontSize: 20,
              }}
            >
              {dormMenu.thursday.date}
            </SmallText>
          </View>
          <FoodCard title="아침" text={dormMenu.thursday.breakfast} />
          <FoodCard title="점심" text={dormMenu.thursday.lunch} />
          <FoodCard title="저녁" text={dormMenu.thursday.dinner} />
        </View>
        <View style={{ alignItems: "flex-start" }}>
          <View>
            <SmallText
              style={{
                fontSize: 20,
              }}
            >
              {dormMenu.friday.date}
            </SmallText>
          </View>
          <FoodCard title="아침" text={dormMenu.friday.breakfast} />
          <FoodCard title="점심" text={dormMenu.friday.lunch} />
          <FoodCard title="저녁" text={dormMenu.friday.dinner} />
        </View>
        <View style={{ alignItems: "flex-start" }}>
          <View>
            <SmallText
              style={{
                fontSize: 20,
              }}
            >
              {dormMenu.saturday.date}
            </SmallText>
          </View>
          <FoodCard title="아침" text={dormMenu.saturday.breakfast} />
          <FoodCard title="점심" text={dormMenu.saturday.lunch} />
          <FoodCard title="저녁" text={dormMenu.saturday.dinner} />
        </View>
        <View style={{ alignItems: "flex-start" }}>
          <View>
            <SmallText
              style={{
                fontSize: 20,
              }}
            >
              {dormMenu.sunday.date}
            </SmallText>
          </View>
          <FoodCard title="아침" text={dormMenu.sunday.breakfast} />
          <FoodCard title="점심" text={dormMenu.sunday.lunch} />
          <FoodCard title="저녁" text={dormMenu.sunday.dinner} />
        </View>
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
