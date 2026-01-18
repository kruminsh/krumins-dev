# Kristaps Krumins - Portfolio Website

## Overview

Your professional portfolio website built with Next.js 14, React, TypeScript, and Tailwind CSS. Features a modern, responsive design with dark/light mode support and smooth animations.

## Features Implemented

### Core Functionality
- ✅ Single Page Application (SPA) with smooth scroll navigation
- ✅ Dark/Light mode with system preference detection (defaults to dark)
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Professional dark blue/purple color scheme
- ✅ Smooth animations with Framer Motion
- ✅ SEO optimized with metadata

### Sections
1. **Hero Section**
   - Profile image with animated gradient background
   - Name, title, and tagline
   - Download Resume button (Google Drive link)
   - Social links (LinkedIn, GitHub)
   - Scroll indicator

2. **Experience Section**
   - Timeline with all 6 work positions
   - Company, role, location, and duration
   - Key achievements
   - Technology tags for each position
   - "Current" badge for active position

3. **Technical Skills Section**
   - 8 categorized skill groups
   - Star rating system (1-5 stars) for proficiency
   - Labels: Beginner, Familiar, Intermediate, Advanced, Expert
   - Covers 70+ technologies from your resume

4. **About Section**
   - Professional bio
   - Education (Riga Technical University)
   - Certifications (AZ-900 Azure Fundamentals)
   - Languages (English, German, Russian, Latvian)
   - Soft skills

5. **Contact Section**
   - Contact form with validation (React Hook Form + Zod)
   - Email display
   - Social links
   - Backend-agnostic design (ready for email integration)

### UI Components
- Reusable Button (primary, secondary, outline variants)
- Card with hover effects
- Input and Textarea with error handling
- StarRating component
- Theme toggle (top-right corner)
- Sticky navigation with active section highlighting
- Mobile hamburger menu
- Footer with social links

## Development Server

The development server is currently running at:
- **Local:** http://localhost:3000
- **Network:** http://192.168.1.59:3000

### Commands

```bash
# Navigate to project
cd portfolio

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Configuration

### Environment Variables

Edit `.env.local` to configure:

```bash
# Resume Download URL - UPDATE THIS!
NEXT_PUBLIC_RESUME_URL="https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_HERE"

# Social Links (already configured)
NEXT_PUBLIC_LINKEDIN_URL="https://www.linkedin.com/in/krumins-kristaps/"
NEXT_PUBLIC_GITHUB_URL="https://github.com/kruminsh"

# Personal Info
NEXT_PUBLIC_EMAIL="your.email@example.com"
```

### Google Drive Resume Link

To get your Google Drive export link:
1. Upload your resume PDF to Google Drive
2. Right-click the file → Share → Change to "Anyone with the link"
3. Copy the file ID from the sharing link
4. Use format: `https://drive.google.com/uc?export=download&id=YOUR_FILE_ID`
5. Update `NEXT_PUBLIC_RESUME_URL` in `.env.local`

## Content Updates

### Update Work Experience
Edit: `lib/data/experience.ts`

### Update Skills
Edit: `lib/data/skills.ts`
- Adjust ratings (1-5 stars)
- Add/remove skills
- Modify categories

### Update About Info
Edit: `lib/data/about.ts`
- Update bio
- Add certifications
- Modify languages

### Update Personal Info
Edit: `lib/config.ts`

## Contact Form - Email Integration

The contact form is ready but email sending is not yet implemented. Choose one:

### Option 1: SendGrid (Recommended)
```bash
npm install @sendgrid/mail
```

Update `app/api/contact/route.ts`:
```typescript
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

await sgMail.send({
  to: process.env.NEXT_PUBLIC_EMAIL,
  from: 'noreply@yourdomain.com',
  subject: `Contact from ${validatedData.name}`,
  text: validatedData.message,
});
```

### Option 2: Resend
```bash
npm install resend
```

### Option 3: Azure Function
Create a separate Azure Function and call it from the API route.

### Option 4: Custom .NET API
Build a .NET minimal API and call it from the contact route.

## Deployment Options

### 1. Vercel (Recommended - Easiest)
```bash
npm install -g vercel
vercel
```

### 2. Azure Static Web Apps
```bash
# Install Azure CLI
az login
az staticwebapp create --name portfolio --resource-group your-rg
```

### 3. Azure App Service
```bash
# Build and deploy
npm run build
az webapp up --name portfolio --resource-group your-rg
```

### 4. Docker
```dockerfile
# Create Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main page with all sections
│   ├── globals.css         # Tailwind + color scheme
│   └── api/contact/        # Contact form API route
├── components/
│   ├── sections/           # Hero, Experience, Skills, About, Contact
│   ├── layout/             # Navigation, Footer
│   └── ui/                 # Button, Card, Input, Textarea, StarRating
├── lib/
│   ├── config.ts           # Personal info and nav items
│   ├── types.ts            # TypeScript interfaces
│   └── data/               # experience.ts, skills.ts, about.ts
├── public/
│   └── images/
│       └── profile.jpg     # Your profile image
└── .env.local              # Environment variables
```

## Next Steps

1. **Update Resume URL**
   - Get Google Drive export link
   - Update `.env.local`

2. **Test the Site**
   - Visit http://localhost:3000
   - Test dark/light mode toggle
   - Test navigation and scroll
   - Test contact form
   - Check mobile responsiveness

3. **Choose Email Service**
   - Implement contact form email sending
   - Test email delivery

4. **Deploy**
   - Choose hosting platform (Vercel recommended)
   - Set up custom domain (optional)
   - Configure environment variables in hosting platform

5. **Optional Enhancements**
   - Add Google Analytics
   - Add project showcase section
   - Add blog (if desired)
   - Add resume timeline visualization

## Color Scheme

### Light Mode
- Background: White (#ffffff)
- Primary: Purple (#5b21b6)
- Accent: Violet (#7c3aed)

### Dark Mode
- Background: Slate (#0f172a)
- Primary: Purple (#7c3aed)
- Accent: Violet (#8b5cf6)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Icons:** Lucide React
- **Theme:** next-themes

## Performance

- Lighthouse score target: >90
- Image optimization with next/image
- Font optimization with next/font
- Smooth scroll behavior
- Lazy loading

## Need Help?

All your resume data has been imported from your PDF. If you need to modify anything:
- Work experience: `lib/data/experience.ts`
- Skills ratings: `lib/data/skills.ts`
- Education/bio: `lib/data/about.ts`
- Personal info: `lib/config.ts`

The site is fully functional and ready to deploy!
