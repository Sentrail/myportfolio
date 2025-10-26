import React from 'react';
import Navigation from './components/portfolio/Navigation';
import HeroSection from './components/portfolio/HeroSection';
import AboutSection from './components/portfolio/AboutSection';
import ProjectsSection from './components/portfolio/ProjectsSection';
import SkillsSection from './components/portfolio/SkillsSection';
import ContactSection from './components/portfolio/ContactSection';
import './App.css'; // Optional, for any global styles

export default function App() {
  return (
    <div className="relative">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}
