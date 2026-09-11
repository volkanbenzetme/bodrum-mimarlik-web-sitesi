import { Head } from "vite-react-ssg";
import { Link, useParams } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import PhotoHero from "../components/PhotoHero";
import ProjectGallery from "../components/ProjectGallery";
import { getProjectBySlug, PROJECT_STATUS_LABEL } from "../data/projects";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ProjeDetay() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <>
        <Nav />
        <WhatsAppFloat />
        <section className="section" style={{ paddingTop: "clamp(140px, 18vh, 190px)" }}>
          <div className="container">
            <h1 className="section-title">Proje bulunamadı</h1>
            <p className="lede" style={{ marginTop: 18 }}>
              Aradığınız proje kaldırılmış veya taşınmış olabilir.
            </p>
            <div style={{ marginTop: 32 }}>
              <Link to="/projeler" className="btn btn-ghost">
                ← Tüm Projeler
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  const statusLabel = PROJECT_STATUS_LABEL[project.status];
  const canonicalUrl = `https://kairomimarlik.com/projeler/${project.slug}`;

  return (
    <>
      <Head>
        <title>{project.name} — KAIRO Studio</title>
        <meta name="description" content={project.description[0]} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${project.name} — KAIRO Studio`} />
        <meta property="og:description" content={project.description[0]} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`https://kairomimarlik.com${project.image}`} />
      </Head>

      <Nav hasHero />
      <WhatsAppFloat />

      <PhotoHero
        image={project.image}
        imageAlt={project.imageAlt}
        tag={project.location}
        title={project.name}
        meta={[String(project.year), project.area, statusLabel]}
      />

      <section className="section">
        <div className="container-wide">
          <div className="project-body">
            <motion.aside
              className="project-facts"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div className="project-fact">
                <p className="project-fact-label">Konum</p>
                <p className="project-fact-value">{project.location}</p>
              </div>
              <div className="project-fact">
                <p className="project-fact-label">Yıl</p>
                <p className="project-fact-value">{project.year}</p>
              </div>
              <div className="project-fact">
                <p className="project-fact-label">Alan</p>
                <p className="project-fact-value">{project.area}</p>
              </div>
              <div className="project-fact">
                <p className="project-fact-label">Kapsam</p>
                <p className="project-fact-value">{project.scope}</p>
              </div>
              <div className="project-fact">
                <p className="project-fact-label">Statü</p>
                <p className="project-fact-value">{statusLabel}</p>
              </div>
              {project.collaboration && (
                <div className="project-fact">
                  <p className="project-fact-label">Tasarım İş Birliği</p>
                  <p className="project-fact-value">{project.collaboration}</p>
                </div>
              )}
              <div className="project-fact">
                <p className="project-fact-label">KAIRO'nun Rolü</p>
                <p className="project-fact-value">{project.role}</p>
              </div>
            </motion.aside>
            <motion.div
              className="project-desc lede"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              {project.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {project.referenceNote && (
                <div className="badge-note">
                  {project.referenceNote} Bkz.{" "}
                  <Link to="/iletisim" style={{ textDecoration: "underline" }}>
                    İletişim
                  </Link>
                  .
                </div>
              )}
            </motion.div>
          </div>

          <ProjectGallery
            images={[
              {
                src: project.image,
                alt: project.imageAlt,
                caption: project.galleryCaption,
                span2: true,
              },
            ]}
          />

          <div style={{ marginTop: 56, textAlign: "center" }}>
            <Link to="/projeler" className="btn btn-ghost">
              ← Tüm Projeler
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
