import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import RootStack from "./src/navigation/RootStack";
import Colors from "./assets/Colors";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
// gesture handler 등록
import "react-native-gesture-handler";
// react native paper
import { Provider as PaperProvider } from "react-native-paper";
SplashScreen.preventAutoHideAsync();

function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const [fontsLoaded] = useFonts({
    "gowun-regular": require("./assets/font/gowun-regular.ttf"),
    "gowun-bold": require("./assets/font/gowun-bold.ttf"),
    "black-sans": require("./assets/font/black-sans.ttf"),
    MaterialCommunityIcons: require("@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf"),
  });
  // 위치권한 요청
  useEffect(() => {
    const getLocationAsync = async () => {
      console.log("권한을 체크합니다");
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("위치 권한 문제 발생");
        return;
      }
      console.log("위치 권한 이상 없음");
      console.log("위치를 가져옵니다");
      try {
        const location = await Location.getCurrentPositionAsync({
          distanceInterval: 10,
          timeInterval: 20000,
          accuracy: Location.Accuracy.Balanced,
        });
        console.log("위치 가져오기 완료\n위치 데이터: ");
        setLocation(location);
      } catch (error) {
        console.log("에러발생. 재시도");
        const location = await Location.getCurrentPositionAsync({
          distanceInterval: 10,
          timeInterval: 20000,
          accuracy: Location.Accuracy.Balanced,
        });
        console.log("위치 가져오기 완료\n위치 데이터: ");
        console.log(JSON.stringify(location));
        setLocation(location);
      } finally {
        SplashScreen.hideAsync();
      }
    };
    getLocationAsync();
    return () => {
      setLocation(null);
      setErrorMsg(null);
    };
  }, []);

  // const getLocation = async () => {
  //   console.log("권한을 체크합니다");
  //   const { status } = await Location.requestForegroundPermissionsAsync();
  //   if (status !== "granted") {
  //     setErrorMsg("위치 권한 문제 발생");
  //     return;
  //   }
  //   console.log("위치 권한 이상 없음");
  //   console.log("위치를 가져옵니다");
  //   try {
  //     Location.getCurrentPositionAsync({
  //       distanceInterval: 10,
  //       timeInterval: 20000,
  //       accuracy: Location.Accuracy.Balanced,
  //     })
  //       .then((location) => {
  //         console.log("위치 가져오기 완료\n위치 데이터: ");
  //         setLocation(location);
  //       })
  //       .catch((error) => console.log(error));
  //   } catch (error) {
  //     console.log("에러발생. 재시도");
  //     Location.getCurrentPositionAsync({
  //       distanceInterval: 10,
  //       timeInterval: 20000,
  //       accuracy: Location.Accuracy.Balanced,
  //     })
  //       .then((location) => {
  //         console.log("위치 가져오기 완료\n위치 데이터: ");
  //         console.log(JSON.stringify(location));
  //         setLocation(location);
  //       })
  //       .catch((error) => console.log(error));
  //   }
  // };

  if (location && fontsLoaded) {
    SplashScreen.hideAsync();
    return (
      <PaperProvider>
        <View style={styles.container}>
          <View style={styles.upperContainer}>
            <NavigationContainer>
              <RootStack userLocation={{ location }} />
            </NavigationContainer>
          </View>
        </View>
      </PaperProvider>
    );
  } else {
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <Text style={{ fontSize: 20 }}>밥 차리는 중..</Text>
          <Text style={{ fontSize: 15 }}>
            사용자 위치 업데이트가 원활하지 않을 때가 있습니다.
          </Text>
          <Text style={{ fontSize: 15 }}>종료 후 재시작해주세요:)</Text>
        </View>
      </View>
    );
  }
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
