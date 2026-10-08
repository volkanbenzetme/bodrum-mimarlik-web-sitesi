import { useEffect, useRef, useState } from "react";
import { services } from "../data/services";

export default function WorkAreas() {
  const sheetRefs = useRef<(HTMLElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>(() => services.map(() => false));

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVisible(services.map(() => true));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = sheetRefs.current.indexOf(entry.target as HTMLElement);
          if (idx === -1) return;
          setVisible((v) => {
            if (v[idx]) return v;
            const next = [...v];
            next[idx] = true;
            return next;
          });
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );
    sheetRefs.current.forEach((s) => s && io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <div className="sheets-grid">
      {services.map((service, i) => (
        <article
          key={service.number}
          ref={(el) => {
            sheetRefs.current[i] = el;
          }}
          className={`sheet${visible[i] ? " is-visible" : ""}`}
          style={{ transitionDelay: visible[i] ? `${i * 70}ms, ${i * 70}ms` : undefined }}
        >
          <div className="sheet-head">
            <span className="sheet-tag">
              <b>{service.number}</b>
            </span>
            <h3 className="sheet-title">{service.title}</h3>
          </div>
          <ul className="sheet-legend">
            {service.items.map((item, j) => (
              <li key={item} style={{ transitionDelay: `${0.32 + j * 0.04}s` }}>
                <span className="leg-tick" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
