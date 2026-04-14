import type { Link, LinkValue } from "@/types";

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
];

export const skills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "HTML5",
  "Node.js",
  "Express.js",
  "SQL",
  "Redux",
  "Redux Toolkit",
  "React Context",
  "React Hooks",
  "CSS3",
  "Tailwind CSS",
  "shadcn/ui",
  "React Hook Form",
  "Zod",
  "REST APIs",
  "Jest",
  "React Testing Library",
];

export const projects = [
  {
    title: "E-commerce Shopping Platform",

    description:
      "A full-featured e-commerce platform with authentication, payments, admin tools, reviews, and email receipts.",
    image: "/projects/prostore.webp",
    imageSrc: [],
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Next Auth",
      "PayPal",
      "Stripe",
      "Tailwind CSS",
      "Shadcn UI",
      "Jest",
    ],
    link: "https://prostore-beta-five.vercel.app/",
    labelLink: "Visit Prostore Shopping Platform",
    github: "https://github.com/liaHi19/prostore",
    labelGithub: "Visit Project Prostore on Github",
  },
];

export const experiences = [
  {
    period: "2023 — Present",
    role: "Frontend Developer",
    company: "N-and Group",
    description:
      "Built and maintained React and Next.js applications for enterprise clients.",
    technologies: ["React", "TypeScript", "Next.js", "REST API"],
    isCurrent: true,
  },
  {
    period: "2022 — 2022",
    role: "React Developer",
    company: "InvertorSoft",
    description:
      "Delivered custom web solutions for small businesses, managing everything from design to deployment.",
    technologies: ["React", "Redux", "Firebase"],
    isCurrent: false,
  },
];

export const socialLinks: Link[] = [
  {
    icon: "Github",
    href: "https://github.com/liaHi19",
    label: "Personal github account - Nataliia Hirniak",
  },
  {
    icon: "Linkedin",
    href: "https://www.linkedin.com/in/nataliia-hirniak-075537255/",
    label: "Personal LinkedIn account - Nataliia Hirniak",
  },
];

export const contactInfo: LinkValue[] = [
  {
    icon: "Mail",
    label: "Email",
    value: "gn.natalia19@gmail.com",
    href: "mailto:gn.natalia19@gmail.com",
  },

  {
    icon: "MapPin",
    label: "Location",
    value: "Bristol, UK",
    href: "https://maps.app.goo.gl/M5rVCCviRGvieS8E8",
  },
];

export const heroImgSrc = [
  { src: "/hero/hero-bg-1774w.webp", width: 1774 },
  { src: "/hero/hero-bg-1996w.webp", width: 1996 },
  { src: "/hero/hero-bg-2466w.webp", width: 2466 },
  { src: "/hero/hero-bg-2660w.webp", width: 2660 },
  { src: "/hero/hero-bg-3548w.webp", width: 3548 },
  { src: "/hero/hero-bg-3697w.webp", width: 3697 },
];

export const ISAVAILABLE = false;
