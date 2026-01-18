import { PersonalInfo, NavItem } from "./types";

export const personalInfo: PersonalInfo = {
  name: "Kristaps Krūmiņš",
  title: "Senior Software Engineer",
  tagline:
    "Full-stack engineer with nearly 10 years of professional experience and a passion for working on backend services and tackling system design issues.",
  location: "Zurich, Switzerland",
  resumeUrl:
    process.env.NEXT_PUBLIC_RESUME_URL ||
    "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_HERE",
  social: {
    linkedin:
      process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/krumins-kristaps/",
    github: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/kruminsh",
  },
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
