import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      let attempts = 0;

      const scrollToHash = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (attempts < 20) {
          attempts += 1;
          setTimeout(scrollToHash, 100);
        }
      };

      const timer = setTimeout(scrollToHash, 50);
      return () => clearTimeout(timer);
    }

    window.scrollTo({ behavior: "smooth", top: 0 });
  }, [pathname, hash]);

  return null;
};

export default ScrollTop;
