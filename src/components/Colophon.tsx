import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PERSONAL_INFO } from "../data";
import { Send, Terminal, Shield, Check, Globe, Github, Linkedin, Monitor } from "lucide-react";

export default function Colophon() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [transmitState, setTransmitState] = useState<"idle" | "connecting" | "encrypting" | "transmitted">("idle");
  const [progress, setProgress] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("All security clearance fields (Name, Email, Message) are required.");
      return;
    }

    // Trigger state routing animation sequence
    setTransmitState("connecting");
    setProgress(20);

    setTimeout(() => {
      setTransmitState("encrypting");
      setProgress(60);
    }, 1200);

    setTimeout(() => {
      setProgress(100);
      setTransmitState("transmitted");
    }, 2800);
  };

  const handleResetForm = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTransmitState("idle");
    setProgress(0);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-12 text-white relative z-10">
      {/* Chapter Title */}
      <div className="flex flex-col items-start mb-16 md:mb-24">
        <motion.span
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
          className="text-xs md:text-sm font-display uppercase tracking-[0.3em] text-cinema-gold"
        >
          Chapter IV
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-7xl font-serif font-light tracking-tight mt-3 text-white italic"
        >
          The Colophon
        </motion.h2>
        <div className="w-16 h-[1px] bg-cinema-gold/60 mt-6" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Side: Contact Form Section (7 cols) */}
        <div className="lg:col-span-7 bg-cinema-dark/30 border border-cinema-border/35 p-6 md:p-8 backdrop-blur-sm self-stretch flex flex-col justify-between">
          <div className="flex items-center justify-between pb-4 border-b border-cinema-border/20 mb-6">
            <div className="flex items-center gap-2 text-xs font-display uppercase tracking-widest text-cinema-gold">
              <Terminal className="w-4 h-4 text-cinema-gold animate-pulse" />
              <span>Secure Transceiver Portal</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-0.5 border border-cinema-gold/30 bg-cinema-gold/5 text-[9px] font-mono text-cinema-gold uppercase tracking-wider">
              <Shield className="w-3 h-3" />
              <span>SSL Router ACTIVE</span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {transmitState === "idle" && (
              <motion.form
                key="form-transmission"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleFormSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-display uppercase tracking-widest text-cinema-text-muted">
                      Your Identity
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g., Director Stanley"
                      required
                      className="w-full bg-cinema-black/60 border border-cinema-border hover:border-cinema-gold/40 focus:border-cinema-gold text-sm text-white px-4 py-3 rounded-none focus:outline-none transition-colors font-sans"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-display uppercase tracking-widest text-cinema-text-muted">
                      Direct Email Endpoint
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g., stanley@cinema.net"
                      required
                      className="w-full bg-cinema-black/60 border border-cinema-border hover:border-cinema-gold/40 focus:border-cinema-gold text-sm text-white px-4 py-3 rounded-none focus:outline-none transition-colors font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-display uppercase tracking-widest text-cinema-text-muted">
                    Transmission Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Brief objective summary"
                    className="w-full bg-cinema-black/60 border border-cinema-border hover:border-cinema-gold/40 focus:border-cinema-gold text-sm text-white px-4 py-3 rounded-none focus:outline-none transition-colors font-sans"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-display uppercase tracking-widest text-cinema-text-muted">
                    Clearance Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Begin secure packet text load..."
                    rows={5}
                    required
                    className="w-full bg-cinema-black/60 border border-cinema-border hover:border-cinema-gold/40 focus:border-cinema-gold text-sm text-white px-4 py-3 rounded-none focus:outline-none transition-colors font-sans resize-none"
                  />
                </div>

                <button
                  type="submit"
                  id="btn-send-transmission"
                  className="w-full py-4 bg-white text-black font-display font-medium uppercase tracking-[0.2em] text-xs cursor-pointer flex items-center justify-center gap-2 hover:bg-cinema-gold hover:text-white transition-all duration-300"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Payload Package</span>
                </button>
              </motion.form>
            )}

            {transmitState !== "idle" && (
              <motion.div
                key="hologram-transmission"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-12 flex flex-col items-center text-center justify-center space-y-6"
              >
                {transmitState === "connecting" && (
                  <>
                    <div className="w-16 h-16 rounded-full border-2 border-dashed border-cinema-gold border-t-transparent animate-spin flex items-center justify-center" />
                    <div className="space-y-1">
                      <h4 className="font-display text-sm uppercase tracking-[0.25em] text-cinema-gold animate-pulse">
                        Resolving Route Gateways
                      </h4>
                      <p className="text-xs font-mono text-cinema-text-muted">CONNECTING SECURE BEAM...</p>
                    </div>
                  </>
                )}

                {transmitState === "encrypting" && (
                  <>
                    <div className="relative w-20 h-20 flex items-center justify-center">
                      <div className="absolute inset-0 border border-double border-cinema-amber rounded-full animate-ping opacity-60" />
                      <Shield className="w-8 h-8 text-cinema-amber animate-bounce" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-display text-sm uppercase tracking-[0.25em] text-cinema-amber">
                        Packing & Encrypting Nodes
                      </h4>
                      <p className="text-xs font-mono text-cinema-text-muted">RSA-4096 SHA256 VALIDATING...</p>
                    </div>
                  </>
                )}

                {transmitState === "transmitted" && (
                  <>
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="w-16 h-16 rounded-full bg-cinema-gold/15 border border-cinema-gold flex items-center justify-center"
                    >
                      <Check className="w-8 h-8 text-cinema-gold" />
                    </motion.div>
                    <div className="space-y-1.5">
                      <h4 className="font-display text-sm uppercase tracking-[0.25em] text-cinema-gold">
                        Transmission Successful
                      </h4>
                      <p className="text-xs font-mono text-cinema-text-muted">
                        DIRECT LOGGED: {PERSONAL_INFO.email}
                      </p>
                      <p className="max-w-md font-sans text-xs text-cinema-text-muted font-light mt-2 px-6">
                        Thank you for routing your communication packet. {PERSONAL_INFO.name} has logged your
                        entry and will establish synchronous beam contacts shortly.
                      </p>
                    </div>
                    <button
                      onClick={handleResetForm}
                      className="mt-4 px-6 py-2.5 border border-cinema-border hover:border-cinema-gold text-cinema-text-muted hover:text-white font-display text-[10px] uppercase tracking-widest cursor-pointer transition-colors"
                    >
                      Open New Signal Channel
                    </button>
                  </>
                )}

                {/* Secure Progress bar tracer */}
                <div className="w-full max-w-sm bg-cinema-black/80 border border-cinema-border/50 h-3 p-0.5 relative">
                  <div
                    style={{ width: `${progress}%` }}
                    className="h-full bg-gradient-to-r from-cinema-amber to-cinema-gold transition-all duration-300"
                  />
                </div>
                <div className="text-[10px] font-mono text-cinema-text-muted tracking-widest">
                  CLEARANCE DATA TRACER: {progress}% Complete
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Side: Creative Spec Details / Credits List (5 cols) */}
        <div className="lg:col-span-5 space-y-10">
          <div className="space-y-4">
            <h3 className="text-lg font-serif italic text-cinema-gold">Let's craft the future.</h3>
            <p className="text-sm font-sans text-cinema-text-muted font-light leading-relaxed">
              If you have a cinematic campaign, immersive three-dimensional web request, or high-fidelity custom design idea,
              let us unite our vectors. I am available for selective contract collaborations and remote advisory architectures.
            </p>
          </div>

          <div className="space-y-3">
            <div className="text-[10px] font-display uppercase tracking-widest text-[#a1a1a1]">
              Social Vectors (Clearance Linkages)
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-4 border border-cinema-border/30 hover:border-cinema-gold/40 hover:bg-cinema-dark/20 flex items-center justify-between group transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-cinema-text-muted group-hover:text-cinema-gold" />
                  <span className="text-xs font-display uppercase tracking-widest text-[#d1d1d1]">GitHub Directory</span>
                </div>
                <span className="font-mono text-[9px] text-cinema-text-muted group-hover:text-cinema-gold">PROFILES/RASIKA</span>
              </a>

              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-4 border border-cinema-border/30 hover:border-cinema-gold/40 hover:bg-cinema-dark/20 flex items-center justify-between group transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-cinema-text-muted group-hover:text-cinema-amber" />
                  <span className="text-xs font-display uppercase tracking-widest text-[#d1d1d1]">LinkedIn Terminal</span>
                </div>
                <span className="font-mono text-[9px] text-cinema-text-muted group-hover:text-cinema-amber">COMM/NET_882</span>
              </a>

              <div className="p-4 border border-cinema-border/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Monitor className="w-4 h-4 text-cinema-text-muted" />
                  <span className="text-xs font-display uppercase tracking-widest text-cinema-text-muted">Host Server</span>
                </div>
                <span className="font-mono text-[9px] text-cinema-text-muted">SECURE_RUN_C9</span>
              </div>
            </div>
          </div>

          {/* Credits Roll list like dynamic rolling movie credits */}
          <div className="border border-cinema-border/30 p-5 bg-cinema-black/40 space-y-4">
            <div className="text-[10px] font-display uppercase tracking-widest text-cinema-gold mb-1">
              Colophon & App Architecture Credits
            </div>
            <div className="space-y-2 text-[11px] font-sans font-light text-cinema-text-muted leading-relaxed uppercase tracking-wider">
              <div className="flex justify-between">
                <span>Executive Producer</span>
                <span className="text-white font-serif italic">{PERSONAL_INFO.name}</span>
              </div>
              <div className="grid grid-cols-2 text-[10px]">
                <span>Framework</span>
                <span className="text-white font-mono text-right">React 19 + Vite</span>
              </div>
              <div className="grid grid-cols-2 text-[10px]">
                <span>Animation Engine</span>
                <span className="text-white font-mono text-right">Framer Motion v12</span>
              </div>
              <div className="grid grid-cols-2 text-[10px]">
                <span>Color Profiling</span>
                <span className="text-white font-mono text-right">Tailwind V4 Raw Obsidian</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
