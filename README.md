# Armin Portfolio

> A bilingual, full-stack developer portfolio built with TanStack Start, React, TypeScript, and Tailwind CSS.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TanStack Start](https://img.shields.io/badge/TanStack-Start-FF4154?logo=reactquery&logoColor=white)](https://tanstack.com/start)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

Armin Portfolio is a responsive personal website designed to present professional experience, technical skills, and selected software projects in a clear, accessible format. It supports both English and Persian, automatically adapts layout direction for RTL content, and includes persistent light and dark themes.

## Highlights

- Bilingual English and Persian interface with automatic LTR/RTL switching
- Persistent light and dark themes
- Responsive, accessible UI built from Radix UI primitives
- Smooth section and page transitions powered by Framer Motion
- Project gallery with dedicated case-study routes
- Skills, experience, contact, and social-profile sections
- Server-rendered application architecture with TanStack Start and Nitro
- SEO metadata and custom error handling

## Tech Stack

| Area | Technologies |
| --- | --- |
| Framework | TanStack Start, React 19 |
| Language | TypeScript |
| Routing and data | TanStack Router, TanStack Query |
| Styling | Tailwind CSS 4, Radix UI, class-variance-authority |
| Animation | Framer Motion |
| Internationalization | i18next, react-i18next |
| Build and server | Vite, Nitro |
| Validation and forms | Zod, React Hook Form |

## Getting Started

### Prerequisites

- Node.js 20 or later
- [pnpm](https://pnpm.io/) 9 or later

### Installation

```bash
git clone https://github.com/aboumelon/Armin-Portfolio.git
cd Armin-Portfolio
pnpm install
pnpm dev
```

Open the URL printed by Vite in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm build` | Create an optimized production build |
| `pnpm preview` | Preview the production build locally |
| `pnpm lint` | Run ESLint across the project |
| `pnpm format` | Format the codebase with Prettier |

## Project Structure

```text
src/
â”œâ”€â”€ components/        # Navigation, footer, UI primitives, and page sections
â”œâ”€â”€ content/           # Profile, skills, projects, and experience data
â”œâ”€â”€ hooks/             # Theme, locale, and responsive helpers
â”œâ”€â”€ i18n/              # English and Persian translation resources
â”œâ”€â”€ lib/               # Server configuration and shared utilities
â”œâ”€â”€ routes/            # File-based application routes and case studies
â”œâ”€â”€ router.tsx         # Router configuration
â”œâ”€â”€ server.ts          # Server entry point
â””â”€â”€ styles.css         # Global styles and design tokens
```

## Customization

Portfolio content is centralized in `src/content/profile.ts`. Update that file to change personal details, skills, work history, and projects. Interface copy lives in `src/i18n/en.json` and `src/i18n/fa.json`.

## Production Build

```bash
pnpm build
```

The generated application can be deployed to any platform compatible with the Nitro server output. Configure platform-specific environment variables before deployment if you add server-side integrations.


## License

This project is available for portfolio and educational reference. Please contact the author before reusing its visual identity or personal content.
