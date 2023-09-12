import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import {
  BigTitle,
  SmallText,
  SmallTitle,
} from "../../../styled/styledComponents";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import Colors from "../../../../assets/Colors";
import AnimatedLottieView from "lottie-react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import MapView, { Marker } from "react-native-maps";
import { Checkbox } from "react-native-paper";
import React from "react";
import { useAtom } from "jotai";
import { accountInfo } from "../../../jotai/root";

function PickUpScreen() {
  const [userInfo] = useAtom(accountInfo);
  const navigation = useNavigation();
  const orderInfo = useRoute().params.orderInfo;
  const [checked, setChecked] = React.useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1.5,
          backgroundColor: Colors.basicColor.magentaTrans1,
          alignItems: "flex-start",
          justifyContent: "center",
          paddingLeft: 5,
        }}
      >
        <View>
          <BigTitle style={{ lineHeight: 40 }}>
            {orderInfo.name}에서{"\n"}픽업주문을 시작합니다
          </BigTitle>
        </View>
        <View
          style={{
            zIndex: 1,
            position: "absolute",
            right: 0,
            bottom: -RFPercentage(5),
          }}
        >
          <AnimatedLottieView
            source={require("../../../../assets/motorbicycle.json")}
            style={{
              width: RFPercentage(30),
              height: RFPercentage(30),
            }}
            autoPlay
            loop
          />
        </View>
      </View>
      <View style={{ flex: 4.5 }}>
        <View
          style={{
            width: "100%",
            height: "13%",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 3,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../../assets/horseIcon.png")}
              style={{ width: "70%", height: "90%", borderRadius: 30 }}
            />
          </View>
          <View
            style={{
              flex: 5,
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <SmallTitle>{userInfo.name}님</SmallTitle>
            <SmallTitle>{userInfo.id}</SmallTitle>
          </View>
          <View style={{ flex: 4 }}></View>
        </View>
        <View>
          <MapView
            style={{
              width: "100%",
              height: "30%",
              borderRadius: 30,
              alignSelf: "center",
            }}
            initialRegion={{
              latitude: orderInfo.location.Y,
              longitude: orderInfo.location.X,
              latitudeDelta: 0.0007,
              longitudeDelta: 0.0007,
            }}
            region={{
              latitude: orderInfo.location.Y,
              longitude: orderInfo.location.X,
              latitudeDelta: 0.0009,
              longitudeDelta: 0.0007,
            }}
            userLocationUpdateInterval={10000}
            liteMode={false}
            scrollEnabled={true}
            showsUserLocation={true}
            showsMyLocationButton={true}
          >
            <Marker
              coordinate={{
                latitude: orderInfo.location.Y,
                longitude: orderInfo.location.X,
              }}
              title="목적지"
              description={orderInfo.name}
            />
          </MapView>

          <View
            style={{
              padding: 10,
              alignItems: "center",
            }}
          >
            <View style={{ marginBottom: 10 }}>
              <BigTitle>메뉴</BigTitle>
            </View>
            {orderInfo.menu.map((element, index) => {
              return (
                <View
                  key={index}
                  style={{
                    width: "90%",
                    height: "14%",
                    backgroundColor: Colors.basicColor.magentaTrans2,
                    marginBottom: 5,
                    borderRadius: 15,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <SmallText style={{ fontSize: 20 }}>{element[0]}</SmallText>
                  <SmallText style={{ fontSize: 15 }}>{element[1]}원</SmallText>
                </View>
              );
            })}
          </View>
        </View>
      </View>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.orderFinalBtn, { backgroundColor: "red" }]
            : [styles.orderFinalBtn]
        }
      >
        <Text style={{ fontFamily: "black-sans", fontSize: 25 }}>주문하기</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  orderFinalBtn: {
    backgroundColor: Colors.basicColor.pastelBlueStrong,
    height: "6%",
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderWidth: 1,
  },
});
export default PickUpScreen;
