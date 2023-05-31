import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../ui/HomeScreen";
import EnvironmenScreen from "../ui/environment/screens/EnvironmenScreen";
import Colors from "../../assets/Colors";
import NotifyScreen from "../ui/notify/screens/NotifyScreen";
import { Entypo } from "@expo/vector-icons";

import StoreLists from "../ui/store/screens/StoreLists";
import StorePage from "../ui/store/screens/StorePage";
import { useNavigation, useRoute } from "@react-navigation/native";
import RankingHome from "../ui/ranking/RankingHome";
import UnivFoodScreen from "../ui/univFood/UnivFoodScreen";
import { RFPercentage } from "react-native-responsive-fontsize";
import RouletteScreen from "../ui/roulette/RouletteScreen";
import { Image, StatusBar, StyleSheet, View } from "react-native";
import AllianceScreen from "../ui/ranking/AllianceScreen";
import Check from "../ui/check/Check";
import Check2 from "../ui/check/Check2";
import { useEffect } from "react";
import { BigTitle } from "../styled/styledComponents";
import AnimatedLottieView from "lottie-react-native";
import CouponScreen from "../ui/environment/screens/CouponScreen";
import PickUpScreen from "../ui/pickup/Screens/PickUpScreen";

const HomeStack = createNativeStackNavigator();
const EnvironmentStack = createNativeStackNavigator();
const RankingStack = createNativeStackNavigator();
const UnivFoodStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function NotificationScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const height = StatusBar.currentHeight;

  return (
    <View style={notificationStyles.container}>
      <View style={[{ paddingTop: height, flex: 1 }]}>
        <View style={{ paddingTop: 100 }}>
          <BigTitle>준비중이에요</BigTitle>
        </View>
        <AnimatedLottieView
          source={require("../../assets/cooking.json")}
          style={{ flex: 1 }}
          autoPlay
        />
      </View>
    </View>
  );
}

const notificationStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
});

function HomeStackScreen() {
  const route = useRoute();
  const myLocation = {
    latitude: route.params.myLocation.location.coords.latitude,
    longtitude: route.params.myLocation.location.coords.longitude,
  };
  console.log(myLocation);
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen
        name="StoreList"
        component={StoreLists}
        initialParams={myLocation}
      />
      <HomeStack.Screen
        name="StorePage"
        component={StorePage}
        initialParams={myLocation}
      />
      <HomeStack.Screen name="RouletteScreen" component={RouletteScreen} />
      <HomeStack.Screen name="Check" component={Check} />
      <HomeStack.Screen name="Check2" component={Check2} />
      <HomeStack.Screen name="PickUp" component={PickUpScreen} />
    </HomeStack.Navigator>
  );
}

function UnivFoodScreens() {
  return (
    <UnivFoodStack.Navigator>
      <UnivFoodStack.Screen name="Home" component={UnivFoodScreen} />
    </UnivFoodStack.Navigator>
  );
}

function RankingScreen() {
  return (
    <RankingStack.Navigator>
      <RankingStack.Screen name="Home" component={RankingHome} />
      <RankingStack.Screen name="Alliance" component={AllianceScreen} />
    </RankingStack.Navigator>
  );
}

function EnvironmentScreen() {
  return (
    <EnvironmentStack.Navigator>
      <EnvironmentStack.Screen
        name="environmentScreen"
        component={EnvironmenScreen}
      />
      <EnvironmentStack.Screen name="couponScreen" component={CouponScreen} />
    </EnvironmentStack.Navigator>
  );
}

function RootStack({ userLocation }) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeTab"
        component={HomeStackScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <MaterialCommunityIcons name="rice" size={40} color="black" />
          ),
          tabBarActiveBackgroundColor: Colors.basicColor.magenta,
          tabBarItemStyle: {
            borderRadius: 20,
          },
        }}
        initialParams={{ myLocation: userLocation }}
      />
      <Tab.Screen
        name="UnivFoodTab"
        component={UnivFoodScreens}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <MaterialIcons name="food-bank" size={40} color="black" />
          ),
          tabBarActiveBackgroundColor: Colors.basicColor.magenta,
          tabBarItemStyle: {
            borderRadius: 20,
          },
        }}
      />
      <Tab.Screen
        name="rankingTab"
        component={RankingScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <MaterialCommunityIcons name="youtube-tv" size={40} color="black" />
          ),
          tabBarActiveBackgroundColor: Colors.basicColor.magenta,
          tabBarItemStyle: {
            borderRadius: 20,
          },
        }}
      />
      <Tab.Screen
        name="notifyTab"
        component={NotificationScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <MaterialIcons name="notifications" size={40} color="black" />
          ),
          tabBarActiveBackgroundColor: Colors.basicColor.magenta,
          tabBarItemStyle: {
            borderRadius: 20,
          },
        }}
      />
      <Tab.Screen
        name="EnvironmentTab"
        component={EnvironmentScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => <Entypo name="menu" size={40} color="black" />,
          tabBarActiveBackgroundColor: Colors.basicColor.magenta,
          tabBarItemStyle: {
            borderRadius: 20,
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default RootStack;
