import React, { useState } from 'react';
import { PORTFOLIO_INFO } from '../data/portfolioData';
import { ActiveScreen } from '../types';

interface FooterProps {
  onNavigate: (screen: ActiveScreen) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <footer className="w-full bg-[#0c0e12] border-t border-[#282a2e]/60 mt-14">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Monogram and Title */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-3">
            {!imgError ? (
              <img
                alt="Kirti Sharma Monogram"
                className="h-6 w-auto object-contain opacity-85"
                src={PORTFOLIO_INFO.monogramUrl}
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-6 h-6 rounded bg-[#1e2024] border border-[#3c4a42] flex items-center justify-center text-[#4edea3] text-xs font-bold">
                KS
              </div>
            )}
            <span className="font-serif text-[20px] text-[#e2e2e8] font-semibold">
              {PORTFOLIO_INFO.name}
            </span>
          </div>
          <p className="font-sans text-[13px] text-[#bbcabf] text-center md:text-left">
            {PORTFOLIO_INFO.subtitle}
          </p>
        </div>

        {/* Center: Nav links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-center">
          <button
            onClick={() => onNavigate('portfolio')}
            className="font-sans text-[13px] font-semibold text-[#bbcabf] hover:text-[#e2e2e8] transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => onNavigate('experience')}
            className="font-sans text-[13px] font-semibold text-[#bbcabf] hover:text-[#e2e2e8] transition-colors cursor-pointer"
          >
            Experience
          </button>
          <button
            onClick={() => onNavigate('editorial-archive')}
            className="font-sans text-[13px] font-semibold text-[#bbcabf] hover:text-[#e2e2e8] transition-colors cursor-pointer"
          >
            Editorial Archive
          </button>
          <button
            onClick={() => onNavigate('case-studies')}
            className="font-sans text-[13px] font-semibold text-[#bbcabf] hover:text-[#e2e2e8] transition-colors cursor-pointer"
          >
            PR Campaigns
          </button>
          <button
            onClick={() => onNavigate('inquiries')}
            className="font-sans text-[13px] font-semibold text-[#bbcabf] hover:text-[#e2e2e8] transition-colors cursor-pointer"
          >
            Press Inquiries
          </button>
        </div>

        {/* Right: Geographical scope & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-1.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#4edea3]"></span>
            <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#bbcabf]">
              New Delhi • London • Remote
            </span>
          </div>
          <p className="font-sans text-[12px] text-[#bbcabf] opacity-60">
            © 2025 Kirti Sharma. All editorial and PR materials reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
