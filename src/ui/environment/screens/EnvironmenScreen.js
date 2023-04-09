import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Linking } from "react-native";
import { Pressable } from "react-native";
import { Text, View, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import Colors from "../../../../assets/Colors";
import { BigTitle, SmallSmallText } from "../../../styled/styledComponents";
import * as Animatable from "react-native-animatable";

function EnvironmenScreen() {
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  return (
    <ScrollView content={styles.container}>
      <Animatable.View animation="slideInUp">
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
      </Animatable.View>

      <View style={styles.subContainer}>
        <Animatable.View
          style={[
            styles.itemContainer,
            {
              backgroundColor: Colors.basicColor.magentaTrans1,
              borderRadius: 0,
              elevation: 1,
            },
          ]}
          animation="slideInLeft"
        >
          <Text style={styles.normalText}>다운로드해주셔서 감사합니다</Text>
        </Animatable.View>
        <Animatable.View style={styles.itemContainer} animation="slideInRight">
          <Text style={styles.normalText}>
            @instagram (클릭){"\n"}
            <Pressable
              onPress={() => {
                Linking.openURL(
                  "https://instagram.com/bobofsoongsil?igshid=ZDdkNTZiNTM="
                );
              }}
            >
              <BigTitle>@bobofsoongsil</BigTitle>
            </Pressable>
          </Text>
        </Animatable.View>
        <Animatable.View style={styles.itemContainer} animation="slideInRight">
          <Text style={styles.normalText}>
            같이 만들어나가요{"\n"}
            <Text style={styles.boldText}>인스타그램 dm주세요(≧∇≦)</Text>
          </Text>
        </Animatable.View>
        <Animatable.View style={styles.itemContainer} animation="slideInRight">
          <Text style={styles.normalText}>
            가게 소개에 개인적인 의견이 포함될 수 있습니다
          </Text>
        </Animatable.View>
      </View>

      <View style={styles.subContainer}>
        <Animatable.View
          style={[
            styles.itemContainer,
            {
              backgroundColor: Colors.basicColor.magentaTrans1,
              borderRadius: 0,
              elevation: 1,
            },
          ]}
          animation="slideInLeft"
        >
          <Text style={styles.normalText}>도움주신분들</Text>
        </Animatable.View>
        <Animatable.View style={styles.itemContainer} animation="slideInRight">
          <Text style={styles.normalText}>
            물리학과 이인용{"\n"}전기정보공학과 문승환{"\n"}회계학과 정재형
            {"\n"}소프트웨어학부 이재혁{"\n"}컴퓨터학부 사하
          </Text>
        </Animatable.View>
      </View>
      <View style={styles.subContainer}>
        <Animatable.View
          style={[
            styles.itemContainer,
            { alignItems: "flex-start", paddingLeft: 20 },
          ]}
          animation="slideInRight"
        >
          <Text style={styles.normalText}>
            버전{"\n"}
            <Text style={[styles.boldText]}>Beta</Text>
          </Text>
        </Animatable.View>
        <Animatable.View
          style={[
            styles.itemContainer,
            { alignItems: "flex-start", paddingLeft: 20 },
          ]}
          animation="slideInRight"
        >
          <Text style={styles.normalText}>
            배포일{"\n"}
            <Text style={styles.boldText}>23-04-10</Text>
          </Text>
        </Animatable.View>
        <Animatable.View
          style={[
            styles.itemContainer,
            { alignItems: "flex-start", paddingLeft: 20 },
          ]}
          animation="slideInRight"
        >
          <Text style={styles.normalText}>
            버그제보{"\n"}
            <Text style={styles.boldText}>dm주세요</Text>
          </Text>
        </Animatable.View>
      </View>

      <SmallSmallText style={{ alignSelf: "flex-end", padding: 5 }}>
        숭실밥집은 React Native로 빌드되었습니다
      </SmallSmallText>
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
