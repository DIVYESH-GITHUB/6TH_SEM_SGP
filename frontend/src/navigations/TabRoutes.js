import * as Screens from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import navigationStrings from "./navigationStrings";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import colors from "../constants/colors";
import ScanTab from "./../screens/Scan-Screen/ScanTab";
//import UploadTab from "./../screens/Upload-Screen/UploadTab";
import {
  responsiveHeight as h,
  responsiveFontSize as f,
  responsiveScreenWidth as w,
} from "react-native-responsive-dimensions";
import UploadTab from "../screens/Upload-Screen/UploadTab";

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
          } else if (route.name === navigationStrings.ScanTab) {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === navigationStrings.UploadTab) {
            iconName = "file-upload";
          }
          if (route.name === navigationStrings.UploadTab) {
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
        name={navigationStrings.UploadTab}
        component={UploadTab}
      />
      <Tab.Screen
        name={navigationStrings.ScanTab}
        component={ScanTab}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
