import { motion, type Variants } from "framer-motion";
import type { ServiceCategory } from "../data/services";

export const serviceCardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

interface ServiceCardProps {
  service: ServiceCategory;
  /** Numarayı başlığa ekle (Hizmetler sayfası). Ana sayfa özetinde kapalı. */
  showNumber?: boolean;
}

export default function ServiceCard({ service, showNumber = false }: ServiceCardProps) {
  return (
    <motion.div className="service-card" variants={serviceCardVariants}>
      <h3>{showNumber ? `${service.number} · ${service.title}` : service.title}</h3>
      <ul>
        {service.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}
