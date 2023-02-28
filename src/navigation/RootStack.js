import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../ui/HomeScreen";
import EnvironmenScreen from "../ui/environment/screens/EnvironmenScreen";
import Colors from "../../assets/Colors";
import NotifyScreen from "../ui/notify/screens/NotifyScreen";
import { AntDesign } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import EventScreen from "../ui/notify/screens/EventScreen";
import StoreLists from "../ui/store/screens/StoreLists";
const HomeStack = createNativeStackNavigator();
const EnvironmentStack = createNativeStackNavigator();
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
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="StoreList" component={StoreLists} />
    </HomeStack.Navigator>
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

function RootStack() {
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
        }}
      />
      <Tab.Screen
        name="notifyTab"
        component={NotificationScreen}
        options={{
          tabBarBadge: 3,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <AntDesign name="notification" size={40} color="black" />
          ),
          tabBarActiveBackgroundColor: Colors.basicColor.magenta,
        }}
      />
      <Tab.Screen
        name="EnvironmentTab"
        component={EnvironmentScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <MaterialCommunityIcons name="menu" size={40} color="black" />
          ),
          tabBarActiveBackgroundColor: Colors.basicColor.magenta,
        }}
      />
    </Tab.Navigator>
  );
}

export default RootStack;
