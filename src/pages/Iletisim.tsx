import { Head } from "vite-react-ssg";
import { motion, type Variants } from "framer-motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import LeadForm from "../components/LeadForm";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Iletisim() {
  return (
    <>
      <Head>
        <title>İletişim — KAIRO Studio</title>
        <meta
          name="description"
          content="KAIRO Studio ile projenizi konuşun. Yalıkavak, Bodrum ofisimizden telefon, e-posta veya form ile ulaşın — ilk ön değerlendirme görüşmesi ücretsizdir."
        />
        <link rel="canonical" href="https://kairomimarlik.com/iletisim" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="İletişim — KAIRO Studio" />
        <meta
          property="og:description"
          content="Projenizi birlikte şekillendirelim — KAIRO Studio ile iletişime geçin."
        />
        <meta property="og:url" content="https://kairomimarlik.com/iletisim" />
      </Head>

      <Nav />
      <WhatsAppFloat />

      <section className="section" style={{ paddingTop: "clamp(140px, 18vh, 190px)" }}>
        <div className="container">
          <motion.div
            className="section-head"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <p className="eyebrow">İletişim</p>
            <h1 className="section-title">
              Projenizi Birlikte
              <br />
              Şekillendirelim
            </h1>
          </motion.div>

          <div className="contact-grid">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <div className="contact-block">
                <p className="contact-label">Ofis</p>
                <p className="contact-value">
                  KAIRO Studio
                  <br />
                  Yalıkavak, Bodrum
                  <br />
                  Muğla
                </p>
              </div>
              <div className="contact-block">
                <p className="contact-label">Telefon</p>
                <p className="contact-value">
                  <a href="tel:+905446355862">+90 544 635 58 62</a>
                </p>
              </div>
              <div className="contact-block">
                <p className="contact-label">E-posta</p>
                <p className="contact-value">
                  <a href="mailto:info@kairomimarlik.com">info@kairomimarlik.com</a>
                </p>
              </div>
              <div className="contact-block">
                <p className="contact-label">Randevu</p>
                <p className="contact-value">
                  İlk ön değerlendirme görüşmesi ücretsizdir; randevu ile planlanmaktadır.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <LeadForm />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
