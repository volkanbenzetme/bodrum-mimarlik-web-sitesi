import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Production'ın "Zamanı Durduran Detaylar" CTA band'i — v2/yeniden tasarımda düşmüştü,
// Volkan görseli ve metni beğendiği için geri eklendi (bkz. legacy-static/Main.dc.html .cta-band).
export default function CtaBand() {
  return (
    <section className="cta-band">
      <div className="cta-band-media">
        <img src="/images/cta-band-entrance.jpg" alt="" loading="lazy" />
        <img src="/images/cta-band-sea-view.jpg" alt="" loading="lazy" />
      </div>
      <div className="cta-band-scrim" />
      <div className="container">
        <motion.div
          className="cta-band-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <p className="eyebrow">Zamanı Durduran Detaylar</p>
          <h2 className="section-title">
            Işık, Rüzgâr ve Malzemenin
            <br />
            Yavaşlattığı Bir Yaşam
          </h2>
          <p className="cta-band-text">
            Açık pencerelerden giren Ege meltemi; doğal taş yüzeyler, gün ışığı ve hafif keten dokularla dengeli
            bir iç mekân atmosferi oluşturur. Gürültü geride kalır.
          </p>
          <Link to="/iletisim" className="btn btn-primary">
            Projenizi Konuşalım
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
