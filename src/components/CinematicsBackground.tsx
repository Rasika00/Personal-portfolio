import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "../types";

interface BackgroundProps {
  activeChapter: string;
  activeProject: Project | null;
}

export default function CinematicsBackground({ activeChapter, activeProject }: BackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Update mouse position for spotlight effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Determine which background image or color gradient to use
  let bgImage = "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1600&q=80"; // Default cinematic misty forest twilight
  let opacity = 0.35;

  if (activeProject) {
    bgImage = activeProject.image;
    opacity = 0.25;
  } else {
    switch (activeChapter) {
      case "home":
        bgImage = "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1600&q=80";
        break;
      case "vision":
        bgImage = "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1600&q=80"; // moody macro light
        opacity = 0.28;
        break;
      case "archive":
        bgImage = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80"; // cosmic abstract networks
        opacity = 0.25;
        break;
      case "journey":
        bgImage = "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=1600&q=80"; // dark starry night
        opacity = 0.3;
        break;
      case "colophon":
        bgImage = "https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?auto=format&fit=crop&w=1600&q=80"; // deep midnight
        opacity = 0.22;
        break;
    }
  }

  return (
    <div className="fixed inset-0 w-full h-full bg-cinema-black overflow-hidden z-0">
      {/* Dynamic Background Image Crossfade */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={bgImage}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity, scale: 1.02 }}
          exit={{ opacity: 0, scale: 1.0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }} // smooth cinematic panning curves
          className="absolute inset-0 bg-cover bg-center h-full w-full select-none pointer-events-none"
          style={{ imageRendering: "auto" }}
        >
          <img
            src={bgImage}
            alt="Cinematic Ambience"
            className="w-full h-full object-cover filter contrast-125 brightness-[0.85]"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </AnimatePresence>

      {/* Floating abstract atmospheric orbs */}
      <div className="absolute inset-0 z-1 pointer-events-none opacity-70 mix-blend-color-dodge">
        <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-cinema-gold/40 rounded-full blur-[140px] animate-pulse duration-[10000ms]" />
        <div className="absolute bottom-[10%] right-[15%] w-[50vw] h-[50vw] bg-cinema-amber/30 rounded-full blur-[160px] animate-pulse duration-[16000ms]" />
      </div>

      {/* Spotlight highlight relative to mouse coordinate */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-2 select-none"
        animate={{
          background: isHovering
            ? `radial-gradient(circle 450px at ${mousePosition.x}% ${mousePosition.y}%, rgba(195,161,101,0.06), transparent 70%)`
            : `radial-gradient(circle 350px at 50% 50%, rgba(195,161,101,0.03), transparent 70%)`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.6 }}
      />

      {/* Grid Mesh lines for digital structure feel */}
      <div className="absolute inset-0 z-3 pointer-events-none opacity-[0.03]"
           style={{
             backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
             backgroundSize: "32px 32px"
           }}
      />

      {/* Letterbox Bars - Top & Bottom cinema bars */}
      <div className="fixed top-0 left-0 w-full h-[6vh] bg-cinema-black/80 border-b border-cinema-border/40 backdrop-blur-cinematic z-50 pointer-events-none flex items-center justify-between px-8 text-[10px] font-display uppercase tracking-[0.25em] text-cinema-text-muted">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cinema-gold animate-ping" />
          Transmission: Live
        </span>
        <span className="hidden sm:inline">RASIKA PRIYANATH // FOLIO 2026</span>
        <span>Aspect Ratio: 2.39:1</span>
      </div>

      <div className="fixed bottom-0 left-0 w-full h-[6vh] bg-cinema-black/80 border-t border-cinema-border/40 backdrop-blur-cinematic z-50 pointer-events-none flex items-center justify-between px-8 text-[10px] font-display uppercase tracking-[0.25em] text-cinema-text-muted">
        <span>COLOMBO // 06.14.26</span>
        <span className="hidden md:inline">SYSTEM STATE: NOMINAL</span>
        <span>PRESS ESC TO DISMISS DETAILS</span>
      </div>
    </div>
  );
}
