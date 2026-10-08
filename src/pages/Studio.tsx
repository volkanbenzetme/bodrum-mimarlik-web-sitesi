import { Head } from "vite-react-ssg";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const gridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const PRINCIPLES = [
  "Tasarım ve uygulamayı birlikte düşünür",
  "Bodrum koşullarına uygun çözüm geliştirir",
  "Süreci planlı ve kontrollü yürütür",
  "Detaydan teslim aşamasına kadar takip eder",
];

const RESTORATION_CREDENTIALS = [
  "Patara Antik Kenti Restorasyon Uygulama",
  "İstanbul Kapalıçarşı Restorasyon Uygulama",
  "Belen Kanuni Sultan Süleyman Kervansarayı Restorasyon Projesi",
  "Bilezikçiyan Çiftliği Yeniden İşlevlendirme Projesi",
  "Sevakin Adası Kültür Varlıklarını Koruma ve Yaşatma Projeleri",
];

export default function Studio() {
  return (
    <>
      <Head>
        <title>Stüdyo — KAIRO Studio</title>
        <meta
          name="description"
          content="KAIRO Studio, Bodrum'un doğal dokusunu, taşın hafızasını ve köklü yaşam kültürünü tasarımın başlangıç noktası kabul eder. Mimar Volkan H. Benzetme'nin restorasyon deneyimi."
        />
        <link rel="canonical" href="https://kairomimarlik.com/studio" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Stüdyo — KAIRO Studio" />
        <meta
          property="og:description"
          content="Kullanım, atmosfer ve uygulama gerçekliği: KAIRO Studio'nun tasarım felsefesi ve mimarı."
        />
        <meta property="og:url" content="https://kairomimarlik.com/studio" />
        <meta property="og:image" content="https://kairomimarlik.com/images/cta-band-entrance.jpg" />
        <meta property="og:locale" content="tr_TR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Stüdyo — KAIRO Studio" />
        <meta
          name="twitter:description"
          content="Kullanım, atmosfer ve uygulama gerçekliği: KAIRO Studio'nun tasarım felsefesi ve mimarı."
        />
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
            <p className="eyebrow">Stüdyo</p>
            <h1 className="section-title">
              Kullanım, Atmosfer ve
              <br />
              Uygulama Gerçekliği
            </h1>
          </motion.div>
          <motion.div
            className="lede"
            style={{ maxWidth: 760 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <p>
              KAIRO, Bodrum'un doğal dokusunu, taşın hafızasını ve köklü yaşam kültürünü tasarımın başlangıç noktası
              kabul eder.
            </p>
            <p style={{ marginTop: 22 }}>
              Konutlardan turizm, konaklama ve ticari alanlara kadar her proje; doğru analiz, doğru malzeme ve
              uygulama disipliniyle ele alınır. Amacımız yalnızca bugünü güzelleştirmek değil; yapının uzun vadeli
              kullanım konforunu ve mülk değerini gözetmektir.
            </p>
            <p style={{ marginTop: 22 }}>
              Bu yaklaşım; konutlarda nesiller boyu aktarılabilecek kalıcı bir aile mirasına, ticari ve turizm
              mekânlarında ise güçlü bir kimliğe ve uzun ömürlü bir deneyime dönüşür.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <motion.div
            className="section-head"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <p className="eyebrow">Neden KAIRO?</p>
            <h2 className="section-title">Dört İlke</h2>
          </motion.div>
          <motion.div
            className="services-grid"
            style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {PRINCIPLES.map((principle) => (
              <motion.div className="service-card" key={principle} variants={fadeUp}>
                <h3 style={{ fontSize: "1.05rem" }}>{principle}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div
            className="section-head"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <p className="eyebrow">Mimar</p>
            <h2 className="section-title">Volkan H. Benzetme</h2>
          </motion.div>
          <motion.div
            className="lede"
            style={{ maxWidth: 760 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <p>
              KAIRO'nun mimarı. Bodrum'da konut ve rezidans ölçeğindeki projelerde tasarımdan sahadaki
              uygulamaya kadar süreci bizzat yürütür. KAIRO'dan önce tescilli kültür varlıkları üzerinde
              restorasyon mimarı olarak görev almış; İstanbul Kapalıçarşı, Patara Antik Kenti ve Hatay Belen
              Kervansarayı gibi anıtsal yapıların restorasyon çalışmalarında yer almıştır.
            </p>
            <ul style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 10, fontSize: "0.95rem" }}>
              {RESTORATION_CREDENTIALS.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
            <p style={{ marginTop: 22, fontSize: "0.85rem", color: "var(--ink-soft)" }}>
              Bu projeler KAIRO kuruluşundan önceki mesleki deneyime aittir; KAIRO'nun kendi proje portfolyosu{" "}
              <Link to="/projeler" style={{ textDecoration: "underline" }}>
                Projeler
              </Link>{" "}
              sayfasında yer alır.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
