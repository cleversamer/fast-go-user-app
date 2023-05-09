import { useState, useEffect } from "react";

const useTimer = (timeInSeconds) => {
  const [seconds, setSeconds] = useState(timeInSeconds);

  useEffect(() => {
    if (!seconds) return;

    const interval = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  const resetTimer = () => {
    setSeconds(parseInt(timeInSeconds));
  };

  return {
    remainingSeconds: seconds,
    resetTimer,
    isTimerDone: seconds === 0,
  };
};

export default useTimer;
