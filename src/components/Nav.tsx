import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { to: "/projeler", label: "Projeler" },
  { to: "/studio", label: "Stüdyo" },
  { to: "/hizmetler", label: "Hizmetler" },
  { to: "/surec", label: "Süreç" },
];

interface NavProps {
  /** Sayfa tam genişlikte bir foto hero ile mi açılıyor (true: nav başta şeffaf, scroll'da solidleşir). */
  hasHero?: boolean;
}

export default function Nav({ hasHero = false }: NavProps) {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function updateNav() {
      setScrolled(window.scrollY > 40);
    }
    updateNav();
    window.addEventListener("scroll", updateNav, { passive: true });
    return () => window.removeEventListener("scroll", updateNav);
  }, []);

  // Route değiştiğinde mobil menüyü kapat.
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const solid = !hasHero || scrolled || menuOpen;
  const ctaClass = hasHero ? "btn-light" : "btn-primary";

  return (
    <nav className={`nav${solid ? " nav--solid" : ""}`}>
      <div className="nav-inner">
        <Link to="/" className="nav-logo-link" aria-label="KAIRO Studio anasayfa">
          <img src="/images/kairo-mark-white.png" alt="KAIRO Studio" className="logo-img logo-img-light" />
          <img src="/images/kairo-mark-black.png" alt="KAIRO Studio" className="logo-img logo-img-dark" />
        </Link>

        <button
          type="button"
          className={`nav-toggle${menuOpen ? " nav-toggle--open" : ""}`}
          aria-expanded={menuOpen}
          aria-controls="nav-links"
          aria-label="Menüyü aç/kapat"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className="nav-links nav-links--desktop">
          {NAV_LINKS.map((link) => (
            <Link key={link.to} to={link.to} aria-current={location.pathname === link.to ? "page" : undefined}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="nav-actions">
          <a
            href="https://wa.me/905446355862"
            className="nav-whatsapp"
            target="_blank"
            rel="noopener"
            aria-label="WhatsApp'tan yazın"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm5.8 14.13c-.24.68-1.39 1.32-1.92 1.4-.49.08-1.1.11-1.78-.11-.41-.13-.94-.3-1.62-.6-2.84-1.23-4.7-4.08-4.84-4.27-.14-.19-1.16-1.54-1.16-2.94s.73-2.09.99-2.38c.26-.28.56-.35.75-.35.19 0 .38 0 .54.01.17.01.41-.06.64.49.24.57.81 1.98.88 2.12.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.44.12.61-.07.16-.19.7-.81.88-1.09.19-.28.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.47.21.54.33.07.12.07.68-.17 1.36z" />
            </svg>
          </a>
          <Link to="/iletisim" className={`btn ${ctaClass} nav-cta`}>
            İletişim
          </Link>
        </div>

        <AnimatePresence initial={false}>
          {menuOpen && (
            <motion.div
              className="nav-links nav-links--mobile"
              id="nav-links"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  aria-current={location.pathname === link.to ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
