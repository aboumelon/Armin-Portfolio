import alprCover from "@/assets/alpr-cover.jpg";

export const profile = {
  name: "Armin Aboutalebi",
  handle: "@Armin1831",
  email: "armin.aboutalebi@example.com",
  github: "https://github.com/Armin1831",
  linkedin: "https://linkedin.com/in/",
  telegram: "https://t.me/",
  location: "Iran",
  avatar: "https://avatars.githubusercontent.com/u/99498108?v=4",
};

export type Skill = { name: string; level: number };

export const skills: { frontend: Skill[]; backend: Skill[]; tools: Skill[] } = {
  frontend: [
    { name: "React", level: 92 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Redux", level: 78 },
    { name: "Vite", level: 82 },
  ],
  backend: [
    { name: "FastAPI", level: 85 },
    { name: "Python", level: 88 },
    { name: "PostgreSQL", level: 75 },
    { name: "REST APIs", level: 88 },
    { name: "WebSockets", level: 70 },
    { name: "Firebase", level: 72 },
  ],
  tools: [
    { name: "Git & GitHub", level: 90 },
    { name: "Docker", level: 72 },
    { name: "Linux", level: 78 },
    { name: "CI/CD", level: 68 },
    { name: "OpenCV", level: 75 },
    { name: "SCSS", level: 85 },
  ],
};

export const allTech = [
  "React", "Next.js", "TypeScript", "Tailwind", "FastAPI", "Python",
  "PostgreSQL", "Docker", "OpenCV", "Linux", "Git", "REST",
  "Redux", "Firebase", "SCSS", "WebSockets",
];

export type Project = {
  slug: string;
  titleKey: string;
  descKey: string;
  tags: string[];
  featured: boolean;
  href: string;
  image?: string;
  github: string | null;
  demo: string | null;
  videoUrl?: string | null;
};

export const projects: Project[] = [
  {
    slug: "alpr",
    titleKey: "projects.items.alpr.title",
    descKey: "projects.items.alpr.desc",
    tags: ["FastAPI", "React", "OpenCV", "Computer Vision"],
    featured: true,
    href: "/projects/alpr",
    image: alprCover,
    github: "https://github.com/Armin1831",
    demo: null,
    videoUrl: null,
  },
  {
    slug: "portfolio",
    titleKey: "projects.items.portfolio.title",
    descKey: "projects.items.portfolio.desc",
    tags: ["TypeScript", "React", "Tailwind"],
    featured: false,
    href: "/projects/portfolio",
    github: "https://github.com/Armin1831/Armin-Portfolio",
    demo: null,
    videoUrl: null,
  },
  {
    slug: "shop-redux",
    titleKey: "projects.items.shop.title",
    descKey: "projects.items.shop.desc",
    tags: ["React", "Redux", "SCSS"],
    featured: false,
    href: "/projects/shop-redux",
    github: "https://github.com/Armin1831/shop-redux",
    demo: null,
    videoUrl: null,
  },
  {
    slug: "todo-firebase",
    titleKey: "projects.items.todo.title",
    descKey: "projects.items.todo.desc",
    tags: ["React", "Firebase", "JavaScript"],
    featured: false,
    href: "/projects/todo-firebase",
    github: "https://github.com/Armin1831/todo-firebase",
    demo: "https://firebase-react-todoapp.netlify.app",
    videoUrl: null,
  },
];

export const experience = [
  { year: "2024 — Now", roleKey: "experience.items.0.role", companyKey: "experience.items.0.company", descKey: "experience.items.0.desc" },
  { year: "2022 — 2024", roleKey: "experience.items.1.role", companyKey: "experience.items.1.company", descKey: "experience.items.1.desc" },
  { year: "2020 — 2022", roleKey: "experience.items.2.role", companyKey: "experience.items.2.company", descKey: "experience.items.2.desc" },
];
