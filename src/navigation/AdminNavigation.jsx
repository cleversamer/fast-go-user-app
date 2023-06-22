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
import PhotoDisplayScreen from "../screens/admin/PhotoDisplayScreen";
import TripsScreen from "../screens/admin/TripsScreen";
import PassengersScreen from "../screens/admin/PassengersScreen";
import FinancialManagementScreen from "../screens/admin/FinancialManagementScreen";
import TripPricingScreen from "../screens/admin/TripPricingScreen";
import CouponCodesScreen from "../screens/admin/CouponCodesScreen";
import ChargeCardsScreen from "../screens/admin/ChargeCardsScreen";

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

      <Stack.Screen
        name={screens.photoDisplay}
        component={PhotoDisplayScreen}
      />

      <Stack.Screen name={screens.trips} component={TripsScreen} />

      <Stack.Screen name={screens.passengers} component={PassengersScreen} />

      <Stack.Screen
        name={screens.financialManagement}
        component={FinancialManagementScreen}
      />

      <Stack.Screen name={screens.tripPricing} component={TripPricingScreen} />

      <Stack.Screen name={screens.couponCodes} component={CouponCodesScreen} />

      <Stack.Screen name={screens.chargeCards} component={ChargeCardsScreen} />
    </Stack.Navigator>
  );
}
