import { motion } from "framer-motion";

interface PhotoHeroProps {
  image: string;
  imageAlt: string;
  tag: string;
  title: string;
  meta: string[];
  caption?: string;
}

// Proje detay sayfalarının tek-görsel hero'su (ana sayfanın dönen HeroCarousel'inden farklı olarak
// tek, sabit bir fotoğraf gösterir).
export default function PhotoHero({ image, imageAlt, tag, title, meta, caption = "3D Görselleştirme" }: PhotoHeroProps) {
  return (
    <header className="photo-hero photo-hero--compact">
      <div className="photo-hero-media">
        <img src={image} alt={imageAlt} loading="eager" />
      </div>
      <div className="photo-hero-scrim" />
      <motion.div
        className="photo-hero-content"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container-wide">
          <p className="photo-hero-tag">{tag}</p>
          <h1>{title}</h1>
          <div className="photo-hero-meta">
            {meta.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </motion.div>
      <p className="photo-hero-caption">{caption}</p>
    </header>
  );
}
