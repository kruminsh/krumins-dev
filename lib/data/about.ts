import { Education, Certification, Language } from "../types";

export const education: Education = {
  institution: "Riga Technical University",
  degree: "Bachelor Degree of Engineering Sciences",
  field: "Computer Control and Computer Science",
};

export const certifications: Certification[] = [
  {
    name: "AZ-900: Azure Fundamentals",
    issuer: "Microsoft",
    status: "Certified",
  },
];

export const languages: Language[] = [
  { name: "English", level: "C1" },
  { name: "German", level: "A2" },
  { name: "Russian", level: "B1" },
  { name: "Latvian", level: "Native" },
];

export const softSkills: string[] = [
  "Adaptability",
  "Self-organizing",
  "Team Player",
  "Problem-solving",
  "Leadership",
  "Good communication",
  "Quick learner",
];

export const aboutBio = `Full-stack engineer with nearly 10 years of professional experience and a passion for working on backend services and tackling system design issues. Throughout my career, I've worked across diverse industries including aviation, insurance, finance, and cultural heritage, delivering scalable solutions on multiple continents.

I specialize in .NET technologies, cloud infrastructure, and modern frontend frameworks. My experience spans from leading development teams to implementing complex integrations and migrating legacy systems to modern architectures.

Currently based in Zurich, Switzerland, I'm focused on building robust, scalable systems that solve real-world problems.`;
