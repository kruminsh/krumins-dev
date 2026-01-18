# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Kristaps Krūmiņš, a Senior Software Engineer. The portfolio is built as a single-page application featuring sections for work experience, technical skills, about information, and contact.

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript (strict mode enabled)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod validation
- **Theme:** next-themes (dark/light mode with system preference detection)
- **Icons:** Lucide React

## Architecture

### Single Page Application Structure

The app follows a section-based SPA architecture. All sections are rendered on a single page (`app/page.tsx`) with smooth scroll navigation:

1. **Hero Section** - Profile, tagline, resume download, social links
2. **Experience Section** - Work history timeline with technology tags
3. **Technical Skills Section** - Categorized skills with star ratings (1-5)
4. **About Section** - Bio, education, certifications, languages
5. **Contact Section** - Form with validation (email sending not yet implemented)

### Data Layer Pattern

Portfolio content is centralized in data files under `lib/data/`:
- `experience.ts` - Work history with achievements and technologies
- `skills.ts` - Technical skills organized by category with proficiency ratings
- `about.ts` - Education, certifications, languages, soft skills

Personal information and configuration is in `lib/config.ts`, which pulls from environment variables defined in `.env.local`.

### Component Organization

```
components/
├── sections/        # Main page sections (Hero, Experience, etc.)
├── layout/          # Navigation and Footer
├── ui/              # Reusable UI components (Button, Card, Input, etc.)
└── ThemeProvider.tsx
```

### TypeScript Type Definitions

All shared types are defined in `lib/types.ts`. This includes interfaces for:
- Personal info and social links
- Work experience entries
- Skills and skill categories
- Education and certifications
- Contact form data and API responses

### Theming System

The app uses `next-themes` with:
- Dark mode as default
- System preference detection
- Color scheme defined in `app/globals.css` using CSS custom properties
- Theme toggle component in top-right corner of navigation

## Key Configuration Files

### Environment Variables (`.env.local`)

```bash
NEXT_PUBLIC_RESUME_URL="..."           # Google Drive export link for resume
NEXT_PUBLIC_LINKEDIN_URL="..."         # LinkedIn profile URL
NEXT_PUBLIC_GITHUB_URL="..."           # GitHub profile URL
```

### Path Aliases (`tsconfig.json`)

Uses `@/*` as path alias pointing to the project root directory.

## Common Modifications

### Updating Portfolio Content

- **Work Experience:** Edit `lib/data/experience.ts`
- **Skills & Ratings:** Edit `lib/data/skills.ts` (ratings are 1-5 stars)
- **Education/Bio:** Edit `lib/data/about.ts`
- **Personal Info:** Edit `lib/config.ts` or `.env.local`

### Contact Form Backend Integration

The contact form API route (`app/api/contact/route.ts`) validates submissions with Zod. Email delivery should be handled by a separate backend service.

## Code Style

- **Prettier Configuration:** 2-space indentation, semicolons enabled, double quotes, 100-char line width
- **ESLint:** Uses Next.js recommended rules with TypeScript support
- Component files use functional components with TypeScript interfaces
- Framer Motion is used for scroll animations and transitions

## Development Notes

- Navigation uses smooth scroll behavior with active section highlighting
- Mobile-responsive with hamburger menu
- All images should be placed in `public/images/`
- Profile image is referenced as `/images/profile.jpg`
- The app uses React 19 and Next.js 16 (latest stable versions)
