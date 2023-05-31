import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import Colors from "../../../../assets/Colors";
import MarqueeText from "react-native-marquee";
import {
  BigTitle,
  SmallText,
  SmallTitle,
} from "../../../styled/styledComponents";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useAtom } from "jotai";
import { couponAtom } from "../../../jotai/root";
import initData from "../../../jotai/root";

const tab = createMaterialTopTabNavigator();

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
  const [coupons, setCoupons] = useAtom(couponAtom);

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
          사용가능한 쿠폰이 {coupons.length}장 있습니다. 누르셔서 사용하시면
          됩니다
        </MarqueeText>
      </View>
      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{ alignItems: "center" }}
        showsVerticalScrollIndicator={false}
      >
        {coupons.map((element, index) => {
          return (
            <Pressable
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
              onPress={() => {
                navigation.navigate("HomeTab", { screen: "Check" });
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
                          paddingHorizontal: 3,
                          alignItems: "center",
                          justifyContent: "center",
                          paddingTop: 5,
                        }}
                      >
                        <SmallText>{element.detail}</SmallText>
                      </View>
                    </View>
                  </View>
                  <View style={{ backgroundColor: "red" }}></View>
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
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}
function Events() {
  return <View style={styles.container}></View>;
}
export default CouponScreen;
