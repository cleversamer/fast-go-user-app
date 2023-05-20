import { useContext } from "react";
import AuthContext from "./context";

const useAuth = () => {
  const { user, setUser, isOnline, displayMode, setDisplayMode } =
    useContext(AuthContext);

  const login = () => {
    try {
      setUser({ role: "driver" });
      setDisplayMode("driver");
    } catch (err) {
      throw err;
    }
  };

  const logout = () => {
    try {
      setUser(false);
    } catch (err) {
      throw err;
    }
  };

  const switchToPassenger = () => {
    setDisplayMode("passenger");
  };

  const returnToDriver = () => {
    setDisplayMode("driver");
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
