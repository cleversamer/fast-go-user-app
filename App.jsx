import "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { StatusBar, Dimensions, I18nManager } from "react-native";
import useFonts from "./src/hooks/useFonts";
import useNetworkStatus from "./src/hooks/useNetworkStatus";
import useLocation from "./src/hooks/useLocation";
import * as usersApi from "./src/api/user/users";
import socket from "./src/socket/client";
import authStorage from "./src/auth/storage";

import {
  lockAsync,
  OrientationLock,
  unlockAsync,
} from "expo-screen-orientation";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./src/navigation/AuthNavigation";
import PassengerNavigation from "./src/navigation/PassengerNavigation";
import DriverNavigation from "./src/navigation/DriverNavigation";
import AdminNavigation from "./src/navigation/AdminNavigation";

import AuthContext from "./src/auth/context";

import Onboarding from "./src/screens/common/Onboarding";
import PopupError from "./src/components/popups/PopupError";

// Set text direction to LTR
I18nManager.forceRTL(false);
I18nManager.allowRTL(false);
I18nManager.doLeftAndRightSwapInRTL = false;

export default function App() {
  // Hooks
  const { fontLoaded } = useFonts();
  useLocation();
  const isOnline = useNetworkStatus();

  // States
  const [lang, setLang] = useState("ar");
  const [showHomeScreen, setShowHomeScreen] = useState(false);
  const [user, setUser] = useState(null);
  const [isUserLoading, setIsUserLoading] = useState(true);
  const [displayMode, setDisplayMode] = useState("driver");
  const [popupAccountDeleted, setPopupAccountDeleted] = useState({
    visible: false,
    message: "",
    onClose: () => {},
  });
  const [screenDimensions, setScreenDimensions] = useState(
    Dimensions.get("screen")
  );

  useEffect(() => {
    usersApi
      .authenticate()
      .then((res) => {
        const user = res.data;
        setUser(user);
        setLang(user.display.language);
        if (user.role !== "admin") {
          setDisplayMode(user.role);
        }
      })
      .catch(() => {})
      .finally(() => setIsUserLoading(false));
  }, []);

  useEffect(() => {
    if (!user) return;

    socket.on("connect", () => {
      usersApi
        .joinSocket(socket.id)
        .then(() => {})
        .catch(() => {});
    });

    socket.on("notification received", (notification) => {
      try {
        setUser({
          ...user,
          notifications: {
            ...user.notifications,
            list: [notification, ...user.notifications.list],
          },
        });
      } catch (err) {}
    });

    socket.on("account deleted", async () => {
      try {
        setPopupAccountDeleted({
          message: "Your account has been deleted",
          onClose: handleDeleteAccount,
          visible: true,
        });
      } catch (err) {}
    });
  }, [user]);

  useEffect(() => {
    try {
      const subscription = Dimensions.addEventListener(
        "change",
        ({ screen }) => {
          setScreenDimensions(screen);
        }
      );

      return () => {
        subscription.remove();
      };
    } catch (err) {}
  }, []);

  useEffect(() => {
    try {
      const lockScreenOrientation = async () => {
        try {
          await lockAsync(OrientationLock.PORTRAIT);
        } catch (err) {}
      };

      lockScreenOrientation();

      return () => {
        try {
          // Unlock the screen orientation when the component is unmounted
          unlockAsync();
        } catch (err) {}
      };
    } catch (err) {}
  }, []);

  const handleDeleteAccount = async () => {
    try {
      setPopupAccountDeleted({ ...popupAccountDeleted, visible: false });
      setUser(null);
      await authStorage.removeToken();
    } catch (err) {}
  };

  const checkIfPassenger = () => {
    try {
      return user && (user.role === "passenger" || displayMode === "passenger");
    } catch (err) {
      return false;
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

  if (!fontLoaded || isUserLoading) {
    return null;
  }

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <AuthContext.Provider
        value={{
          user,
          setUser,
          lang,
          setLang,
          isOnline,
          displayMode,
          setDisplayMode,
          screenDimensions,
          socket,
        }}
      >
        <PopupError
          onClose={popupAccountDeleted.onClose}
          visible={popupAccountDeleted.visible}
          message={popupAccountDeleted.message}
        />

        {!showHomeScreen && (
          <Onboarding onDone={() => setShowHomeScreen(true)} />
        )}

        {showHomeScreen && (
          <NavigationContainer>
            {!user && <AuthNavigation />}
            {checkIfPassenger() && <PassengerNavigation />}
            {checkIfDriver() && <DriverNavigation />}
            {checkIfAdmin() && <AdminNavigation />}
          </NavigationContainer>
        )}
      </AuthContext.Provider>
    </>
  );
}
