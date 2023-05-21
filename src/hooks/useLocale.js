import { useContext } from "react";
import AuthContext from "../auth/context";
import locale from "../static/locale.json";

const useLocale = () => {
  const { lang, setLang } = useContext(AuthContext);

  const i18n = (key) => {
    try {
      return locale[key][lang];
    } catch (err) {
      return "ERROR";
    }
  };

  const switchLang = () => {
    try {
      const newLang = lang === "ar" ? "en" : "ar";
      setLang(newLang);
    } catch (err) {}
  };

  return { i18n, switchLang, lang };
};

export default useLocale;
