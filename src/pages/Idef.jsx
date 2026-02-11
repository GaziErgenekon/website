import React, { useEffect } from "react";
import Gallery from "../components/Events/Idef/Gallery";
import IdefProfileView from "../components/Events/Idef/IdefProfileView";
import PresentationVideo from "../components/Events/Idef/PresentationVideo";
import EventExplainArea from "../components/Events/Idef/EventExplainArea";
import EventAbout from "../components/Events/Idef/EventAbout";
import PageTitle from "../components/Events/Idef/PageTitle";
import IdefHero from "../components/Events/Idef/IdefHero";

const Idef = () => {
  return (
    <div className="container mt-40">
      <PageTitle />
      <IdefHero />
      <EventAbout />
      <EventExplainArea />
      <PresentationVideo />
      <IdefProfileView />
      <Gallery />
    </div>
  );
};

export default Idef;
