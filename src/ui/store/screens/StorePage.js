import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { ScrollView } from "react-native";
import { View, Text, Pressable, StyleSheet, Linking } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import Colors from "../../../../assets/Colors";

function StorePage({ route }) {
  const navigation = useNavigation();

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
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ScrollView
        style={[styles.upperContainer]}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <View style={[styles.textContainer, { paddingTop: 10 }]}>
          <Text style={[styles.boldText, { fontSize: 30 }]}>
            {storeInfo.name}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.iconContainer}>
              <Ionicons
                name="star"
                color="red"
                size={20}
                style={{ paddingLeft: 5 }}
              />
            </View>
            <Text style={[styles.normalText, { fontSize: 20 }]}> 10</Text>
            <Text
              style={[styles.normalText, { fontSize: 20, paddingLeft: 30 }]}
            >
              {storeInfo.price}
            </Text>
          </View>
          <Text style={[styles.normalText, { fontSize: 20 }]}>
            영업시간 {storeInfo.workingTime}
          </Text>
          <View
            style={{
              borderWidth: 0.3,
              borderBottomColor: "black",
              borderStyle: "solid",
              marginVertical: 3,
            }}
          />
          <Text style={[styles.normalText, { fontSize: 20 }]}>
            {storeInfo.description}
          </Text>

          <Pressable
            onPress={() => {
              callToStore("01097499705");
            }}
            style={{ position: "absolute", top: 15, right: 20 }}
          >
            <FontAwesome name="phone" size={40} color="black" />
          </Pressable>
        </View>
      </ScrollView>
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
          />
          <Polyline
            coordinates={[
              { latitude: location.Y, longitude: location.X },
              {
                latitude: userLocation.latitude,
                longitude: userLocation.longtitude,
              },
            ]}
            strokeColor="#000"
            strokeWidth={6}
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
    flex: 1,

    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: Colors.basicColor.magentaTrans1,
  },
  middleContainer: {
    flex: 3,
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
