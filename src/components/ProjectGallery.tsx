import { motion } from "framer-motion";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  /** İki kolonu birden kaplasın mı (tam genişlik). */
  span2?: boolean;
}

interface ProjectGalleryProps {
  images: GalleryImage[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
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
          <img src={image.src} alt={image.alt} loading="lazy" />
          <figcaption>{image.caption}</figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
