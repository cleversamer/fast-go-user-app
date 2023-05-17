import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PassengerLoginScreen1 from "../screens/passengerLogin/PassengerLoginScreen1";
import PassengerLoginScreen2 from "../screens/passengerLogin/PassengerLoginScreen2";
import PassengerLoginScreen3 from "../screens/passengerLogin/PassengerLoginScreen3";
import PassengerLoginScreen4 from "../screens/passengerLogin/PassengerLoginScreen4";
import WelcomeScreen from "../screens/welcome";

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
    </Stack.Navigator>
  );
}
