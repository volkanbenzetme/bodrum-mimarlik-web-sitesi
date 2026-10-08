import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  images: LightboxImage[];
  openIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ images, openIndex, onClose, onNavigate }: LightboxProps) {
  const isOpen = openIndex !== null;
  const active = isOpen ? images[openIndex] : null;

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate(((openIndex as number) + 1) % images.length);
      if (e.key === "ArrowLeft") onNavigate(((openIndex as number) - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, openIndex, images.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={onClose}
        >
          <button type="button" className="lightbox-close" onClick={onClose} aria-label="Kapat">
            ×
          </button>

          {images.length > 1 && (
            <button
              type="button"
              className="lightbox-nav lightbox-prev"
              aria-label="Önceki görsel"
              onClick={(e) => {
                e.stopPropagation();
                onNavigate(((openIndex as number) - 1 + images.length) % images.length);
              }}
            >
              ‹
            </button>
          )}

          <motion.img
            key={active.src}
            src={active.src}
            alt={active.alt}
            className="lightbox-image"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          />

          {images.length > 1 && (
            <button
              type="button"
              className="lightbox-nav lightbox-next"
              aria-label="Sonraki görsel"
              onClick={(e) => {
                e.stopPropagation();
                onNavigate(((openIndex as number) + 1) % images.length);
              }}
            >
              ›
            </button>
          )}

          {images.length > 1 && (
            <div className="lightbox-count">
              {(openIndex as number) + 1} / {images.length}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
