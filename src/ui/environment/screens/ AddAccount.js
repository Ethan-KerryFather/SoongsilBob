import React, { useEffect, useMemo, useState } from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  StatusBar,
  ScrollView,
  Pressable,
} from "react-native";
import Colors from "../../../../assets/Colors";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Divider, RadioButton, TextInput } from "react-native-paper";
import { SmallTitle } from "../../../styled/styledComponents";
import { LinearGradient } from "expo-linear-gradient";

const gradientColors = ["rgba(238,174,202,0.4)", "rgba(148,187,233,0.4)"];

function AddAccount({ navigation }) {
  const [userGender, setUserGender] = useState("woman");

  const [userInfo, setUserInfo] = useState({
    name: "",
    gender: "",
    age: "",
    account: {
      id: "",
      pw: "",
    },
  });

  useEffect(() => {
    console.log("add account");
    navigation.setOptions({
      headerShown: true,
      title: "회원가입",
    });
  }, []);

  return (
    <ScrollView
      style={[styles.container, { height: Dimensions.get("window").height }]}
    >
      <LinearGradient
        colors={["#E4E4E430", "#00C6CF30", "#7FD1AE30"]}
        style={{ height: RFPercentage(100) }}
      >
        <View style={styles.upperContainer}>
          <SubContainer>
            <TextInput
              label="이름"
              value={userInfo.name}
              onChangeText={(text) =>
                setUserInfo((prevState) => {
                  console.log(text);
                  return { ...prevState, name: text };
                })
              }
              style={{ marginVertical: RFPercentage(2) }}
              mode="outlined"
            />
            <TextInput
              label="나이"
              value={userInfo.age}
              onChangeText={(text) =>
                setUserInfo((prevState) => {
                  console.log(text);
                  return { ...prevState, age: text };
                })
              }
              mode="outlined"
            />
            <Divider style={{ marginVertical: RFPercentage(1) }} />
            <View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton
                  status={userGender === "woman" ? "checked" : "unchecked"}
                  onPress={() => setUserGender("woman")}
                />
                <SmallTitle>여자</SmallTitle>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton
                  status={userGender === "man" ? "checked" : "unchecked"}
                  onPress={() => setUserGender("man")}
                />
                <SmallTitle>남자</SmallTitle>
              </View>
            </View>
          </SubContainer>
          <SubContainer>
            <TextInput
              label="사용하실 ID"
              value={userInfo.account.id}
              onChangeText={(text) =>
                setUserInfo((prevState) => {
                  console.log(text);
                  return {
                    ...prevState,
                    account: { ...prevState.account, id: text },
                  };
                })
              }
              mode="outlined"
            />
            <TextInput
              label="사용하실 PW"
              value={userInfo.account.pw}
              onChangeText={(text) =>
                setUserInfo((prevState) => {
                  console.log(text);
                  return {
                    ...prevState,
                    account: { ...prevState.account, pw: text },
                  };
                })
              }
              style={{ marginVertical: RFPercentage(1) }}
              mode="outlined"
            />
            <Pressable
              style={{
                width: "90%",
                height: 50,
                alignSelf: "center",
                borderWidth: 1,
                borderColor: "black",
                borderRadius: 15,
              }}
            >
              <LinearGradient
                colors={gradientColors}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 15,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                start={{ x: 0.0, y: 0.0 }}
                end={{ x: 1.0, y: 1.0 }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "gangwon-bold",
                    letterSpacing: 2,
                  }}
                >
                  아이디 & 패스워드 검사
                </Text>
              </LinearGradient>
            </Pressable>
          </SubContainer>
        </View>
        <View style={styles.lowerContainer}>
          <View>
            <Text style={{ fontFamily: "gangwon-bold", fontSize: 20 }}>
              모두 동의합니다
            </Text>
            <Text style={{ fontFamily: "gangwon-bold", fontSize: 15 }}>
              이용약관동의
            </Text>
            <Text style={{ fontFamily: "gangwon-bold", fontSize: 15 }}>
              개인정보처리방침 동의
            </Text>
          </View>
          <GradientBtn text="회원가입 완료하기" colors={gradientColors} />
        </View>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  upperContainer: {
    flex: 5,
    alignItems: "center",
  },
  lowerContainer: {
    flex: 5,
  },
});

export default AddAccount;

const SubContainer = ({ children }) => {
  return <View style={styles2.container}>{children}</View>;
};

const styles2 = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 15,
    marginVertical: RFPercentage(3),
    padding: 14,
  },
  gradientBtnStyle: {},
});

const GradientBtn = ({ colors, text }) => (
  <Pressable>
    <LinearGradient
      colors={colors}
      start={{ x: 0.0, y: 0.0 }}
      end={{ x: 1.0, y: 1.0 }}
      style={{
        width: "95%",
        height: RFPercentage(8),
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginBottom: 10,
        borderRadius: 15,
      }}
    >
      {text && <SmallTitle style={{ letterSpacing: 3 }}>{text}</SmallTitle>}
    </LinearGradient>
  </Pressable>
);
