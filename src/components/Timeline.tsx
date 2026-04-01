"use client";

import { motion } from "framer-motion";

export interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="timeline">
      {items.map((item, i) => (
        <motion.div
          key={i}
          className="timeline-item"
          initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.6,
            delay: i * 0.15,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <div className="timeline-marker">
            <div className="timeline-dot" />
          </div>
          <div className="timeline-content">
            <span className="timeline-year">{item.year}</span>
            <h3 className="timeline-title">{item.title}</h3>
            <p className="timeline-org">{item.organization}</p>
            <p className="timeline-desc">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
