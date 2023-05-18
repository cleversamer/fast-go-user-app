import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PassengerHomeScreen1 from "../screens/passenger/HomeScreen1";
import PassengerHomeScreen2 from "../screens/passenger/HomeScreen2";
import PassengerHomeScreen3 from "../screens/passenger/HomeScreen3";
import SavedPlacesScreen from "../screens/passenger/SavedPlacesScreen";
import ReservedTripsScreen from "../screens/passenger/ReservedTripsScreen";
import ChallengesScreen from "../screens/passenger/ChallengesScreen";

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

export default function AppNavigation() {
  return (
    <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen name={screens.drawer} component={DrawerNavigation} />

      <Stack.Screen
        name={screens.passengerHome1}
        component={PassengerHomeScreen1}
      />

      <Stack.Screen
        name={screens.passengerHome2}
        component={PassengerHomeScreen2}
      />

      <Stack.Screen
        name={screens.passengerHome3}
        component={PassengerHomeScreen3}
      />

      <Stack.Screen name={screens.profile} component={ProfileScreen} />

      <Stack.Screen
        name={screens.notifications}
        component={NotificationsScreen}
      />

      <Stack.Screen name={screens.savedPlaces} component={SavedPlacesScreen} />

      <Stack.Screen
        name={screens.reservedTrips}
        component={ReservedTripsScreen}
      />

      <Stack.Screen name={screens.about} component={AboutScreen} />

      <Stack.Screen name={screens.wallet} component={WalletScreen} />

      <Stack.Screen name={screens.earnMore} component={EarnMoreScreen} />

      <Stack.Screen name={screens.challenges} component={ChallengesScreen} />
    </Stack.Navigator>
  );
}
