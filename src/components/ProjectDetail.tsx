"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import FadeIn from "@/components/FadeIn";
import TextReveal from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <main className="project-detail">
      <FadeIn>
        <MagneticButton strength={0.2}>
          <Link href="/portfolio" className="back-link">
            &larr; Back to Portfolio
          </Link>
        </MagneticButton>
      </FadeIn>

      <div className="project-detail-header">
        <div>
          <TextReveal text={project.title} as="h1" />

          <FadeIn delay={0.15}>
            <div className="specs">
              <h3>Specs</h3>
              {project.specs.map((spec) => (
                <p key={spec.label}>
                  <span className="spec-label">{spec.label}:</span>{" "}
                  {spec.value}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} direction="left">
          <p className="project-description">{project.description}</p>
        </FadeIn>
      </div>

      {project.images.length > 0 && (
        <div className="project-images">
          {project.images.map((img, i) => (
            <motion.figure
              key={img.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <img src={img.src} alt={img.caption} />
              <figcaption>{img.caption}</figcaption>
            </motion.figure>
          ))}
        </div>
      )}

      <FadeIn delay={0.3}>
        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <MagneticButton>
            <Link href="/portfolio" className="cta-btn-outline">
              &larr; All Projects
            </Link>
          </MagneticButton>
        </div>
      </FadeIn>
    </main>
  );
}
