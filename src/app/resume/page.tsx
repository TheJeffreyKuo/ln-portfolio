"use client";

import FadeIn from "@/components/FadeIn";
import { resumePath } from "@/data/profile";

export default function Resume() {
  return (
    <main className="resume-page">
      <div className="resume-header">
        <FadeIn>
          <span className="section-badge">Resume</span>
          <h1>My Resume</h1>
        </FadeIn>
        <FadeIn delay={0.15}>
          {/* Download button — resume file path set in src/data/profile.ts */}
          <a href={resumePath} download className="resume-download-btn">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download PDF
          </a>
        </FadeIn>
      </div>

      <FadeIn delay={0.2}>
        {/* Embedded PDF viewer — hides the browser's built-in toolbar */}
        <div className="resume-viewer">
          <iframe
            src={`${resumePath}#toolbar=0&navpanes=0&scrollbar=0`}
            title="Resume"
          />
        </div>
      </FadeIn>
    </main>
  );
}
