import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import RootStack from "./src/navigation/RootStack";
import Colors from "./assets/Colors";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback } from "react";

function App() {
  const [fontsLoaded] = useFonts({
    "black-sans": require("./assets/font/black-sans.ttf"),
    "gowun-bold": require("./assets/font/gowun-bold.ttf"),
    "gowun-regular": require("./assets/font/gowun-regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      console.log("font loaded..");
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  SplashScreen.preventAutoHideAsync();

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <View style={styles.upperContainer}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </View>
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
