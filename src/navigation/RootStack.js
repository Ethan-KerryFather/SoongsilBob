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

const HomeStack = createNativeStackNavigator();
const EnvironmentStack = createNativeStackNavigator();
const RankingStack = createNativeStackNavigator();
const UnivFoodStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
const NotifyTab = createMaterialTopTabNavigator();

function NotificationScreen() {
  return (
    <NotifyTab.Navigator>
      <NotifyTab.Screen
        name="notify"
        component={NotifyScreen}
        options={{
          title: "공지",
          tabBarIcon: () => (
            <AntDesign name="notification" size={30} color="black" />
          ),
        }}
      />
      <NotifyTab.Screen
        name="event"
        component={EventScreen}
        options={{
          title: "이벤트",
          tabBarIcon: () => (
            <AntDesign name="notification" size={30} color="black" />
          ),
        }}
      />
    </NotifyTab.Navigator>
  );
}

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
