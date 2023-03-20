import { EvilIcons, Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { useWindowDimensions, Image, Animated, ScrollView } from "react-native";
import { View, Text, Pressable, StyleSheet, Linking } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import Colors from "../../../../assets/Colors";
import BottomSheet from "react-native-gesture-bottom-sheet";

function StorePage({ route }) {
  const bottomSheet = useRef();
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions("window");
  const [storeInfo, setStoreInfo] = useState(route.params.storeInfo);
  const [location, setLocation] = useState(route.params.location);
  const [isBottomsheetShowed, setIsBottomsheetShowed] = useState(true);
  // 컴포넌트 보여줄때 한번 위치 초기화
  const [userLocation, setUserLocation] = useState({
    latitude: route.params.latitude,
    longtitude: route.params.longtitude,
  });

  function callToStore(storeNumber) {
    Linking.openURL(`tel:${storeNumber}`);
  }

  useEffect(() => {
    navigation.setOptions({
      title: storeInfo.name,
    });

    bottomSheet.current.show();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: 10,
          right: 10,
          zIndex: 1,
        }}
      >
        <Pressable
          onPress={() => {
            bottomSheet.current.show();
            setIsBottomsheetShowed(true);
          }}
        >
          <Ionicons
            name="information-circle"
            size={70}
            color={Colors.basicColor.magentaTrans1}
          />
        </Pressable>
      </View>

      <BottomSheet
        draggable={true}
        ref={bottomSheet}
        onOpen={() => {
          console.log("bottom sheet open");
        }}
        onClose={() => {
          console.log("bottom close event");
        }}
        height={height * 0.9}
      >
        <View style={styles.bottomSheetView}>
          <Pressable
            style={{ position: "absolute", top: 12, right: 12, zIndex: 1 }}
            onPress={() => {
              bottomSheet.current.close();
              console.log("bottom sheet close");
              setIsBottomsheetShowed(false);
            }}
          >
            <EvilIcons name="close" color="black" size={25} />
          </Pressable>

          <View style={{ alignItems: "center", paddingTop: 15 }}>
            <View
              style={{
                alignItems: "flex-start",
                width: "100%",
                paddingLeft: 30,
                paddingTop: 5,
                paddingBottom: 10,
                borderBottomWidth: 0.3,
                borderBottomColor: "black",
              }}
            >
              <Text style={{ fontFamily: "gowun-bold", fontSize: 15 }}>
                store정보
              </Text>
            </View>
            <View style={{ width: "100%", alignItems: "center" }}>
              <Pressable
                style={{ position: "absolute", right: 10, zIndex: 2, top: 10 }}
                onPress={() => {
                  console.log("call btn");
                }}
              >
                <MaterialIcons name="call" color="black" size={40} />
              </Pressable>
              <Text
                style={{
                  fontFamily: "gowun-regular",
                  fontSize: 25,
                  paddingTop: 10,
                }}
              >
                {storeInfo.name}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                paddingLeft: 30,
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Entypo name="star" size={20} color="red" />
                </View>
                <Text style={[styles.normalText, { fontSize: 15 }]}> 0</Text>
              </View>

              <Text style={[styles.normalText, { paddingLeft: 30 }]}>
                {storeInfo.area}
              </Text>
            </View>
          </View>
          <View style={{ paddingLeft: 30, paddingBottom: 10 }}>
            <Text style={styles.normalText}>
              운영시간 | {storeInfo.workingTime}
            </Text>
          </View>
          <View style={{}}>
            <View style={{ paddingLeft: 30, paddingRight: 20 }}>
              <Text style={styles.normalText}>{storeInfo.description}</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              width: "95%",
              alignSelf: "center",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            {storeInfo.imageList.map((item, index) => {
              return (
                <Image
                  key={index}
                  source={{ uri: item }}
                  style={{
                    width: "30%",
                    height: 100,
                    borderRadius: 10,
                    marginTop: 10,
                  }}
                  onLoad={() => (
                    <View>
                      <Text>로딩중</Text>
                    </View>
                  )}
                />
              );
            })}
          </View>
        </View>
      </BottomSheet>
      <View style={styles.middleContainer}>
        <MapView
          style={styles.mapView}
          initialRegion={{
            latitude: location.Y,
            longitude: location.X,
            latitudeDelta: 0.0007,
            longitudeDelta: 0.0007,
          }}
          region={{
            latitude: location.Y,
            longitude: location.X,
            latitudeDelta: 0.0009,
            longitudeDelta: 0.0007,
          }}
          onUserLocationChange={(event) => {
            setUserLocation({
              latitude: event.nativeEvent.coordinate.latitude,
              longtitude: event.nativeEvent.coordinate.longitude,
            });
          }}
          userLocationUpdateInterval={10000}
          liteMode={false}
          scrollEnabled={true}
          showsUserLocation={true}
          showsMyLocationButton={true}
        >
          <Marker
            coordinate={{ latitude: location.Y, longitude: location.X }}
            title="목적지"
            description={storeInfo.name}
          >
            <View>
              <Text>여기야!</Text>
              <Image
                source={require("../../../../assets/horseIcon.png")}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 40,
                  opacity: 0.8,
                }}
              />
            </View>
          </Marker>
          <Polyline
            coordinates={[
              { latitude: location.Y, longitude: location.X },
              {
                latitude: userLocation.latitude,
                longitude: userLocation.longtitude,
              },
            ]}
            strokeColor={"black"}
            strokeWidth={7}
            lineDashPattern={[5, 10]}
          />
        </MapView>
      </View>
    </View>
  );
}

export default StorePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperContainer: {
    height: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: Colors.basicColor.grayTrans1,
  },
  middleContainer: {
    flex: 1,
  },
  bottomSheetView: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
  },
  //
  textContainer: {
    width: "100%",
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  mapView: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  //
  normalText: {
    fontFamily: "gowun-regular",
  },
  boldText: {
    fontFamily: "gowun-bold",
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
