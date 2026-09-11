import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-wide">
        <div className="footer-top">
          <Link to="/">
            <img
              src="/images/kairo-logo-white.png"
              alt="KAIRO Studio — Architecture, Interior Design, Construction"
              className="footer-logo-img"
            />
          </Link>
          <div className="footer-links">
            <Link to="/projeler">Projeler</Link>
            <Link to="/studio">Stüdyo</Link>
            <Link to="/hizmetler">Hizmetler</Link>
            <Link to="/surec">Süreç</Link>
            <Link to="/iletisim">İletişim</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 KAIRO Studio. Tüm hakları saklıdır.</span>
          <span>Yalıkavak, Bodrum — Türkiye</span>
        </div>
      </div>
    </footer>
  );
}
