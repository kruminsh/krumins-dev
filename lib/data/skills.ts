import { Skill, SkillCategory } from "../types";

export const skills: Skill[] = [
  // Backend Development - Expert Level
  { name: "C#", rating: 5, category: "Backend Development" },
  { name: ".NET Core / .NET 6-9", rating: 5, category: "Backend Development" },
  { name: "ASP.NET Core", rating: 5, category: "Backend Development" },
  { name: "REST APIs", rating: 5, category: "Backend Development" },
  { name: "Entity Framework", rating: 5, category: "Backend Development" },

  // Backend Development - Advanced Level
  { name: "Java", rating: 4, category: "Backend Development" },
  { name: "Spring Boot", rating: 4, category: "Backend Development" },
  { name: "Grails", rating: 4, category: "Backend Development" },
  { name: "Groovy", rating: 4, category: "Backend Development" },
  { name: ".NET Framework", rating: 4, category: "Backend Development" },

  // Backend Development - Intermediate
  { name: "SOAP APIs", rating: 3, category: "Backend Development" },
  { name: "GraphQL", rating: 3, category: "Backend Development" },
  { name: "WebSocket (SignalR)", rating: 3, category: "Backend Development" },

  // Frontend Development - Expert
  { name: "TypeScript", rating: 5, category: "Frontend Development" },
  { name: "JavaScript", rating: 5, category: "Frontend Development" },
  { name: "HTML", rating: 5, category: "Frontend Development" },
  { name: "CSS", rating: 5, category: "Frontend Development" },

  // Frontend Development - Advanced
  { name: "Angular", rating: 4, category: "Frontend Development" },
  { name: "Vue.js", rating: 4, category: "Frontend Development" },
  { name: "jQuery", rating: 4, category: "Frontend Development" },
  { name: "Razor", rating: 4, category: "Frontend Development" },

  // Frontend Development - Intermediate
  { name: "React", rating: 3, category: "Frontend Development" },
  { name: "Blazor", rating: 3, category: "Frontend Development" },
  { name: "Ext JS", rating: 3, category: "Frontend Development" },

  // Databases - Expert
  { name: "Microsoft SQL Server", rating: 5, category: "Databases" },
  { name: "T-SQL", rating: 5, category: "Databases" },
  { name: "Oracle DB", rating: 5, category: "Databases" },
  { name: "PL/SQL", rating: 5, category: "Databases" },

  // Databases - Advanced
  { name: "MySQL", rating: 4, category: "Databases" },
  { name: "MongoDB", rating: 4, category: "Databases" },

  // Databases - Intermediate
  { name: "Cosmos DB", rating: 3, category: "Databases" },

  // Cloud & DevOps - Expert
  { name: "Microsoft Azure", rating: 5, category: "Cloud & DevOps" },
  { name: "Azure DevOps", rating: 5, category: "Cloud & DevOps" },
  { name: "Docker", rating: 5, category: "Cloud & DevOps" },
  { name: "Git", rating: 5, category: "Cloud & DevOps" },

  // Cloud & DevOps - Advanced
  { name: "Kubernetes (AKS)", rating: 4, category: "Cloud & DevOps" },
  { name: "Helm", rating: 4, category: "Cloud & DevOps" },
  { name: "Jenkins", rating: 4, category: "Cloud & DevOps" },
  { name: "GitLab CI/CD", rating: 4, category: "Cloud & DevOps" },
  { name: "Azure App Insights", rating: 4, category: "Cloud & DevOps" },

  // Cloud & DevOps - Intermediate
  { name: "DigitalOcean", rating: 3, category: "Cloud & DevOps" },
  { name: "Ansible", rating: 3, category: "Cloud & DevOps" },
  { name: "Grafana", rating: 3, category: "Cloud & DevOps" },
  { name: "Splunk", rating: 3, category: "Cloud & DevOps" },
  { name: "OpenTelemetry", rating: 3, category: "Cloud & DevOps" },

  // Testing & Quality - Advanced
  { name: "xUnit", rating: 4, category: "Testing & Quality" },
  { name: "NUnit", rating: 4, category: "Testing & Quality" },
  { name: "Moq", rating: 4, category: "Testing & Quality" },
  { name: "Selenium", rating: 4, category: "Testing & Quality" },
  { name: "JUnit", rating: 4, category: "Testing & Quality" },
  { name: "Spock", rating: 4, category: "Testing & Quality" },

  // Testing & Quality - Intermediate
  { name: "Cypress", rating: 3, category: "Testing & Quality" },
  { name: "Grafana k6", rating: 3, category: "Testing & Quality" },
  { name: "Postman", rating: 3, category: "Testing & Quality" },

  // Mobile Development - Intermediate
  { name: "Xamarin", rating: 3, category: "Mobile Development" },
  { name: ".NET MAUI", rating: 3, category: "Mobile Development" },

  // Messaging & Integration - Intermediate
  { name: "Azure Service Bus", rating: 3, category: "Messaging & Integration" },
  { name: "Azure Event Hub", rating: 3, category: "Messaging & Integration" },
  { name: "Apache Kafka", rating: 3, category: "Messaging & Integration" },

  // Tools & Other - Advanced
  { name: "SVN", rating: 4, category: "Tools & Other" },
  { name: "TFS", rating: 4, category: "Tools & Other" },
  { name: "NuGet", rating: 4, category: "Tools & Other" },
  { name: "npm", rating: 4, category: "Tools & Other" },
  { name: "Maven", rating: 4, category: "Tools & Other" },
  { name: "Gradle", rating: 4, category: "Tools & Other" },

  // Tools & Other - Intermediate
  { name: "IIS", rating: 3, category: "Tools & Other" },
  { name: "Nginx", rating: 3, category: "Tools & Other" },
  { name: "Apache HTTP Server", rating: 3, category: "Tools & Other" },
  { name: "Apache Tomcat", rating: 3, category: "Tools & Other" },
  { name: "Kestrel", rating: 3, category: "Tools & Other" },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend Development",
    skills: skills.filter((s) => s.category === "Backend Development"),
  },
  {
    title: "Frontend Development",
    skills: skills.filter((s) => s.category === "Frontend Development"),
  },
  {
    title: "Databases",
    skills: skills.filter((s) => s.category === "Databases"),
  },
  {
    title: "Cloud & DevOps",
    skills: skills.filter((s) => s.category === "Cloud & DevOps"),
  },
  {
    title: "Testing & Quality",
    skills: skills.filter((s) => s.category === "Testing & Quality"),
  },
  {
    title: "Mobile Development",
    skills: skills.filter((s) => s.category === "Mobile Development"),
  },
  {
    title: "Messaging & Integration",
    skills: skills.filter((s) => s.category === "Messaging & Integration"),
  },
  {
    title: "Tools & Other",
    skills: skills.filter((s) => s.category === "Tools & Other"),
  },
];
