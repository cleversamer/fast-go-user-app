import { useEffect, useState } from "react";
import * as Localization from "expo-localization";

export default function useSystemLanguage() {
  const [systemLanguage, setSystemLanguage] = useState("ar");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getSystemLanguage() {
      const locales = Localization.getLocales();
      let lang = locales[0].languageCode;

      if (!["en", "ar"].includes(lang)) {
        setSystemLanguage("ar");
      } else if (systemLanguage !== lang) {
        setSystemLanguage(lang);
      }

      setLoading(false);
    }

    getSystemLanguage();
  }, []);

  return { systemLanguage, loading };
}
