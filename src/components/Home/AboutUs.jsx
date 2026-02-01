import { highlights } from "../../constants";

const AboutUs = () => {
  return (
    <section>
      <div id="about-us" className="container my-16">
        <h3 className="sec-title text-4xl text-gradient-br from-foreground to-foreground/20 font-semibold">
          Hakkımızda
        </h3>
        <div className="col-center sm:!flex-row sm:justify-center gap-12 md:gap-24 my-24 ">
          <img src="/Ergenekon.png" className="h-24 object-cover" alt="" />
          <div className="w-full sm:w-[500px]">
            <h6 className="text-3xl font-semibold mb-2 row-center gap-4">
              <img
                src="/hawk.png"
                className="size-12 object-contain inset-shadow-sm inset-shadow-secondary/20 border border-secondary/5 bg-radial-[at_50%_75%] from-secondary/10 to-100% rounded-full p-1.5"
                alt=""
              />
              Biz Kimiz?
            </h6>
            <p>
              Modern dünyanın dijital tehditlerine boyun eğmeyecek, donanımlı
              bireyler yetiştirmeyi amaç edinmiş Gazi Üniversitesi Siber
              Güvenlik Araştırma ve Geliştirme Topluluğu’na bağlı, rekabetçi
              ruhumuz ve azimli çalışmamız ile başarıdan başarıya koşmayı
              hedefleyen bir takımız.
            </p>
          </div>
        </div>
      </div>

      <div className="inset-shadow-sm inset-shadow-secondary/10 py-6 border border-secondary/5 bg-radial-[at_90%_95%] from-secondary/10 to-100%">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-16 xl:gap-24">
            <div className="flex-1 lg:flex-1/3 xl:flex-1">
              <h6 className="text-3xl font-semibold row-center gap-3">
                <span className="text-gradient-br from-primary/80 to-primary/40 italic">
                  {"<"}
                </span>
                Neler Yapıyoruz
                <span className="text-gradient-br from-primary/80 to-primary/40 italic">
                  {"/>"}
                </span>
              </h6>
              <p className="mt-4">
                Gazi Üniversitesi Siber Güvenlik Araştırma ve Geliştirme
                Topluluğu'na bağlı olarak, sadece yarışmıyor; geleceğin
                teknolojilerini bugünden tasarlıyoruz. Mühendislik
                disiplinlerini bir araya getirerek projeler geliştiriyoruz.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 ">
                {highlights.map((item, i) => (
                  <div
                    key={"highlight-features-" + i}
                    className="flex gap-3 p-4 bg-gradient-to-br from-background/60 to-secondary/10 rounded-lg border border-gray-800 hover:border-primary transition-colors"
                  >
                    <div className="size-8 flex-center mt-1 inset-shadow-sm inset-shadow-third/10 p-2 rounded border border-third/5 bg-radial-[at_90%_95%] from-third/10 to-100%">
                      <item.icon className="text-5xl " />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:flex-2 xl:flex-1 h-96">
              <img
                src="/galeri/sergi.JPG"
                alt="Neler Yapıyoruz"
                className="w-full h-full object-cover rounded-lg shadow-lg border border-secondary/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
