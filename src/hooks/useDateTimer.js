import { useState, useEffect } from "react";
import parseDate from "../utils/parseDate";

const useDateTimer = (date, lang = "ar", dependencyArray = []) => {
  const [value, setValue] = useState(parseDate(date, lang));

  useEffect(() => {
    try {
      if (!date) return;

      const intervalId = setInterval(() => {
        setValue(parseDate(date, lang));
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    } catch (err) {}

    // eslint-disable-next-line
  }, [date, ...dependencyArray]);

  return { value };
};

export default useDateTimer;
