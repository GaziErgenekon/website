import { Link } from "react-router-dom";
import { news } from "../../constants";
import Button from "../ui/Button";
import { useLanguage } from "../../i18n/LanguageContext";

const News = () => {
  const { t, tx } = useLanguage();
  return (
    <section className="w-full py-16 bg-background text-foreground">
      <div id="news" className="container">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-2 sec-title text-gradient-br from-foreground to-foreground/20">
            {t("news.heading")}
          </h3>
          <p className="text-foreground/60 text-base font-light">
            {t("news.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {news.map((item) => (
            <article
              key={item.id}
              className="flex flex-col p-6 rounded-xl border border-secondary/10 bg-transparent hover:border-primary/40 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold tracking-wider bg-primary/20 text-primary px-3 py-1 rounded-full">
                  {tx(item.tag)}
                </span>
                <span className="text-sm text-foreground/50">
                  {tx(item.date)}
                </span>
              </div>

              <h4 className="text-xl font-bold mb-2">{tx(item.title)}</h4>

              <p className="text-foreground/70 text-sm leading-relaxed flex-1">
                {tx(item.summary)}
              </p>

              <div className="mt-5">
                {item.to ? (
                  <Button
                    asChild
                    variant="surface"
                    colorMode="primary"
                    size="sm"
                  >
                    <Link to={item.to}>{tx(item.cta)} →</Link>
                  </Button>
                ) : (
                  <Button
                    asChild
                    variant="surface"
                    colorMode="primary"
                    size="sm"
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {tx(item.cta)} ↗
                    </a>
                  </Button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
