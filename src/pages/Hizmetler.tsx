import { Head } from "vite-react-ssg";
import { motion, type Variants } from "framer-motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import ServiceCard from "../components/ServiceCard";
import RiskBand from "../components/RiskBand";
import { services } from "../data/services";

const gridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hizmetler() {
  return (
    <>
      <Head>
        <title>Hizmetler — KAIRO Studio</title>
        <meta
          name="description"
          content="Bodrum'un yaşam biçimine, iklimine ve mevcut yapı koşullarına uygun; tasarım, renovasyon ve uygulama süreçlerini tek çatı altında ele alıyoruz."
        />
        <link rel="canonical" href="https://kairomimarlik.com/hizmetler" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hizmetler — KAIRO Studio" />
        <meta
          property="og:description"
          content="Bodrum'un yaşam biçimine, iklimine ve mevcut yapı koşullarına uygun; tasarım, renovasyon ve uygulama süreçlerini tek çatı altında ele alıyoruz."
        />
        <meta property="og:url" content="https://kairomimarlik.com/hizmetler" />
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
            <p className="eyebrow">Hizmetlerimiz</p>
            <h1 className="section-title">Uygulama ve Yapım Kapsamımız</h1>
            <p className="lede" style={{ marginTop: 18 }}>
              Bodrum'un yaşam biçimine, iklimine ve mevcut yapı koşullarına uygun; tasarım, renovasyon ve uygulama
              süreçlerini tek çatı altında ele alıyoruz. İhtiyaca göre sıfırdan tasarım, kapsamlı tadilat ve teknik
              uygulama çözümleri sunuyoruz.
            </p>
          </motion.div>

          <motion.div
            className="services-grid"
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {services.map((service) => (
              <ServiceCard key={service.number} service={service} showNumber />
            ))}
          </motion.div>
        </div>
      </section>

      <RiskBand text="Tasarım ve uygulamayı birlikte düşünür, Bodrum koşullarına uygun çözüm geliştirir, süreci planlı ve kontrollü yürütür; detaydan teslim aşamasına kadar takip ederiz." />

      <Footer />
    </>
  );
}
