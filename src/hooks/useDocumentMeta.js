import { useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";

const BRAND = "Ergenekon R&D Team";

const setMeta = (key, content, attr = "name") => {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const useDocumentMeta = (title, description) => {
  const { t } = useLanguage();

  useEffect(() => {
    const defaultTitle = `${BRAND} | ${t("hero.subtitle")}`;
    const fullTitle = title ? `${title} | ${BRAND}` : defaultTitle;
    const desc = description || t("hero.description");

    document.title = fullTitle;
    setMeta("description", desc);
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", desc, "property");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", desc);

    return () => {
      document.title = defaultTitle;
    };
  }, [title, description, t]);
};

export default useDocumentMeta;
