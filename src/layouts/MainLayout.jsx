import React from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import { Outlet } from "react-router-dom";
import Toaster from "../components/ui/Toaster";
import Analytics from "../components/common/Analytics";

const MainLayout = () => {
  return (
    <>
      <Analytics />
      <Toaster />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
