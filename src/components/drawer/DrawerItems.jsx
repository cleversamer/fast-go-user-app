import useAuth from "../../auth/useAuth";
import PassengerDrawerItems from "./PassengerDrawerItems";
import DriverDrawerItems from "./DriverDrawerItems";
import AdminDrawerItems from "./AdminDrawerItems";

export default function DrawerItems() {
  const { user } = useAuth();

  return (
    <>
      {user.role === "passenger" && <PassengerDrawerItems />}
      {user.role === "driver" && <DriverDrawerItems />}
      {user.role === "admin" && <AdminDrawerItems />}
    </>
  );
}
