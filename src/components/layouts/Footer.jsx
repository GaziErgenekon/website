import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageContext";
import { asset } from "../../libs/utils";

const Footer = () => {
  const { t } = useLanguage();

  const links = [
    { key: "nav.about", href: "/#about-us" },
    { key: "nav.projects", href: "/#projects" },
    { key: "nav.achievements", href: "/#achievements" },
    { key: "nav.news", href: "/#news" },
    { key: "nav.team", href: "/ekibimiz" },
    { key: "nav.contact", href: "/#contact" },
    { key: "nav.join", href: "/bize-katil" },
  ];

  return (
    <footer className="mt-12 mb-6">
      <div className="container">
        <div className=" flex flex-col sm:flex-row sm:justify-between ">
          <div className="sm:w-[40%] lg:w-[45%]">
            <div className="row-center gap-4 font-mono text-2xl font-semibold">
              <a href="https://gazisiber.org/" target="_blank">
                <img
                  src={asset("/logo-removebg-preview.png")}
                  alt="Logo"
                  className="h-16"
                />
              </a>
              <Link to="/">
                <img src={asset("/Ergenekon.png")} alt="Logo" className="h-16" />
              </Link>
            </div>
            <p className="mt-6 text-sm lg:text-base">
              {t("footer.desc")}
            </p>
          </div>

          <div className="flex flex-1 max-sm:mt-7">
            <div className="inline-flex flex-col sm:mx-auto xl:ms-auto xl:me-12">
              <h6 className="font-semibold text-lg">
                {t("footer.quickLinks")}
              </h6>
              <ul className="col-start gap-3 mt-2">
                {links.map((link) => (
                  <li key={link.key}>
                    <Link
                      to={link.href}
                      className="hover:text-primary transition-colors"
                    >
                      {t(link.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-1 flex max-sm:mt-7">
            <div className="inline-flex flex-col sm:ms-auto">
              <h6 className="font-semibold text-lg mb-3">
                {t("footer.address")}
              </h6>
              <div className="italic">
                Emniyet, Milas Sk. No:30, 06560 Yenimahalle/Ankara
              </div>

              <h6 className="font-semibold text-lg mt-3">
                {t("footer.contact")}
              </h6>
              <div className="row-center gap-3 my-4">
                <div className="rounded-full inset-shadow-sm p-3 inset-shadow-primary/40 border border-primary/40">
                  <a
                    href="https://www.instagram.com/team.ergenekon/"
                    target="_blank"
                  >
                    <FaInstagram size={20} />
                  </a>
                </div>
                <div className="rounded-full inset-shadow-sm p-3 inset-shadow-primary/40 border border-primary/40">
                  <a
                    href="https://www.linkedin.com/company/team-ergenekon/posts"
                    target="_blank"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center italic border-t pt-6">
          {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
