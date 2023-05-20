import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "../components/drawer";
import PassengerHomeScreen1 from "../screens/passenger/HomeScreen1";
import DriverHomeScreen from "../screens/driver/HomeSceen";
import useLocale from "../hooks/useLocale";
import useAuth from "../auth/useAuth";

import screens from "../static/screens.json";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  const { lang } = useLocale();
  const { user } = useAuth();

  const globalScreenOptions = {
    headerShown: false,
    drawerPosition: lang === "ar" ? "right" : "left",
    lazy: true,
    drawerContentContainerStyle: {
      alignItems: "flex-end",
      gap: 10,
      padding: 10,
    },
  };

  return (
    <Drawer.Navigator
      drawerContent={DrawerContent}
      screenOptions={globalScreenOptions}
    >
      {user && user.role === "passenger" && (
        <Drawer.Screen
          name={screens.passengerHome1}
          component={PassengerHomeScreen1}
        />
      )}

      {user && user.role === "driver" && (
        <Drawer.Screen name={screens.driverHome} component={DriverHomeScreen} />
      )}
    </Drawer.Navigator>
  );
}
