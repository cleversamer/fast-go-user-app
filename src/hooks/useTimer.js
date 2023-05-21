import { useState, useEffect } from "react";

const useTimer = (timeInSeconds) => {
  const [seconds, setSeconds] = useState(timeInSeconds);

  useEffect(() => {
    try {
      if (!seconds) return;

      const interval = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    } catch (err) {}
  }, [seconds]);

  const resetTimer = () => {
    try {
      setSeconds(parseInt(timeInSeconds));
    } catch (err) {}
  };

  return {
    remainingSeconds: seconds,
    resetTimer,
    isTimerDone: seconds === 0,
  };
};

export default useTimer;
