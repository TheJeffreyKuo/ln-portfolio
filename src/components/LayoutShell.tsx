"use client";

import dynamic from "next/dynamic";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgressWrapper from "./ScrollProgressWrapper";
import ScrollToTopWrapper from "./ScrollToTopWrapper";
import SmoothScroll from "./SmoothScroll";
import { ReactNode } from "react";

const Preloader = dynamic(() => import("./Preloader"), { ssr: false });

export default function LayoutShell({ children }: { children: ReactNode }) {
  return (
    <SmoothScroll>
      <Preloader />
      <ScrollProgressWrapper />
      <Navbar />
      {children}
      <Footer />
      <ScrollToTopWrapper />
    </SmoothScroll>
  );
}
