import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import { ArrowUpRight, X, Sparkles, Orbit, Compass, Cpu } from "lucide-react";

interface ArchiveProps {
  onInspectProject: (project: Project | null) => void;
  inspectedProject: Project | null;
}

export default function Archive({ onInspectProject, inspectedProject }: ArchiveProps) {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

  const filteredProjects =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12 text-white relative z-10">
      {/* Chapter Title */}
      <div className="flex flex-col items-start mb-12">
        <motion.span
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
          className="text-xs md:text-sm font-display uppercase tracking-[0.3em] text-cinema-gold"
        >
          Chapter II
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-7xl font-serif font-light tracking-tight mt-3 text-white italic"
        >
          The Archive
        </motion.h2>
        <div className="w-16 h-[1px] bg-cinema-gold/60 mt-6" />
      </div>

      {/* Filter Menu bar - Minimalist design */}
      <div className="flex flex-wrap items-center gap-4 mb-16 pb-3 border-b border-cinema-border/20">
        {categories.map((cat, i) => (
          <motion.button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 font-display text-xs uppercase tracking-widest cursor-pointer transition-all duration-300 relative ${
              filter === cat ? "text-cinema-gold font-medium" : "text-cinema-text-muted hover:text-white"
            }`}
          >
            {filter === cat && (
              <motion.span
                layoutId="activeFilter"
                className="absolute inset-0 bg-white/5 border border-cinema-border/50 -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Interactive Project Show Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onInspectProject(project)}
              className="group cursor-pointer bg-cinema-dark/10 hover:bg-cinema-dark/30 border border-cinema-border/30 hover:border-cinema-gold/40 p-4 transition-all duration-500 rounded-none flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-cinema-black mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter grayscale contrast-110 brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                {/* Visual scan frame overlay */}
                <div className="absolute inset-x-2 top-2 flex justify-between items-center text-[8px] font-mono opacity-40 pointer-events-none">
                  <span>RES: 4K SOURCE</span>
                  <span>ID: {project.id.toUpperCase()}</span>
                </div>
                <div className="absolute inset-0 bg-cinema-black/40 group-hover:bg-transparent transition-all duration-500" />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-display uppercase tracking-widest text-cinema-text-muted">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-cinema-gold">{project.year}</span>
                </div>
                <h3 className="text-2xl font-serif text-white group-hover:text-cinema-gold transition-colors duration-300 mt-2 flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-cinema-text-muted group-hover:text-cinema-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </h3>
                <p className="text-sm font-sans text-cinema-text-muted font-light mt-3 leading-relaxed">
                  {project.subtitle}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-mono uppercase tracking-wider text-[#999] border border-cinema-border/40 px-2 py-0.5 bg-cinema-black/20"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[9px] font-mono text-cinema-gold">+ {project.tags.length - 3} more</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Cinematic Detailed Inspection Slider Drawer Overlay */}
      <AnimatePresence>
        {inspectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              onClick={() => onInspectProject(null)}
              className="fixed inset-0 bg-cinema-black/90 backdrop-blur-md z-50 cursor-pointer"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 180 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-2xl bg-cinema-dark border-l border-cinema-border/80 z-50 overflow-y-auto shadow-2xl p-6 md:p-10 flex flex-col justify-between"
            >
              {/* Header inside details drawer */}
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-cinema-border/30 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-display uppercase tracking-[0.2em] text-cinema-gold">
                      Inspection Portal
                    </span>
                    <span className="w-1 h-1 bg-cinema-gold rounded-full" />
                    <span className="text-xs font-mono text-cinema-text-muted">
                      REF: {inspectedProject.id.toUpperCase()}_LOG
                    </span>
                  </div>
                  <button
                    onClick={() => onInspectProject(null)}
                    id="btn-close-inspection"
                    className="p-2 border border-cinema-border/40 hover:border-cinema-gold hover:text-cinema-gold text-cinema-text-muted transition-colors rounded-none cursor-pointer active:scale-95"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Inspect Graphic Hero */}
                <div className="relative aspect-video w-full overflow-hidden bg-cinema-black mb-8 border border-cinema-border/40 shadow-inner">
                  <img
                    src={inspectedProject.image}
                    alt={inspectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cinema-dark via-transparent to-transparent opacity-80" />
                </div>

                {/* Inspection Specs */}
                <div className="mb-8">
                  <div className="flex items-center gap-1.5 text-xs font-display text-cinema-gold uppercase tracking-widest mb-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Project File</span>
                  </div>
                  <h3 className="text-3xl font-serif italic text-white font-medium">{inspectedProject.title}</h3>
                  <p className="text-sm font-sans tracking-wide text-cinema-text-muted mt-2">
                    {inspectedProject.subtitle}
                  </p>
                </div>

                {/* Project Specs Specs Grid */}
                <div className="grid grid-cols-2 gap-4 border border-cinema-border/30 bg-cinema-black/40 p-5 mb-8">
                  <div>
                    <div className="text-[10px] font-display uppercase tracking-widest text-[#a1a1a1]">
                      My Creative Role
                    </div>
                    <div className="text-sm font-sans text-white font-light mt-1 text-cinema-gold font-medium">
                      {inspectedProject.role}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-display uppercase tracking-widest text-[#a1a1a1]">
                      Archive Year
                    </div>
                    <div className="text-sm font-sans text-white font-light mt-1 font-mono">
                      {inspectedProject.year}
                    </div>
                  </div>
                </div>

                {/* Scope: Challenge & Solution */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-display uppercase tracking-[0.2em] text-[#e28a47] flex items-center gap-1.5 mb-2">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>The Challenge</span>
                    </h4>
                    <p className="text-sm font-sans text-cinema-text-muted font-light leading-relaxed">
                      {inspectedProject.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-display uppercase tracking-[0.2em] text-[#c3a165] flex items-center gap-1.5 mb-2">
                      <Orbit className="w-3.5 h-3.5" />
                      <span>The Solution</span>
                    </h4>
                    <p className="text-sm font-sans text-cinema-text-muted font-light leading-relaxed">
                      {inspectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Stats bento layout */}
                <div className="mt-8">
                  <h4 className="text-xs font-display uppercase tracking-[0.2em] text-cinema-gold mb-4">
                    Render Metrics
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {inspectedProject.stats.map((stat, i) => (
                      <div key={i} className="p-4 bg-cinema-black border border-cinema-border/50 text-center">
                        <div className="text-2xl font-serif text-white font-light">{stat.value}</div>
                        <div className="text-[8px] font-display uppercase tracking-widest text-cinema-text-muted mt-1">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Specs */}
                <div className="mt-8">
                  <h4 className="text-xs font-display uppercase tracking-[0.2em] text-cinema-gold mb-3">
                    Technology Manifest
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {inspectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-white border border-cinema-border/50 bg-cinema-black px-3 py-1 uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action and Dismiss options */}
              <div className="mt-12 pt-6 border-t border-cinema-border/30 flex items-center justify-between gap-4">
                <button
                  onClick={() => onInspectProject(null)}
                  className="px-6 py-3 border border-cinema-border hover:border-cinema-gold text-cinema-text-muted hover:text-white font-display text-xs uppercase tracking-widest cursor-pointer transition-all active:scale-95"
                >
                  Close Archive File
                </button>

                <a
                  href={inspectedProject.link}
                  className="px-6 py-3 bg-white text-black hover:bg-cinema-gold hover:text-white font-display text-xs uppercase tracking-widest font-medium flex items-center gap-2 cursor-pointer transition-all active:scale-95"
                >
                  <span>Launch Experience</span>
                  <Compass className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
