
# DevOps Portfolio

This repository contains a single-page DevOps engineer portfolio built with React, Vite, and Tailwind CSS.

The app is structured as a scrollable landing page with dedicated sections for experience, skills, project case studies, architecture diagrams, training, certifications, writing, and contact details.

## What’s in the app

- Hero section with profile details and primary calls to action
- About section describing the DevOps background and toolkit
- Skills section grouped by discipline
- Projects section with hands-on DevOps and cloud case studies
- Architecture section for AWS and Kubernetes patterns
- Training section covering learning highlights
- Certifications section showing certification goals and completed courses
- Blog section with DevOps notes and article ideas
- Contact section with email, GitHub, and LinkedIn links

## Tech Stack

- React 18
- Vite 6
- Tailwind CSS 4
- Radix UI primitives
- Lucide icons
- shadcn-style component utilities

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

## Project Structure

- `src/main.tsx` bootstraps the React app
- `src/app/App.tsx` composes the full one-page layout
- `src/app/components/` contains the portfolio sections and shared UI pieces
- `src/styles/` contains the app-wide styling and theme files

## Notes

- The project currently has no automated test script.
- Several project links in the UI use placeholder `#` values and can be replaced with real URLs when ready.
  