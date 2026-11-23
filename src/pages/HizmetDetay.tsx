import { Head } from "vite-react-ssg";
import { Link, useParams } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import CtaBand from "../components/CtaBand";
import ProjectCard from "../components/ProjectCard";
import { servicePageBySlug, servicePages } from "../data/servicePages";
import { projects } from "../data/projects";
import { processSteps } from "../data/process";

const gridVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HizmetDetay() {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? servicePageBySlug(slug) : undefined;

  if (!page) {
    return (
      <>
        <Nav />
        <WhatsAppFloat />
        <section className="section" style={{ paddingTop: "clamp(140px, 18vh, 190px)" }}>
          <div className="container">
            <h1 className="section-title">Sayfa bulunamadı</h1>
            <div style={{ marginTop: 32 }}>
              <Link to="/hizmetler" className="btn btn-ghost">
                ← Tüm Hizmetler
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  const url = `https://kairomimarlik.com/${page.slug}/`;
  const image = "https://kairomimarlik.com/images/cta-band-entrance.jpg";
  const others = servicePages.filter((s) => s.slug !== page.slug);
  const related = page.relatedProjects
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is (typeof projects)[number] => Boolean(p));
  // Proje konumlarından bölge adları ("Yalıkavak, Bodrum — …" → "Yalıkavak"), tekrarsız.
  const regions = Array.from(new Set(projects.map((p) => p.location.split(",")[0].trim())));

  return (
    <>
      <Head>
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDescription} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={page.metaTitle} />
        <meta property="og:description" content={page.metaDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:locale" content="tr_TR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={page.metaTitle} />
        <meta name="twitter:description" content={page.metaDescription} />
        <meta name="twitter:image" content={image} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: page.serviceName,
            description: page.metaDescription,
            url,
            areaServed: { "@type": "AdministrativeArea", name: "Bodrum, Muğla" },
            provider: { "@type": "ProfessionalService", name: "KAIRO Studio", url: "https://kairomimarlik.com/" },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://kairomimarlik.com/" },
              { "@type": "ListItem", position: 2, name: "Hizmetler", item: "https://kairomimarlik.com/hizmetler/" },
              { "@type": "ListItem", position: 3, name: page.eyebrow, item: url },
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: page.faq.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          })}
        </script>
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
            <p className="eyebrow">{page.eyebrow}</p>
            <h1 className="section-title">{page.h1}</h1>
            <p className="lede" style={{ marginTop: 18 }}>
              {page.lede}
            </p>
          </motion.div>

          <motion.div
            className="project-desc lede"
            style={{ marginTop: 40 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            {page.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">{page.scopeTitle}</h2>
          <div className="services-grid" style={{ marginTop: 28 }}>
            <div className="service-card">
              <ul>
                {page.scope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Çalışma sürecimiz</h2>
          <p className="lede" style={{ marginTop: 18 }}>
            Her proje sekiz aşamalı KAIRO Yöntemi ile yürür; bir aşama netleşmeden diğerine geçilmez.
          </p>
          <ol className="process-list" style={{ marginTop: 28 }}>
            {processSteps.map((step) => (
              <li key={step.title}>
                <div>
                  <p className="process-step-title">{step.title}</p>
                  <p className="process-step-desc">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 className="section-title">İlgili projeler</h2>
            <motion.div
              className="project-grid"
              style={{ marginTop: 28 }}
              variants={gridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {related.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </motion.div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <h2 className="section-title">Sık sorulanlar</h2>
          <div style={{ marginTop: 28 }}>
            {page.faq.map((item) => (
              <div key={item.q} style={{ marginBottom: 24 }}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link to="/iletisim" className="btn btn-primary">
              Teklif Alın
            </Link>
            <Link to="/surec" className="btn btn-ghost">
              Çalışma Sürecimiz
            </Link>
            <Link to="/projeler" className="btn btn-ghost">
              Projeler
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="lede" style={{ marginBottom: 32 }}>
            Merkezimiz Yalıkavak'ta; Bodrum yarımadası genelinde çalışıyoruz. Bugüne kadar proje yürüttüğümüz
            bölgeler: {regions.join(", ")}.
          </p>
          <p className="eyebrow">Diğer hizmetler</p>
          <ul style={{ marginTop: 16 }}>
            {others.map((s) => (
              <li key={s.slug}>
                <Link to={`/${s.slug}`}>{s.h1}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
      <Footer />
    </>
  );
}
