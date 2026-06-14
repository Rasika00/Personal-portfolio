import { motion } from "motion/react";
import { EXPERIENCE_TIMELINE } from "../data";
import { History, Milestone, Compass, FileText } from "lucide-react";

export default function Journey() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-12 text-white relative z-10 animate-fade-in">
      {/* Chapter Header */}
      <div className="flex flex-col items-start mb-16 md:mb-24">
        <motion.span
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
          className="text-xs md:text-sm font-display uppercase tracking-[0.3em] text-cinema-gold"
        >
          Chapter III
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-7xl font-serif font-light tracking-tight mt-3 text-white italic"
        >
          The Journey
        </motion.h2>
        <div className="w-16 h-[1px] bg-cinema-gold/60 mt-6" />
      </div>

      <div className="relative border-l border-cinema-border/50 pl-6 md:pl-10 ml-2 md:ml-6 space-y-16 py-4">
        {/* Animated timeline node indicator */}
        <div className="absolute top-0 left-0 -translate-x-[50%] w-[1px] h-full bg-gradient-to-b from-cinema-gold via-cinema-border/40 to-transparent" />

        {EXPERIENCE_TIMELINE.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.0, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative group"
          >
            {/* Pulsating timeline anchor node */}
            <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-cinema-black border-2 border-cinema-gold group-hover:border-cinema-amber group-hover:scale-125 transition-all duration-300 z-10 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-cinema-gold group-hover:bg-cinema-amber" />
            </div>

            {/* Content box details */}
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] font-display uppercase tracking-widest text-cinema-gold mb-1 block">
                    {exp.phase}
                  </span>
                  <h3 className="text-2xl font-serif font-light text-white group-hover:italic transition-all duration-300">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-sans tracking-wide text- सिनेमा-text-muted text-cinema-text-muted mt-1">
                    {exp.company}
                  </div>
                </div>

                <div className="inline-flex self-start md:self-center px-3 py-1 bg-cinema-dark border border-cinema-border/40 text-cinema-text-muted font-mono text-[10px] uppercase tracking-widest">
                  {exp.period}
                </div>
              </div>

              <p className="text-sm md:text-base font-sans text-cinema-text-muted font-light leading-relaxed max-w-3xl">
                {exp.description}
              </p>

              {/* Achievements details bullet boxes */}
              <div className="bg-cinema-dark/20 border border-cinema-border/20 p-5 space-y-3.5 rounded-none max-w-3xl">
                <div className="flex items-center gap-2 mb-1">
                  <Milestone className="w-3.5 h-3.5 text-cinema-gold" />
                  <span className="text-[10px] font-display uppercase tracking-widest text-cinema-gold">
                    Key Performance Metrics & Deliveries
                  </span>
                </div>
                {exp.achievements.map((ach, i) => (
                  <div key={i} className="flex gap-3 text-xs md:text-sm font-sans text-cinema-text-muted leading-relaxed font-light">
                    <span className="text-cinema-gold font-mono">0{i + 1}</span>
                    <span>{ach}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Narrative closing timeline quote */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="mt-24 border-t border-cinema-border/25 pt-12 text-center max-w-xl mx-auto space-y-6"
      >
        <div className="p-3 border border-cinema-border/40 w-fit mx-auto bg-cinema-dark/30">
          <History className="w-5 h-5 text-cinema-gold" />
        </div>
        <p className="text-lg font-serif text-cinema-gold italic font-light">
          "Each phase is a calibrated lens setting—focused on high fidelity, responsive mechanics, and cinematic space."
        </p>
        <button
          id="btn-resume-dl"
          onClick={() => alert("Resume compiled under portfolio spec 2026. Ready for transport.")}
          className="inline-flex items-center gap-2 px-6 py-3 border border-cinema-border hover:border-cinema-gold text-cinema-text-muted hover:text-white font-display text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer active:scale-95"
        >
          <FileText className="w-4 h-4" />
          <span>Download Dossier</span>
        </button>
      </motion.div>
    </div>
  );
}
