import React, { useState } from "react";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import Button from "../ui/Button";
import { tabLabels, teamStructure } from "../../constants";

const Teams = () => {
  const [activeTab, setActiveTab] = useState("software");

  const MemberCard = ({ member }) => (
    <div className="col-center text-center p-6 border border-secondary/10 rounded-xl bg-transparent hover:primary/50 transition-colors duration-300">
      <div className="size-32 sm:size-48 rounded-full overflow-hidden mb-4 border-2 border-secondary/5">
        <img
          src={member.image}
          alt={member.name}
          className="size-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>

      <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>

      <p className="text-foreground/60 text-sm mb-3">{member.role}</p>

      <div className="flex gap-4 justify-center mt-auto">
        <Button variant="outline" colorMode="info" size="icon" className="p-2">
          <a href={member.linkedin}>
            <FaLinkedinIn size={15} />
          </a>
        </Button>
        <Button
          variant="outline"
          colorMode="secondary"
          size="icon"
          className="p-2"
        >
          <a href={`mailto:${member.email}`}>
            <FaEnvelope size={15} />
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
              Ekibimiz
            </span>
          </h3>
          <p className="text-foreground/60 text-lg font-light">
            Yerli ve milli teknoloji için çalışan tutkulu ekibimiz.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-center text-primary text-lg font-bold tracking-widest uppercase mb-8">
            Komuta Kademesi
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {teamStructure.leadership.map((member, idx) => (
              <MemberCard key={idx} member={member} />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-center text-foreground/50 text-base font-bold tracking-widest uppercase mb-8">
            Denetim Kurulu
          </h3>
          <div className="grid grid-cols-1 gap-6 max-w-sm mx-auto">
            {teamStructure.auditBoard.map((member, idx) => (
              <MemberCard key={idx} member={member} />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-center text-foreground/50 text-base font-bold tracking-widest uppercase mb-8">
            Yönetim Kurulu
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {teamStructure.managementBoard.map((member, idx) => (
              <MemberCard key={idx} member={member} />
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-20">
          <h3 className="text-center text-primary text-lg font-bold tracking-widest uppercase mb-8">
            Teknik Ekipler
          </h3>

          <div className="flex-center flex-wrap gap-4 mb-10">
            {Object.keys(teamStructure.subTeams).map((key) => (
              <Button
                key={key}
                variant="outline"
                colorMode="primary"
                onClick={() => setActiveTab(key)}
                className={`
                  ${
                    activeTab === key
                      ? ""
                      : "bg-transparent border-secondary/10 text-foreground/60 hover:text-secondary hover:border-secondary/30"
                  }`}
              >
                {tabLabels[key]}
              </Button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 animate-fadeIn">
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
