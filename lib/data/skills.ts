import { TechSkill, SkillGroup } from "../types";

export const techSkills: TechSkill[] = [
  // Professional Toolkit
  {
    id: "csharp",
    name: "C#",
    type: "professional",
    logo: "/images/logos/csharp.svg",
    description:
      "Primary language for backend development across 9+ years of professional experience. Used extensively for building enterprise applications, REST APIs, and microservices.",
    highlights: [
      "Built high-performance APIs for reinsurance and aviation domains",
      "Migrated legacy .NET Framework applications to modern .NET 8/9",
      "Conducted C# programming courses at Riga CODING School",
    ],
    relatedExperience: ["capzlog", "ctco", "lightsoft", "riga-coding-school", "divi-grupa"],
  },
  {
    id: "dotnet",
    name: ".NET",
    type: "professional",
    logo: "/images/logos/dotnet.svg",
    description:
      "Core framework for all backend development work. Experienced with .NET Framework through .NET 9, including migrations and modernization projects.",
    highlights: [
      "Migrated web applications from .NET Framework to .NET 9",
      "Upgraded platforms from .NET 6 to .NET 8",
      "Containerized .NET applications with Docker and Kubernetes",
    ],
    relatedExperience: ["capzlog", "ctco", "lightsoft", "divi-grupa"],
  },
  {
    id: "aspnet",
    name: "ASP.NET Core",
    type: "professional",
    logo: "/images/logos/dotnet.svg",
    description:
      "Framework of choice for building web APIs and applications. Deep experience with REST API design, middleware, dependency injection, and Entity Framework integration.",
    highlights: [
      "Designed RESTful APIs for airline system integrations",
      "Implemented service-oriented architecture for reinsurance platform",
      "Built policy administration and claims processing systems",
    ],
    relatedExperience: ["capzlog", "ctco", "lightsoft"],
  },
  {
    id: "typescript",
    name: "TypeScript",
    type: "professional",
    logo: "/images/logos/typescript.svg",
    description:
      "Primary language for frontend development. Used for building type-safe Angular and Vue.js applications in enterprise environments.",
    highlights: [
      "Developed TypeScript/Angular frontend components for reinsurance platform",
      "Built type-safe web applications with strict mode enabled",
    ],
    relatedExperience: ["capzlog", "ctco"],
  },
  {
    id: "javascript",
    name: "JavaScript",
    type: "professional",
    logo: "/images/logos/javascript.svg",
    description:
      "Extensive experience with JavaScript for frontend development, including jQuery, vanilla JS, and modern ES6+ features.",
    highlights: [
      "Built interactive UI components across multiple enterprise projects",
      "Worked with various frameworks including AngularJS, Ext JS, and jQuery",
    ],
    relatedExperience: ["capzlog", "lightsoft", "tietoevry"],
  },
  {
    id: "angular",
    name: "Angular",
    type: "professional",
    logo: "/images/logos/angular.svg",
    description:
      "Used for building enterprise frontend applications, particularly in the reinsurance domain with complex data visualization and form handling.",
    highlights: [
      "Developed frontend components for international reinsurance platform",
      "Implemented comprehensive testing with Cypress",
    ],
    relatedExperience: ["ctco"],
  },
  {
    id: "java",
    name: "Java",
    type: "professional",
    logo: "/images/logos/java.svg",
    description:
      "Secondary backend language used for enterprise applications, particularly with Spring Boot and Grails frameworks.",
    highlights: [
      "Developed Oracle ERP web applications with Grails",
      "Built integration platforms with Spring framework",
      "Conducted Java programming courses at Riga CODING School",
    ],
    relatedExperience: ["lightsoft", "tietoevry", "riga-coding-school"],
  },
  {
    id: "spring",
    name: "Spring Boot",
    type: "professional",
    logo: "/images/logos/spring.svg",
    description:
      "Used for building Java-based backend services and integration platforms in enterprise environments.",
    highlights: ["Developed integration platforms connecting multiple systems"],
    relatedExperience: ["lightsoft"],
  },
  {
    id: "sqlserver",
    name: "SQL Server",
    type: "professional",
    logo: "/images/logos/sqlserver.svg",
    description:
      "Primary relational database for most projects. Expert-level knowledge in T-SQL, query optimization, and database design.",
    highlights: [
      "Designed database schemas for aviation and reinsurance systems",
      "Optimized complex queries for high-performance applications",
      "Managed data migrations across system upgrades",
    ],
    relatedExperience: ["capzlog", "ctco", "lightsoft"],
  },
  {
    id: "oracle",
    name: "Oracle DB",
    type: "professional",
    logo: "/images/logos/oracle.svg",
    description:
      "Used extensively for financial and banking systems. Deep experience with PL/SQL stored procedures and packages.",
    highlights: [
      "Developed stored procedures for securities and loan accounting systems",
      "Built Oracle ERP customizations with PL/SQL",
    ],
    relatedExperience: ["tietoevry", "divi-grupa"],
  },
  {
    id: "azure",
    name: "Microsoft Azure",
    type: "professional",
    logo: "/images/logos/azure.svg",
    description:
      "Primary cloud platform for deploying and managing applications. Experience with AKS, App Services, and various Azure services.",
    highlights: [
      "Deployed containerized applications to Azure Kubernetes Service",
      "Implemented Azure Service Bus for messaging",
      "Used Azure App Insights for monitoring and diagnostics",
    ],
    relatedExperience: ["ctco"],
  },
  {
    id: "docker",
    name: "Docker",
    type: "professional",
    logo: "/images/logos/docker.svg",
    description:
      "Core tool for containerization and local development environments. Used for packaging applications and enabling consistent deployments.",
    highlights: [
      "Containerized applications into microservices architecture",
      "Created development environments with Docker Compose",
      "Implemented CI/CD pipelines with Docker images",
    ],
    relatedExperience: ["capzlog", "ctco", "tietoevry"],
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    type: "professional",
    logo: "/images/logos/kubernetes.svg",
    description:
      "Used for orchestrating containerized applications in production environments, primarily through Azure Kubernetes Service (AKS).",
    highlights: [
      "Deployed and managed applications on AKS",
      "Configured Helm charts for application deployments",
    ],
    relatedExperience: ["ctco"],
  },
  {
    id: "git",
    name: "Git",
    type: "professional",
    logo: "/images/logos/git.svg",
    description:
      "Version control system used across all projects. Experienced with branching strategies, code reviews, and CI/CD integration.",
    highlights: [
      "Implemented GitFlow and trunk-based development workflows",
      "Integrated with Azure DevOps, GitLab, and GitHub",
    ],
    relatedExperience: ["capzlog", "ctco", "lightsoft", "tietoevry"],
  },
  {
    id: "azuredevops",
    name: "Azure DevOps",
    type: "professional",
    logo: "/images/logos/azuredevops.svg",
    description:
      "Primary platform for CI/CD pipelines, work item tracking, and repository management across multiple enterprise projects.",
    highlights: [
      "Designed and maintained CI/CD pipelines",
      "Managed build and release processes",
      "Integrated automated testing into pipelines",
    ],
    relatedExperience: ["capzlog", "ctco", "lightsoft"],
  },
  {
    id: "entityframework",
    name: "Entity Framework",
    type: "professional",
    logo: "/images/logos/dotnet.svg",
    description:
      "ORM of choice for .NET applications. Experience with Code First, Database First, and performance optimization.",
    highlights: [
      "Implemented complex data models for enterprise applications",
      "Optimized queries for high-performance scenarios",
    ],
    relatedExperience: ["capzlog", "ctco", "lightsoft"],
  },
  {
    id: "grails",
    name: "Grails",
    type: "professional",
    logo: "/images/logos/grails.svg",
    description:
      "Used for rapid development of Java-based web applications, particularly for Oracle ERP customizations.",
    highlights: ["Developed custom Oracle ERP web applications", "Built backend features with Groovy"],
    relatedExperience: ["tietoevry"],
  },
  {
    id: "selenium",
    name: "Selenium",
    type: "professional",
    logo: "/images/logos/selenium.svg",
    description:
      "Used for UI test automation in enterprise projects, integrated into CI/CD pipelines.",
    highlights: ["Implemented UI test automation process in CI/CD pipeline"],
    relatedExperience: ["tietoevry"],
  },
  {
    id: "jenkins",
    name: "Jenkins",
    type: "professional",
    logo: "/images/logos/jenkins.svg",
    description:
      "Used for CI/CD automation, particularly in Java-based projects with complex build and deployment requirements.",
    highlights: ["Set up automated build and test pipelines"],
    relatedExperience: ["tietoevry"],
  },
  {
    id: "cypress",
    name: "Cypress",
    type: "professional",
    logo: "/images/logos/cypress.svg",
    description:
      "Modern end-to-end testing framework used for comprehensive frontend testing in Angular applications.",
    highlights: ["Implemented comprehensive E2E testing for reinsurance platform"],
    relatedExperience: ["ctco"],
  },
  {
    id: "helm",
    name: "Helm",
    type: "professional",
    logo: "/images/logos/helm.svg",
    description:
      "Package manager for Kubernetes used to manage application deployments and configurations.",
    highlights: ["Configured Helm charts for AKS deployments"],
    relatedExperience: ["ctco"],
  },
  {
    id: "grafana",
    name: "Grafana",
    type: "professional",
    logo: "/images/logos/grafana.svg",
    description:
      "Used for monitoring and visualization of application metrics and performance data.",
    highlights: ["Set up dashboards for application monitoring", "Used Grafana k6 for load testing"],
    relatedExperience: ["capzlog", "ctco"],
  },
  {
    id: "vuejs",
    name: "Vue.js",
    type: "professional",
    logo: "/images/logos/vuejs.svg",
    description:
      "Frontend framework used for building interactive web applications with component-based architecture.",
    highlights: ["Built interactive UI components"],
  },
  {
    id: "xamarin",
    name: "Xamarin",
    type: "professional",
    logo: "/images/logos/xamarin.svg",
    description:
      "Cross-platform mobile framework used for building mobile applications, later migrated to .NET MAUI.",
    highlights: ["Migrated mobile application from Xamarin to .NET MAUI 9"],
    relatedExperience: ["capzlog"],
  },
  {
    id: "maui",
    name: ".NET MAUI",
    type: "professional",
    logo: "/images/logos/dotnet.svg",
    description:
      "Modern cross-platform framework for mobile and desktop applications, successor to Xamarin.",
    highlights: ["Built pilot digital logbook mobile application"],
    relatedExperience: ["capzlog"],
  },

  // Personal Projects
  {
    id: "react",
    name: "React",
    type: "personal",
    logo: "/images/logos/react.svg",
    description:
      "Used for personal projects including this portfolio website. Exploring modern React patterns with hooks and server components.",
    highlights: [
      "Built this portfolio using React 19 and Next.js 16",
      "Implemented complex animations with Framer Motion",
    ],
  },
  {
    id: "nextjs",
    name: "Next.js",
    type: "personal",
    logo: "/images/logos/nextjs.svg",
    description:
      "Full-stack React framework used for this portfolio. Experience with App Router, server components, and API routes.",
    highlights: [
      "Built this portfolio with Next.js 16 App Router",
      "Implemented server-side rendering and static generation",
    ],
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    type: "personal",
    logo: "/images/logos/tailwindcss.svg",
    description:
      "Utility-first CSS framework used for rapid UI development with consistent design patterns.",
    highlights: [
      "Styled this portfolio with Tailwind CSS v4",
      "Implemented dark/light theme support",
    ],
  },
  {
    id: "framermotion",
    name: "Framer Motion",
    type: "personal",
    logo: "/images/logos/framermotion.svg",
    description:
      "Animation library for React used to create smooth, performant animations and transitions.",
    highlights: [
      "Implemented scroll-triggered animations",
      "Created modal transitions and micro-interactions",
    ],
  },
  {
    id: "mongodb",
    name: "MongoDB",
    type: "personal",
    logo: "/images/logos/mongodb.svg",
    description: "NoSQL database explored for flexible schema designs and document-based data modeling.",
    highlights: ["Experimented with document-based data models"],
  },
  {
    id: "graphql",
    name: "GraphQL",
    type: "personal",
    logo: "/images/logos/graphql.svg",
    description:
      "Query language for APIs explored as an alternative to REST for flexible data fetching.",
    highlights: ["Explored GraphQL for efficient data fetching"],
  },
  {
    id: "nodejs",
    name: "Node.js",
    type: "personal",
    logo: "/images/logos/nodejs.svg",
    description:
      "JavaScript runtime used for backend development in personal projects and with Next.js API routes.",
    highlights: ["Built API routes with Next.js", "Created development tools and scripts"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    id: "professional",
    title: "Professional Toolkit",
    description: "Technologies used in production environments across enterprise projects",
    skills: techSkills.filter((s) => s.type === "professional"),
  },
  {
    id: "personal",
    title: "Personal Projects",
    description: "Technologies explored through side projects and continuous learning",
    skills: techSkills.filter((s) => s.type === "personal"),
  },
];
