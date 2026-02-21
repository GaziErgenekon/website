import React, { useEffect, useRef } from "react";

const BizeKatil = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const handleMessage = (event) => {
      if (
        iframeRef.current &&
        event.data &&
        typeof event.data.height === "number"
      ) {
        iframeRef.current.style.height = event.data.height + "px";
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="container mt-40 pb-20">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-6xl font-bold pb-4 sec-title text-gradient-br from-foreground to-foreground/20">
          Bize Katıl
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        <p className="text-xl text-foreground/60 max-w-3xl mx-auto font-light leading-relaxed">
          Ekibimize katılmak için aşağıdaki formu doldurabilirsiniz.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <iframe
          ref={iframeRef}
          style={{ border: "none", width: "100%", minHeight: "110vh" }}
          id="alim-formu"
          src="https://form.gazisiber.org/forms/alim-formu"
        ></iframe>
      </div>
    </div>
  );
};

export default BizeKatil;
