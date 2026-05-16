import { useEffect } from "react";

// Cloudflare Web Analytics — yalnızca beacon. Panel Cloudflare hesabında,
// siteye hiçbir istatistik yansımaz. Token yoksa script hiç eklenmez.
const Analytics = () => {
  useEffect(() => {
    const token = import.meta.env.VITE_CF_BEACON_TOKEN;
    if (!token) return;
    if (document.querySelector("script[data-cf-beacon]")) return;

    const script = document.createElement("script");
    script.defer = true;
    script.src = "https://static.cloudflareinsights.com/beacon.min.js";
    script.setAttribute("data-cf-beacon", JSON.stringify({ token }));
    document.body.appendChild(script);
  }, []);

  return null;
};

export default Analytics;
