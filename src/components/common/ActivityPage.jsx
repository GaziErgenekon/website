import PropTypes from "prop-types";
import GalleryTemplate from "./GalleryTemplate";
import Button from "../ui/Button";
import useDocumentMeta from "../../hooks/useDocumentMeta";
import { useLanguage } from "../../i18n/LanguageContext";

const COLOR_VARIANTS = {
  primary: "inset-shadow-primary/30 border-primary/10 from-primary/20",
  secondary: "inset-shadow-secondary/30 border-secondary/10 from-secondary/20",
  third: "inset-shadow-third/30 border-third/10 from-third/20",
  success: "inset-shadow-success/30 border-success/10 from-success/20",
};

// "**vurgu**" -> <strong>vurgu</strong>
const renderRich = (text) =>
  String(text)
    .split(/\*\*(.+?)\*\*/g)
    .map((part, i) =>
      i % 2 === 1 ? <strong key={i}>{part}</strong> : part
    );

const ActivityPage = ({ activity }) => {
  const { tx } = useLanguage();
  useDocumentMeta(tx(activity.pageTitle), tx(activity.metaDescription));

  return (
    <div className="container mt-40">
      {/* Sayfa Başlığı */}
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl md:text-6xl font-bold pb-4 sec-title text-gradient-br from-foreground to-foreground/20">
          {tx(activity.pageTitle)}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        <p className="text-xl text-foreground/60 max-w-3xl mx-auto font-light leading-relaxed">
          {tx(activity.pageSubtitle)}
        </p>
      </div>

      {/* Hero */}
      <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-24 shadow-2xl border border-white/5 group">
        <img
          src={activity.heroImage}
          alt={tx(activity.heroTitle)}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {tx(activity.heroTitle)}
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl">
            {tx(activity.heroDesc)}
          </p>
        </div>
      </div>

      {/* Hakkında */}
      <section className="mb-24 flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary border-l-4 border-primary pl-6">
            {tx(activity.aboutTitle)}
          </h2>
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
            <p className="text-lg leading-relaxed text-foreground/80">
              {tx(activity.aboutText)}
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg border border-white/5 relative">
          <img
            src={activity.aboutLogo}
            alt={tx(activity.aboutTitle)}
            loading="lazy"
            decoding="async"
            className={`w-full h-full object-contain ${activity.aboutLogoClass || "p-8 bg-white"}`}
          />
        </div>
      </section>

      {/* Vurgu Alanı */}
      <section className="mb-24 bg-radial-[at_50%_0%] from-secondary/5 to-transparent from-7% p-8 md:p-12 rounded-3xl border border-white/10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block bg-primary/20 text-primary px-6 py-2 rounded-full text-sm font-bold tracking-wider mb-4">
            {tx(activity.badge)}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            {tx(activity.projectTitle)}
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed">
            {renderRich(tx(activity.projectText))}
          </p>
        </div>
      </section>

      {/* İstatistikler */}
      {activity.stats && (
        <section className="mb-24">
          <div className="grid xls:grid-cols-2 lg:grid-cols-4 gap-4">
            {activity.stats.map((stat) => (
              <div
                key={stat.title}
                className={`col-center gap-2 inset-shadow-sm p-6 rounded-lg border ${COLOR_VARIANTS[stat.color]} bg-radial-[at_50%_75%] to-100%`}
              >
                <div className="font-semibold text-3xl xl:text-4xl text-gradient-br from-foreground to-foreground/20">
                  {stat.title}
                </div>
                <p className="text-lg font-semibold text-center">
                  {tx(stat.value)}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Sunum Videosu */}
      {activity.video && (
        <section className="mb-24">
          <h2 className="sec-title text-gradient-br from-foreground to-foreground/20 text-4xl font-bold text-center mb-12">
            {tx(activity.video.heading)}
          </h2>
          <div className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black aspect-video relative group">
            <iframe
              width="100%"
              height="100%"
              src={activity.video.embed}
              title={tx(activity.video.title)}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </section>
      )}

      {/* Resmi Profil Kartı */}
      {activity.profileCard && (
        <section className="mb-24">
          <h2 className="sec-title text-gradient-br from-foreground to-foreground/20 text-4xl font-bold text-center mb-4">
            {tx(activity.profileCard.heading)}
          </h2>
          <p className="text-center text-foreground/60 mb-8">
            {tx(activity.profileCard.subheading)}
          </p>

          <a
            href={activity.profileCard.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-[400px] border border-white/10 rounded-2xl overflow-hidden shadow-xl group relative transform hover:-translate-y-1 transition-all duration-300"
          >
            <div
              className="absolute inset-0 bg-cover bg-center blur-sm opacity-50 group-hover:opacity-40 transition-opacity duration-500"
              style={{ backgroundImage: `url('${activity.profileCard.bgImage}')` }}
            />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-500"></div>

            <div className="relative z-10 col-center h-full text-center space-y-6 p-8">
              <div className="w-24 h-24 bg-white/10 rounded-full flex-center backdrop-blur-md border border-white/20 mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <img
                  src={activity.profileCard.logo}
                  alt={tx(activity.profileCard.title)}
                  className="w-16 h-16 object-contain"
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                  {tx(activity.profileCard.title)}
                </h3>
                <p className="text-gray-300 max-w-lg mx-auto text-lg">
                  {tx(activity.profileCard.desc)}
                </p>
              </div>

              <Button
                asChild
                size="lg"
                variant="default"
                colorMode="primary"
                className="px-8 py-3 rounded-full font-bold shadow-lg shadow-primary/20 mt-4"
              >
                <span>{tx(activity.profileCard.button)}</span>
              </Button>
            </div>
          </a>
        </section>
      )}

      {/* Basında Biz */}
      {activity.sources && (
        <section className="mb-24">
          <h2 className="sec-title text-gradient-br from-foreground to-foreground/20 text-4xl font-bold text-center mb-4">
            {tx(activity.sourcesTitle)}
          </h2>
          <p className="text-center text-foreground/60 mb-8">
            {tx(activity.sourcesSubtitle)}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activity.sources.map((source) => (
              <a
                key={source.url}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="col-center text-center gap-5 p-8 border border-white/10 rounded-2xl bg-white/5 hover:border-primary/40 transform hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-24 h-24 bg-white rounded-full flex-center border border-white/20 shadow-lg group-hover:scale-110 transition-transform duration-300 p-3">
                  <img
                    src={source.logo}
                    alt={tx(source.title)}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {tx(source.title)}
                  </h3>
                  <p className="text-gray-300 max-w-md mx-auto">
                    {tx(source.desc)}
                  </p>
                </div>
                <Button
                  asChild
                  size="lg"
                  variant="default"
                  colorMode="primary"
                  className="px-8 py-3 rounded-full font-bold shadow-lg shadow-primary/20 mt-2"
                >
                  <span>{tx(source.label)} ↗</span>
                </Button>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Galeri */}
      <section className="mb-20">
        <GalleryTemplate
          imagesArr={activity.galleryImages}
          headerTitle={tx(activity.galleryTitle)}
        />
      </section>
    </div>
  );
};

ActivityPage.propTypes = {
  activity: PropTypes.object.isRequired,
};

export default ActivityPage;
