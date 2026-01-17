import React from "react";
import Button from "../components/ui/Button";
import { FaHouse } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container my-44 col-center text-center">
      <span className="text-7xl sm:text-9xl text-gradient-br from-foreground to-foreground/40 font-bold">
        404
      </span>
      <h6 className="text-4xl sm:text-6xl mb-4">
        İstediğiniz sayfa bulunamadı {":("}
      </h6>
      <p className="text-lg sm:text-xl mb-5">
        Lütfen başka bir sayfayı aramayı deneyin veya ana sayfaya dönmeyi
        deneyin.
      </p>
      <Link to="/">
        <Button colorMode="secondary" variant="subtle" className="py-3 px-7">
          <FaHouse /> Ana Sayfa
        </Button>
      </Link>
    </div>
  );
};

export default Error;
