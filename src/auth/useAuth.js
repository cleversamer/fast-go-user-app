import { useContext } from "react";
import AuthContext from "./context";
import storage from "./storage";

const useAuth = () => {
  const { user, setUser, isOnline, displayMode, setDisplayMode, socket } =
    useContext(AuthContext);

  const login = async (user, token) => {
    try {
      setUser(user);
      setDisplayMode(user.role);
      await storage.storeToken(token);
    } catch (err) {}
  };

  const logout = async () => {
    try {
      setUser(null);
      await storage.removeToken();
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
    setUser,
    login,
    logout,
    isOnline,
    displayMode,
    switchToPassenger,
    returnToDriver,
    socket,
  };
};

export default useAuth;
