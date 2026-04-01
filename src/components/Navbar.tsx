"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { name } from "@/data/profile";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo — pulls your name from profile.ts */}
      <Link href="/" className="nav-logo">
        {name}
      </Link>

      <div className="nav-right">
        {/* Dark/light mode switch */}
        <ThemeToggle />
        {/* Hamburger (visible on mobile only) */}
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Navigation links — add or rename pages here */}
      <ul className={`nav-links${open ? " open" : ""}`}>
        <li>
          <Link
            href="/"
            className={pathname === "/" ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/portfolio"
            className={
              pathname.startsWith("/portfolio") ||
              pathname.startsWith("/projects")
                ? "active"
                : ""
            }
            onClick={() => setOpen(false)}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            href="/resume"
            className={pathname === "/resume" ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}
