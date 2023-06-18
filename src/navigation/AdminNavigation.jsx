import { createNativeStackNavigator } from "@react-navigation/native-stack";

import VerifyPhoneScreen from "../screens/common/VerifyPhoneScreen";
import ProfileScreen from "../screens/common/ProfileScreen";
import NotificationsScreen from "../screens/common/NotificationsScreen";
import AboutScreen from "../screens/common/AboutScreen";

import AdminHomeSceen from "../screens/admin/HomeScreen";

import screens from "../static/screens.json";

import DrawerNavigation from "./DrawerNavigation";

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
    </Stack.Navigator>
  );
}
