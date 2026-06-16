import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Film, Command, Volume2, ShieldAlert } from "lucide-react";
import { PERSONAL_INFO } from "../data";

interface CinematicOverlayProps {
  isFirstLoad: boolean;
  onEnter: () => void;
  isChangingChapter: boolean;
  nextChapterTitle: string;
}

export default function CinematicOverlay({
  isFirstLoad,
  onEnter,
  isChangingChapter,
  nextChapterTitle
}: CinematicOverlayProps) {
  const [countdown, setCountdown] = useState(3);
  const [showButton, setShowButton] = useState(false);

  // Intro Leader Countdown Simulator
  useEffect(() => {
    if (!isFirstLoad) return;
    
    // Quick delay before button appears so they witness the aesthetic
    const loader = setTimeout(() => {
      setShowButton(true);
    }, 1200);

    return () => clearTimeout(loader);
  }, [isFirstLoad]);

  return (
    <div className="relative z-[9999]">
      {/* 1. THEATER LOCK & COUNTDOWN OVERLAY ON FIRST ENTER */}
      <AnimatePresence>
        {isFirstLoad && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 w-full h-full bg-cinema-black flex flex-col items-center justify-center text-white p-6 z-[9999]"
          >
            {/* Visual camera reticle decoration */}
            <div className="absolute inset-10 border border-cinema-border/20 pointer-events-none" />
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-cinema-border/10 pointer-events-none" />
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-cinema-border/10 pointer-events-none" />

            <div className="space-y-8 max-w-lg text-center relative">
              {/* Dynamic Lens Logo */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="w-16 h-16 border border-cinema-gold/60 mx-auto flex items-center justify-center bg-cinema-dark"
              >
                <Film className="w-6 h-6 text-cinema-gold animate-pulse" />
              </motion.div>

              <div className="space-y-2">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.8 }}
                  transition={{ delay: 0.4 }}
                  className="text-[10px] font-display uppercase tracking-[0.4em] text-cinema-gold"
                >
                  INITIALIZING NEURAL INTERFACE
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  className="text-3xl md:text-4xl font-serif italic text-white"
                >
                  {PERSONAL_INFO.name} // SYSTEM.OS
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-xs font-sans text-cinema-text-muted font-light tracking-wide leading-relaxed"
                >
                  System initialized. Establishing encrypted connection. Please ensure your physical hardware is calibrated for seamless data transmission and spatial rendering.
                </motion.p>
              </div>

              {/* Enter Button */}
              <div className="h-20 flex items-center justify-center">
                <AnimatePresence>
                  {showButton && (
                    <motion.button
                      key="enter-action"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      onClick={onEnter}
                      id="btn-enter-theater"
                      className="px-8 py-4 bg-cinema-gold hover:bg-white text-black font-display text-xs font-semibold uppercase tracking-[0.25em] cursor-pointer transition-all duration-500 rounded-none w-full max-w-xs ring-2 ring-cinema-gold/20 flex items-center justify-center gap-2"
                    >
                      <Volume2 className="w-4 h-4 fill-current" />
                      <span>Initialize System</span>
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>

              {/* Colophon Note */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 1.2 }}
                className="text-[9px] font-mono uppercase tracking-widest text-cinema-text-muted flex items-center gap-2 justify-center"
              >
                <Command className="w-3.5 h-3.5" />
                <span>SYS_KERNEL_v7 // PROTOCOL_SECURE // BIOMETRICS_ENCOURAGED</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. SLIDEOUT TRANSITIONAL SHUTTER FOR SMOOTH TRANSITIONS */}
      <AnimatePresence>
        {isChangingChapter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 w-full h-full bg-cinema-black/85 backdrop-blur-md flex flex-col items-center justify-center text-white z-[9990] pointer-events-auto"
          >
            {/* Cinematic Lens Shutter sliding blinds */}
            <motion.div
              initial={{ height: "0%" }}
              animate={{ height: "100%" }}
              exit={{ height: "0%" }}
              transition={{ duration: 0.75, ease: [0.85, 0, 0.15, 1] }}
              className="absolute left-0 top-0 w-full bg-cinema-dark flex flex-col justify-center items-center overflow-hidden"
            >
              {/* Refraction Amber line sweeps across */}
              <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-cinema-gold/40 to-transparent shadow-[0_0_15px_rgba(195,161,101,0.5)]" />
              
              <div className="space-y-2 relative z-10 text-center px-6">
                <motion.span
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 0.7, scale: 1 }}
                  className="text-[10px] font-display uppercase tracking-[0.4em] text-cinema-gold block mb-2"
                >
                  PREPARING TRANSMISSION
                </motion.span>
                <motion.h4
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-5xl font-serif text-white italic font-normal"
                >
                  {nextChapterTitle || "Loading Chapter"}
                </motion.h4>
                <div className="w-12 h-[1px] bg-cinema-gold/60 mx-auto mt-4" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
