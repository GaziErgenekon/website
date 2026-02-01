import React from "react";
import { stats } from "../../constants";

const Stats = () => {

  const COLOR_VARIANTS = {
    primary:"inset-shadow-primary/30 border-primary/10 from-primary/20",
    secondary:"inset-shadow-secondary/30 border-secondary/10 from-secondary/20",
    third:"inset-shadow-third/30 border-third/10 from-third/20",
    success:"inset-shadow-success/30 border-success/10 from-success/20"
  }

  return (
    <div className="container my-16">
      <div className="grid xls:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div className={`col-center gap-2 inset-shadow-sm p-6 rounded-lg border ${COLOR_VARIANTS[stat.color]} bg-radial-[at_50%_75%]  to-100%`}>
            <div className="font-semibold text-3xl xl:text-4xl text-gradient-br from-foreground to-foreground/20  ">
              {stat.title}
            </div>
            <p className="text-lg font-semibold">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
