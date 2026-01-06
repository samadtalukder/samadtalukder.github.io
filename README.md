# Samad Talukder Portfolio

A modern, responsive portfolio website built with Next.js 16, TypeScript, and Tailwind CSS. This portfolio showcases professional experience, skills, projects, and provides an interactive way to connect.

## Features

- **About Me Section** - Dynamic introduction with animated typing effects
- **Hire Me Section** - Quick overview of services and availability
- **Skills Section** - Comprehensive display of technical skills with proficiency levels
- **Experience Section** - Professional work history and achievements
- **Education Section** - Academic background and certifications
- **Projects Section** - Showcase of complete apps and small projects
  - Complete Apps: Production-ready applications with app store links
  - Small Projects: Personal projects and experiments with GitHub links
- **Recommendations Section** - Testimonials and client feedback
- **Contact Section** - Interactive contact form with Google Maps integration
- **Dark Mode** - Theme switching capability with next-themes
- **Smooth Animations** - Framer Motion and scroll-based reveal animations
- **Responsive Design** - Mobile-first approach with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 with custom animations
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion, React Type Animation
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Maps**: Google Maps (@vis.gl/react-google-maps)
- **Carousel**: Embla Carousel
- **Email**: Resend

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/samadtalukder/samadtalukder.github.io.git
cd samadtalukder.github.io
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main page
│   └── layout.tsx         # Root layout
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Page sections (About Me, Skills, etc.)
│   ├── shared/            # Reusable components
│   └── ui/                # UI primitives
├── lib/                   # Utility functions
├── public/                # Static assets
└── vercel.json           # Vercel configuration
```

## Deployment

This site is configured for deployment on Vercel with custom routing rules. The `vercel.json` file ensures proper handling of static routes and 404 pages.

Deploy with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/samadtalukder/samadtalukder.github.io)

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

This project is open source and available for personal and educational use.
