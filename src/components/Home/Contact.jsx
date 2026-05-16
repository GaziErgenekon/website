import React from "react";
import { FaPaperPlane, FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa";
import Button from "../ui/Button";
import { teamContact } from "../../constants";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { getFormValue, isEmail } from "../../libs/utils";
import toast from "react-hot-toast";
import isEmpty from "lodash/isEmpty";
import { useLanguage } from "../../i18n/LanguageContext";

const Contact = () => {
  const [isLoading, setLoading] = useState(false);
  const { t, tx } = useLanguage();
  const onSubmit = async (e) => {
    e.preventDefault();

    const keys = ["name", "email", "message", "title"];

    const [name, email, description, title] = keys.map(
      (key) => getFormValue(key, e.target) || "",
    );

    if (
      isEmpty(name) ||
      isEmpty(email) ||
      isEmpty(description) ||
      isEmpty(title)
    ) {
      toast.error({
        title: t("contact.failTitle"),
        content: t("contact.fillAll"),
      });
      return;
    }
    if (!isEmail(email)) {
      toast.error({
        title: t("contact.failTitle"),
        content: t("contact.invalidEmail"),
      });
      return;
    }
    if (title.length > 75) {
      toast.error({
        title: t("contact.failTitle"),
        content: t("contact.subjectMax"),
      });
      return;
    }
    if (description.length > 300) {
      toast.error({
        title: t("contact.failTitle"),
        content: t("contact.messageMax"),
      });
      return;
    }

    try {
      setLoading(true);
      const res = await emailjs.send(
        import.meta.env.VITE_REACT_SERVICE_ID,
        import.meta.env.VITE_REACT_TEMPLATE_ID,
        {
          name,
          title,
          email,
          description,
        },
        {
          publicKey: import.meta.env.VITE_REACT_PUBLIC_KEY,
        },
      );

      if (res.status === 200) {
        keys.forEach((key) => {
          e.target[key].value = "";
        });
        toast.success({
          title: t("contact.successTitle"),
          content: t("contact.sentOk"),
        });
      }
    } catch (error) {
      toast.error({
        title: t("contact.failTitle"),
        content: t("contact.sendError"),
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="w-full py-20 bg-background text-foreground relative">
      <div id="contact" className="container px-4 mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h3 className="text-4xl  font-bold mb-4 sec-title text-gradient-b from-foreground to-foreground/20">
            {t("contact.heading")}
          </h3>
          <p className="text-foreground/60 text-lg font-light">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <div className="col-center md:!flex-row gap-6 p-6 rounded-2xl border border-secondary/20 bg-transparent hover:border-primary/40 transition-all duration-300 w-full md:w-auto">
            <div className="size-24 md:size-32 rounded-full p-1 border border-primary/30">
              <img
                src={teamContact.img}
                alt="Abdullah Zeynel"
                className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-foreground">
                {teamContact.name}
              </h3>
              <p className="text-primary font-medium mb-3">
                {tx(teamContact.title)}
              </p>

                <div className="flex-center md:justify-start gap-4 flex-wrap">
                <a
                  href={`mailto:${teamContact.email}`}
                  className="flex items-center gap-2 text-foreground/60 hover:text-secondary transition-colors text-sm"
                >
                  <FaEnvelope />
                  <span>{t("contact.email")}</span>
                </a>
                {teamContact.phone && (
                  <a
                    href={`tel:${teamContact.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors text-sm"
                  >
                    <FaPhone />
                    <span>{teamContact.phone}</span>
                  </a>
                )}
                <a
                  href={teamContact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-foreground/60 hover:text-third transition-colors text-sm"
                >
                  <FaLinkedinIn />
                  <span>{t("contact.linkedin")}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <form onSubmit={onSubmit} className="flex flex-col gap-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="relative">
                <input
                  type="text"
                  required
                  className="peer w-full bg-transparent border-b border-secondary/20 py-3 text-foreground focus:outline-none focus:border-primary transition-all placeholder-transparent"
                  placeholder="Adınız"
                  name="name"
                />
                <label className="absolute left-0 -top-3.5 text-sm text-foreground/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-primary">
                  {t("contact.name")}
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  required
                  className="peer w-full bg-transparent border-b border-secondary/20 py-3 text-foreground focus:outline-none focus:border-primary transition-all placeholder-transparent"
                  placeholder="Email"
                  name="email"
                />
                <label className="absolute left-0 -top-3.5 text-sm text-foreground/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-primary">
                  {t("contact.emailLabel")}
                </label>
              </div>
            </div>

            <div className="relative">
              <input
                type="text"
                required
                className="peer w-full bg-transparent border-b border-secondary/20 py-3 text-foreground focus:outline-none focus:border-primary transition-all placeholder-transparent"
                placeholder="Konunuz"
                name="title"
              />
              <label className="absolute left-0 -top-3.5 text-sm text-foreground/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-primary">
                {t("contact.subject")}
              </label>
            </div>

            <div className="relative">
              <textarea
                rows="4"
                required
                className="peer w-full bg-transparent border-b border-secondary/20 py-3 text-foreground focus:outline-none focus:border-primary transition-all placeholder-transparent resize-none"
                placeholder="Mesaj"
                name="message"
              ></textarea>
              <label className="absolute left-0 -top-3.5 text-sm text-foreground/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-primary">
                {t("contact.message")}
              </label>
            </div>

            <div className="mt-4 text-right">
              <Button
                variant="radial"
                colorMode="primary"
                disabled={isLoading}
                size="lg"
                type="submit"
                className="px-12 text-xl ms-auto hover:[&_.send-icon]:translate-y-0 hover:[&_.send-icon]:translate-x-0 hover:[&_.send-icon]:opacity-100 hover:[&_.send-icon]:ms-0 overflow-hidden"
              >
                {isLoading ? (
                  <>
                    {t("contact.sending")}
                    <AiOutlineLoading3Quarters className="animate-spin" />
                  </>
                ) : (
                  <>
                    {t("contact.send")}
                    <FaPaperPlane className="send-icon -translate-x-5 translate-y-8 transition-all duration-500 opacity-0 -ms-7.5" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
