import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import Colors from "../../assets/Colors";

function HomeScreen({}) {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions("window");

  React.useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Text
          style={{
            fontFamily: "gowun-bold",
            fontSize: 50,
            letterSpacing: 13,
          }}
        >
          숭실밥집
        </Text>
      </View>
      <View style={styles.middleContainer}>
        <Text>신입생 여러분을 진심으로 환영합니다 :)</Text>
      </View>
      <View style={styles.lowerContainer}>
        <Pressable
          style={({ pressed }) =>
            pressed
              ? [
                  styles.itemContainer,
                  { backgroundColor: Colors.basicColor.magenta },
                ]
              : [styles.itemContainer]
          }
          onPress={() => {
            navigation.navigate("StoreList", { category: "한식" });
          }}
        >
          <Text style={[styles.normalText, { fontSize: 30 }]}>한식</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) =>
            pressed
              ? [
                  styles.itemContainer,
                  { backgroundColor: Colors.basicColor.magenta },
                ]
              : [styles.itemContainer]
          }
        >
          <Text style={[styles.normalText, { fontSize: 30 }]}>일식</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) =>
            pressed
              ? [
                  styles.itemContainer,
                  { backgroundColor: Colors.basicColor.magenta },
                ]
              : [styles.itemContainer]
          }
        >
          <Text style={[styles.normalText, { fontSize: 30 }]}>양식</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) =>
            pressed
              ? [
                  styles.itemContainer,
                  { backgroundColor: Colors.basicColor.magenta },
                ]
              : [styles.itemContainer]
          }
        >
          <Text style={[styles.normalText, { fontSize: 30 }]}>아시안</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) =>
            pressed
              ? [
                  styles.itemContainer,
                  { backgroundColor: Colors.basicColor.magenta },
                ]
              : [styles.itemContainer]
          }
        >
          <Text style={[styles.normalText, { fontSize: 20 }]}>Take-out</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) =>
            pressed
              ? [
                  styles.itemContainer,
                  { backgroundColor: Colors.basicColor.magenta },
                ]
              : [styles.itemContainer]
          }
        >
          <Text style={[styles.normalText, { fontSize: 30 }]}>주점</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) =>
            pressed
              ? [
                  styles.itemContainer,
                  { backgroundColor: Colors.basicColor.magenta },
                ]
              : [styles.itemContainer]
          }
        >
          <Text style={[styles.normalText, { fontSize: 30 }]}>칵테일</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) =>
            pressed
              ? [
                  styles.itemContainer,
                  { backgroundColor: Colors.basicColor.magenta },
                ]
              : [styles.itemContainer]
          }
        >
          <Text style={[styles.normalText, { fontSize: 30 }]}>카페</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: Colors.basicColor.magenta,
  },
  middleContainer: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 5,
  },
  lowerContainer: {
    flex: 10,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    flexWrap: "wrap",
    paddingTop: 10,
  },
  //
  itemContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "42%",
    height: "20%",
    backgroundColor: Colors.basicColor.gray,
    borderRadius: 20,
    margin: "1%",
  },

  //
  normalText: {
    fontFamily: "gowun-regular",
    fontSize: 20,
  },
});
