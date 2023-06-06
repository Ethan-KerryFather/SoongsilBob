import CustomModal from "../../customComponent/CustomModal";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { BigText, SmallTitle } from "../../../styled/styledComponents";
import Colors from "../../../../assets/Colors";
import { useEffect, useState } from "react";
import { TextInput } from "react-native-paper";
import { RFPercentage } from "react-native-responsive-fontsize";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export function Login({ isVisible, setModalVisible }) {
  console.log(`** Login Component\nisVisible값 ${isVisible}`);

  const navigation = useNavigation();
  const [emailId, setEmailId] = useState("");
  const [emailPw, setEmailPw] = useState("");

  useEffect(() => {
    console.log("changed");
  }, [isVisible]);

  return (
    <CustomModal isVisible={isVisible}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={{ marginBottom: 20 }}>
            <BigText>Login</BigText>
          </View>

          <View>
            <TextInput
              label="Email"
              value={emailId}
              onChangeText={(text) => setEmailId(text)}
              style={{
                width: RFPercentage(35),
                borderRadius: 3,
                marginBottom: RFPercentage(4),
              }}
            />
            <TextInput
              label="PassWord"
              value={emailPw}
              onChangeText={(text) => setEmailPw(text)}
              style={{ width: RFPercentage(35), borderRadius: 3 }}
            />
          </View>
          <View style={styles.loginBtnContainer}>
            <Pressable style={styles.loginBtn}>
              <SmallTitle>확인</SmallTitle>
            </Pressable>
            <Pressable
              style={styles.loginBtn}
              onPress={() => {
                console.log("press Event");
                setModalVisible(!isVisible);
              }}
            >
              <SmallTitle>취소</SmallTitle>
            </Pressable>
          </View>
          <View
            style={[
              styles.loginBtn,
              {
                width: "70%",
                alignSelf: "center",
                height: "8%",
                backgroundColor: Colors.basicColor.grayTrans1,
                borderRadius: 2,
                marginTop: "3%",
              },
            ]}
          >
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                height: "100%",
              }}
              onPress={() => {
                setModalVisible(false);
                navigation.navigate("addAccountScreen");
              }}
            >
              <SmallTitle>회원가입 with{"\t"}</SmallTitle>
              <AntDesign name="google" color="red" />
              <SmallTitle>oogle</SmallTitle>
            </Pressable>
          </View>
        </View>
      </View>
    </CustomModal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
  },
  subContainer: {
    justifyContent: "center",
    width: "80%",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: Colors.basicColor.pastelBlueStrong,
    alignItems: "center",
    padding: 5,
    alignSelf: "center",
  },
  loginBtnContainer: {
    marginTop: 30,
    flexDirection: "row",
  },
  loginBtn: {
    width: "35%",
    height: RFPercentage(5),
    backgroundColor: Colors.basicColor.magentaTrans1,
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
});
