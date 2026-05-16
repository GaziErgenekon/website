import React from "react";
import Button from "../components/ui/Button";
import { FaHouse } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useDocumentMeta from "../hooks/useDocumentMeta";
import { useLanguage } from "../i18n/LanguageContext";

const Error = () => {
  const { t } = useLanguage();
  useDocumentMeta(t("meta.errorTitle"));

  return (
    <div className="container my-44 col-center text-center">
      <span className="text-7xl sm:text-9xl text-gradient-br from-foreground to-foreground/40 font-bold">
        404
      </span>
      <h6 className="text-4xl sm:text-6xl mb-4">
        {t("error.title")}
      </h6>
      <p className="text-lg sm:text-xl mb-5">{t("error.text")}</p>
      <Button asChild colorMode="secondary" variant="subtle" className="py-3 px-7">
        <Link to="/">
          <FaHouse /> {t("nav.home")}
        </Link>
      </Button>
    </div>
  );
};

export default Error;
