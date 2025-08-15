import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function GAListener() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-68XNG9XZD6", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
}
