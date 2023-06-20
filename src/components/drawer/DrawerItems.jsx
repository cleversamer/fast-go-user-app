import useAuth from "../../auth/useAuth";
import PassengerDrawerItems from "./PassengerDrawerItems";
import DriverDrawerItems from "./DriverDrawerItems";
import AdminDrawerItems from "./AdminDrawerItems";

export default function DrawerItems({ navigation }) {
  const { user } = useAuth();

  return (
    <>
      {user.role === "passenger" && (
        <PassengerDrawerItems navigation={navigation} />
      )}
      {user.role === "driver" && <DriverDrawerItems navigation={navigation} />}
      {user.role === "admin" && <AdminDrawerItems navigation={navigation} />}
    </>
  );
}
