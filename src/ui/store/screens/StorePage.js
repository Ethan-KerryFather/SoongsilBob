import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet, Linking } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Colors from "../../../../assets/Colors";

function StorePage({ route }) {
  const navigation = useNavigation();
  const [storeInfo, setStoreInfo] = useState(route.params.storeInfo);
  const [location, setLocation] = useState(route.params.location);

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
      <View style={[styles.upperContainer]}>
        <View style={[styles.textContainer, { paddingTop: 10 }]}>
          <Text style={[styles.boldText, { fontSize: 30 }]}>
            {storeInfo.name}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.iconContainer}>
              <FontAwesome name="star" color="red" size={30} />
            </View>
            <Text style={[styles.boldText, { fontSize: 20 }]}> x 81</Text>
            <Text
              style={[styles.normalText, { fontSize: 20, paddingLeft: 30 }]}
            >
              {storeInfo.price}
            </Text>
          </View>
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
      </View>
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
          liteMode={false}
          mapType="mutedStandard"
          scrollEnabled={true}
        >
          <Marker
            coordinate={{ latitude: location.Y, longitude: location.X }}
            title="목적지"
            description={storeInfo.name}
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
    alignItems: "center",
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
