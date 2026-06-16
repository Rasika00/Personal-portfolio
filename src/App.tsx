import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "./types";
import { CHAPTERS, PROJECTS } from "./data";

// Component imports
import CinematicsBackground from "./components/CinematicsBackground";
import CinematicOverlay from "./components/CinematicOverlay";
import Prologue from "./components/Prologue";
import Vision from "./components/Vision";
import Archive from "./components/Archive";
import Journey from "./components/Journey";
import Colophon from "./components/Colophon";

// Web Audio API Synthesizer Nodes
let audioCtx: AudioContext | null = null;
let droneOsc1: OscillatorNode | null = null;
let droneOsc2: OscillatorNode | null = null;
let humFilter: BiquadFilterNode | null = null;
let masterGain: GainNode | null = null;

export default function App() {
  const [activeChapter, setActiveChapter] = useState<string>("home"); // home = Prologue
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  
  // Cinematic Overlay & Shutter state parameters
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);
  const [isChangingChapter, setIsChangingChapter] = useState<boolean>(false);
  const [nextChapterTitle, setNextChapterTitle] = useState<string>("");
  const [audioActive, setAudioActive] = useState<boolean>(false);

  // Scroller reference to reset scroll top on page transition
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Keyboard shortcut listener (Esc dismisses inspected files)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Web Audio Synth Controller
  const toggleAudio = () => {
    if (audioActive) {
      stopAmbientScore();
      setAudioActive(false);
    } else {
      startAmbientScore();
      setAudioActive(true);
    }
  };

  const startAmbientScore = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!audioCtx) {
        audioCtx = new AudioContextClass();
      }

      if (audioCtx.state === "suspended") {
        audioCtx.resume();
      }
      
      // Warm low-frequency filtering
      humFilter = audioCtx.createBiquadFilter();
      humFilter.type = "lowpass";
      humFilter.frequency.setValueAtTime(140, audioCtx.currentTime); // moody warm hum base
      
      // Master cinematic audio throttle
      masterGain = audioCtx.createGain();
      masterGain.gain.setValueAtTime(0, audioCtx.currentTime);
      
      // LOW OSC - Root C2 (Deep dark atmospheric anchor drone)
      droneOsc1 = audioCtx.createOscillator();
      droneOsc1.type = "sawtooth";
      droneOsc1.frequency.setValueAtTime(65.41, audioCtx.currentTime); 
      
      // MID OSC - Perfect fifth G2 (Aetheric cinematic interval)
      droneOsc2 = audioCtx.createOscillator();
      droneOsc2.type = "sine";
      droneOsc2.frequency.setValueAtTime(98.00, audioCtx.currentTime);

      // Connecting audio web node structures
      droneOsc1.connect(humFilter);
      droneOsc2.connect(humFilter);
      humFilter.connect(masterGain);
      masterGain.connect(audioCtx.destination);
      
      droneOsc1.start();
      droneOsc2.start();
      
      // Smooth fade-in over 4 seconds so it feels natural
      masterGain.gain.linearRampToValueAtTime(0.22, audioCtx.currentTime + 4.0);
    } catch (err) {
      console.warn("Web Audio API not supported or interaction restricted.", err);
    }
  };

  const stopAmbientScore = () => {
    if (masterGain && audioCtx) {
      try {
        masterGain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 1.0);
        setTimeout(() => {
          if (droneOsc1) { droneOsc1.stop(); droneOsc1.disconnect(); }
          if (droneOsc2) { droneOsc2.stop(); droneOsc2.disconnect(); }
          if (humFilter) { humFilter.disconnect(); }
          if (masterGain) { masterGain.disconnect(); }
          if (audioCtx) { audioCtx.close(); }
          audioCtx = null;
        }, 1100);
      } catch (err) {
        console.warn("Error releasing synthesiser nodes context", err);
      }
    }
  };

  // Safe release on unmount
  useEffect(() => {
    return () => {
      stopAmbientScore();
    };
  }, []);

  // First lock sequence dismisset
  const handleEnterTheater = () => {
    setIsFirstLoad(false);
    // Boot up context synthesis on user click interaction
    startAmbientScore();
    setAudioActive(true);
  };

  // Orchestrated Chapter selector with transitional shutters
  const handleSelectChapter = (chapterId: string) => {
    if (activeChapter === chapterId) return;

    // Determine shutter display names
    let nextTitle = "Prologue";
    if (chapterId !== "home") {
      const match = CHAPTERS.find((ch) => ch.id === chapterId);
      if (match) nextTitle = `${match.phase}: ${match.title}`;
    }

    setNextChapterTitle(nextTitle);
    setIsChangingChapter(true);

    // Trigger full screen blind shutters transition fade
    setTimeout(() => {
      setActiveChapter(chapterId);
      setActiveProject(null); // Dismiss project view
      
      // Auto-Scroll standard active layout panel to top
      if (scrollerRef.current) {
        scrollerRef.current.scrollTop = 0;
      }
    }, 850);

    // Retract curtains
    setTimeout(() => {
      setIsChangingChapter(false);
    }, 1600);
  };

  // Inspect selection handler
  const handleInspectProject = (project: Project | null) => {
    setActiveProject(project);
  };

  // Render correct active content viewport
  const renderActiveChapter = () => {
    switch (activeChapter) {
      case "home":
        return (
          <Prologue
            onSelectChapter={handleSelectChapter}
            audioActive={audioActive}
            toggleAudio={toggleAudio}
          />
        );
      case "vision":
        return <Vision />;
      case "archive":
        return (
          <Archive
            onInspectProject={handleInspectProject}
            inspectedProject={activeProject}
          />
        );
      case "journey":
        return <Journey />;
      case "colophon":
        return <Colophon />;
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen font-sans bg-cinema-black selection:bg-cinema-gold selection:text-black overflow-hidden flex flex-col justify-between">
      {/* Immersive static overlay overlays */}
      <div className="film-grain" />
      <div className="scanlines" />
      <div className="cinematic-vignette" />

      {/* Panoramic Dynamic crossfade backgound system */}
      <CinematicsBackground activeChapter={activeChapter} activeProject={activeProject} />

      {/* Floating Header Cinematic Nav Bar */}
      <header className="fixed top-0 left-0 w-full z-40 px-6 pt-14 pointer-events-none">
        <div className="max-w-6xl mx-auto flex items-center justify-center">

          {/* Floating Action Navigation menu list */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-1.5 md:gap-3 p-1.5 bg-cinema-dark/80 border border-cinema-border/50 backdrop-blur-cinematic shadow-2xl pointer-events-auto rounded-none"
          >
            <button
              onClick={() => handleSelectChapter("home")}
              className={`px-3 py-1.5 text-[9px] md:text-xs font-display uppercase tracking-widest cursor-pointer transition-all duration-300 ${
                activeChapter === "home" ? "bg-cinema-gold text-black font-semibold" : "text-cinema-text-muted hover:text-white"
              }`}
            >
              Prologue
            </button>
            {CHAPTERS.map((ch) => (
              <button
                key={ch.id}
                onClick={() => handleSelectChapter(ch.id)}
                className={`px-3 py-1.5 text-[9px] md:text-xs font-display uppercase tracking-widest cursor-pointer transition-all duration-300 ${
                  activeChapter === ch.id ? "bg-cinema-gold text-black font-semibold" : "text-cinema-text-muted hover:text-white"
                }`}
              >
                {ch.title.split(" ")[1] || ch.title}
              </button>
            ))}
          </motion.nav>
        </div>
      </header>

      {/* Main Render Section */}
      <div
        ref={scrollerRef}
        className={`w-full h-screen pt-[16vh] pb-[12vh] relative z-10 scroll-smooth ${activeChapter === "home" ? "overflow-hidden" : "overflow-y-auto"}`}
      >
        <AnimatePresence mode="wait">
          <motion.main
            key={activeChapter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full flex flex-col"
          >
            {renderActiveChapter()}
          </motion.main>
        </AnimatePresence>
      </div>

      {/* Hologram Intros and Transitions screens */}
      <CinematicOverlay
        isFirstLoad={isFirstLoad}
        onEnter={handleEnterTheater}
        isChangingChapter={isChangingChapter}
        nextChapterTitle={nextChapterTitle}
      />
    </div>
  );
}
