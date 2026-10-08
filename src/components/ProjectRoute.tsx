import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { projects, PROJECT_STATUS_LABEL } from "../data/projects";

// "Proje Rotası" — statik ızgara yerine, sol tarafta ölçek çubuğu rayı olan,
// dönüşümlü sıralanan tam genişlikte proje panelleri. Her panelde bir çizim-föyü
// numarası (A—01, A—02…) ve bugün tek fotoğrafla dolu, geri kalanı "rezerve"
// (gelecekteki fotoğraflar için) bir film şeridi var — tek-fotoğraf kısıtı
// gizlenmiyor, tasarımın görünür bir parçası.
export default function ProjectRoute() {
  const panelRefs = useRef<(HTMLElement | null)[]>([]);
  const trackRef = useRef<HTMLDivElement>(null);
  const [ticks, setTicks] = useState<number[]>(() => projects.map(() => 0));
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState<boolean[]>(() => projects.map(() => false));

  useEffect(() => {
    function layoutTicks() {
      const track = trackRef.current;
      if (!track) return;
      const trackRect = track.getBoundingClientRect();
      const pcts = panelRefs.current.map((panel) => {
        if (!panel) return 0;
        const r = panel.getBoundingClientRect();
        const centerWithinTrack = r.top + r.height / 2 - trackRect.top;
        return Math.max(0, Math.min(100, (centerWithinTrack / trackRect.height) * 100));
      });
      setTicks(pcts);
    }
    layoutTicks();
    window.addEventListener("resize", layoutTicks);
    const t = setTimeout(layoutTicks, 60);
    return () => {
      window.removeEventListener("resize", layoutTicks);
      clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = panelRefs.current.indexOf(entry.target as HTMLElement);
          if (idx === -1 || !entry.isIntersecting) return;
          setVisible((v) => {
            if (v[idx]) return v;
            const next = [...v];
            next[idx] = true;
            return next;
          });
        });
      },
      { threshold: 0.22 }
    );
    panelRefs.current.forEach((p) => p && io.observe(p));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = panelRefs.current.indexOf(entry.target as HTMLElement);
          if (idx !== -1) setActiveIndex(idx);
        });
      },
      { threshold: 0.5, rootMargin: "-45% 0px -45% 0px" }
    );
    panelRefs.current.forEach((p) => p && io.observe(p));
    return () => io.disconnect();
  }, []);

  const progressPct = ((activeIndex + 1) / projects.length) * 100;
  const total = String(projects.length).padStart(2, "0");

  return (
    <section className="section route-section" id="secili-projeler">
      <div className="container-wide">
        <div className="section-head">
          <p className="eyebrow">Portfolyo</p>
          <h2 className="section-title">Öne Çıkan Projeler</h2>
        </div>
      </div>

      <div className="route-progress-mobile container-wide">
        <div className="route-progress-mobile-fill" style={{ width: `${progressPct}%` }} />
      </div>

      <div className="container-wide route">
        <div className="route-rail">
          <div className="route-rail-track" ref={trackRef}>
            <div className="route-rail-fill" style={{ transform: `scaleY(${progressPct / 100})` }} />
            {projects.map((project, i) => (
              <div
                key={project.slug}
                className={`route-tick${i === activeIndex ? " is-active" : ""}`}
                style={{ top: `${ticks[i]}%` }}
              >
                <span className="route-tick-label">{String(i + 1).padStart(2, "0")}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="route-panels">
          {projects.map((project, i) => (
            <article
              key={project.slug}
              ref={(el) => {
                panelRefs.current[i] = el;
              }}
              className={`panel ${i % 2 === 0 ? "side-a" : "side-b"}${visible[i] ? " is-visible" : ""}`}
            >
              <div className="panel-media">
                <div className="panel-frame">
                  <span className="panel-status">{PROJECT_STATUS_LABEL[project.status]}</span>
                  <span className="panel-sheet">A—{String(i + 1).padStart(2, "0")}</span>
                  <img src={project.image} alt={project.imageAlt} loading="lazy" />
                </div>
                <div className="panel-strip">
                  <div className="strip-slot is-active">
                    <img src={project.image} alt="" />
                  </div>
                  {Array.from({ length: 3 }).map((_, slotIndex) => {
                    const extra = project.gallery?.[slotIndex];
                    return extra ? (
                      <div className="strip-slot" key={extra}>
                        <img src={extra} alt="" />
                      </div>
                    ) : (
                      <div
                        className={`strip-slot is-reserved${slotIndex === 0 ? " plus" : ""}`}
                        key={`reserved-${slotIndex}`}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="panel-copy">
                <p className="panel-eyebrow">
                  {String(i + 1).padStart(2, "0")} / {total} · {project.location}
                </p>
                <h3 className="panel-name">{project.name}</h3>
                <p className="panel-loc">
                  {project.location} · {project.year}
                </p>
                <span className="panel-tag">{project.cardTag}</span>
                <Link to={`/projeler/${project.slug}`} className="panel-cta">
                  Projeyi Gör
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="route-end container-wide">
        <Link to="/projeler" className="btn btn-ghost">
          Tüm Projeleri Gör
        </Link>
      </div>
    </section>
  );
}
