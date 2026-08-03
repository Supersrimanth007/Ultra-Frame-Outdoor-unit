import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export default function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait a tick so the target route/section has actually rendered
      // before we try to find and scroll to it.
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        // small delay lets layout settle (e.g. images loading in, motion mount)
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 80);
        return;
      }
    }
    // no hash — normal navigation, jump to top like a fresh page load
    window.scrollTo(0, 0);
  }, [hash, pathname]);

  return null;
}