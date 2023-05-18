import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";
import AnimatedLottieView from "lottie-react-native";
import { useEffect } from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import Colors from "../../../../assets/Colors";
import {
  BigTitle,
  SmallText,
  SmallTitle,
} from "../../../styled/styledComponents";
import { RFPercentage } from "react-native-responsive-fontsize";

const tab = createMaterialTopTabNavigator();

const coupons = [
  {
    name: "PUB730",
    detail: "주류포함 전메뉴 10% 할인",
    period: "23/4/26 ~ 6/24",
  },
  {
    name: "화품닭",
    detail: "메인메뉴 1개 당 2000원 할인\n(A/B/C 코스포함)",
    period: "무제한",
    image:
      "https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMjEyMjBfMjcw%2FMDAxNjcxNTEyODYyMTQ3.7BK_rZ7IohyTZSrKTw3Y82NG6G1NqfLefcboorDiOv4g.GWze6LqprAxlMtWosLu6laeVxO6mNKhYaqgdVDlIgisg.JPEG%2F253C588F-6422-4869-8496-F051B734BA5A.jpeg",
  },
  {
    name: "스터디어스 상도",
    detail:
      "당일권 구매시 1시간 연장 무료\n시간권 구매시 10% 증정\n기간권 구매시 10% 연장 무료",
    period: "23/03/23 ~ 6/30",
    image:
      "https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMjEyMjBfMjcw%2FMDAxNjcxNTEyODYyMTQ3.7BK_rZ7IohyTZSrKTw3Y82NG6G1NqfLefcboorDiOv4g.GWze6LqprAxlMtWosLu6laeVxO6mNKhYaqgdVDlIgisg.JPEG%2F253C588F-6422-4869-8496-F051B734BA5A.jpeg",
  },
];

function CouponScreen() {
  const navigation = useNavigation();
  const height = StatusBar.currentHeight;
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View style={[styles.container, { paddingTop: height }]}>
      <tab.Navigator>
        <tab.Screen
          name="coupons"
          component={Coupons}
          options={{
            tabBarActiveTintColor: "red",
            tabBarInactiveTintColor: "black",
          }}
        />
        <tab.Screen
          name="events"
          component={Events}
          options={{
            tabBarActiveTintColor: "red",
            tabBarInactiveTintColor: "black",
          }}
        />
      </tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  menuContainer: {
    width: "90%",
    backgroundColor: "white",
    height: "20%",
    alignSelf: "center",
    marginBottom: "5%",
    borderRadius: 10,

    flexDirection: "row",
  },
});

function Coupons() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      FocusEvent: () => {
        console.log("focused");
      },
    });
  }, []);
  return (
    <View style={styles.container}>
      <View
        style={{ marginBottom: RFPercentage(3), marginTop: RFPercentage(1) }}
      >
        <BigTitle style={{ color: "white" }}>
          사용가능한 쿠폰이 {coupons.length}장 있어요!
        </BigTitle>
      </View>
      {coupons.map((element, index) => {
        return (
          <View key={index} style={styles.menuContainer}>
            <View style={{ flex: 1, padding: 3, paddingRight: 8 }}>
              {element.image && (
                <Image
                  source={{ uri: element.image }}
                  style={{ width: "100%", height: "100%", borderRadius: 10 }}
                />
              )}
            </View>
            <View
              style={{
                flex: 1.3,
                height: "100%",
                alignItems: "center",
                justifyContent: "space-around",
                borderLeftColor: "center",
                borderStyle: "dotted",
                borderLeftWidth: 1,
                borderColor: "black",
                paddingLeft: 3,
              }}
            >
              <SmallTitle style={{ color: "black" }}>{element.name}</SmallTitle>
              <SmallText>{element.detail}</SmallText>
              <SmallText>{element.period}</SmallText>
            </View>
            <View
              style={{
                flex: 0.2,
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "black",
                  height: "30%",
                  width: "70%",
                  alignSelf: "flex-end",
                  borderTopLeftRadius: 40,
                  borderBottomLeftRadius: 40,
                }}
              />
            </View>
          </View>
        );
      })}
    </View>
  );
}
function Events() {
  return <View style={styles.container}></View>;
}
export default CouponScreen;
