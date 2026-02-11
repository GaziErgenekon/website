import React from "react";

const EventExplainArea = () => {
  return (
    <section className="mb-24 bg-radial-[at_50%_0%] from-secondary/5 to-transparent from-7%    p-8 md:p-12 rounded-3xl border border-white/10">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-block bg-primary/20 text-primary px-6 py-2 rounded-full text-sm font-bold tracking-wider mb-4">
          SAVUNMANIN GELECEĞİ
        </div>
        <h2 className="text-3xl md:text-5xl font-bold">
          DOT: Defenders of Tomorrow
        </h2>
        <p className="text-xl text-foreground/70 leading-relaxed">
          IDEF'25 kapsamında standımızı açtığımız{" "}
          <strong>Defenders of Tomorrow (DOT)</strong> alanı, savunma sanayiinin
          geleceğini şekillendirecek genç yeteneklere ve inovatif girişimlere
          ayrılmış özel bir bölümdür. Geleceğin savunucuları olarak, burada
          projelerimizi sektör liderlerine, askeri heyetlere ve uluslararası
          yatırımcılara tanıtma fırsatı bulduk.
        </p>
      </div>
    </section>
  );
};

export default EventExplainArea;
