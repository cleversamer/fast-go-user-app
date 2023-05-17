import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen1 from "../screens/home/HomeScreen1";
import HomeScreen2 from "../screens/home/HomeScreen2";
import HomeScreen3 from "../screens/home/HomeScreen3";
import ProfileScreen from "../screens/profile";
import NotificationsScreen from "../screens/notifications";
import SavedPlacesScreen from "../screens/savedPlaces";
import ReservedTripsScreen from "../screens/reservedTrips";
import AboutScreen from "../screens/about";
import WalletScreen from "../screens/wallet";
import EarnMoreScreen from "../screens/earnMore";
import ChallengesScreen from "../screens/challenges";

import DrawerNavigation from "./DrawerNavigation";

const globalScreenOptions = {
  contentStyle: { backgroundColor: "#fff" },
  headerShown: false,
};

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen name="Drawer" component={DrawerNavigation} />
      <Stack.Screen name="HomeScreen1" component={HomeScreen1} />
      <Stack.Screen name="HomeScreen2" component={HomeScreen2} />
      <Stack.Screen name="HomeScreen3" component={HomeScreen3} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
      />
      <Stack.Screen name="SavedPlacesScreen" component={SavedPlacesScreen} />
      <Stack.Screen
        name="ReservedTripsScreen"
        component={ReservedTripsScreen}
      />
      <Stack.Screen name="AboutScreen" component={AboutScreen} />
      <Stack.Screen name="WalletScreen" component={WalletScreen} />
      <Stack.Screen name="EarnMoreScreen" component={EarnMoreScreen} />
      <Stack.Screen name="ChallengesScreen" component={ChallengesScreen} />
    </Stack.Navigator>
  );
}
