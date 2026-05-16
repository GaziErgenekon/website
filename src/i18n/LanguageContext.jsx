import { createContext, useContext, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { translations } from "./translations";

const LanguageContext = createContext(null);

const getInitialLang = () => {
  if (typeof window === "undefined") return "tr";
  return localStorage.getItem("lang") === "en" ? "en" : "tr";
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(getInitialLang);

  const changeLang = useCallback((next) => {
    setLang(next);
    localStorage.setItem("lang", next);
    document.documentElement.lang = next;
  }, []);

  const toggleLang = useCallback(() => {
    changeLang(lang === "tr" ? "en" : "tr");
  }, [lang, changeLang]);

  // t("hero.title") -> string; bilinmeyen anahtarda anahtarı döndürür.
  const t = useCallback(
    (path) => {
      const value = path
        .split(".")
        .reduce((acc, key) => (acc ? acc[key] : undefined), translations[lang]);
      return value ?? path;
    },
    [lang]
  );

  // tx({ tr, en }) -> aktif dildeki değer. Düz string ise olduğu gibi döner
  // (çevrilmeyen özel adlar için güvenli).
  const tx = useCallback(
    (value) => {
      if (value && typeof value === "object" && !Array.isArray(value)) {
        return value[lang] ?? value.tr ?? value.en ?? "";
      }
      return value;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider
      value={{ lang, t, tx, toggleLang, changeLang }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage, LanguageProvider içinde kullanılmalıdır");
  }
  return ctx;
};
