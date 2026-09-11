import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { heroProjects, PROJECT_STATUS_LABEL } from "../data/projects";

const INTERVAL_MS = 6500;

// Ana sayfanın dönen proje hero'su. Davranış legacy-static/preview/assets/hero-carousel.js'in
// framer-motion karşılığı: cross-fade + Ken-Burns zoom, dot'lara tıklayınca sayaç sıfırlanır,
// mouseenter/visibilitychange ile duraklatılır.
export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pausedRef = useRef(false);

  const stop = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const start = useCallback(() => {
    stop();
    if (pausedRef.current) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % heroProjects.length);
    }, INTERVAL_MS);
  }, [stop]);

  useEffect(() => {
    start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    function handleVisibility() {
      if (document.hidden) {
        pausedRef.current = true;
        stop();
      } else {
        pausedRef.current = false;
        start();
      }
    }
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, [start, stop]);

  function handleMouseEnter() {
    pausedRef.current = true;
    stop();
  }

  function handleMouseLeave() {
    pausedRef.current = false;
    start();
  }

  function goTo(i: number) {
    setIndex(i);
    pausedRef.current = false;
    start();
  }

  const slide = heroProjects[index];

  return (
    <header
      className="photo-hero hero-carousel"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.slug}
          className="hero-slide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        >
          <div className="photo-hero-media">
            <motion.img
              src={slide.image}
              alt={slide.imageAlt}
              initial={{ scale: 1 }}
              animate={{ scale: 1.09 }}
              transition={{ duration: 8, ease: "easeOut" }}
            />
          </div>
          <div className="photo-hero-scrim" />
          <motion.div
            className="photo-hero-content"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
          >
            <div className="container-wide">
              <p className="photo-hero-tag">{slide.heroTag}</p>
              <h1>{slide.name}</h1>
              <div className="photo-hero-meta">
                <span>{slide.year}</span>
                <span>{slide.area}</span>
                <span>{PROJECT_STATUS_LABEL[slide.status]}</span>
              </div>
              <Link to={`/projeler/${slide.slug}`} className="btn btn-light">
                Projeyi İncele
              </Link>
            </div>
          </motion.div>
          <p className="photo-hero-caption">3D Görselleştirme</p>
        </motion.div>
      </AnimatePresence>

      <img src="/images/kairo-logo-white.png" alt="KAIRO Studio" className="hero-logo-mark" />

      <div className="hero-carousel-dots">
        {heroProjects.map((p, i) => (
          <button
            key={p.slug}
            type="button"
            className={`hero-dot${i === index ? " is-active" : ""}`}
            aria-label={`${i + 1}. proje: ${p.name}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </header>
  );
}
