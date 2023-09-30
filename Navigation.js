import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "react-native";
import Feed from "./screens/tabScreens/Feed";
import Notifications from "./screens/tabScreens/Notifications";
import Settings from "./screens/tabScreens/Settings";
import { Ionicons } from "@expo/vector-icons";
import TweetDetailsScreen from "./screens/stackScreens/TweetDetailsScreen";
import PaymentScreen from "./screens/drawerScreens/PaymentScreen";

// stack navigator
const Stack = createNativeStackNavigator();

function HomeStackGroup() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Feed} />
      <Stack.Screen name="TweetDetailScreen" component={TweetDetailsScreen} />
    </Stack.Navigator>
  );
}

function SettingStackGroup() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={Feed} />
      <Stack.Screen name="TweetDetailScreen" component={TweetDetailsScreen} />
    </Stack.Navigator>
  );
}

// bottom tabs navigation
const Tab = createBottomTabNavigator();
function TabGroup() {
  return (
    <Tab.Navigator
      screenOptions={({ navigation, route }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName = "";
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "ios-settings-sharp";
          } else if (route.name === "Notifications") {
            iconName = focused ? "ios-notifications" : "notifications-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: "#1DA1F2",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackGroup}
        options={{ headerShown: false, tabBarLabel: "@SumitMahour" }}
      />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Notifications" component={Notifications} />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function DrawerGroup() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={TabGroup}
        options={{
          headerShown: false,
          drawerIcon: () => <Ionicons name="home" size={20} />,
          drawerLabel: "Home",
        }}
      />
      <Drawer.Screen
        name="Payment"
        component={PaymentScreen}
        options={{
          drawerIcon: () => <Ionicons name="settings" size={20} />,
          drawerLabel: "Payment Screen",
        }}
      />
    </Drawer.Navigator>
  );
}
export default function Navigation() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
      <DrawerGroup />
    </NavigationContainer>
  );
}
