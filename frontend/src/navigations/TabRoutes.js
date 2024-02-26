import * as Screens from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import navigationStrings from "./navigationStrings";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import colors from "../constants/colors";
import {
  responsiveHeight as h,
  responsiveFontSize as f,
  responsiveScreenWidth as w,
} from "react-native-responsive-dimensions";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName={navigationStrings.Home}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === navigationStrings.Home) {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === navigationStrings.Setting) {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === navigationStrings.History) {
            iconName = "history";
          }
          if (route.name === navigationStrings.History) {
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.neoncolor,
        tabBarActiveBackgroundColor: colors.background,
        tabBarInactiveBackgroundColor: colors.background,
        tabBarLabelStyle: {
          fontSize: f(1.6),
          letterSpacing: 1,
          marginBottom: h(0.6),
        },
        tabBarItemStyle: { alignItems: "center", alignContent: "center" },
        tabBarStyle: { height: h(8) },
      })}
    >
      <Tab.Screen name={navigationStrings.Home} component={Screens.Home} />
      <Tab.Screen
        name={navigationStrings.History}
        component={Screens.History}
      />
      <Tab.Screen
        name={navigationStrings.Setting}
        component={Screens.Setting}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
