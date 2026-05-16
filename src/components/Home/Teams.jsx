import React, { useState } from "react";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import Button from "../ui/Button";
import { tabLabels, teamStructure } from "../../constants";
import { useLanguage } from "../../i18n/LanguageContext";

const Teams = () => {
  const [activeTab, setActiveTab] = useState("software");
  const { t, tx } = useLanguage();

  const MemberCard = ({ member }) => (
    <div className="col-center text-center p-6 border border-secondary/10 rounded-xl bg-transparent hover:border-primary/50 transition-colors duration-300">
      <div className="size-32 sm:size-48 rounded-full overflow-hidden mb-4 border-2 border-secondary/5">
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          decoding="async"
          className="size-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>

      <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>

      <p className="text-foreground/60 text-sm mb-3">{tx(member.role)}</p>

      <div className="flex gap-4 justify-center mt-auto">
        <Button asChild variant="outline" colorMode="info" size="icon" className="p-2">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} LinkedIn`}
          >
            <FaLinkedinIn size={15} />
          </a>
        </Button>
      </div>
    </div>
  );

  return (
    <section className="w-full py-20 bg-background text-foreground">
      <div id="team" className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl  font-bold mb-4 sec-title">
            <span className="text-gradient-b from-foreground to-foreground/70">
              {t("team.heading")}
            </span>
          </h3>
          <p className="text-foreground/60 text-lg font-light">
            {t("team.subtitle")}
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-center text-primary text-lg font-bold tracking-widest uppercase mb-8">
            {t("team.captains")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {teamStructure.leadership.map((member, idx) => (
              <MemberCard key={idx} member={member} />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-center text-foreground/50 text-base font-bold tracking-widest uppercase mb-8">
            {t("team.audit")}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {teamStructure.auditBoard.map((member, idx) => (
              <MemberCard key={idx} member={member} />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-center text-foreground/50 text-base font-bold tracking-widest uppercase mb-8">
            {t("team.management")}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {teamStructure.managementBoard.map((member, idx) => (
              <MemberCard key={idx} member={member} />
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-20">
          <h3 className="text-center text-primary text-lg font-bold tracking-widest uppercase mb-8">
            {t("team.technical")}
          </h3>

          <div className="flex-center flex-wrap gap-4 mb-10">
            {Object.keys(teamStructure.subTeams).map((key) => (
              <Button
                key={key}
                variant="outline"
                colorMode="primary"
                onClick={() => setActiveTab(key)}
                className={`
                  ${activeTab === key
                    ? ""
                    : "bg-transparent border-secondary/10 text-foreground/60 hover:text-secondary hover:border-secondary/30"
                  }`}
              >
                {tx(tabLabels[key])}
              </Button>
            ))}
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,auto))] justify-center gap-6 animate-fadeIn">
            {teamStructure.subTeams[activeTab].map((member, idx) => (
              <MemberCard key={idx} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
