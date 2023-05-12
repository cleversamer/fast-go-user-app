import { useState, useEffect } from "react";
import parseDate from "../utils/parseDate";

const useDateTimer = (date, dependencyArray = []) => {
  const [value, setValue] = useState(parseDate(date));

  useEffect(() => {
    if (!date) return;

    const intervalId = setInterval(() => {
      setValue(parseDate(date));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };

    // eslint-disable-next-line
  }, [date, ...dependencyArray]);

  return { value };
};

export default useDateTimer;
