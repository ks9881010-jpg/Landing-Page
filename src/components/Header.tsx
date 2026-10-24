import React, { useState } from 'react';
import { ActiveScreen } from '../types';
import { PORTFOLIO_INFO } from '../data/portfolioData';

interface HeaderProps {
  activeScreen: ActiveScreen;
  onNavigate: (screen: ActiveScreen) => void;
  onOpenConnect: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeScreen,
  onNavigate,
  onOpenConnect,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [avatarError, setAvatarError] = useState(false);

  const navItems: { label: string; screen: ActiveScreen }[] = [
    { label: 'About', screen: 'portfolio' },
    { label: 'Experience', screen: 'experience' },
    { label: 'Expertise', screen: 'editorial-archive' },
    { label: 'Press & Media', screen: 'case-studies' },
    { label: 'Contact', screen: 'inquiries' },
  ];

  const handleNavClick = (screen: ActiveScreen) => {
    onNavigate(screen);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#111317]/85 backdrop-blur-xl border-b border-[#282a2e]/60 shadow-[0_1px_12px_rgba(0,0,0,0.3)]">
      <div className="h-20 max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between gap-6">
        {/* Left: Brand Monogram & Name */}
        <button
          onClick={() => handleNavClick('portfolio')}
          className="flex items-center gap-3 shrink-0 text-left cursor-pointer group focus:outline-none"
        >
          {!imgError ? (
            <img
              alt="Kirti Sharma Monogram"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              src={PORTFOLIO_INFO.monogramUrl}
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-8 h-8 rounded-lg bg-[#1e2024] border border-[#3c4a42] flex items-center justify-center text-[#4edea3] font-bold text-sm">
              KS
            </div>
          )}
          <div className="flex flex-col">
            <span className="font-serif text-[20px] text-[#e2e2e8] tracking-tight leading-none group-hover:text-[#4edea3] transition-colors">
              {PORTFOLIO_INFO.name}
            </span>
            <span className="font-sans text-[11px] font-bold uppercase text-[#bbcabf] tracking-wider mt-0.5">
              Editorial &amp; PR
            </span>
          </div>
        </button>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => {
            const isActive = activeScreen === item.screen;
            return (
              <button
                key={item.screen}
                onClick={() => handleNavClick(item.screen)}
                className={`text-[13px] font-medium transition-colors py-1 relative cursor-pointer ${
                  isActive
                    ? 'text-[#e2e2e8] font-semibold underline decoration-[#4edea3] decoration-2 underline-offset-8'
                    : 'text-[#bbcabf] hover:text-[#e2e2e8]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-4 shrink-0">
          {/* Live Availability Badge */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a1c20] border border-[#282a2e]">
            <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse shadow-[0_0_8px_rgba(78,222,163,0.7)]"></span>
            <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#bbcabf]">
              Available for Projects
            </span>
          </div>

          {/* Let's Connect CTA */}
          <button
            onClick={onOpenConnect}
            className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#10b981] text-[#00422b] text-[13px] font-semibold hover:bg-[#4edea3] hover:text-[#003824] transition-all duration-200 shadow-[0_4px_16px_rgba(16,185,129,0.25)] hover:shadow-[0_8px_24px_rgba(16,185,129,0.35)] cursor-pointer active:scale-95"
          >
            Let's Connect
          </button>

          {/* User Mini Avatar */}
          <div className="flex items-center pl-1">
            <img
              alt="Kirti Sharma Profile"
              className="w-8 h-8 rounded-full object-cover shadow-[0_0_0_1px_rgba(226,226,232,0.15)] ring-1 ring-[#4edea3]/30"
              src={!avatarError ? PORTFOLIO_INFO.portraitUrl : PORTFOLIO_INFO.localPortraitUrl}
              onError={() => setAvatarError(true)}
            />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#1e2024] text-[#bbcabf] hover:text-white border border-[#282a2e]"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[20px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111317]/95 border-b border-[#282a2e] px-5 py-4 flex flex-col gap-3 animate-fadeIn">
          {navItems.map((item) => {
            const isActive = activeScreen === item.screen;
            return (
              <button
                key={item.screen}
                onClick={() => handleNavClick(item.screen)}
                className={`text-left py-2 text-[15px] font-medium transition-colors flex items-center justify-between ${
                  isActive
                    ? 'text-[#4edea3] font-semibold pl-2 border-l-2 border-[#4edea3]'
                    : 'text-[#bbcabf] hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="material-symbols-outlined text-[16px]">chevron_right</span>}
              </button>
            );
          })}
          <div className="pt-2 border-t border-[#282a2e]/60 flex items-center justify-between text-xs text-[#bbcabf]">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#4edea3]"></span>
              Ghaziabad, India
            </span>
            <span>Trilok Media</span>
          </div>
        </div>
      )}
    </header>
  );
};
