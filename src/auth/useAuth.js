import { useContext } from "react";
import AuthContext from "./context";

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const login = () => {
    try {
      setUser({ role: "passenger" });
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

  return { user, login, logout };
};

export default useAuth;
