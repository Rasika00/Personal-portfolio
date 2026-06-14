import { motion } from "motion/react";
import { ArrowRight, Play, Compass, Film } from "lucide-react";
import { PERSONAL_INFO, CHAPTERS } from "../data";

interface PrologueProps {
  onSelectChapter: (id: string) => void;
  audioActive: boolean;
  toggleAudio: () => void;
}

export default function Prologue({ onSelectChapter, audioActive, toggleAudio }: PrologueProps) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 relative z-10 text-center py-20">
      {/* Cinematic Tagline / Top Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mb-6 flex items-center gap-3 text-xs md:text-sm font-display uppercase tracking-[0.35em] text-cinema-gold"
      >
        <span className="w-1.5 h-1.5 bg-cinema-gold rounded-full inline-block animate-pulse" />
        {PERSONAL_INFO.title}
      </motion.div>

      {/* Hero Movie-Style Poster Title */}
      <div className="overflow-hidden mb-8">
        <motion.h1
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif tracking-tight text-white font-light leading-none"
        >
          {PERSONAL_INFO.name.split(" ").map((word, i) => (
            <span key={i} className="inline-block mr-4 last:mr-0 italic font-normal">
              {word}
            </span>
          ))}
        </motion.h1>
      </div>

      {/* Short artistic abstract statement */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="max-w-2xl text-cinema-text-muted text-base md:text-lg leading-relaxed font-sans font-light tracking-wide mb-12 px-4"
      >
        {PERSONAL_INFO.tagline} {PERSONAL_INFO.philosophy.slice(0, 110)}...
      </motion.p>

      {/* Central Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col sm:flex-row gap-5 items-center justify-center mb-24 z-20"
      >
        {/* Core CTA: Start the Cinematic Journey */}
        <button
          onClick={() => onSelectChapter("vision")}
          id="cta-start-journey"
          className="group relative px-8 py-4 bg-white text-black font-display font-medium uppercase tracking-widest text-xs rounded-none border border-white hover:bg-black hover:text-white transition-all duration-500 overflow-hidden cursor-pointer flex items-center gap-3 shadow-lg shadow-white/5 active:scale-95"
        >
          <span className="absolute -left-full top-0 w-full h-full bg-gradient-to-r from-cinema-gold/10 to-cinema-amber/15 group-hover:left-0 transition-all duration-700 pointer-events-none" />
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>Begin The Experience</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
        </button>

        {/* Ambient Sound Trigger */}
        <button
          onClick={toggleAudio}
          id="btn-toggle-audio"
          className="px-6 py-4 border border-cinema-border hover:border-cinema-gold text-cinema-text-muted hover:text-white font-display text-xs uppercase tracking-widest bg-cinema-dark/40 backdrop-blur-sm cursor-pointer transition-all duration-500 flex items-center gap-2"
        >
          <Film className={`w-3.5 h-3.5 ${audioActive ? "text-cinema-gold animate-spin duration-[6000ms]" : ""}`} />
          <span>{audioActive ? "Disable Ambient Score" : "Enable Ambient Score"}</span>
        </button>
      </motion.div>

      {/* Chapters Shortcut Panel - Movie Trailer Styling */}
      <div className="w-full max-w-5xl px-4 mt-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="border-t border-cinema-border/30 pt-10"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {CHAPTERS.map((chapter, i) => (
              <motion.div
                key={chapter.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                onClick={() => onSelectChapter(chapter.id)}
                id={`chapter-link-${chapter.id}`}
                className="group p-5 bg-cinema-dark/20 border border-cinema-border/25 hover:border-cinema-gold/40 cursor-pointer backdrop-blur-[2px] transition-all duration-500 flex flex-col justify-between min-h-[140px]"
              >
                <div>
                  <div className="text-[10px] font-display uppercase tracking-[0.2em] text-cinema-gold mb-2 group-hover:text-cinema-amber transition-colors">
                    {chapter.phase}
                  </div>
                  <h3 className="text-xl font-serif text-white group-hover:italic transition-all duration-300">
                    {chapter.title}
                  </h3>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-[10px] font-display uppercase tracking-widest text-cinema-text-muted group-hover:text-white transition-colors">
                    Explore
                  </span>
                  <Compass className="w-3.5 h-3.5 text-cinema-text-muted group-hover:text-cinema-gold group-hover:rotate-45 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
