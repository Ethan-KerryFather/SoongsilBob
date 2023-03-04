import { NavigationContainer } from "@react-navigation/native";
import { Image, StyleSheet, Text, View } from "react-native";
import RootStack from "./src/navigation/RootStack";
import Colors from "./assets/Colors";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import * as Location from "expo-location";

function App() {
  SplashScreen.preventAutoHideAsync();

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [fontLoaded, setFontLoaded] = useState(false);

  const [fontsLoaded] = useFonts({
    "black-sans": require("./assets/font/black-sans.ttf"),

    "gowun-regular": require("./assets/font/gowun-regular.ttf"),
    "gowun-bold": require("./assets/font/gowun-bold.ttf"),
  });

  // 위치권한 요청
  useEffect(() => {
    try {
      getLocation();
    } catch (error) {
      console.log(error);
    } finally {
      SplashScreen.hideAsync();
    }
  }, []);

  if (location !== null) {
    console.log("위치를 가져온 상태에요");
  }

  async function getLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("위치권한 문제발생");
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
  }

  return (
    <View style={styles.container}>
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
          <Text style={{ fontSize: 30 }}>밥 차리는 중..</Text>
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
