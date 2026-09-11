import { Head } from "vite-react-ssg";
import { motion, type Variants } from "framer-motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const gridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function ProjelerIndex() {
  return (
    <>
      <Head>
        <title>Projeler — KAIRO Studio</title>
        <meta
          name="description"
          content="KAIRO Studio'nun Bodrum genelindeki mimari tasarım, iç mimari ve uygulama projeleri: konutlar, villalar ve toplu konut projeleri."
        />
        <link rel="canonical" href="https://kairomimarlik.com/projeler" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Projeler — KAIRO Studio" />
        <meta
          property="og:description"
          content="KAIRO Studio'nun Bodrum genelindeki mimari tasarım, iç mimari ve uygulama projeleri."
        />
        <meta property="og:url" content="https://kairomimarlik.com/projeler" />
      </Head>

      <Nav />
      <WhatsAppFloat />

      <section className="section" style={{ paddingTop: "clamp(140px, 18vh, 190px)" }}>
        <div className="container-wide">
          <motion.div
            className="section-head"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
          >
            <p className="eyebrow">Portfolyo</p>
            <h1 className="section-title">Projeler</h1>
            <p className="lede" style={{ marginTop: 18 }}>
              Tüm görseller 3D görselleştirmedir; şu an sahadan çekilmiş fotoğraf arşivimiz yok. Durum etiketleri
              projenin hangi aşamada olduğunu gösterir.
            </p>
          </motion.div>

          <motion.div
            className="project-grid"
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} feature={i === 0} />
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
