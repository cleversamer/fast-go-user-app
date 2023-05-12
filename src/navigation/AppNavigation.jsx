import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen1 from "../screens/home/HomeScreen1";
import HomeScreen2 from "../screens/home/HomeScreen2";
import HomeScreen3 from "../screens/home/HomeScreen3";

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#fff" },
  contentStyle: { backgroundColor: "#fff" },
  headerTitleStyle: { color: "#fff" },
  headerTintColor: "#fff",
  headerShown: false,
};

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen name="HomeScreen1" component={HomeScreen1} />
      <Stack.Screen name="HomeScreen2" component={HomeScreen2} />
      <Stack.Screen name="HomeScreen3" component={HomeScreen3} />
    </Stack.Navigator>
  );
}
