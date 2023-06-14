import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useAuth from "../auth/useAuth";

import AddCarScreen from "../screens/driver/AddCarScreen";
import AddLegalDocumentsScreen from "../screens/driver/AddLegalDocumentsScreen";
import PendingRequestScreen from "../screens/driver/PendingRequestScreen";
import DriverHomeSceen from "../screens/driver/HomeSceen";
import NewRequestScreen from "../screens/driver/NewRequestScreen";
import TripsHistory from "../screens/driver/TripsHistory";

import VerifyPhoneScreen from "../screens/common/VerifyPhoneScreen";
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
  const { user } = useAuth();

  const isFullyVerified = () => {
    return (
      user.role === "driver" && user.verified.phone && user.verified.driver
    );
  };

  const isDriverVerified = () => {
    return user.role === "driver" && user.verified.driver;
  };

  const isPhoneVerified = () => {
    return user.role === "driver" && user.verified.phone;
  };

  const hadAddedCar = () => {
    return !!user.carId;
  };

  return (
    <Stack.Navigator screenOptions={globalScreenOptions}>
      {isFullyVerified() && (
        <Stack.Screen name={screens.drawer} component={DrawerNavigation} />
      )}

      {!isPhoneVerified() && (
        <Stack.Screen
          name={screens.verifyPhone}
          component={VerifyPhoneScreen}
        />
      )}

      {!isDriverVerified() && !hadAddedCar() && (
        <Stack.Screen name={screens.addCar} component={AddCarScreen} />
      )}

      {!isDriverVerified() && !hadAddedCar() && (
        <Stack.Screen
          name={screens.addLegalDocuments}
          component={AddLegalDocumentsScreen}
        />
      )}

      {!isDriverVerified() && (
        <Stack.Screen
          name={screens.pendingRequest}
          component={PendingRequestScreen}
        />
      )}

      {isFullyVerified() && (
        <Stack.Screen name={screens.driverHome} component={DriverHomeSceen} />
      )}

      {isFullyVerified() && (
        <Stack.Screen name={screens.profile} component={ProfileScreen} />
      )}

      {isFullyVerified() && (
        <Stack.Screen
          name={screens.notifications}
          component={NotificationsScreen}
        />
      )}

      {isFullyVerified() && (
        <Stack.Screen name={screens.about} component={AboutScreen} />
      )}

      {isFullyVerified() && (
        <Stack.Screen name={screens.wallet} component={WalletScreen} />
      )}

      {isFullyVerified() && (
        <Stack.Screen name={screens.earnMore} component={EarnMoreScreen} />
      )}

      {isFullyVerified() && (
        <Stack.Screen name={screens.newRequest} component={NewRequestScreen} />
      )}

      {isFullyVerified() && (
        <Stack.Screen name={screens.tripsHistory} component={TripsHistory} />
      )}
    </Stack.Navigator>
  );
}
