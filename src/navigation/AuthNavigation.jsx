import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../screens/common/WelcomeScreen";

import PassengerLoginScreen1 from "../screens/passenger/LoginScreen1";
import PassengerLoginScreen2 from "../screens/passenger/LoginScreen2";
import PassengerLoginScreen3 from "../screens/passenger/LoginScreen3";
import PassengerLoginScreen4 from "../screens/passenger/LoginScreen4";

import DriverLoginScreen1 from "../screens/driver/LoginScreen1";
import DriverLoginScreen2 from "../screens/driver/LoginScreen2";
import DriverLoginScreen3 from "../screens/driver/LoginScreen3";
import DriverLoginScreen4 from "../screens/driver/LoginScreen4";

import screens from "../static/screens.json";

const globalScreenOptions = {
  contentStyle: { backgroundColor: "#fff" },
  headerShown: false,
};

const Stack = createNativeStackNavigator();

export default function AuthNavigation() {
  return (
    <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen name={screens.welcome} component={WelcomeScreen} />

      <Stack.Screen
        name={screens.passengerLogin1}
        component={PassengerLoginScreen1}
      />

      <Stack.Screen
        name={screens.passengerLogin2}
        component={PassengerLoginScreen2}
      />

      <Stack.Screen
        name={screens.passengerLogin3}
        component={PassengerLoginScreen3}
      />

      <Stack.Screen
        name={screens.passengerLogin4}
        component={PassengerLoginScreen4}
      />

      <Stack.Screen
        name={screens.driverLogin1}
        component={DriverLoginScreen1}
      />

      <Stack.Screen
        name={screens.driverLogin2}
        component={DriverLoginScreen2}
      />

      <Stack.Screen
        name={screens.driverLogin3}
        component={DriverLoginScreen3}
      />

      <Stack.Screen
        name={screens.driverLogin4}
        component={DriverLoginScreen4}
      />
    </Stack.Navigator>
  );
}
