import { motion } from "framer-motion";

interface RiskBandProps {
  text: string;
}

// "Neden KAIRO?" risk-band mesajlaşması — homepage ve Hizmetler sayfasında kullanılır.
export default function RiskBand({ text }: RiskBandProps) {
  return (
    <section className="section risk-band">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="eyebrow">Neden KAIRO?</p>
          <h2 className="section-title">Tadilatta Asıl Risk: Belirsizlik</h2>
          <p>{text}</p>
        </motion.div>
      </div>
    </section>
  );
}
