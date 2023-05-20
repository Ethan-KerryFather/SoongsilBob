import React, { useState } from "react";
import { StyleSheet, StatusBar, View, Pressable } from "react-native";
import { useEffect } from "react";
import WebView from "react-native-webview";
import Colors from "../../../assets/Colors";
import MarqueeText from "react-native-marquee";

/*
RankingHome 
  제휴 컨텐츠 유튜브 채널을 웹뷰로 업로드하는 컴포넌트 
  탭 5개 중 가운데 탭 
FIXME:
  학교 밥집에 대한 랭킹을 담아야하는데 애초에 기능을 변경함
  컨텐츠 뷰에 대한 컴포넌트
*/

function RankingHome({ navigation }) {
  const [youtubeUri, setYoutubeUri] = useState(
    "https://m.youtube.com/@user-hz6zg4cb4k"
  );
  const [forceUpdateTrigger, setForceUpdateTrigger] = useState(0);
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });

    return () => {
      setYoutubeUri("https://m.youtube.com/@user-hz6zg4cb4k");
    };
  }, []);
  const height = StatusBar.currentHeight;
  return (
    <View style={[styles.container, { paddingTop: height }]}>
      <Pressable
        style={{
          width: "100%",
          backgroundColor: Colors.basicColor.magentaTrans2,
        }}
        onPress={() => {
          console.log("dd");
          setForceUpdateTrigger((prevState) => {
            console.log(prevState);
            return prevState + 1;
          });
        }}
      >
        <MarqueeText
          style={{ fontSize: 15, fontFamily: "gowun-regular" }}
          speed={0.3}
          marqueeOnStart={true}
          loop={true}
          delay={2000}
        >
          {"\t\t\t\t"}SRMP Studio 슈림프 스튜디오 X 흥사단 아카데미 ACA : 컨텐츠
          기획 입부문의 @bobofsoongsil
        </MarqueeText>
      </Pressable>
      <View style={{ flex: 1 }}>
        <WebView source={{ uri: youtubeUri }} style={{ flex: 1 }} />
      </View>
    </View>
  );
}

export default RankingHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-start",
  },
});
