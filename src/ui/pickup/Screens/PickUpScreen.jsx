import { View, Text, StyleSheet, Pressable } from "react-native";
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

function PickUpScreen() {
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
        <SmallText>{JSON.stringify(orderInfo)}</SmallText>
        <View>
          <SmallTitle>가게는 여기에 있어요!</SmallTitle>
          <MapView
            style={{
              width: "95%",
              height: "40%",
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
          <View>
            <SmallText>주문자</SmallText>
          </View>
          <View>
            {orderInfo.menu.map((element) => {
              return (
                <View>
                  <Text>{element[0]}</Text>
                  <Text>{element[1]}</Text>
                  <Checkbox
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                      setChecked(!checked);
                    }}
                    color="red"
                  />
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
