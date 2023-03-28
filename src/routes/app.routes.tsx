import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import Details from "../screens/Details";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";

type StackRoutesParams = {
  home: undefined;
  details: undefined;
};

// import to get suggestion of the stack routes on navigate method
export type StackNavigatorRoutesProps =
  NativeStackNavigationProp<StackRoutesParams>;

// create the stack routes with the params of the routes
const Stack = createNativeStackNavigator<StackRoutesParams>();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// the stack routes is called in the tab routes
function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        // options to show the menu icon to open the drawer
        options={({ navigation }) => ({
          title: "", // removing the title "home" to show only the menu icon
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <MaterialIcons name="menu" size={25} />
            </TouchableOpacity>
          ),
        })}
      />

      <Stack.Screen name="details" component={Details} />
    </Stack.Navigator>
  );
}

// the tab routes is called in the drawer routes
function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="stack"
        component={StackRoutes}
        options={{
          tabBarLabel: "home", // renaming the tab label
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="settings"
        component={Settings}
        options={({ navigation }) => ({
          headerShown: true, // activating the header to get the drawer menu
          title: "", // removing the title "settings" to show only the menu icon
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 16 }}
              onPress={() => navigation.toggleDrawer()}
            >
              <MaterialIcons name="menu" size={25} />
            </TouchableOpacity>
          ),

          tabBarLabel: "settings", // renaming the tab label because the title is ""
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" color={color} size={size} />
          ),
        })}
      />
    </Tab.Navigator>
  );
}

function DrawerRoutes() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={TabRoutes}
        // setting to false to be able to access only the header of the stack routes in details screen
        // this way we have the go back header in details screen
        options={{ headerShown: false }}
      />

      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}

export { DrawerRoutes as AppRoutes };
