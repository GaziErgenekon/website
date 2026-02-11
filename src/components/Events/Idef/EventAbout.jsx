
const EventAbout = () => {
  return (
    <section className="mb-24 flex flex-col md:flex-row gap-12 items-center">
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-primary border-l-4 border-primary pl-6">
          IDEF Nedir?
        </h2>
        <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
          <p className="text-lg leading-relaxed text-foreground/80">
            IDEF (Uluslararası Savunma Sanayii Fuarı), Türkiye'de düzenlenen ve
            dünyanın en büyük savunma sanayi fuarlarından biri olan prestijli
            bir organizasyondur. Türk Silahlı Kuvvetlerini Güçlendirme Vakfı
            yönetim ve sorumluluğunda gerçekleştirilen fuar; savunma, güvenlik,
            denizcilik, havacılık ve uzay sanayii alanlarında en son
            teknolojilerin sergilendiği küresel bir buluşma noktasıdır.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg border border-white/5 relative">
        <img
          src="/logolar/idef_logo.png"
          alt="IDEF Logo"
          className="w-full h-full object-contain p-8 bg-white"
        />
      </div>
    </section>
  );
};

export default EventAbout;
