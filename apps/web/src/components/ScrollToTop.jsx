import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Al cambiar de página sube al inicio; si la URL trae #ancla (ej. /#servicios), baja a esa sección.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
      }, 300);
      return () => clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
