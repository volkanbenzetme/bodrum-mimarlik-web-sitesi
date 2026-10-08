import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
  /** İki kolonu birden kaplasın mı (tam genişlik). */
  span2?: boolean;
}

interface ProjectGalleryProps {
  images: GalleryImage[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? i : (i + 1) % images.length));
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, images.length]);

  const active = openIndex !== null ? images[openIndex] : null;

  return (
    <div className="project-gallery">
      {images.map((image, i) => (
        <motion.figure
          key={image.src}
          className={image.span2 ? "span-2" : undefined}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.08 }}
        >
          <button
            type="button"
            className="gallery-thumb"
            onClick={() => setOpenIndex(i)}
            aria-label={`${image.alt} — büyüt`}
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
          </button>
          {image.caption && <figcaption>{image.caption}</figcaption>}
        </motion.figure>
      ))}

      <AnimatePresence>
        {active && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={() => setOpenIndex(null)}
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setOpenIndex(null)}
              aria-label="Kapat"
            >
              ×
            </button>

            {images.length > 1 && (
              <button
                type="button"
                className="lightbox-nav lightbox-prev"
                aria-label="Önceki görsel"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
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
                  setOpenIndex((i) => (i === null ? i : (i + 1) % images.length));
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
    </div>
  );
}
