import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../ui/HomeScreen";
import EnvironmenScreen from "../ui/environment/screens/EnvironmenScreen";
import Colors from "../../assets/Colors";
import NotifyScreen from "../ui/notify/screens/NotifyScreen";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import EventScreen from "../ui/notify/screens/EventScreen";
import StoreLists from "../ui/store/screens/StoreLists";
import StorePage from "../ui/store/screens/StorePage";
import { useRoute } from "@react-navigation/native";
import RankingHome from "../ui/ranking/RankingHome";
import UnivFoodScreen from "../ui/univFood/UnivFoodScreen";
import { RFPercentage } from "react-native-responsive-fontsize";
import RouletteScreen from "../ui/roulette/RouletteScreen";
import { Image, StyleSheet, View } from "react-native";
import AllianceScreen from "../ui/ranking/AllianceScreen";
import Check from "../ui/check/Check";
import Check2 from "../ui/check/Check2";

const HomeStack = createNativeStackNavigator();
const EnvironmentStack = createNativeStackNavigator();
const RankingStack = createNativeStackNavigator();
const UnivFoodStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
const NotifyTab = createMaterialTopTabNavigator();

function NotificationScreen() {
  const images = [
    "https://photos.app.goo.gl/sqW6q1Jt74GDU8Hp6",
    "https://lh3.googleusercontent.com/pw/AMWts8B6dSZJSsIsFY3iExPMEQ51M8KGAmjc_Dt59NkClNdPY0SOnTmLOCVWz0CjAnMgXgOYZ9M-uXMzSupiC6_GFq-2ucEoiqUt0ZGUgHTld7fVlwZLZiMC9qXdynGQrwEF30ahdvSzGvo1iYK670kiaBc=w933-h933-s-no?authuser=0",
  ];
  return (
    <View style={notificationStyles.container}>
      <View style={{ height: RFPercentage(30) }}>
        <Image
          source={{ uri: images[1] }}
          style={{ width: "100%", height: "100%" }}
          resizeMode="stretch"
        />
      </View>
      <View style={{ flex: 1 }}>
        <NotifyTab.Navigator
          style={{ flex: 1 }}
          tabBarPosition="top"
          screenOptions={{
            tabBarStyle: {
              height: RFPercentage(6),
              justifyContent: "flex-start",
            },
            tabBarIndicatorContainerStyle: {
              backgroundColor: Colors.basicColor.magentaTrans2,
            },
            tabBarActiveTintColor: "black",
            tabBarLabelStyle: {
              fontSize: 15,
              fontFamily: "gowun-bold",
            },
            tabBarBounces: true,
          }}
        >
          <NotifyTab.Screen
            name="notify"
            component={NotifyScreen}
            options={{
              title: "공지",
            }}
          />
          <NotifyTab.Screen
            name="event"
            component={EventScreen}
            options={{
              title: "이벤트",
            }}
          />
        </NotifyTab.Navigator>
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
            <MaterialCommunityIcons name="medal" size={40} color="black" />
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
