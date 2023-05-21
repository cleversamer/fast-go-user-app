import { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";

const useNetworkStatus = () => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    try {
      const unsubscribe = NetInfo.addEventListener((state) => {
        setIsConnected(state.isConnected);
      });

      return () => {
        unsubscribe();
      };
    } catch (err) {}
  }, []);

  return isConnected;
};

export default useNetworkStatus;
