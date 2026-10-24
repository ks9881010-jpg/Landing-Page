import React, { useState } from 'react';
import { PORTFOLIO_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onExploreExperience: () => void;
  onOpenMediaKit: () => void;
  onSelectTag?: (tag: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreExperience,
  onOpenMediaKit,
  onSelectTag,
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 pt-8 pb-14 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Hero Text Column */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#282a2e] w-fit shadow-sm border border-[#3c4a42]/50">
            <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse shadow-[0_0_8px_rgba(78,222,163,0.7)]"></span>
            <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#e2e2e8]">
              Editor • SEO Storyteller • PR Strategist
            </span>
          </div>

          {/* Main Serif Headline */}
          <h1 className="font-serif text-[38px] sm:text-[48px] md:text-[62px] text-[#e2e2e8] tracking-tight leading-[1.08] font-bold text-balance">
            Crafting High-Ranking Stories &amp; Media Strategies That Move Audiences.
          </h1>

          {/* Crisp Subheadline */}
          <p className="font-sans text-[17px] md:text-[18px] text-[#bbcabf] max-w-2xl leading-relaxed">
            Content Editor and SEO Specialist turning brand narratives into high-traffic digital media, organic reach, and authoritative corporate PR momentum.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              onClick={onExploreExperience}
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#10b981] text-[#00422b] font-semibold text-[14px] hover:bg-[#4edea3] hover:text-[#003824] transition-all duration-200 shadow-[0_4px_20px_rgba(16,185,129,0.25)] hover:scale-[1.02] cursor-pointer"
            >
              Explore Experience
              <span className="material-symbols-outlined ml-1.5 text-[18px]">arrow_downward</span>
            </button>

            <a
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[#282a2e] text-[#e2e2e8] hover:bg-[#37393e] font-semibold text-[14px] transition-all duration-200 shadow-sm border border-[#3c4a42]/50 cursor-pointer"
              href={PORTFOLIO_INFO.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              View LinkedIn
              <span className="material-symbols-outlined ml-1.5 text-[16px] text-[#4edea3]">arrow_outward</span>
            </a>

            <button
              onClick={onOpenMediaKit}
              className="inline-flex items-center justify-center px-4 py-3 rounded-xl bg-[#1a1c20] text-[#bbcabf] hover:text-[#e2e2e8] hover:bg-[#1e2024] font-bold text-[11px] uppercase tracking-wider transition-colors border border-[#282a2e] cursor-pointer"
            >
              <span className="material-symbols-outlined mr-1.5 text-[16px] text-[#ffb95f]">newspaper</span>
              Review Media Kit
            </button>
          </div>

          {/* Meta Context & Location */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2 text-[#bbcabf]">
            <div className="flex items-center gap-1.5 bg-[#1e2024] px-3.5 py-1.5 rounded-full text-[13px] border border-[#282a2e]">
              <span className="material-symbols-outlined text-[16px] text-[#ffb95f]">location_on</span>
              <span className="text-[#e2e2e8]">Based in Ghaziabad, UP, India</span>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {['SEO Optimization', 'Digital Media', 'PR Management', 'Editorial Direction'].map((pill) => (
                <button
                  key={pill}
                  onClick={() => onSelectTag?.(pill)}
                  className="px-3 py-1 rounded-full bg-[#1a1c20] text-[11px] font-bold uppercase tracking-wider text-[#bbcabf] hover:text-[#4edea3] hover:border-[#4edea3]/40 border border-[#282a2e] transition-colors cursor-pointer"
                >
                  {pill}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Editorial Portrait & Live Metrics Block */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative mt-4 lg:mt-0">
          {/* Ambient Card Backing */}
          <div className="relative w-full max-w-md bg-[#1a1c20] border border-[#282a2e] rounded-2xl p-3 shadow-2xl">
            {/* Portrait Container */}
            <div className="relative rounded-xl overflow-hidden aspect-square bg-[#333539] shadow-inner group">
              <img
                alt="Kirti Sharma editorial studio portrait"
                className="w-full h-full object-cover object-center filter contrast-[1.04] brightness-95 transition-transform duration-500 group-hover:scale-102"
                src={!imgError ? PORTFOLIO_INFO.portraitUrl : PORTFOLIO_INFO.localPortraitUrl}
                onError={() => setImgError(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111317] via-transparent to-transparent opacity-85"></div>

              {/* Magazine Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between backdrop-blur-md bg-[#0c0e12]/80 border border-[#282a2e]/80 px-3.5 py-2.5 rounded-lg shadow-md">
                <div className="flex flex-col">
                  <span className="font-serif text-[16px] font-semibold text-[#e2e2e8] leading-snug">
                    {PORTFOLIO_INFO.name}
                  </span>
                  <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-[#bbcabf]">
                    Editorial Oversight &amp; Brand Voice
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#4edea3] animate-ping"></span>
                  <span className="w-2 h-2 rounded-full bg-[#4edea3]"></span>
                </div>
              </div>
            </div>

            {/* Embedded Horizontal Metrics Bar */}
            <div className="grid grid-cols-3 gap-2 mt-3 text-center">
              <div className="p-2.5 rounded-lg bg-[#1e2024] border border-[#282a2e]/60">
                <div className="font-serif text-[22px] text-[#4edea3] font-bold tabular-nums">
                  {PORTFOLIO_INFO.metrics.curatedArticles}
                </div>
                <div className="font-sans text-[10px] text-[#bbcabf] uppercase font-bold tracking-wider mt-0.5">
                  Curated Articles
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-[#1e2024] border border-[#282a2e]/60">
                <div className="font-serif text-[22px] text-[#ffb95f] font-bold tabular-nums">
                  {PORTFOLIO_INFO.metrics.serpPlacement}
                </div>
                <div className="font-sans text-[10px] text-[#bbcabf] uppercase font-bold tracking-wider mt-0.5">
                  SERP Placements
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-[#1e2024] border border-[#282a2e]/60">
                <div className="font-serif text-[22px] text-[#e2e2e8] font-bold tabular-nums">
                  {PORTFOLIO_INFO.metrics.mediaImpact}
                </div>
                <div className="font-sans text-[10px] text-[#bbcabf] uppercase font-bold tracking-wider mt-0.5">
                  Media Impact
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
