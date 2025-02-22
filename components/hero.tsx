"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BackgroundAnimation from "./animation";
import VisionSection from "@/components/features";
import { HandHelping, MessageSquare, ChartNetwork } from "lucide-react";

function DefaultMouseMoveEffect({ containerRef }: { containerRef: React.RefObject<HTMLElement> }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      setMousePosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    };
    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [containerRef]);

  return (
    <div
      className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29,78,216,0.15), transparent 80%)`,
      }}
    />
  );
}

function AnimatedWord() {
  const words = [
    { text: "Affordable", color: "#3B82F6" },
    { text: "Faster", color: "#636FF6" },
    { text: "Personalized", color: "#8B5CF6" },
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div
      className="relative inline-block overflow-hidden"
      style={{ height: "1.2em", perspective: "500px" }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: "100%", opacity: 0, rotateX: -90 }}
          animate={{ y: "0%", opacity: 1, rotateX: 0 }}
          exit={{ y: "-100%", opacity: 0, rotateX: 90 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            color: words[index].color,
            display: "inline-block",
            lineHeight: "1em",
            textAlign: "center",
          }}
        >
          {words[index].text}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export default function HeroAndDemo() {
  // Determine dark mode by checking if the "dark" class exists on <html>
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  // Ref for the hero container (for mouse effect containment)
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative h-screen overflow-hidden dark:bg-[#1F2937] flex flex-col justify-between"
    >
      {/* Background: render MouseMoveEffect in dark mode; BackgroundAnimation in light mode */}
      {isDark ? (
        <DefaultMouseMoveEffect containerRef={heroRef} />
      ) : (
        <BackgroundAnimation />
      )}

      {/* Main Hero Content */}
      <motion.div className="relative z-40 text-center pt-24 mb-16 transition-all duration-500">
        <div className="mx-auto w-full">
          <h1 className="text-5xl font-bold mb-6 leading-tight text-[#111827] dark:text-[#F9FAFB]">
            <span>Your AI Tutor, </span>
            <span className="block ">Made </span>
            <span className="block ">
              <AnimatedWord />
            </span>
          </h1>
        </div>
        <div className="flex justify-center gap-4">
          <a
            href="mailto:team@andl.io"
            className="border-4 border-[#8B5CF6] px-8 py-3 rounded-full font-semibold transition-all duration-300 text-lg bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100"
          >
            Book a demo →
          </a>
          <a
            href="https://forms.gle/vPRxg9XqbfFfiWCc6"
            target="_blank"
            className="border px-8 py-4 rounded-full font-semibold transition-all duration-300 text-lg bg-white hover:bg-gray-500/10 text-black dark:bg-transparent dark:border-white dark:text-white dark:hover:bg-white/10"
          >
            Join Waitlist
          </a>
        </div>
      </motion.div>
      <div className="hidden md:block">
        <VisionSection />
      </div>
    </section>
  );
}
