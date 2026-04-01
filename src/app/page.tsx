"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  heroHeading,
  roles,
  bio,
  email,
  phone,
  stats,
  technicalSkills,
  timeline,
} from "@/data/profile";
import FadeIn from "@/components/FadeIn";
import Typewriter from "@/components/Typewriter";
import CountUp from "@/components/CountUp";
import Timeline from "@/components/Timeline";
import ParticleField from "@/components/ParticleField";
import TextReveal from "@/components/TextReveal";
import ParallaxSection from "@/components/ParallaxSection";
import HorizontalScroll from "@/components/HorizontalScroll";
import MagneticButton from "@/components/MagneticButton";

export default function Home() {
  const headingParts = heroHeading.split("\n");

  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <ParticleField />

        <div className="hero-content">
          <FadeIn>
            <h1>
              {headingParts.map((part, i) => (
                <span key={i}>
                  {part}
                  {i < headingParts.length - 1 && <br />}
                </span>
              ))}
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="subtitle">
              <Typewriter words={roles} />
            </p>
          </FadeIn>

          <div className="bio">
            {bio.map((paragraph, i) => (
              <FadeIn key={i} delay={0.3 + i * 0.1}>
                <p>{paragraph}</p>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3 + bio.length * 0.1}>
            <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
              <MagneticButton>
                <Link href="/portfolio" className="cta-btn">
                  View Projects
                  <span className="cta-arrow">&rarr;</span>
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link href="/resume" className="cta-btn-outline">
                  Resume
                </Link>
              </MagneticButton>
            </div>
          </FadeIn>
        </div>

        <div className="hero-visual">
          <ParallaxSection speed={0.15}>
            <div className="abstract-art">
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  className={`art-layer art-layer-${i}`}
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 + i * 2 }}
                  animate={{
                    opacity: [0.65, 0.7, 0.75, 0.85, 0.9][i - 1],
                    scale: 1,
                    rotate: [-2, 3, -1, 2, -3][i - 1],
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.2 + i * 0.12,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  whileHover={{ scale: 1.02, rotate: 0 }}
                />
              ))}
            </div>
          </ParallaxSection>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat) => (
            <CountUp
              key={stat.label}
              end={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </section>

      {/* Technical Skills */}
      <HorizontalScroll items={technicalSkills} />

      {/* Timeline */}
      <section className="timeline-section">
        <div className="section-header">
          <TextReveal text="Experience & Education" as="h2" />
          <FadeIn delay={0.1}>
            <span className="section-badge">Journey</span>
          </FadeIn>
        </div>
        <Timeline items={timeline} />
      </section>

      {/* Contact */}
      <FadeIn>
        <div className="divider" />
      </FadeIn>

      <FadeIn delay={0.1}>
        <section className="contact">
          <h2>Contact info:</h2>
          <p>
            Email - <a href={`mailto:${email}`}>{email}</a>
          </p>
          <p>
            Phone - <a href={`tel:${phone}`}>{phone}</a>
          </p>
        </section>
      </FadeIn>
    </main>
  );
}
