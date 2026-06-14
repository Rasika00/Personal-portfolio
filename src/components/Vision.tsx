import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PERSONAL_INFO } from "../data";
import { Mail, MapPin, Layers, Award, Aperture, Cpu, X } from "lucide-react";

export default function Vision() {
  const [showActivities, setShowActivities] = useState(false);

  const activities = [
    {
      name: "Cricket",
      role: "School Team",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Athletics",
      role: "Track & Field",
      image: "https://images.unsplash.com/photo-1552674605-15cff7741cc7?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Volleyball",
      role: "Team Captain",
      image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=80",
    }
  ];
  const specs = [
    { icon: MapPin, label: "Core Coordinates", value: PERSONAL_INFO.location },
    { icon: Mail, label: "Direct Terminal", value: PERSONAL_INFO.email },
    { icon: Cpu, label: "Architectural Focus", value: "3D Graphics, Web Shaders, Audio Engines" },
    { icon: Layers, label: "Specialty Stack", value: "React, Framer Motion, GLSL, TS, Node" },
    { icon: Award, label: "Aesthetic Core", value: "Cyber-Brutalist & Cinematic Minimalism" },
    { icon: Aperture, label: "Creative Philosophy", value: "Interactive spaces should evoke a state of presence" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12 text-white relative z-10">
      {/* Editorial Chapter Header */}
      <div className="flex flex-col items-start mb-16 md:mb-24">
        <motion.span
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
          className="text-xs md:text-sm font-display uppercase tracking-[0.3em] text-cinema-gold"
        >
          Chapter I
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-7xl font-serif font-light tracking-tight mt-3 text-white italic"
        >
          The Vision
        </motion.h2>
        <div className="w-16 h-[1px] bg-cinema-gold/60 mt-6" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-start">
        {/* Editorial Text Column (8 cols in wide screens) */}
        <div className="lg:col-span-7 space-y-8">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-2xl md:text-3xl font-serif text-cinema-gold font-light tracking-wide leading-relaxed italic"
          >
            "A digital environment shouldn't just present layout blocks. It must capture focal point shadows and physical inertia."
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="space-y-6 text-cinema-text-muted text-base md:text-lg font-sans font-light leading-relaxed tracking-wide"
          >
            <p>{PERSONAL_INFO.philosophy}</p>
            <p>
              By fusing raw geometric lines, monochromatic shades, and responsive momentum
              animations, we can construct interactive worlds that hold architectural weight. Code becomes
              a sculptural tool. Shaders control atmospheric light. Motion bridges human sensory expectations
              with programmatic variables.
            </p>
          </motion.div>
        </div>

        {/* Cinematic Film-Frame Portrait Column (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative p-3 border border-cinema-border/50 bg-cinema-dark/40 backdrop-blur-sm shadow-2xl w-full max-w-sm group">
            {/* Corner Bracket Borders to simulate camera crosshair overlay */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cinema-gold/40 pointer-events-none" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cinema-gold/40 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cinema-gold/40 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cinema-gold/40 pointer-events-none" />

            <div className="relative overflow-hidden aspect-square h-full w-full bg-cinema-black">
              <img
                src={PERSONAL_INFO.avatar}
                alt={PERSONAL_INFO.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700 ease-[0.16,1,0.3,1] scale-105 group-hover:scale-100"
              />
              {/* Scanline reflection overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cinema-black via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute bottom-4 right-4 text-[9px] font-mono opacity-45 tracking-widest bg-black/70 px-2 py-1 border border-cinema-border/40 uppercase">
                Cam: 01 // REC
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <div className="text-xs font-display text-cinema-gold uppercase tracking-[0.25em]">{PERSONAL_INFO.name}</div>
              <div className="text-[10px] font-mono text-cinema-text-muted mt-1 uppercase tracking-widest">Digital Director & Tech Architect</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Interactive Creator Spec Sheet - Bento Style */}
      <div className="mt-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-10 pb-4 border-b border-cinema-border/20"
        >
          <h4 className="text-xs font-display uppercase tracking-[0.3em] font-medium text-cinema-gold">
            Creative Specifications & Frameworks
          </h4>
          <button 
            onClick={() => setShowActivities(true)}
            className="text-[9px] sm:text-[10px] font-display uppercase tracking-widest text-black bg-cinema-gold px-4 py-2 hover:bg-white hover:text-black transition-all duration-300 shadow-md"
          >
            Extra Curricular Activities
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((spec, i) => {
            const Icon = spec.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="p-6 bg-cinema-dark/30 border border-cinema-border/25 hover:border-cinema-gold/50 backdrop-blur-sm transition-all duration-500 cursor-default flex flex-col justify-between"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 border border-cinema-border/50 text-cinema-gold bg-cinema-black/40">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-display uppercase tracking-widest text-cinema-text-muted">
                    {spec.label}
                  </span>
                </div>
                <p className="text-sm md:text-base font-sans text-white font-light tracking-wide leading-relaxed">
                  {spec.value}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Extra Curricular Modal */}
      <AnimatePresence>
        {showActivities && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-cinema-black/90 backdrop-blur-md"
          >
            <div className="absolute inset-0" onClick={() => setShowActivities(false)} />
            
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl bg-cinema-dark border border-cinema-border/40 p-6 md:p-10 shadow-2xl overflow-y-auto max-h-[85vh]"
            >
              <button 
                onClick={() => setShowActivities(false)}
                className="absolute top-4 right-4 text-cinema-text-muted hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <h3 className="text-2xl md:text-3xl font-serif text-white mb-2 italic tracking-wide">
                Extra Curricular Activities
              </h3>
              <div className="w-12 h-[1px] bg-cinema-gold/60 mb-8" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {activities.map((activity, idx) => (
                  <div key={idx} className="group relative overflow-hidden border border-cinema-border/30 bg-black/40">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={activity.image} 
                        alt={activity.name} 
                        className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-[0.16,1,0.3,1]"
                      />
                    </div>
                    <div className="p-4 border-t border-cinema-border/30">
                      <h4 className="text-cinema-gold font-display text-sm uppercase tracking-widest">{activity.name}</h4>
                      {activity.role && <p className="text-xs text-cinema-text-muted font-mono mt-1 uppercase tracking-wider">{activity.role}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
