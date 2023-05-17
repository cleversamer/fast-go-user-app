import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PassengerHomeScreen1 from "../screens/passengerHome/PassengerHomeScreen1";
import PassengerHomeScreen2 from "../screens/passengerHome/PassengerHomeScreen2";
import PassengerHomeScreen3 from "../screens/passengerHome/PassengerHomeScreen3";
import ProfileScreen from "../screens/profile";
import NotificationsScreen from "../screens/notifications";
import SavedPlacesScreen from "../screens/savedPlaces";
import ReservedTripsScreen from "../screens/reservedTrips";
import AboutScreen from "../screens/about";
import WalletScreen from "../screens/wallet";
import EarnMoreScreen from "../screens/earnMore";
import ChallengesScreen from "../screens/challenges";

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
