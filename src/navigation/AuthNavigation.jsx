import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen1 from "../screens/login/LoginScreen1";
import LoginScreen2 from "../screens/login/LoginScreen2";
import LoginScreen3 from "../screens/login/LoginScreen3";
import LoginScreen4 from "../screens/login/LoginScreen4";
import WelcomeScreen from "../screens/welcome";

const globalScreenOptions = {
  contentStyle: { backgroundColor: "#fff" },
  headerShown: false,
};

const Stack = createNativeStackNavigator();

export default function AuthNavigation() {
  return (
    <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen name="LoginScreen1" component={LoginScreen1} />
      <Stack.Screen name="LoginScreen2" component={LoginScreen2} />
      <Stack.Screen name="LoginScreen3" component={LoginScreen3} />
      <Stack.Screen name="LoginScreen4" component={LoginScreen4} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    </Stack.Navigator>
  );
}
