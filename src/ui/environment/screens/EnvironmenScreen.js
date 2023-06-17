import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Linking } from "react-native";
import { Pressable } from "react-native";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Colors from "../../../../assets/Colors";
import { LinearGradient } from "expo-linear-gradient";
import {
  BigTitle,
  SmallSmallText,
  SmallTitle,
} from "../../../styled/styledComponents";
import * as Animatable from "react-native-animatable";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Login } from "./Login";
import CustomSnackbar from "../../../styled/CustomSnackbar";
import { MinorContainer } from "../../customComponent/MinorContainer";

function EnvironmenScreen() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  React.useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  return (
    <ScrollView content={styles.container}>
      <CustomSnackbar
        visible={snackbarVisible}
        setVisible={setSnackbarVisible}
        contentText="로그인 후 사용가능합니다"
      />
      <Animatable.View animation="slideInUp">
        <Text
          style={[
            styles.normalText,
            {
              fontSize: 30,
              marginBottom: 10,
              alignSelf: "center",
              marginTop: 40,
              letterSpacing: 3,
            },
          ]}
        >
          Information
        </Text>
      </Animatable.View>

      <MinorContainer>
        <Animatable.View
          animation="slideInLeft"
          style={[
            styles.subContainer,
            {
              paddingLeft: 20,
              flexDirection: "row",
            },
          ]}
        >
          <Pressable
            onPress={() => {
              console.log("login");
              setModalVisible(true);
            }}
          >
            <LinearGradient // Button Linear Gradient
              colors={["#FF000040", "#FFFF0040", "#4285F440", "#34A85340"]}
              style={{
                width: "100%",
                borderRadius: 5,
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}
              start={{ x: 0.0, y: 0.0 }}
              end={{ x: 1.0, y: 1.0 }}
            >
              <SmallTitle style={{ letterSpacing: 2 }}>로그인</SmallTitle>
            </LinearGradient>

            <Login isVisible={modalVisible} setModalVisible={setModalVisible} />
          </Pressable>

          <Pressable
            style={{
              height: RFPercentage(5),
              backgroundColor: Colors.basicColor.greenTrans1,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
              borderWidth: 1,
              borderColor: "black",
              flex: 1,
              marginLeft: 10,
              marginRight: 10,
            }}
            onPress={() => {
              isLogin
                ? navigation.navigate("couponScreen")
                : setSnackbarVisible(true);
            }}
          >
            <SmallTitle style={{ letterSpacing: 5 }}>쿠폰북</SmallTitle>
          </Pressable>
        </Animatable.View>
      </MinorContainer>

      <MinorContainer>
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
            같이 만들어나가요 ux/ui,FE(RN),BE{"\n"}
            <Text style={styles.boldText}>인스타그램 dm주세요(≧∇≦)</Text>
          </Text>
        </Animatable.View>
        <Animatable.View style={styles.itemContainer} animation="slideInRight">
          <Text style={styles.normalText}>
            가게 소개에 개인적인 의견이 포함될 수 있습니다
          </Text>
        </Animatable.View>
      </MinorContainer>

      <MinorContainer>
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
            물리학과 이인용{"\n"}전자정보공학과 문승환{"\n"}회계학과 정재형
            {"\n"}소프트웨어학부 이재혁{"\n"}컴퓨터학부 사하
          </Text>
        </Animatable.View>
      </MinorContainer>

      <MinorContainer>
        <Animatable.View
          style={[
            styles.itemContainer,
            { alignItems: "flex-start", paddingLeft: 20 },
          ]}
          animation="slideInRight"
        >
          <Text style={styles.normalText}>
            버전{"\n"}
            <Text style={[styles.boldText]}>
              Beta (+ 기식조회, 글씨체 변경)
            </Text>
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
            <Text style={styles.boldText}>23-04-14</Text>
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
            버그제보/개발제안{"\n"}
            <Text style={styles.boldText}>dm주세요</Text>
          </Text>
        </Animatable.View>
      </MinorContainer>

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
    paddingVertical: RFPercentage(1.3),
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
    fontFamily: "gangwon-bold",
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
