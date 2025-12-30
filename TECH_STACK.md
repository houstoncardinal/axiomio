# AXIOMIO Technology Stack

## Overview
Enterprise-grade React application built with modern tooling, focusing on performance, accessibility, and visual polish.

---

## Core Framework & Runtime

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.3.1 | UI library |
| **TypeScript** | 5.8.3 | Type-safe JavaScript |
| **Vite** | 5.4.19 | Build tool & dev server |
| **Node.js** | - | Runtime environment |

---

## Build & Development Tools

### Build System
- **Vite 5.4.19** - Lightning-fast HMR, optimized production builds
- **@vitejs/plugin-react-swc 3.11.0** - Fast refresh with SWC compiler
- **PostCSS 8.5.6** - CSS processing
- **Autoprefixer 10.4.21** - CSS vendor prefixing

### Code Quality
- **ESLint 9.32.0** - Code linting with React plugins
- **TypeScript ESLint 8.38.0** - TypeScript-specific linting
- **eslint-plugin-react-hooks 5.2.0** - React Hooks linting
- **eslint-plugin-react-refresh 0.4.20** - React Fast Refresh linting

### Development Tools
- **lovable-tagger 1.1.11** - Component tagging for Lovable platform integration

---

## Routing & State Management

### Client-Side Routing
- **React Router DOM 6.30.1** - Declarative routing for React applications

### State Management
- **TanStack React Query 5.83.0** - Server state management, caching, and synchronization
- **React Hook Form 7.61.1** - Performant form state management and validation
- **Zod 3.25.76** - TypeScript-first schema validation

---

## Styling & Design System

### CSS Framework
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **@tailwindcss/typography 0.5.16** - Beautiful typographic defaults
- **tailwindcss-animate 1.0.7** - Animation utilities
- **PostCSS** - CSS transformation

### Utility Libraries
- **tailwind-merge 2.6.0** - Intelligently merge Tailwind classes
- **class-variance-authority 0.7.1** - Component variant management
- **clsx 2.1.1** - Conditional class names utility

### Theme System
- **next-themes 0.3.0** - Perfect dark mode support with system preference detection

### Custom Design Tokens

#### Typography
- **Heading Font**: Space Grotesk (weights: 300-700)
- **Body Font**: Inter (weights: 300-600)

#### Color System (HSL-based)
- `--primary` - Brand primary color (#5046e5)
- `--secondary` - Secondary accent
- `--background` - Dark background (#0A0A0F)
- `--foreground` - Text color
- `--muted` - Muted text/backgrounds
- `--border` - Border colors
- `--glass-bg` / `--glass-border` - Glass morphism effects
- `--glow-primary` / `--glow-secondary` / `--glow-accent` - Glow effects
- `--gradient-start` / `--gradient-mid` / `--gradient-end` - Gradient stops

#### Custom Animations
```css
fade-in, fade-in-up, slide-in-right, glow-pulse, shimmer,
float, spin-slow, rotate-slow, gradient-x
```

#### Shadow System
- `shadow-glow` - Primary glow effect
- `shadow-glow-lg` - Large glow effect
- `shadow-glow-intense` - Intense glow effect
- `shadow-card` - Card elevation
- `shadow-elevated` - High elevation
- `shadow-inner-glow` - Inset glow

---

## UI Component Library

### Base Components (Radix UI Primitives)
Built on **Radix UI** - unstyled, accessible component primitives:

| Component | Version | Purpose |
|-----------|---------|---------|
| Accordion | 1.2.11 | Collapsible content sections |
| Alert Dialog | 1.1.14 | Modal dialogs |
| Aspect Ratio | 1.1.7 | Maintain aspect ratios |
| Avatar | 1.1.10 | User avatars |
| Checkbox | 1.3.2 | Checkbox inputs |
| Collapsible | 1.1.11 | Show/hide content |
| Context Menu | 2.2.15 | Right-click menus |
| Dialog | 1.1.14 | Modal overlays |
| Dropdown Menu | 2.1.15 | Dropdown menus |
| Hover Card | 1.1.14 | Hover-triggered cards |
| Label | 2.1.7 | Form labels |
| Menubar | 1.1.15 | Menu bars |
| Navigation Menu | 1.2.13 | Navigation menus |
| Popover | 1.1.14 | Floating content |
| Progress | 1.1.7 | Progress indicators |
| Radio Group | 1.3.7 | Radio button groups |
| Scroll Area | 1.2.9 | Custom scrollbars |
| Select | 2.2.5 | Select dropdowns |
| Separator | 1.1.7 | Visual dividers |
| Slider | 1.3.5 | Range sliders |
| Slot | 1.2.3 | Polymorphic components |
| Switch | 1.2.5 | Toggle switches |
| Tabs | 1.1.12 | Tab panels |
| Toast | 1.2.14 | Toast notifications |
| Toggle | 1.1.9 | Toggle buttons |
| Toggle Group | 1.1.10 | Toggle button groups |
| Tooltip | 1.2.7 | Hover tooltips |

### Additional UI Components
- **sonner 1.7.4** - Beautiful toast notifications
- **cmdk 1.1.1** - Command palette (⌘K menu)
- **vaul 0.9.9** - Mobile-friendly drawer component
- **react-resizable-panels 2.1.9** - Resizable panel layouts
- **react-day-picker 8.10.1** - Date picker component
- **input-otp 1.4.2** - OTP/PIN input components

---

## Animation & Motion

### Framer Motion 12.23.25
Production-ready animation library with:
- Page transitions
- Scroll-triggered animations
- Gesture-based interactions
- Layout animations
- Spring physics
- Exit animations with AnimatePresence

### Use Cases in AXIOMIO
- Loading screen particles and rings
- Mega menu hover effects
- Hero section entrances
- Service card animations
- Scroll-triggered reveals
- Interactive buttons and hovers

---

## Data Visualization

| Library | Version | Purpose |
|---------|---------|---------|
| **Recharts** | 2.15.4 | Responsive charts (Line, Bar, Area, Pie) |
| **Three.js** | 0.181.2 | 3D graphics for hero animations |

---

## Media & Carousels

### Embla Carousel
- **embla-carousel-react 8.6.0** - Lightweight, touch-friendly carousel
- **embla-carousel-autoplay 8.6.0** - Auto-play functionality

### Use Cases
- Client logo carousels
- Testimonial sliders
- Case study showcases
- Image galleries

---

## Backend & Data Layer

### Supabase 2.86.2
Backend-as-a-Service providing:

| Feature | Purpose |
|---------|---------|
| **Authentication** | User sign-up, login, OAuth |
| **Database** | PostgreSQL with real-time subscriptions |
| **Storage** | File uploads and CDN |
| **Edge Functions** | Serverless functions |
| **Row Level Security** | Fine-grained permissions |

### Integration
- Supabase client configured in `/src/integrations/supabase`
- React Query for server state caching
- Real-time data with subscriptions

---

## Specialized Libraries

| Library | Version | Purpose |
|---------|---------|---------|
| **@elevenlabs/react** | 0.12.3 | AI voice synthesis integration |
| **date-fns** | 3.6.0 | Modern date utility library |
| **lucide-react** | 0.462.0 | 800+ beautiful icons |

---

## TypeScript Configuration

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@/*": ["./src/*"] },
    "noImplicitAny": false,
    "strictNullChecks": false,
    "skipLibCheck": true,
    "allowJs": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false
  }
}
```

### Type Safety Features
- Path aliases (`@/*` → `./src/*`)
- Type definitions for all libraries
- JSX/TSX support
- Strict mode partially enabled

---

## Project Structure

```
axiomio/
├── public/                      # Static assets
│   ├── favicon.ico             # Site favicon
│   ├── logo-192.png            # PWA icon (192x192)
│   ├── logo-512.png            # PWA icon (512x512)
│   ├── apple-touch-icon.png    # iOS icon
│   ├── manifest.json           # PWA manifest
│   └── logos/                  # Brand logos
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── ui/                # shadcn/ui components
│   │   ├── Navbar.tsx         # Navigation bar
│   │   ├── Footer.tsx         # Site footer
│   │   ├── MegaMenu.tsx       # Services mega menu
│   │   └── LoadingScreen.tsx  # Branded loading screen
│   ├── pages/                  # Route components
│   │   ├── Index.tsx          # Homepage
│   │   ├── services/          # Service pages
│   │   ├── admin/             # Admin dashboard
│   │   ├── books/             # Documentation
│   │   └── case-studies/      # Case studies
│   ├── config/                 # Configuration files
│   │   └── services.config.ts # Service definitions
│   ├── lib/                    # Utility functions
│   │   ├── utils.ts           # Helper functions
│   │   └── seo-schemas.ts     # SEO structured data
│   ├── hooks/                  # Custom React hooks
│   ├── integrations/           # Third-party integrations
│   │   └── supabase/          # Supabase client
│   ├── assets/                 # Images, fonts, media
│   ├── App.tsx                 # Root component with routing
│   ├── main.tsx                # Application entry point
│   └── index.css               # Global styles
├── index.html                   # HTML entry point
├── vite.config.ts              # Vite configuration
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

---

## Build Configuration

### Vite Config (`vite.config.ts`)
```typescript
{
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),                    // React plugin with SWC
    componentTagger()           // Lovable component tagging
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}
```

### Features
- **Fast HMR** - Hot module replacement in milliseconds
- **Code Splitting** - Automatic lazy loading
- **Tree Shaking** - Dead code elimination
- **Asset Optimization** - Image compression, CSS minification
- **Path Aliases** - Clean imports with `@/` prefix

---

## Deployment

### Platforms
- **Primary**: Netlify
- **Preview**: Lovable platform
- **Version Control**: Git/GitHub

### Build Command
```bash
npm run build
```

### Output
- Static files in `/dist`
- Optimized for CDN distribution
- Pre-rendered HTML for SEO

### PWA Configuration
```json
{
  "name": "AXIOMIO - Enterprise Technology & Strategy Consulting",
  "short_name": "AXIOMIO",
  "theme_color": "#5046e5",
  "background_color": "#030712",
  "display": "standalone"
}
```

---

## Key Features

### Performance
✓ **SSR-compatible** - No window object usage in render
✓ **Lazy loading** - React.lazy() for code splitting
✓ **Image optimization** - Responsive images with proper sizing
✓ **Font optimization** - Google Fonts with preconnect
✓ **CSS optimization** - Tailwind purge + minification

### Accessibility
✓ **ARIA labels** - Proper semantic HTML
✓ **Keyboard navigation** - Full keyboard support
✓ **Focus management** - Visible focus indicators
✓ **Screen reader support** - Alt text and descriptions
✓ **Color contrast** - WCAG AA compliant

### SEO
✓ **Meta tags** - Complete OpenGraph and Twitter cards
✓ **Structured data** - Schema.org JSON-LD
✓ **Sitemap** - XML sitemap for search engines
✓ **Canonical URLs** - Prevent duplicate content
✓ **Semantic HTML** - Proper heading hierarchy

### Design
✓ **Dark mode** - System preference + manual toggle
✓ **Responsive** - Mobile-first design
✓ **Glass morphism** - Modern glassmorphic UI
✓ **Animations** - Framer Motion + Tailwind
✓ **Micro-interactions** - Delightful hover effects

### Developer Experience
✓ **Type safety** - TypeScript across entire codebase
✓ **Hot reload** - Instant feedback during development
✓ **Linting** - ESLint for code quality
✓ **Path aliases** - Clean imports with `@/`
✓ **Component library** - Reusable shadcn/ui components

---

## Browser Support

| Browser | Minimum Version |
|---------|----------------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |
| iOS Safari | 14+ |
| Chrome Android | 90+ |

---

## Performance Metrics

### Build Output
- **Total Bundle Size**: ~1.14 MB (gzipped: ~326 KB)
- **Build Time**: ~3.7 seconds
- **Modules Transformed**: 3,153

### Lighthouse Scores (Target)
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

---

## Environment Variables

Required environment variables (see `.env.example`):

```bash
# Supabase
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Optional
VITE_ELEVENLABS_API_KEY=your_elevenlabs_key
```

---

## Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Linting
npm run lint
```

---

## Version History

### Current Version: 0.0.0
- React 18.3.1
- Vite 5.4.19
- TypeScript 5.8.3
- Tailwind CSS 3.4.17

---

## Architecture Decisions

### Why Vite over Create React App?
- 10-100x faster HMR
- Native ESM support
- Better build performance
- Modern tooling

### Why Tailwind CSS?
- Utility-first approach
- Design consistency
- Smaller bundle sizes
- Dark mode built-in

### Why Radix UI?
- Unstyled primitives
- Full accessibility
- Keyboard navigation
- Composable components

### Why Supabase?
- Open source
- Real-time capabilities
- PostgreSQL foundation
- Edge functions support

### Why Framer Motion?
- Production-ready
- Gesture support
- Layout animations
- Great DX

---

## Maintenance

### Regular Updates
- Update dependencies monthly
- Monitor security vulnerabilities
- Test across browsers
- Optimize bundle size

### Performance Monitoring
- Lighthouse CI integration
- Bundle size tracking
- Core Web Vitals monitoring

---

## Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Radix UI Primitives](https://www.radix-ui.com/primitives)
- [Framer Motion API](https://www.framer.com/motion/)
- [Supabase Docs](https://supabase.com/docs)

---

**Last Updated**: December 29, 2025
**Maintained By**: AXIOMIO Engineering Team
