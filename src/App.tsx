import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';
import RouteErrorBoundary from './components/RouteErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollRevealManager from './components/ScrollRevealManager';
import './styles/globals.css';

// Lazy load page components for better performance
const Home = lazy(() => import('./pages/Home'));
const HealthInnovation = lazy(() => import('./pages/focus-areas/HealthInnovation'));
const EducationTechnology = lazy(() => import('./pages/focus-areas/EducationTechnology'));
const AgriculturalInnovation = lazy(() => import('./pages/focus-areas/AgriculturalInnovation'));
const EnvironmentalSolutions = lazy(() => import('./pages/focus-areas/EnvironmentalSolutions'));
const ResearchEvaluation = lazy(() => import('./pages/services/ResearchEvaluation'));
const CapacityBuilding = lazy(() => import('./pages/services/CapacityBuilding'));
const PrototypingIncubation = lazy(() => import('./pages/services/PrototypingIncubation'));
const Events = lazy(() => import('./pages/Events'));
const OurStory = lazy(() => import('./pages/about/OurStory'));
const MissionVision = lazy(() => import('./pages/about/MissionVision'));
const GoalsObjectives = lazy(() => import('./pages/about/GoalsObjectives'));
const Partnerships = lazy(() => import('./pages/Partnerships'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Donate = lazy(() => import('./pages/Donate'));
const Contact = lazy(() => import('./pages/Contact'));
const FocusAreas = lazy(() => import('./pages/FocusAreas'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Library = lazy(() => import('./pages/Library'));
const InsightsPage = lazy(() => import('./pages/InsightsPage'));

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <div className="min-h-screen bg-surface dark:bg-gray-900 transition-colors duration-200">
          <ScrollRevealManager />
          <Header />
          <main>
            <Suspense fallback={<LoadingSpinner fullScreen text="Loading page..." />}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <RouteErrorBoundary>
                      <Home />
                    </RouteErrorBoundary>
                  }
                />

                {/* Focus Areas */}
                <Route
                  path="/focus-areas/health-innovation"
                  element={
                    <RouteErrorBoundary>
                      <HealthInnovation />
                    </RouteErrorBoundary>
                  }
                />
                <Route
                  path="/focus-areas/education-technology"
                  element={
                    <RouteErrorBoundary>
                      <EducationTechnology />
                    </RouteErrorBoundary>
                  }
                />
                <Route
                  path="/focus-areas/agricultural-innovation"
                  element={
                    <RouteErrorBoundary>
                      <AgriculturalInnovation />
                    </RouteErrorBoundary>
                  }
                />
                <Route
                  path="/focus-areas/environmental-solutions"
                  element={
                    <RouteErrorBoundary>
                      <EnvironmentalSolutions />
                    </RouteErrorBoundary>
                  }
                />
                <Route
                  path="/focus-areas"
                  element={
                    <RouteErrorBoundary>
                      <FocusAreas />
                    </RouteErrorBoundary>
                  }
                />

                {/* Services */}
                <Route
                  path="/services/research-evaluation"
                  element={
                    <RouteErrorBoundary>
                      <ResearchEvaluation />
                    </RouteErrorBoundary>
                  }
                />
                <Route
                  path="/services/capacity-building"
                  element={
                    <RouteErrorBoundary>
                      <CapacityBuilding />
                    </RouteErrorBoundary>
                  }
                />
                <Route
                  path="/services/prototyping-incubation"
                  element={
                    <RouteErrorBoundary>
                      <PrototypingIncubation />
                    </RouteErrorBoundary>
                  }
                />

                {/* Other Pages */}
                <Route
                  path="/events"
                  element={
                    <RouteErrorBoundary>
                      <Events />
                    </RouteErrorBoundary>
                  }
                />
                <Route
                  path="/insights"
                  element={
                    <RouteErrorBoundary>
                      <InsightsPage />
                    </RouteErrorBoundary>
                  }
                />
                <Route
                  path="/library"
                  element={
                    <RouteErrorBoundary>
                      <Library />
                    </RouteErrorBoundary>
                  }
                />
                <Route
                  path="/partnerships"
                  element={
                    <RouteErrorBoundary>
                      <Partnerships />
                    </RouteErrorBoundary>
                  }
                />
                <Route
                  path="/testimonials"
                  element={
                    <RouteErrorBoundary>
                      <Testimonials />
                    </RouteErrorBoundary>
                  }
                />
                <Route
                  path="/case-studies"
                  element={
                    <RouteErrorBoundary>
                      <CaseStudies />
                    </RouteErrorBoundary>
                  }
                />

                {/* About Pages */}
                <Route
                  path="/about/our-story"
                  element={
                    <RouteErrorBoundary>
                      <OurStory />
                    </RouteErrorBoundary>
                  }
                />
                <Route
                  path="/about/mission-vision"
                  element={
                    <RouteErrorBoundary>
                      <MissionVision />
                    </RouteErrorBoundary>
                  }
                />
                <Route
                  path="/about/goals-objectives"
                  element={
                    <RouteErrorBoundary>
                      <GoalsObjectives />
                    </RouteErrorBoundary>
                  }
                />

                {/* Contact & Donate */}
                <Route
                  path="/donate"
                  element={
                    <RouteErrorBoundary>
                      <Donate />
                    </RouteErrorBoundary>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <RouteErrorBoundary>
                      <Contact />
                    </RouteErrorBoundary>
                  }
                />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;