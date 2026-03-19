# Women in Engineering Portfolio Workshop

Welcome. This repo is a beginner-friendly template for the Women in Engineering portfolio workshop.

You will customize placeholder content, personalize colors, and deploy your site.

## What You Are Building

A one-page portfolio with these sections:

- Hero
- About
- Experience (with resume download button)
- Projects
- Contact

Tech stack:

- React + Vite
- Tailwind CSS
- Vercel (deployment)

## Current Color Palette

This template currently uses:

- #3A405A (primary text / dark accent)
- #AEC5EB (borders / cool accent)
- #F9DEC9 (light card backgrounds)
- #E9AFA3 (hover and warm accents)
- #685044 (secondary text / dark warm accent)

## Setup

Install first:

1. Node.js (v20+ recommended)
2. Git
3. VS Code
4. GitHub account
5. Vercel account

### 1. Clone the repository

Choose where you want the project folder, then run:

```bash
git clone <your-repo-url>
cd portfolio-website
```

If you already have the project folder locally, just `cd` into it.

### 2. Check your versions

```bash
node -v
npm -v
git --version
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL shown in terminal (usually http://localhost:5173).

### 5. Optional: Build check

```bash
npm run build
```

## File Guide

Main files participants will edit:

- src/components/Header.jsx
- src/components/HeroSection.jsx
- src/components/AboutSection.jsx
- src/components/ExperienceSection.jsx
- src/components/ProjectsSection.jsx
- src/components/ContactSection.jsx
- src/data/projects.js
- src/index.css

Page assembly happens in:

- src/App.jsx

## Workshop Editing Guide

1. Update name and hero intro

- Edit text in src/components/Header.jsx and src/components/HeroSection.jsx.
- Replace [Your Name], [Your Role], and the intro paragraph.

2. Add profile image

- Replace src/assets/profile-pic.jpg with your photo (same filename), or update the import path in src/components/HeroSection.jsx.

3. Update About section

- Edit src/components/AboutSection.jsx with 3-5 sentences about your interests and goals.

4. Update Experience section

- Edit the experiences array in src/components/ExperienceSection.jsx.
- Add your internship, leadership, volunteering, or research details.

5. Add your resume

- Put your PDF at public/resume.pdf.
- The Download Resume button in src/components/ExperienceSection.jsx already links to this path.

6. Update Projects

- Edit src/data/projects.js.
- Each project includes title, description, and tech.

7. Update Contact

- Edit src/components/ContactSection.jsx with your email and links.

## Build And Deploy

Build check:

npm run build

Deploy with Vercel:

1. Push your repo to GitHub.
2. Import the repo into Vercel.
3. Use defaults for a Vite app.
4. Deploy.

Expected values:

- Framework Preset: Vite
- Build Command: npm run build
- Output Directory: dist

## Troubleshooting

If npm install fails:

rm -rf node_modules package-lock.json
npm install

If styles are missing, verify:

- src/index.css includes @import 'tailwindcss';
- src/main.jsx imports ./index.css
- vite.config.js includes the Tailwind Vite plugin

## Suggested Workshop Pacing

- 10 min: setup + run locally
- 20 min: hero + about
- 20 min: experience + projects
- 10 min: contact + final polish
- 10 min: deploy + share links

Ship your portfolio. Keep it real, personal, and proudly yours.
