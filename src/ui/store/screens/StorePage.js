import { Ionicons, FontAwesome, EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ScrollView, useWindowDimensions, Image } from "react-native";
import { View, Text, Pressable, StyleSheet, Linking } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import Colors from "../../../../assets/Colors";
import BottomSheet from "react-native-gesture-bottom-sheet";

function StorePage({ route }) {
  const bottomSheet = useRef();
  const navigation = useNavigation();
  const { width } = useWindowDimensions("window");
  const [storeInfo, setStoreInfo] = useState(route.params.storeInfo);
  const [location, setLocation] = useState(route.params.location);
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
      {/* <View style={[styles.upperContainer, { paddingBottom: 30 }]}>
        <View style={{ position: "absolute", right: width / 2, bottom: 0 }}>
          <EvilIcons name="arrow-down" color="black" size={30} />
        </View>
        <View style={[styles.textContainer, { paddingTop: 10 }]}>
          <Text style={[styles.boldText, { fontSize: 25, letterSpacing: 1 }]}>
            {storeInfo.name}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <View style={[styles.iconContainer, { flexDirection: "row" }]}>
              <Ionicons
                name="star"
                color="red"
                size={20}
                style={{ paddingLeft: 5 }}
              />
              <Text style={[styles.normalText, { fontSize: 20 }]}> 10</Text>
            </View>

            <Text
              style={[styles.normalText, { fontSize: 20, paddingLeft: 30 }]}
            >
              {storeInfo.price}
            </Text>
          </View>
          <Text style={[styles.normalText, { fontSize: 20, paddingLeft: 5 }]}>
            {storeInfo.workingTime}
          </Text>
          <View
            style={{
              borderWidth: 0.3,
              borderBottomColor: "black",
              borderStyle: "solid",
              marginVertical: 3,
            }}
          />
          <View style={{ marginVertical: 10 }}>
            <Text style={[styles.normalText, { fontSize: 15 }]}>
              {storeInfo.description}
            </Text>
          </View>

          <Pressable
            onPress={() => {
              callToStore("01097499705");
            }}
            style={{ position: "absolute", top: 15, right: 20 }}
          >
            <FontAwesome
              name="phone"
              size={30}
              color={Colors.basicColor.magenta}
            />
          </Pressable>
        </View>
      </View> */}
      <BottomSheet
        ref={bottomSheet}
        onOpen={() => {
          console.log("on Open");
        }}
        height={300}
      >
        <View style={[styles.upperContainer, { paddingBottom: 30 }]}>
          <View style={{ position: "absolute", right: width / 2, bottom: 0 }}>
            <EvilIcons name="arrow-down" color="black" size={30} />
          </View>
          <View style={[styles.textContainer, { paddingTop: 10 }]}>
            <Text style={[styles.boldText, { fontSize: 25, letterSpacing: 1 }]}>
              {storeInfo.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <View style={[styles.iconContainer, { flexDirection: "row" }]}>
                <Ionicons
                  name="star"
                  color="red"
                  size={20}
                  style={{ paddingLeft: 5 }}
                />
                <Text style={[styles.normalText, { fontSize: 20 }]}> 11</Text>
              </View>

              <Text
                style={[styles.normalText, { fontSize: 20, paddingLeft: 30 }]}
              >
                {storeInfo.price}
              </Text>
            </View>
            <Text style={[styles.normalText, { fontSize: 20, paddingLeft: 5 }]}>
              {storeInfo.workingTime}
            </Text>
            <View
              style={{
                borderWidth: 0.3,
                borderBottomColor: "black",
                borderStyle: "solid",
                marginVertical: 3,
              }}
            />
            <View style={{ marginVertical: 10 }}>
              <Text style={[styles.normalText, { fontSize: 15 }]}>
                {storeInfo.description}
              </Text>
            </View>

            <Pressable
              onPress={() => {
                callToStore("01097499705");
              }}
              style={{ position: "absolute", top: 15, right: 20 }}
            >
              <FontAwesome
                name="phone"
                size={30}
                color={Colors.basicColor.magenta}
              />
            </Pressable>
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
            strokeColor={"red"}
            strokeWidth={10}
            lineDashPattern={[10, 10]}
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
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: Colors.basicColor.grayTrans1,
  },
  middleContainer: {
    flex: 1,
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
