import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PERSONAL_INFO } from "../data";
import { Mail, MapPin, Layers, Award, Aperture, Cpu, X } from "lucide-react";

export default function Vision() {
  const [showActivities, setShowActivities] = useState(false);

  type Activity = {
    name: string;
    role?: string;
    image?: string;
    images?: string[];
    events?: string[];
    colSpan?: number;
  };

  const activities: Activity[] = [
    {
      name: "Cricket",
      role: "Soft ball-A left handed batsman",
      image: "https://res.cloudinary.com/dpdsdpmgg/image/upload/q_auto/f_auto/v1781536154/c843fd58-a33e-46b3-98cf-3609d8ed6fc1_duaiqe.jpg",
    },
    {
      name: "Athletics",
      role: "uva province 2019 new record / All island runner",
      events: ["100m", "200m", "Long Jump", "110 hurdles"],
      images: [
        "https://res.cloudinary.com/dpdsdpmgg/image/upload/v1781534501/Gemini_Generated_Image_np3nx7np3nx7np3n_omquyy.png",
        "https://res.cloudinary.com/dpdsdpmgg/image/upload/q_auto/f_auto/v1781534520/Gemini_Generated_Image_3ahxiu3ahxiu3ahx_1_evbhd7.png",
        "https://res.cloudinary.com/dpdsdpmgg/image/upload/q_auto/f_auto/v1781535693/720a77b4-96ba-4d4c-af90-30aa12640758_wzk5oz.jpg",
        "https://res.cloudinary.com/dpdsdpmgg/image/upload/q_auto/f_auto/v1781535548/1950a125d0b93b41f8436e11f8bdd2ff_diajsw.jpg"
      ],
      colSpan: 2,
    },
    {
      name: "Volleyball",
      role: "Libero player",
      image: "https://res.cloudinary.com/dpdsdpmgg/image/upload/q_auto/f_auto/v1781576666/copy_of_whatsapp_image_2026-06-15_at_84501_pm_ldil4j.jpg",
    },
    {
      name: "elle",
      role: "left hand player",
      image: "https://res.cloudinary.com/dpdsdpmgg/image/upload/q_auto/f_auto/v1781577533/9ff6c0ba-e45a-4ad9-8f83-45cb51075802_zd2lgo.jpg",
    },
    {
      name: "wushu sanda figher",
      role: "national champion",
      image: "https://res.cloudinary.com/dpdsdpmgg/image/upload/q_auto/f_auto/v1781580028/copy_of_88a7e16a-a44c-48c7-b210-6c2a609c36f4_wdzs4m.jpg",
    },
    {
      name: "wushu tai chi , Whip",
      role: "national Youth meet Gold medal",
      images: [
        "https://res.cloudinary.com/dpdsdpmgg/image/upload/q_auto/f_auto/v1781579542/images_1_xpt4ct.jpg",
        "https://res.cloudinary.com/dpdsdpmgg/image/upload/q_auto/f_auto/v1781579542/images_gahx1o.jpg"
      ]
    },
    {
      name: "Football",
      role: "Goal Keeper",
      image: "https://res.cloudinary.com/dpdsdpmgg/image/upload/q_auto/f_auto/v1781582880/14310327_600897230094517_8561703971405191187_o_q1dma6.jpg",
    },

  ];
  const specs = [
    { icon: MapPin, label: "Core Coordinates", value: PERSONAL_INFO.location },
    { icon: Mail, label: "Direct Terminal", value: PERSONAL_INFO.email },
    { icon: Cpu, label: "Academic Focus", value: "Information & Communication Technology, Software Engineering" },
    { icon: Layers, label: "Specialty Stack", value: "React, TypeScript, Node.js, Databases" },
    { icon: Award, label: "Core Philosophy", value: "Scalability, Security & User-Centric Design" },
    { icon: Aperture, label: "Current Objective", value: "Applying academic principles to real-world software solutions" },
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
            "Information systems shouldn't just process data. They must bridge the gap between complex logic and human accessibility."
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="space-y-6 text-cinema-text-muted text-base md:text-lg font-sans font-light leading-relaxed tracking-wide text-justify"
          >
            <p>{PERSONAL_INFO.philosophy}</p>
            <p>
              By combining robust backend architectures, efficient algorithms, and responsive user interfaces,
              we can construct digital platforms that solve real-world problems. Programming becomes a tool for innovation.
              Data structures organize complexity. Continuous learning bridges the gap between foundational academic theories
              and cutting-edge industry standards.
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

            <div className="relative overflow-hidden aspect-[3/4] h-full w-full bg-cinema-black">
              <img
                src={PERSONAL_INFO.avatar}
                alt={PERSONAL_INFO.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter contrast-125 transition-all duration-700 ease-[0.16,1,0.3,1] scale-105 group-hover:scale-100"
              />
              {/* Scanline reflection overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cinema-black via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute bottom-4 right-4 text-[9px] font-mono opacity-45 tracking-widest bg-black/70 px-2 py-1 border border-cinema-border/40 uppercase">
                Cam: 01 // REC
              </div>
            </div>

            <div className="mt-4 text-center">
              <div className="text-xs font-display text-cinema-gold uppercase tracking-[0.25em]">{PERSONAL_INFO.name}</div>
              <div className="text-[10px] font-mono text-cinema-text-muted mt-1 uppercase tracking-widest">Tech Enthusiast</div>
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
              className="relative w-full max-w-6xl bg-cinema-dark border border-cinema-border/40 p-6 md:p-10 shadow-2xl overflow-y-auto max-h-[85vh]"
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

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {activities.map((activity, idx) => (
                  <div key={idx} className={`group relative overflow-hidden border border-cinema-border/30 bg-black/40 ${activity.colSpan ? `sm:col-span-${activity.colSpan}` : ''}`}>
                    {activity.images ? (
                      <div className={`grid ${activity.images.length === 4 ? 'grid-cols-4' : 'grid-cols-2'} gap-1 aspect-[4/3] ${activity.colSpan === 2 ? 'sm:aspect-[8/3]' : ''}`}>
                        {activity.images.map((img, i) => (
                          <div key={i} className="overflow-hidden relative h-full w-full">
                            <img
                              src={img}
                              alt={`${activity.name} ${i + 1}`}
                              className="w-full h-full absolute inset-0 object-cover filter contrast-125 group-hover:scale-105 transition-all duration-700 ease-[0.16,1,0.3,1]"
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={activity.image}
                          alt={activity.name}
                          className="w-full h-full object-cover filter contrast-125 group-hover:scale-105 transition-all duration-700 ease-[0.16,1,0.3,1]"
                        />
                      </div>
                    )}
                    <div className="p-4 border-t border-cinema-border/30">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <div>
                          <h4 className="text-cinema-gold font-display text-sm uppercase tracking-widest">{activity.name}</h4>
                          {activity.role && <p className="text-xs text-cinema-text-muted font-mono mt-1 uppercase tracking-wider">{activity.role}</p>}
                        </div>
                        {activity.events && (
                          <div className="flex flex-wrap gap-1.5 sm:justify-end sm:max-w-[60%]">
                            {activity.events.map((event, i) => (
                              <span key={i} className="text-[9px] font-mono border border-cinema-border/40 px-1.5 py-0.5 text-cinema-text-muted uppercase tracking-wider bg-cinema-dark/50">
                                {event}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
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
