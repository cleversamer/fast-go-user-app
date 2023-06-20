import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DrawerNavigation from "./DrawerNavigation";
import screens from "../static/screens.json";

import AboutScreen from "../screens/common/AboutScreen";
import AdminHomeSceen from "../screens/admin/HomeScreen";
import DriversScreen from "../screens/admin/DriversScreen";
import NotificationsScreen from "../screens/common/NotificationsScreen";
import ProfileScreen from "../screens/common/ProfileScreen";
import VerifyPhoneScreen from "../screens/common/VerifyPhoneScreen";
import CallScreen from "../screens/common/CallScreen";
import DriverRequestScreen from "../screens/admin/DriverRequestScreen";

const globalScreenOptions = {
  contentStyle: { backgroundColor: "#fff" },
  headerShown: false,
};

const Stack = createNativeStackNavigator();

export default function AdminNavigation() {
  return (
    <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen name={screens.drawer} component={DrawerNavigation} />

      <Stack.Screen name={screens.verifyPhone} component={VerifyPhoneScreen} />

      <Stack.Screen name={screens.adminHome} component={AdminHomeSceen} />

      <Stack.Screen name={screens.profile} component={ProfileScreen} />

      <Stack.Screen
        name={screens.notifications}
        component={NotificationsScreen}
      />

      <Stack.Screen name={screens.about} component={AboutScreen} />

      <Stack.Screen name={screens.drivers} component={DriversScreen} />

      <Stack.Screen name={screens.call} component={CallScreen} />

      <Stack.Screen
        name={screens.driverRequest}
        component={DriverRequestScreen}
      />
    </Stack.Navigator>
  );
}
