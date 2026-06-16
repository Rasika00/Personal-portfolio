import { Project, Experience, Chapter } from "./types";

export const PERSONAL_INFO = {
  name: "Rasika Priyanath",
  title: "Undergraduate ICT Student",
  tagline: "Passionate about building robust information systems and scalable digital experiences.",
  location: "Sri Lanka",
  philosophy: "I am an undergraduate Information and Communication Technology (ICT) student at Rajarata University of Sri Lanka, driven by a deep interest in software engineering, systems architecture, and modern web development. I believe technology should bridge the gap between complex data and human accessibility. I am constantly learning, experimenting, and applying new computational concepts to create solutions that are powerful, secure, and user-centric.",
  email: "rasikapriyanath62@gmail.com",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    vimeo: "https://vimeo.com",
    readcv: "https://read.cv"
  },
  avatar: "https://res.cloudinary.com/dpdsdpmgg/image/upload/q_auto/f_auto/v1781575877/copy_of_img-20241021-wa0059_sucow9.jpg" // Sleek professional moody headshot
};

export const CHAPTERS: Chapter[] = [
  { id: "vision", title: "The Vision", subtitle: "Core Philosophy & Identity", phase: "Chapter I" },
  { id: "archive", title: "The Archive", subtitle: "Selected Projects & Work", phase: "Chapter II" },
  { id: "journey", title: "The Journey", subtitle: "Education & Chronology", phase: "Chapter III" },
  { id: "colophon", title: "The Colophon", subtitle: "Secure Transmission & Credits", phase: "Chapter IV" }
];

export const PROJECTS: Project[] = [
  {
    id: "aether",
    title: "Data Analytics Dashboard",
    subtitle: "Web-based Visualization Platform",
    category: "Software Engineering",
    description: "A high-performance web dashboard processing real-time analytics with interactive data visualizations. Built as an advanced project to handle large datasets.",
    role: "Full Stack Developer",
    year: "2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    link: "#",
    challenge: "Processing and rendering thousands of data points without blocking the browser thread or causing UI lag.",
    solution: "Implemented efficient data processing techniques and virtualized lists for rendering, achieving smooth scrolling on complex data grids.",
    stats: [
      { label: "Data Points", value: "10K+" },
      { label: "Load Time", value: "< 800ms" },
      { label: "Optimization", value: "60 FPS" }
    ]
  },
  {
    id: "monolith",
    title: "Modern E-Commerce Store",
    subtitle: "Headless Web Application",
    category: "Web Development & Design",
    description: "A sleek, conversion-optimized headless e-commerce concept featuring seamless navigation, instant page loads, and a modern design system.",
    role: "Frontend Developer",
    year: "2024",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    tags: ["Next.js", "Framer Motion", "API Integration", "Tailwind CSS"],
    link: "#",
    challenge: "Creating a highly interactive and visual shopping experience while maintaining performance standards.",
    solution: "Utilized Next.js static site generation alongside a carefully crafted custom design system for an instant, app-like feel.",
    stats: [
      { label: "Lighthouse", value: "100/100" },
      { label: "LCP", value: "0.8s" },
      { label: "Design", value: "Responsive" }
    ]
  },
  {
    id: "vortex",
    title: "Real-time Chat App",
    subtitle: "Collaborative Workspace",
    category: "Software Engineering",
    description: "A full-stack collaborative application allowing users to share messages and resources in real-time via WebSockets.",
    role: "Full Stack Developer",
    year: "2023",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Express", "Socket.io", "MongoDB"],
    link: "#",
    challenge: "Synchronizing state across multiple active clients instantly without data loss.",
    solution: "Implemented WebSocket connections for low-latency bidirectional communication between the server and clients.",
    stats: [
      { label: "Real-time", value: "Yes" },
      { label: "Latency", value: "< 50ms" },
      { label: "Database", value: "NoSQL" }
    ]
  },
  {
    id: "nebula",
    title: "AI Content Studio",
    subtitle: "Generative AI Integration",
    category: "Web Development & AI",
    description: "An intelligent web application concept that integrates large language models to help users generate and format text.",
    role: "Developer & Designer",
    year: "2023",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Gemini API", "Tailwind CSS", "Vite"],
    link: "#",
    challenge: "Designing an intuitive interface for AI prompt generation accessible to any user.",
    solution: "Developed an editor with embedded AI commands and streaming responses for a fluid user experience.",
    stats: [
      { label: "Response", value: "< 1s" },
      { label: "API", value: "Gemini" },
      { label: "UI/UX", value: "Custom" }
    ]
  }
];

export const EXPERIENCE_TIMELINE: Experience[] = [
  {
    id: "exp-1",
    role: "Undergraduate Student",
    company: "Rajarata University of Sri Lanka",
    period: "Present",
    phase: "Phase III: Higher Education",
    description: "Pursuing my undergraduate degree with a focus on computer science, software engineering, and modern web technologies.",
    achievements: [
      "Building a strong foundation in algorithms, data structures, and software architecture",
      "Engaging in self-driven projects focusing on full-stack web development and UI/UX design",
      "Actively exploring new technologies like React, Next.js, Node.js, and cloud platforms"
    ]
  },
  {
    id: "exp-2",
    role: "Advanced Level Studies",
    company: "B/Dharmapala Maha Vidyalaya, Bandarawela",
    period: "Completed",
    phase: "Phase II: Secondary Education",
    description: "Completed my advanced level education, building the analytical and academic foundation for my university studies.",
    achievements: [
      "Developed a strong analytical mindset through rigorous coursework",
      "Participated in school activities fostering teamwork and leadership",
      "Discovered my initial passion for technology and digital creation"
    ]
  },
  {
    id: "exp-3",
    role: "Self-Taught Developer & Designer",
    company: "Independent Learning",
    period: "Ongoing",
    phase: "Phase I: Foundation",
    description: "Continuously expanding my skill set through independent projects, online courses, and hands-on coding.",
    achievements: [
      "Mastered the fundamentals of HTML, CSS, JavaScript, and modern design principles",
      "Created multiple personal projects to apply theoretical knowledge to practical applications",
      "Developed an eye for detail and aesthetics in user interface design"
    ]
  }
];

