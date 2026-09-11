import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import { PROJECT_STATUS_LABEL, type Project } from "../data/projects";

export const projectCardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const MotionLink = motion(Link);

interface ProjectCardProps {
  project: Project;
  /** Projeler index sayfasındaki ilk (öne çıkan) kart — daha geniş, 16:9 görsel. */
  feature?: boolean;
}

export default function ProjectCard({ project, feature = false }: ProjectCardProps) {
  return (
    <MotionLink
      to={`/projeler/${project.slug}`}
      className={`project-card${feature ? " project-grid-feature" : ""}`}
      variants={projectCardVariants}
    >
      <div className="project-card-media">
        <span className="project-card-status">{PROJECT_STATUS_LABEL[project.status]}</span>
        <img src={project.image} alt={project.imageAlt} loading="lazy" />
      </div>
      <div className="project-card-meta">
        <div>
          <h3 className="project-card-name">{project.name}</h3>
          <p className="project-card-loc">
            {project.location} · {project.year}
          </p>
        </div>
        <p className="project-card-tag">{project.cardTag}</p>
      </div>
    </MotionLink>
  );
}
