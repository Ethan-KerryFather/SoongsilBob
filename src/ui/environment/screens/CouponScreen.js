import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import Colors from "../../../../assets/Colors";
import MarqueeText from "react-native-marquee";
import {
  BigTitle,
  SmallText,
  SmallTitle,
} from "../../../styled/styledComponents";
import { RFPercentage } from "react-native-responsive-fontsize";
import QRCode from "react-native-qrcode";

const tab = createMaterialTopTabNavigator();

const coupons = [
  {
    name: "PUB730",
    main: "10%할인",
    detail: "주류포함 전메뉴 10% 할인",
    period: "23/4/26 ~ 6/24",
  },
  {
    name: "화품닭",
    main: "이천원할인",
    detail: "메인메뉴 1개 당 2000원 할인\n(A/B/C 코스포함)",
    period: "무제한",
    image:
      "https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMjEyMjBfMjcw%2FMDAxNjcxNTEyODYyMTQ3.7BK_rZ7IohyTZSrKTw3Y82NG6G1NqfLefcboorDiOv4g.GWze6LqprAxlMtWosLu6laeVxO6mNKhYaqgdVDlIgisg.JPEG%2F253C588F-6422-4869-8496-F051B734BA5A.jpeg",
  },
  {
    name: "스터디어스 상도",
    main: "시간증정",
    detail:
      "당일권 구매시 1시간 연장 무료\n시간권 구매시 10% 증정\n기간권 구매시 10% 연장 무료",
    period: "23/03/23 ~ 6/30",
    image:
      "https://search.pstatic.net/common/?src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMjEyMjBfMjcw%2FMDAxNjcxNTEyODYyMTQ3.7BK_rZ7IohyTZSrKTw3Y82NG6G1NqfLefcboorDiOv4g.GWze6LqprAxlMtWosLu6laeVxO6mNKhYaqgdVDlIgisg.JPEG%2F253C588F-6422-4869-8496-F051B734BA5A.jpeg",
  },
];

/*
CouponScreen
  제휴매장 쿠폰을 담는 뷰로 안에는
  -쿠폰 -이벤트 로 나누어지는 뷰가 들어있다.
TODO:
  1. 디자인 수정
  2. 파이어베이스와 페깅해야함. 실시간 데이터베이스를 쓸 필요는 없을 것 같음
    - Refresh Control View 사용하면 될듯
FIXME:
*/

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
    backgroundColor: Colors.basicColor.pink,
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
        style={{
          alignItems: "center",
          marginVertical: RFPercentage(3),
        }}
      >
        <MarqueeText
          style={{
            fontFamily: "yangjin",
            fontSize: 20,
            color: "yellow",
            textShadowColor: "black",
            textShadowRadius: 5,
          }}
          speed={0.3}
          marqueeOnStart={true}
          loop={true}
          delay={2000}
        >
          사용가능한 쿠폰이 {coupons.length}장 있습니다. 누르셔서 qr확인으로
          사용하시면 됩니다
        </MarqueeText>
      </View>
      <View style={{ width: "100%", alignItems: "center" }}>
        {coupons.map((element, index) => {
          return (
            <View
              key={index}
              style={{
                flexDirection: "row",
                backgroundColor: "white",
                width: "90%",
                height: RFPercentage(20),
                marginBottom: RFPercentage(2),
                borderRadius: 6,
                borderColor: "black",
                borderWidth: 1,
              }}
            >
              <View
                style={{
                  flex: 1.5,
                  backgroundColor: Colors.basicColor.pastelYellow,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRightColor: "black",
                  borderStyle: "dashed",
                  borderRightWidth: 1,
                }}
              >
                <BigTitle
                  style={{
                    transform: [{ rotate: "90deg" }],
                    letterSpacing: 2,
                  }}
                >
                  Coupon
                </BigTitle>
              </View>
              <View style={{ flex: 4 }}>
                <View style={{ flex: 4 }}>
                  <View
                    style={{
                      flex: 2,
                      paddingTop: 2,

                      flexDirection: "row",
                    }}
                  >
                    <View style={{ flex: 3 }}>
                      <BigTitle style={{ fontSize: 40 }}>
                        {element.main}
                      </BigTitle>
                      <View
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          paddingTop: 5,
                        }}
                      >
                        <SmallText>{element.detail}</SmallText>
                      </View>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text>dd</Text>
                      <QRCode
                        value="12312"
                        size={70}
                        bgColor={Colors.basicColor.green}
                        fgColor="white"
                      />
                    </View>
                  </View>
                  <View style={{}}></View>
                </View>
                <View
                  style={{
                    flex: 1.3,
                    alignItems: "center",
                  }}
                >
                  <SmallTitle style={{ letterSpacing: 3 }}>
                    {element.name}
                  </SmallTitle>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}
function Events() {
  return <View style={styles.container}></View>;
}
export default CouponScreen;
