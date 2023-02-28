import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import Colors from "../../../../assets/Colors";

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
            { backgroundColor: Colors.basicColor.magenta },
          ]}
        >
          <Text style={styles.normalText}>
            숭밥은 숭실대학생, 주변 상인을 위한
          </Text>
          <Text style={styles.normalText}>
            비영리서비스로서 수익창출을 목적으로 하지 않습니다
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={[styles.normalText, { alignSelf: "center" }]}>
            ( 클릭 )
          </Text>
          <Text style={styles.normalText}>
            음식점 / 주점 이벤트 대신 공지해드립니다
          </Text>
          <Text style={styles.normalText}>
            클릭하셔서 연락남겨주시면 회신드립니다
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={[styles.normalText, { alignSelf: "center" }]}>
            ( 클릭 )
          </Text>
          <Text style={styles.normalText}>추가되지 않은 음식점은</Text>
          <Text style={[styles.normalText]}>구글 폼으로 신청해주세요</Text>
        </View>
      </View>
      <View style={styles.subContainer}>
        <View
          style={[
            styles.itemContainer,
            { backgroundColor: Colors.basicColor.magenta },
          ]}
        >
          <Text style={styles.normalText}>
            지속가능한 서비스를 만들고 싶습니다
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.normalText}>팀원을 구합니다</Text>
          <Text style={styles.normalText}>studentlimsoo@gmail.com</Text>
        </View>
      </View>

      <View style={styles.subContainer}>
        <View
          style={[
            styles.itemContainer,
            { alignItems: "flex-start", paddingLeft: 20 },
          ]}
        >
          <Text style={styles.normalText}>버전: Beta</Text>
        </View>
        <View
          style={[
            styles.itemContainer,
            { alignItems: "flex-start", paddingLeft: 20 },
          ]}
        >
          <Text style={styles.normalText}>배포일: 23-03-10</Text>
        </View>
        <View
          style={[
            styles.itemContainer,
            { alignItems: "flex-start", paddingLeft: 20 },
          ]}
        >
          <Text style={[styles.normalText, { alignSelf: "flex-start" }]}>
            ( 클릭 )
          </Text>
          <Text style={styles.normalText}>버그제보</Text>
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
    width: "90%",
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
});
