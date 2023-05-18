import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "../components/drawer";
import PassengerHomeScreen1 from "../screens/passenger/HomeScreen1";
import useLocale from "../hooks/useLocale";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  const { lang } = useLocale();

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
      <Drawer.Screen name="Home" component={PassengerHomeScreen1} />
    </Drawer.Navigator>
  );
}
