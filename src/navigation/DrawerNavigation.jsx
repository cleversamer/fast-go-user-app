import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "../components/drawerContent";
import HomeScreen1 from "../screens/home/HomeScreen1";

const Drawer = createDrawerNavigator();

const globalScreenOptions = {
  headerShown: false,
  drawerPosition: "right",
  lazy: true,
  drawerContentContainerStyle: {
    alignItems: "flex-end",
    gap: 10,
    padding: 10,
  },
};

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={DrawerContent}
      screenOptions={globalScreenOptions}
    >
      <Drawer.Screen name="Home" component={HomeScreen1} />
    </Drawer.Navigator>
  );
}
