import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ScrollTop from "./components/common/ScrollTop.jsx";
import { LanguageProvider } from "./i18n/LanguageContext.jsx";

// Hem teamergenekon.org/ hem de teamergenekon.org/test/ aynı tek deploy'dan
// çalışır. URL "/test" ile başlıyorsa router basename "/test" olur, aksi
// halde "/". Böylece kök site bozulmadan /test önizlemesi de yayında olur
// (kök-mutlak asset'ler + GitHub Pages 404.html SPA fallback ile).
// İstenirse VITE_ROUTER_BASENAME ile açıkça da geçersiz kılınabilir.
const TEST_PREFIX = "/test";
const explicitBasename = import.meta.env.VITE_ROUTER_BASENAME?.replace(
  /\/+$/,
  ""
);
const ROUTER_BASENAME =
  explicitBasename ||
  (window.location.pathname === TEST_PREFIX ||
  window.location.pathname.startsWith(`${TEST_PREFIX}/`)
    ? TEST_PREFIX
    : "/");

createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <BrowserRouter basename={ROUTER_BASENAME}>
      <ScrollTop />
      <App />
    </BrowserRouter>
  </LanguageProvider>,
);
