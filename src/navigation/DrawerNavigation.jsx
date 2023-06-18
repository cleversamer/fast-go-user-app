import { createDrawerNavigator } from "@react-navigation/drawer";
import useLocale from "../hooks/useLocale";
import useAuth from "../auth/useAuth";

import AdminHomeSceen from "../screens/admin/HomeScreen";
import PassengerHomeScreen1 from "../screens/passenger/HomeScreen1";
import DriverHomeScreen from "../screens/driver/HomeSceen";

import DrawerContent from "../components/drawer";
import screens from "../static/screens.json";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  const { lang } = useLocale();
  const { user, displayMode } = useAuth();

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

  const checkIfPassenger = () => {
    try {
      return user && (user.role === "passenger" || displayMode === "passenger");
    } catch (err) {
      return true;
    }
  };

  const checkIfDriver = () => {
    try {
      return user && user.role === "driver" && displayMode === "driver";
    } catch (err) {
      return false;
    }
  };

  const checkIfAdmin = () => {
    try {
      return user && user.role === "admin";
    } catch (err) {
      return false;
    }
  };

  return (
    <Drawer.Navigator
      drawerContent={DrawerContent}
      screenOptions={globalScreenOptions}
    >
      {checkIfPassenger() && (
        <Drawer.Screen
          name={screens.passengerHome1}
          component={PassengerHomeScreen1}
        />
      )}

      {checkIfDriver() && (
        <Drawer.Screen name={screens.driverHome} component={DriverHomeScreen} />
      )}

      {checkIfAdmin() && (
        <Drawer.Screen name={screens.adminHome} component={AdminHomeSceen} />
      )}
    </Drawer.Navigator>
  );
}
