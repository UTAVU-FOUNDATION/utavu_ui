# Utavu Foundation - Research & Innovation Platform

A modern, responsive web platform for the Utavu Foundation, dedicated to supporting research, prototyping, and social innovation that solves local problems at scale.

## About Utavu Foundation

Utavu Foundation enables ideas to grow by providing research, evaluation, and innovation support across multiple focus areas including health, education, agriculture, and environmental solutions.

## Tech Stack

- **Frontend Framework:** React 18.3+ with TypeScript
- **Build Tool:** Vite 7.1+
- **Routing:** React Router DOM 7.9+
- **Styling:** Tailwind CSS 3.4+
- **Icons:** Lucide React
- **Backend:** Supabase (for data management)
- **Deployment:** Static hosting (compatible with Vercel, Netlify, GitHub Pages)

## Project Structure

```
version_1/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── ErrorBoundary.tsx
│   │   ├── RouteErrorBoundary.tsx
│   │   ├── LoadingSpinner.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── pages/           # Page components
│   │   ├── Home.tsx
│   │   ├── about/       # About section pages
│   │   ├── focus-areas/ # Focus area pages
│   │   ├── services/    # Service pages
│   │   └── ...
│   ├── context/         # React context providers
│   │   └── ThemeContext.tsx
│   ├── styles/          # CSS files
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Application entry point
├── public/              # Static assets
├── dist/                # Production build output
└── package.json         # Project dependencies
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher (or yarn/pnpm)

### Installation Steps

1. **Clone the repository**
   ```bash
   cd version_1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory (see `.env.example` for required variables):
   ```bash
   cp .env.example .env
   ```
   
   Then edit `.env` with your Supabase credentials and other configuration.

4. **Start the development server**
   ```bash
   npm run dev
   ```
   
   The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Features

### Core Features
- **Responsive Design** - Mobile-first approach, works on all devices
- **Dark Mode** - System-aware theme with manual toggle
- **Error Boundaries** - Graceful error handling throughout the app
- **Lazy Loading** - Code splitting for optimized performance
- **Smooth Animations** - Scroll reveal animations and transitions
- **SEO Optimized** - Meta tags and semantic HTML

### Focus Areas
- Health Innovation
- Education Technology
- Agricultural Innovation
- Environmental Solutions

### Services
- Research & Evaluation
- Capacity Building
- Prototyping & Incubation

### Additional Pages
- Case Studies & Success Stories
- Events Calendar
- Insights & Blog
- Resource Library
- Partnerships
- Testimonials
- Donation Platform
- Contact Forms

## Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Deploy to Hosting Platform

The application can be deployed to any static hosting service:

#### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

#### GitHub Pages

Set the `homepage` field in `package.json` to your GitHub Pages URL, then:

```bash
npm run build
# Upload the dist/ folder to your gh-pages branch
```

## Testing

The project uses Vitest for unit testing (to be implemented):

```bash
npm test              # Run tests
npm run test:ui       # Run tests with UI
npm run coverage      # Generate coverage report
```

## Customization

### Theme Colors

Theme colors are defined in `tailwind.config.js`. The main brand colors are:

- **Utavu Purple:** Primary brand color
- **Utavu Green:** Secondary brand color
- **Surface:** Background color for light mode
- **Dark mode:** Gray-based color scheme

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add lazy import in `App.tsx`
3. Add route with `RouteErrorBoundary` wrapper
4. Update Header navigation if needed

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run linting (`npm run lint`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## License

Copyright © 2024 Utavu Foundation. All rights reserved.

## Contact

- **Website:** [https://utavufoundation.co.ke](https://utavufoundation.co.ke)
- **Email:** Contact us through the website
- **Location:** Kenya

## Acknowledgments

Built with passion to support innovation and research across Africa.

---

**Utavu Foundation** - Enabling ideas to grow 
