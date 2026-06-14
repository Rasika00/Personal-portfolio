export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  role: string;
  year: string;
  image: string;
  tags: string[];
  link?: string;
  challenge: string;
  solution: string;
  stats: { label: string; value: string }[];
}

export interface Chapter {
  id: string;
  title: string;
  subtitle: string;
  phase: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  phase: string;
  description: string;
  achievements: string[];
}
