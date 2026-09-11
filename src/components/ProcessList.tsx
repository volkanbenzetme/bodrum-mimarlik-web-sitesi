import { motion, type Variants } from "framer-motion";
import { processSteps } from "../data/process";

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ProcessList() {
  return (
    <motion.ol
      className="process-list"
      variants={listVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {processSteps.map((step) => (
        <motion.li key={step.title} variants={itemVariants}>
          <div />
          <div>
            <p className="process-step-title">{step.title}</p>
            <p className="process-step-desc">{step.description}</p>
          </div>
        </motion.li>
      ))}
    </motion.ol>
  );
}
