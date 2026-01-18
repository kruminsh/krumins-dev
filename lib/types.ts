// Personal Information
export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  location: string;
  resumeUrl: string;
  social: SocialLinks;
}

export interface SocialLinks {
  linkedin?: string;
  github?: string;
  twitter?: string;
}

// Work Experience
export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

// Technical Skills
export interface Skill {
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  category: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

// Education & Certifications
export interface Education {
  institution: string;
  degree: string;
  field: string;
  startYear?: string;
  endYear?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  status: string;
}

export interface Language {
  name: string;
  level: string;
}

// Contact Form
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

// Navigation
export interface NavItem {
  label: string;
  href: string;
}
