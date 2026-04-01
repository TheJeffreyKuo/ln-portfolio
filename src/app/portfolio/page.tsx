"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import FadeIn from "@/components/FadeIn";
import TextReveal from "@/components/TextReveal";
import TiltCard from "@/components/TiltCard";

export default function Portfolio() {
  return (
    <main>
      <div className="page-header">
        <TextReveal text="My Portfolio" as="h1" />
        <FadeIn delay={0.2}>
          <p>For more info on a project, click the corresponding image.</p>
        </FadeIn>
      </div>

      <div className="portfolio-grid">
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <TiltCard intensity={6}>
              <Link href={`/projects/${project.slug}`} className="project-card">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span className="project-category-badge">
                    {project.category}
                  </span>
                  <h3>{project.title}</h3>
                  <span className="project-view-btn">View Project</span>
                </div>
              </Link>
            </TiltCard>
          </motion.div>
        ))}
      </div>

    </main>
  );
}
