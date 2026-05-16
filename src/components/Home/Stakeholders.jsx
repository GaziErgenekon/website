import React from 'react';
import { stakeholders } from '../../constants';
import { useLanguage } from '../../i18n/LanguageContext';

const Stakeholders = () => {
    const { t } = useLanguage();
    return (
        <section className="w-full py-20 bg-background text-foreground">
            <div className="container px-4 mx-auto">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 sec-title">
                        <span className="text-gradient-b from-foreground to-foreground/70">{t("stakeholders.heading")}</span>
                    </h2>
                    <p className="text-foreground/60 text-lg font-light">
                        {t("stakeholders.subtitle")}
                    </p>
                </div>

                <div className="flex flex-wrap gap-12 items-center justify-center">
                    {stakeholders.map((item, index) => (
                        <div
                            key={index}
                            className="group col-center justify-center text-center"
                        >
                            <div className="h-20 w-full flex-center mb-4 transition-transform duration-300 group-hover:scale-110">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    loading="lazy"
                                    decoding="async"
                                    className="max-h-full max-w-full object-contain transition-all duration-500"
                                />
                            </div>

                            <span className="text-sm font-medium text-foreground/60 group-hover:text-foreground/90 transition-colors">
                                {item.name}
                            </span>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Stakeholders;
