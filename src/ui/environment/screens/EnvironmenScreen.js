import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Linking } from "react-native";
import { Pressable } from "react-native";
import { Text, View, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import Colors from "../../../../assets/Colors";
import { BigTitle, SmallTitle } from "../../../styled/styledComponents";

function EnvironmenScreen() {
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  return (
    <ScrollView content={styles.container}>
      <Text
        style={[
          styles.normalText,
          {
            fontSize: 30,
            marginBottom: 10,
            alignSelf: "center",
            marginTop: 40,
          },
        ]}
      >
        Information
      </Text>
      <View style={styles.subContainer}>
        <View
          style={[
            styles.itemContainer,
            {
              backgroundColor: Colors.basicColor.magentaTrans1,
              borderRadius: 0,
              elevation: 1,
            },
          ]}
        >
          <SmallTitle>숭실밥집을 다운로드해주셔서 감사합니다</SmallTitle>
        </View>
        <View style={styles.itemContainer}>
          <SmallTitle>
            @instagram 클릭!{"\n"}
            <Pressable
              onPress={() => {
                Linking.openURL(
                  "https://instagram.com/bobofsoongsil?igshid=ZDdkNTZiNTM="
                );
              }}
            >
              <BigTitle>@bobofsoongsil</BigTitle>
            </Pressable>
          </SmallTitle>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.normalText}>
            가게 소개에 개인적인 의견이 포함될 수 있습니다
          </Text>
        </View>
      </View>
      <View style={styles.subContainer}>
        <View
          style={[
            styles.itemContainer,
            {
              backgroundColor: Colors.basicColor.magentaTrans1,
              borderRadius: 0,
              elevation: 1,
            },
          ]}
        >
          <Text style={styles.normalText}>알림</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.normalText}>
            같이 으쌰으쌰해볼 사람은 {"\n"}
            <Text style={styles.boldText}>DM 주세요</Text>
          </Text>
        </View>
      </View>

      <View style={styles.subContainer}>
        <View
          style={[
            styles.itemContainer,
            { alignItems: "flex-start", paddingLeft: 20 },
          ]}
        >
          <Text style={styles.normalText}>
            버전{"\n"}
            <Text style={styles.boldText}>Beta</Text>
          </Text>
        </View>
        <View
          style={[
            styles.itemContainer,
            { alignItems: "flex-start", paddingLeft: 20 },
          ]}
        >
          <Text style={styles.normalText}>
            버전배포일{"\n"}
            <Text style={styles.boldText}>23-03-31</Text>
          </Text>
        </View>
        <View
          style={[
            styles.itemContainer,
            { alignItems: "flex-start", paddingLeft: 20 },
          ]}
        >
          <Text style={styles.normalText}>
            버그제보{"\n"}
            <Text style={styles.boldText}>bobofsoongsil@gmail.com</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default EnvironmenScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 40,
    alignItems: "center",
  },
  subContainer: {
    marginTop: 10,
    width: "100%",
    paddingVertical: 20,
    alignItems: "center",
    backgroundColor: "white",
  },
  //
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "98%",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: Colors.basicColor.grayTrans1,
  },
  //
  normalText: {
    fontFamily: "gowun-bold",
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
