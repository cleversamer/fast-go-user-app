import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../screens/welcome";

import PassengerLoginScreen1 from "../screens/passengerLogin/PassengerLoginScreen1";
import PassengerLoginScreen2 from "../screens/passengerLogin/PassengerLoginScreen2";
import PassengerLoginScreen3 from "../screens/passengerLogin/PassengerLoginScreen3";
import PassengerLoginScreen4 from "../screens/passengerLogin/PassengerLoginScreen4";

import DriverLoginScreen1 from "../screens/driverLogin/DriverLoginScreen1";
import DriverLoginScreen2 from "../screens/driverLogin/DriverLoginScreen2";
import DriverLoginScreen3 from "../screens/driverLogin/DriverLoginScreen3";
import DriverLoginScreen4 from "../screens/driverLogin/DriverLoginScreen4";

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
