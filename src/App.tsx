/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ActiveScreen, Article } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { ArchitectureBento } from './components/ArchitectureBento';
import { ExpertiseSection } from './components/ExpertiseSection';
import { TimelineSection } from './components/TimelineSection';
import { AcademicSection } from './components/AcademicSection';
import { ContactSection } from './components/ContactSection';
import { EditorialArchiveView } from './components/EditorialArchiveView';
import { ExperienceView } from './components/ExperienceView';
import { PressMediaView } from './components/PressMediaView';
import { ContactView } from './components/ContactView';
import { MediaKitModal } from './components/MediaKitModal';
import { KnowlepediaModal } from './components/KnowlepediaModal';
import { ArticleModal } from './components/ArticleModal';
import { CURATED_ARTICLES } from './data/portfolioData';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<ActiveScreen>('portfolio');
  const [mediaKitOpen, setMediaKitOpen] = useState(false);
  const [knowlepediaOpen, setKnowlepediaOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('All');
  const [initialCaseStudyId, setInitialCaseStudyId] = useState<string | undefined>(undefined);

  const handleNavigate = (screen: ActiveScreen) => {
    setActiveScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConnect = () => {
    if (activeScreen === 'portfolio') {
      const el = document.getElementById('inquiry');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    setActiveScreen('inquiries');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreExperience = () => {
    setActiveScreen('experience');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreCaseStudy = (id: string) => {
    setInitialCaseStudyId(id);
    setActiveScreen('experience');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (category: string) => {
    setSelectedCategoryFilter(category);
    setActiveScreen('editorial-archive');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTag = (tag: string) => {
    if (tag.includes('SEO')) {
      setSelectedCategoryFilter('SEO Architecture');
    } else if (tag.includes('PR')) {
      setSelectedCategoryFilter('Corporate PR');
    } else {
      setSelectedCategoryFilter('All');
    }
    setActiveScreen('editorial-archive');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#111317] text-[#e2e2e8] flex flex-col font-sans selection:bg-[#10b981] selection:text-[#00422b]">
      {/* Top Global Navigation Bar */}
      <Header
        activeScreen={activeScreen}
        onNavigate={handleNavigate}
        onOpenConnect={handleOpenConnect}
      />

      {/* Main Content Area */}
      <main className="w-full pt-20 flex-1">
        {/* About Screen (The Classic Broadsheet View from Image_1 and Image_2) */}
        {activeScreen === 'portfolio' && (
          <div className="flex flex-col w-full relative">
            {/* Top Ambient Glow */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-[#4edea3]/10 blur-[130px] rounded-full pointer-events-none"></div>

            {/* HERO SECTION */}
            <HeroSection
              onExploreExperience={handleExploreExperience}
              onOpenMediaKit={() => setMediaKitOpen(true)}
              onSelectTag={handleSelectTag}
            />

            {/* SECTION 01: ARCHITECTURE OF THOUGHT / BENTO GRID */}
            <ArchitectureBento
              onOpenKnowlepedia={() => setKnowlepediaOpen(true)}
              onExploreCaseStudy={handleExploreCaseStudy}
            />

            {/* SECTION 02: CORE COMPETENCIES & EXPERTISE */}
            <ExpertiseSection onSelectCategory={handleSelectCategory} />

            {/* SECTION 03: CAREER TIMELINE / TRACK RECORD */}
            <TimelineSection onViewCaseStudy={() => handleNavigate('experience')} />

            {/* SECTION 04: ACADEMIC FOUNDATION */}
            <AcademicSection />

            {/* SECTION 05: HIGH-CONVERSION CONTACT & INQUIRY SUITE */}
            <ContactSection onOpenKnowlepedia={() => setKnowlepediaOpen(true)} />
          </div>
        )}

        {/* Experience Screen */}
        {activeScreen === 'experience' && (
          <ExperienceView
            onOpenConnect={handleOpenConnect}
            initialCaseStudyId={initialCaseStudyId}
          />
        )}

        {/* Expertise / Editorial Archive Screen */}
        {activeScreen === 'editorial-archive' && (
          <EditorialArchiveView
            onSelectArticle={(art) => setSelectedArticle(art)}
            onOpenConnect={handleOpenConnect}
            initialCategory={selectedCategoryFilter}
          />
        )}

        {/* Press & Media Screen */}
        {activeScreen === 'case-studies' && (
          <PressMediaView
            onOpenKnowlepedia={() => setKnowlepediaOpen(true)}
            onOpenMediaKit={() => setMediaKitOpen(true)}
            onOpenConnect={handleOpenConnect}
          />
        )}

        {/* Contact Screen */}
        {activeScreen === 'inquiries' && (
          <ContactView onOpenKnowlepedia={() => setKnowlepediaOpen(true)} />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Modals */}
      <MediaKitModal
        isOpen={mediaKitOpen}
        onClose={() => setMediaKitOpen(false)}
        onOpenConnect={handleOpenConnect}
      />

      <KnowlepediaModal
        isOpen={knowlepediaOpen}
        onClose={() => setKnowlepediaOpen(false)}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenConnect={handleOpenConnect}
      />
    </div>
  );
}
