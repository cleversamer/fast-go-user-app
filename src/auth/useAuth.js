import { useContext } from "react";
import AuthContext from "./context";

const useAuth = () => {
  const { user, setUser, isOnline, displayMode, setDisplayMode } =
    useContext(AuthContext);

  const login = () => {
    try {
      const user = { role: "driver" };
      setUser(user);
      setDisplayMode(user.role);
    } catch (err) {}
  };

  const logout = () => {
    try {
      setUser(null);
    } catch (err) {}
  };

  const switchToPassenger = () => {
    try {
      if (user?.role === "driver") {
        setDisplayMode("passenger");
      }
    } catch (err) {}
  };

  const returnToDriver = () => {
    try {
      if (user?.role === "driver") {
        setDisplayMode("driver");
      }
    } catch (err) {}
  };

  return {
    user,
    login,
    logout,
    isOnline,
    displayMode,
    switchToPassenger,
    returnToDriver,
  };
};

export default useAuth;
