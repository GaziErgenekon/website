import React, { useEffect, useRef, useState } from "react";
import useDocumentMeta from "../hooks/useDocumentMeta";
import Loading from "../components/ui/Loading";
import { useLanguage } from "../i18n/LanguageContext";

const FORM_URL = "https://form.gazisiber.org/forms/alim-formu";

const BizeKatil = () => {
  const { t } = useLanguage();
  useDocumentMeta(t("meta.joinTitle"), t("meta.joinDesc"));

  const iframeRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleMessage = (event) => {
      if (
        iframeRef.current &&
        event.data &&
        typeof event.data.height === "number" &&
        event.data.height > 0
      ) {
        iframeRef.current.style.height = `${event.data.height}px`;
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="container mt-40 pb-20">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-6xl font-bold pb-4 sec-title text-gradient-br from-foreground to-foreground/20">
          {t("join.heading")}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        <p className="text-xl text-foreground/60 max-w-3xl mx-auto font-light leading-relaxed">
          {t("join.subtitle")}
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-2xl border border-secondary/15 bg-foreground/[0.02] overflow-hidden">
          {!loaded && (
            <div className="absolute inset-0 flex-center">
              <Loading />
            </div>
          )}

          <iframe
            ref={iframeRef}
            title={t("join.iframeTitle")}
            onLoad={() => setLoaded(true)}
            loading="lazy"
            className="w-full border-0 block"
            style={{ minHeight: "85vh" }}
            id="alim-formu"
            src={FORM_URL}
          ></iframe>
        </div>

        <p className="text-center text-sm text-foreground/50 mt-6">
          {t("join.fallbackPre")}{" "}
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            {t("join.fallbackLink")}
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default BizeKatil;
