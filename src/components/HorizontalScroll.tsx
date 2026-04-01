"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HorizontalScrollProps {
  items: string[];
}

export default function HorizontalScroll({ items }: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-30%"]);

  return (
    <div ref={containerRef} className="h-scroll-container">
      <motion.div className="h-scroll-track" style={{ x }}>
        {[...items, ...items].map((item, i) => (
          <div key={i} className="h-scroll-chip">
            <span>{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
