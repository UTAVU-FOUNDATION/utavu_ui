import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import HealthInnovation from './pages/focus-areas/HealthInnovation';
import EducationTechnology from './pages/focus-areas/EducationTechnology';
import AgriculturalInnovation from './pages/focus-areas/AgriculturalInnovation';
import EnvironmentalSolutions from './pages/focus-areas/EnvironmentalSolutions';
import ResearchEvaluation from './pages/services/ResearchEvaluation';
import CapacityBuilding from './pages/services/CapacityBuilding';
import PrototypingIncubation from './pages/services/PrototypingIncubation';
import Events from './pages/Events';
import OurStory from './pages/about/OurStory';
import MissionVision from './pages/about/MissionVision';
import GoalsObjectives from './pages/about/GoalsObjectives';
import Insights from './pages/Insights';
import Partnerships from './pages/Partnerships';
import Testimonials from './pages/Testimonials';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import FocusAreas from './pages/FocusAreas';
import CaseStudies from './pages/CaseStudies';
import Library from './pages/Library';
import InsightsPage from './pages/InsightsPage';
import './styles/globals.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Focus Areas */}
          <Route path="/focus-areas/health-innovation" element={<HealthInnovation />} />
          <Route path="/focus-areas/education-technology" element={<EducationTechnology />} />
          <Route path="/focus-areas/agricultural-innovation" element={<AgriculturalInnovation />} />
          <Route path="/focus-areas/environmental-solutions" element={<EnvironmentalSolutions />} />
          <Route path="/focus-areas" element={<FocusAreas />} />
          
          {/* Services */}
          <Route path="/services/research-evaluation" element={<ResearchEvaluation />} />
          <Route path="/services/capacity-building" element={<CapacityBuilding />} />
          <Route path="/services/prototyping-incubation" element={<PrototypingIncubation />} />
          
          {/* Other Pages */}
          <Route path="/events" element={<Events />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/library" element={<Library />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          
          {/* About Pages */}
          <Route path="/about/our-story" element={<OurStory />} />
          <Route path="/about/mission-vision" element={<MissionVision />} />
          <Route path="/about/goals-objectives" element={<GoalsObjectives />} />
          
          {/* Contact & Donate */}
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;