import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "../screens/common/WelcomeScreen";

import LoginScreen1 from "../screens/auth/LoginScreen1";
import LoginScreen2 from "../screens/auth/LoginScreen2";
import LoginScreen3 from "../screens/auth/LoginScreen3";
import LoginScreen4 from "../screens/auth/LoginScreen4";

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
      <Stack.Screen name={screens.login1} component={LoginScreen1} />
      <Stack.Screen name={screens.login2} component={LoginScreen2} />
      <Stack.Screen name={screens.login3} component={LoginScreen3} />
      <Stack.Screen name={screens.login4} component={LoginScreen4} />
    </Stack.Navigator>
  );
}
