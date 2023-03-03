import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import Colors from "../../../../assets/Colors";
import stores from "../../../resource/stores";

function StoreLists({ route }) {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions("window");
  React.useEffect(() => {
    navigation.setOptions({
      title: `숭밥 ${route.params.category}코너`,
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatListContainer}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
        data={stores.korean}
        renderItem={({ item }) => {
          return (
            <Pressable
              style={[styles.itemContainer, { width: width * 0.8 }]}
              onPress={() => {
                navigation.navigate("StorePage", {
                  storeInfo: {
                    name: item.name,
                    price: item.price,
                    area: item.area,
                    workingTime: item.workingTime,
                    description: item.description,
                  },
                  location: item.location,
                });
              }}
            >
              <Text style={[styles.normalText, { fontSize: 30 }]}>
                {item.name}
              </Text>
              <Text style={[styles.normalText, { fontSize: 15 }]}>
                {item.area}
              </Text>
              <Text style={[styles.normalText, { fontSize: 15 }]}>
                가격대 {item.price}
              </Text>
            </Pressable>
          );
        }}
      />
    </View>
  );
}

export default StoreLists;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  //
  flatListContainer: {
    flex: 1,
  },
  itemContainer: {
    padding: 20,
    backgroundColor: Colors.basicColor.gray,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  //
  normalText: {
    fontFamily: "gowun-regular",
    color: "black",
    fontSize: 20,
  },
});
