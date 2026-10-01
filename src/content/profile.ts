import alprCover from "@/assets/alpr-cover.jpg";
import vpngateLinuxCover from "@/assets/vpngate-linux-cover.png";

export const profile = {
  name: "Armin Aboutalebi",
  handle: "@aboumelon",
  email: "aboumelon1831@gmail.com",
  github: "https://github.com/aboumelon",
  linkedin: "https://linkedin.com/in/armin-aboutalebia",
  telegram: "https://t.me/AbouMelon",
  location: "Iran",
  avatar: "https://avatars.githubusercontent.com/u/99498108?v=4",
};

export type Skill = { name: string; level: number };

export const skills: { frontend: Skill[]; backend: Skill[]; tools: Skill[] } = {
  frontend: [
    { name: "React", level: 100 },
    { name: "Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "TanStack Start", level: 85 },
    { name: "Tailwind CSS", level: 70 },
    { name: "Redux", level: 70 },
    { name: "Vite", level: 70 },
  ],
  backend: [
    { name: "Python", level: 100 },
    { name: "REST APIs", level: 90 },
    { name: "FastAPI", level: 85 },
    { name: "RabbitMQ", level: 80 },
    { name: "PostgreSQL", level: 75 },
    { name: "WebSockets", level: 70 },
  ],
  tools: [
    { name: "Git & GitHub", level: 90 },
    { name: "Docker", level: 80 },
    { name: "OpenCV", level: 70 },
    { name: "CI/CD", level: 65 },
    { name: "Linux", level: 50 },
  ],
};

export const allTech = [
  "Python",
  "FastAPI",
  "PostgreSQL",
  "RabbitMQ",
  "OpenCV",
  "React",
  "Next.js",
  "TanStack Start",
  "TypeScript",
  "Tailwind",
  "Docker",
  "Linux",
  "Git",
  "REST",
  "Redux",
  "SCSS",
  "WebSockets",
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
    tags: ["FastAPI", "Next.js", "OpenCV", "Computer Vision"],
    featured: true,
    href: "/projects/alpr",
    image: alprCover,
    github: null,
    demo: null,
    videoUrl: null,
  },
  {
    slug: "fortune-wheel",
    titleKey: "projects.items.fortuneWheel.title",
    descKey: "projects.items.fortuneWheel.desc",
    tags: ["Django", "React", "TypeScript", "PostgreSQL", "Docker"],
    featured: false,
    href: "/projects/fortune-wheel",
    github: "https://github.com/aboumelon/fortune-wheel",
    demo: null,
    videoUrl: "https://youtu.be/p7FBILw5Vlk",
  },
  {
    slug: "portfolio",
    titleKey: "projects.items.portfolio.title",
    descKey: "projects.items.portfolio.desc",
    tags: ["TanStack Start", "TypeScript", "Tailwind", "Radix UI"],
    featured: false,
    href: "/projects/portfolio",
    github: "https://github.com/aboumelon/Armin-Portfolio",
    demo: null,
    videoUrl: null,
  },
  {
    slug: "vpngate-linux",
    titleKey: "projects.items.vpngateLinux.title",
    descKey: "projects.items.vpngateLinux.desc",
    tags: ["Python", "Linux", "SoftEther", "systemd", "Textual"],
    featured: false,
    href: "/projects/vpngate-linux",
    image: vpngateLinuxCover,
    github: "https://github.com/aboumelon/vpngate-linux",
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
    github: "https://github.com/aboumelon/shop-redux",
    demo: null,
    videoUrl: "https://youtu.be/BMQylURXoa8",
  },
  {
    slug: "todo-firebase",
    titleKey: "projects.items.todo.title",
    descKey: "projects.items.todo.desc",
    tags: ["React", "Firebase", "JavaScript"],
    featured: false,
    href: "/projects/todo-firebase",
    github: "https://github.com/aboumelon/todo-firebase",
    demo: "https://firebase-react-todoapp.netlify.app",
    videoUrl: "https://youtu.be/bfkUqT1ZGhc",
  },
];

export const experience = [
  {
    year: "2025 — Now",
    roleKey: "experience.items.0.role",
    companyKey: "experience.items.0.company",
    descKey: "experience.items.0.desc",
  },
  {
    year: "2022 — 2024",
    roleKey: "experience.items.1.role",
    companyKey: "experience.items.1.company",
    descKey: "experience.items.1.desc",
  },
];
