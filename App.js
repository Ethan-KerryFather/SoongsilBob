import { NavigationContainer } from "@react-navigation/native";
import { Image, StyleSheet, Text, View } from "react-native";
import RootStack from "./src/navigation/RootStack";
import Colors from "./assets/Colors";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import * as Location from "expo-location";

function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  // 폰트 로딩
  const [fontsLoaded] = useFonts({
    "black-sans": require("./assets/font/black-sans.ttf"),
    "gowun-bold": require("./assets/font/gowun-bold.ttf"),
    "gowun-regular": require("./assets/font/gowun-regular.ttf"),
  });

  if (location !== null) {
    console.log("위치를 가져온 상태에요");
  }

  // 위치권한 요청
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("위치 권한을 거부하셨습니다:(");
        return;
      }
      console.log("위치 가져오기 시작");

      let location = await Location.getCurrentPositionAsync({
        distanceInterval: 10,
        timeInterval: 100000,
        accuracy: Location.Accuracy.Balanced,
      });
      console.log("위치 가져오기 완료");
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    // location 가져와서 객체화
    text = JSON.stringify(location);
  }

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      console.log("폰트를 가져왔어요");
      // SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  SplashScreen.preventAutoHideAsync();
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      {location ? (
        <View style={styles.upperContainer}>
          <NavigationContainer>
            <RootStack userLocation={{ location }} />
          </NavigationContainer>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <Image source={require("./assets/horseIcon.png")} />
          <Text style={{ fontFamily: "gowun-bold", fontSize: 30 }}>
            밥 차리는 중..
          </Text>
          <Text style={{ fontFamily: "gowun-bold", fontSize: 20 }}>
            숭밥은 위치권한을 필요로 합니다:)
          </Text>
          <Text style={{ fontFamily: "gowun-bold", fontSize: 20 }}>
            꺼놓으셨다면 켜시고 앱을 재실행해주세요
          </Text>
        </View>
      )}
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperContainer: {
    flex: 16,
  },
  lowerContainer: {
    flex: 1.3,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: Colors.basicColor.color1Trans1,
  },
  //
});
