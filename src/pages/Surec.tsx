import { Head } from "vite-react-ssg";
import { motion, type Variants } from "framer-motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import ProcessList from "../components/ProcessList";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Surec() {
  return (
    <>
      <Head>
        <title>Süreç — KAIRO Studio</title>
        <meta
          name="description"
          content="İlk temastan teslime, KAIRO Yöntemi'nin sekiz aşaması: ön bilgi, ihtiyaç görüşmesi, keşif, kapsam, konsept, proje, uygulama ve teslim."
        />
        <link rel="canonical" href="https://kairomimarlik.com/surec" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Süreç — KAIRO Studio" />
        <meta
          property="og:description"
          content="İlk temastan teslime, KAIRO Yöntemi'nin sekiz aşaması."
        />
        <meta property="og:url" content="https://kairomimarlik.com/surec" />
        <meta property="og:image" content="https://kairomimarlik.com/images/cta-band-entrance.jpg" />
        <meta property="og:locale" content="tr_TR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Süreç — KAIRO Studio" />
        <meta name="twitter:description" content="İlk temastan teslime, KAIRO Yöntemi'nin sekiz aşaması." />
        <meta name="twitter:image" content="https://kairomimarlik.com/images/cta-band-entrance.jpg" />
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
            <p className="eyebrow">KAIRO Yöntemi</p>
            <h1 className="section-title">İlk Temastan Teslime, Sekiz Aşama</h1>
          </motion.div>

          <ProcessList />
        </div>
      </section>

      <Footer />
    </>
  );
}
