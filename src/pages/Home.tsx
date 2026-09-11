import { Head } from "vite-react-ssg";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import HeroCarousel from "../components/HeroCarousel";
import ProjectCard, { projectCardVariants } from "../components/ProjectCard";
import ServiceCard, { serviceCardVariants } from "../components/ServiceCard";
import RiskBand from "../components/RiskBand";
import CtaBand from "../components/CtaBand";
import { projects } from "../data/projects";
import { services } from "../data/services";

const gridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>KAIRO Studio — Mimari Tasarım, İç Mimarlık, Uygulama</title>
        <meta
          name="description"
          content="KAIRO Studio — Bodrum Yalıkavak merkezli mimari tasarım, iç mimarlık ve proje yönetimi/uygulama stüdyosu. Tasarımdan anahtar teslime tek elden."
        />
        <link rel="canonical" href="https://kairomimarlik.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="KAIRO Studio" />
        <meta property="og:title" content="KAIRO Studio — Mimari Tasarım, İç Mimarlık, Uygulama" />
        <meta
          property="og:description"
          content="Bodrum Yalıkavak merkezli mimari tasarım, iç mimarlık ve proje yönetimi/uygulama stüdyosu."
        />
        <meta property="og:url" content="https://kairomimarlik.com/" />
        <meta property="og:image" content="https://kairomimarlik.com/images/cta-band-entrance.jpg" />
        <meta property="og:locale" content="tr_TR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="KAIRO Studio" />
        <meta
          name="twitter:description"
          content="Bodrum Yalıkavak merkezli mimari tasarım, iç mimarlık ve proje yönetimi/uygulama stüdyosu."
        />
        <meta name="twitter:image" content="https://kairomimarlik.com/images/cta-band-entrance.jpg" />
      </Head>

      <Nav hasHero />
      <WhatsAppFloat />

      <HeroCarousel />

      <section className="section">
        <div className="container">
          <motion.div
            className="intro-band"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              KAIRO Studio
            </p>
            <h2 className="section-title">
              Bodrum'da mimari,
              <br />
              iç mekân ve uygulama.
            </h2>
            <p className="lede" style={{ marginTop: 26 }}>
              Bodrum'un doğal dokusunu, taşın hafızasını ve köklü yaşam kültürünü tasarımın başlangıç noktası kabul
              ediyoruz. Sıfırdan tasarımdan kapsamlı tadilata, teknik uygulamadan özel mekân çözümlerine kadar; her
              projeyi doğru analiz, doğru malzeme ve uygulama disipliniyle, keşiften teslime tek çatı altında
              yürütüyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section section-alt" id="secili-projeler">
        <div className="container-wide">
          <motion.div
            className="section-head"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <p className="eyebrow">Portfolyo</p>
            <h2 className="section-title">Öne Çıkan Projeler</h2>
          </motion.div>
          <motion.div
            className="project-grid"
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </motion.div>
          <div style={{ marginTop: 48, textAlign: "center" }}>
            <Link to="/projeler" className="btn btn-ghost">
              Tüm Projeleri Gör
            </Link>
          </div>
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
            <p className="eyebrow">Hizmetlerimiz</p>
            <h2 className="section-title">Dört Çalışma Alanı</h2>
          </motion.div>
          <motion.div
            className="services-grid"
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {services.map((service) => (
              <ServiceCard key={service.number} service={service} />
            ))}
          </motion.div>
          <div style={{ marginTop: 40, textAlign: "center" }}>
            <Link to="/surec" className="btn btn-ghost">
              Çalışma Yöntemimiz
            </Link>
          </div>
        </div>
      </section>

      <RiskBand text="Tasarım ve uygulamayı birlikte düşünür, Bodrum koşullarına uygun çözüm geliştirir, süreci planlı ve kontrollü yürütür; detaydan teslim aşamasına kadar takip ederiz. Keşiften teslime, doğru müdahale ve doğru uygulama ile kalıcı sonuçlar üretiyoruz." />

      <CtaBand />

      <section className="section section-alt" id="iletisim-ozet">
        <div className="container">
          <motion.div
            className="section-head"
            style={{ marginBottom: 32 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <p className="eyebrow">İletişim</p>
            <h2 className="section-title">Projenizi Konuşalım</h2>
          </motion.div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "32px 56px", alignItems: "baseline" }}>
            <a href="tel:+905446355862" className="contact-value" style={{ fontSize: "1.3rem" }}>
              +90 544 635 58 62
            </a>
            <a href="mailto:info@kairomimarlik.com" className="contact-value" style={{ fontSize: "1.3rem" }}>
              info@kairomimarlik.com
            </a>
            <Link to="/iletisim" className="btn btn-primary">
              İletişim Formu
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
