import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "./Lightbox";

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

      <Lightbox
        images={images}
        openIndex={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </div>
  );
}
