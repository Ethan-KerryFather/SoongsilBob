import React, { useEffect, useMemo, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Checkbox, Divider, RadioButton, TextInput } from "react-native-paper";
import { SmallTitle } from "../../../styled/styledComponents";
import { LinearGradient } from "expo-linear-gradient";
import { MinorContainer } from "../../customComponent/MinorContainer";
import addUser from "../component/addUser";

const gradientColors = ["rgba(238,174,202,0.4)", "rgba(148,187,233,0.4)"];

function AddAccount({ navigation }) {
  const [userGender, setUserGender] = useState("woman");
  const [warnWords, setWarnWords] = useState("");
  const [userInfo, setUserInfo] = useState({
    name: "",
    gender: "",
    age: "",
    account: {
      id: "",
      pw: "",
    },
  });

  const [userAgree, setUserAgree] = useState({
    first: false,
    second: false,
    third: false,
  });

  useEffect(() => {
    console.log("changed warnWords");
    console.log(warnWords);
  }, [warnWords]);

  useEffect(() => {
    console.log("add account");
    navigation.setOptions({
      headerShown: true,
      title: "회원가입",
    });
  }, []);

  return (
    <ScrollView style={[styles.container]}>
      <LinearGradient colors={["#E4E4E430", "#00C6CF30", "#7FD1AE30"]} s>
        <View style={{ marginTop: 30 }}>
          <SmallTitle>회원가입 해주셔서 감사합니다</SmallTitle>
        </View>
        <View style={styles.upperContainer}>
          <MinorContainer>
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
          </MinorContainer>
          <MinorContainer>
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
          </MinorContainer>
          <View
            style={{
              width: "100%",
            }}
          >
            <View
              style={{
                alignItems: "flex-start",
                paddingLeft: "5%",
                marginBottom: 10,
              }}
            >
              <Text style={{ fontFamily: "gangwon-bold", fontSize: 20 }}>
                모두 동의합니다
              </Text>
              <Checkbox
                status={userAgree.first ? "checked" : "unchecked"}
                onPress={() => {
                  setUserAgree((prevState) => ({
                    ...prevState,
                    first: !prevState.first,
                  }));
                }}
              />
              <Text style={{ fontFamily: "gangwon-bold", fontSize: 15 }}>
                이용약관동의
              </Text>
              <Text style={{ fontFamily: "gangwon-bold", fontSize: 15 }}>
                개인정보처리방침 동의
              </Text>
            </View>
            <GradientBtn
              text="회원가입 완료하기"
              colors={gradientColors}
              onPress={() => {
                addUser(userInfo, setWarnWords);
              }}
            />
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  upperContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default AddAccount;

const styles2 = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 15,
    marginVertical: RFPercentage(2),
    padding: 14,
  },
  gradientBtnStyle: {
    width: "95%",
    height: RFPercentage(5),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 10,
    borderRadius: 15,
  },
});

const GradientBtn = ({ colors, text, onPress }) => (
  <Pressable
    onPress={() => {
      if (onPress) {
        onPress();
      }
    }}
  >
    <LinearGradient
      colors={colors}
      start={{ x: 0.0, y: 0.0 }}
      end={{ x: 1.0, y: 1.0 }}
      style={styles2.gradientBtnStyle}
    >
      {text && <SmallTitle style={{ letterSpacing: 3 }}>{text}</SmallTitle>}
    </LinearGradient>
  </Pressable>
);
