import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AddCarScreen from "../screens/driver/AddCarScreen";
import AddLegalDocumentsScreen from "../screens/driver/AddLegalDocumentsScreen";
import PendingRequestScreen from "../screens/driver/PendingRequestScreen";
import DriverHomeSceen from "../screens/driver/HomeSceen";
import NewRequestScreen from "../screens/driver/NewRequestScreen";
import TripsHistory from "../screens/driver/TripsHistory";

import ProfileScreen from "../screens/common/ProfileScreen";
import NotificationsScreen from "../screens/common/NotificationsScreen";
import AboutScreen from "../screens/common/AboutScreen";
import WalletScreen from "../screens/common/WalletScreen";
import EarnMoreScreen from "../screens/common/EarnMoreScreen";

import screens from "../static/screens.json";

import DrawerNavigation from "./DrawerNavigation";

const globalScreenOptions = {
  contentStyle: { backgroundColor: "#fff" },
  headerShown: false,
};

const Stack = createNativeStackNavigator();

export default function DriverNavigation() {
  return (
    <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen name={screens.drawer} component={DrawerNavigation} />

      <Stack.Screen name={screens.addCar} component={AddCarScreen} />

      <Stack.Screen
        name={screens.addLegalDocuments}
        component={AddLegalDocumentsScreen}
      />

      <Stack.Screen
        name={screens.pendingRequest}
        component={PendingRequestScreen}
      />

      <Stack.Screen name={screens.driverHome} component={DriverHomeSceen} />

      <Stack.Screen name={screens.profile} component={ProfileScreen} />

      <Stack.Screen
        name={screens.notifications}
        component={NotificationsScreen}
      />

      <Stack.Screen name={screens.about} component={AboutScreen} />

      <Stack.Screen name={screens.wallet} component={WalletScreen} />

      <Stack.Screen name={screens.earnMore} component={EarnMoreScreen} />

      <Stack.Screen name={screens.newRequest} component={NewRequestScreen} />

      <Stack.Screen name={screens.tripsHistory} component={TripsHistory} />
    </Stack.Navigator>
  );
}
