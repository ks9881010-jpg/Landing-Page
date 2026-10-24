import React, { useState } from 'react';
import { PORTFOLIO_INFO } from '../data/portfolioData';

interface ArchitectureBentoProps {
  onOpenKnowlepedia: () => void;
  onExploreCaseStudy?: (id: string) => void;
}

export const ArchitectureBento: React.FC<ArchitectureBentoProps> = ({
  onOpenKnowlepedia,
  onExploreCaseStudy,
}) => {
  const [activePoint, setActivePoint] = useState<number | null>(null);

  const trajectory = [
    { month: 'Day 1', label: 'Baseline Audit', val: '+0%', impressions: '180K' },
    { month: 'Day 30', label: 'Cluster Rollout', val: '+95%', impressions: '350K' },
    { month: 'Day 60', label: 'Index Velocity', val: '+210%', impressions: '560K' },
    { month: 'Day 90', label: 'Top 1% Dominance', val: '+340%', impressions: '792K' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-14">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div className="flex flex-col">
          <span className="font-sans text-[11px] font-bold uppercase text-[#4edea3] tracking-widest">
            01 / ARCHITECTURE OF THOUGHT
          </span>
          <h2 className="font-serif text-[30px] md:text-[42px] text-[#e2e2e8] font-semibold mt-1 leading-tight text-balance">
            Strategic editorial vision meets analytical execution.
          </h2>
        </div>
        <div className="hidden md:flex items-center gap-2 text-[#bbcabf] font-sans text-[11px] font-bold uppercase tracking-wider shrink-0">
          <span>Editorial Matrix</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3]"></span>
          <span>Verified Insight</span>
        </div>
      </div>

      {/* Bento Grid (4 Asymmetrical Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Card 1: Wide Feature Card (8 Columns) */}
        <div className="md:col-span-8 bg-[#1a1c20] border border-[#282a2e] rounded-2xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-between shadow-md hover:bg-[#1e2024] transition-all duration-300 group">
          <div className="relative z-10 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-[11px] font-bold uppercase text-[#4edea3] bg-[#4edea3]/10 border border-[#4edea3]/20 px-3 py-1 rounded-full">
                Core Methodology
              </span>
              <span className="material-symbols-outlined text-[#bbcabf] text-[22px] group-hover:text-[#4edea3] transition-colors">
                auto_stories
              </span>
            </div>

            <h3 className="font-serif text-[24px] md:text-[28px] text-[#e2e2e8] font-semibold max-w-xl leading-snug">
              Specializing in digital media storytelling, keyword-driven architecture, and corporate PR.
            </h3>

            <p className="font-sans text-[15px] text-[#bbcabf] max-w-xl leading-relaxed">
              Bridging creative narrative depth with quantifiable search visibility. Every editorial initiative is engineered to penetrate high-intent audience segments while upholding the highest journalistic and institutional standards.
            </p>
          </div>

          {/* Editorial Inline Visual Sparkline / Bar visualization */}
          <div className="relative z-10 mt-6 pt-3 bg-[#0c0e12]/80 border border-[#282a2e] p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#4edea3]/20 flex items-center justify-center text-[#4edea3] shrink-0">
                <span className="material-symbols-outlined text-[20px]">trending_up</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-[15px] text-[#e2e2e8] font-semibold">
                  Organic Velocity Index
                </span>
                <span className="font-sans text-[11px] text-[#bbcabf] uppercase font-bold tracking-wider">
                  340% Avg Impressions Uplift in 90 Days
                </span>
              </div>
            </div>

            {/* Interactive SVG Sparkline with milestones */}
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-end">
                <span className="font-sans text-[11px] text-[#bbcabf]">
                  {activePoint !== null ? trajectory[activePoint].label : 'Hover trajectory'}
                </span>
                <span className="font-serif text-[14px] text-[#4edea3] font-bold">
                  {activePoint !== null ? `${trajectory[activePoint].val} (${trajectory[activePoint].impressions})` : '+340% Peak'}
                </span>
              </div>

              <div className="relative flex items-center">
                <svg className="h-9 w-32 text-[#4edea3] overflow-visible" fill="none" viewBox="0 0 100 28">
                  <path
                    d="M0 22 C 20 20, 25 24, 40 14 C 55 4, 70 12, 85 5 L 100 2"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                  />
                  {trajectory.map((pt, idx) => {
                    const xCoords = [2, 38, 70, 98];
                    const yCoords = [22, 14, 8, 2];
                    const isHovered = activePoint === idx;
                    return (
                      <circle
                        key={idx}
                        cx={xCoords[idx]}
                        cy={yCoords[idx]}
                        r={isHovered ? 4.5 : 2.5}
                        fill={isHovered ? '#6ffbbe' : 'currentColor'}
                        className="cursor-pointer transition-all"
                        onMouseEnter={() => setActivePoint(idx)}
                        onMouseLeave={() => setActivePoint(null)}
                      />
                    );
                  })}
                </svg>
              </div>

              {onExploreCaseStudy && (
                <button
                  onClick={() => onExploreCaseStudy('b2b-seo-architecture')}
                  className="px-2.5 py-1 text-xs rounded bg-[#282a2e] text-[#e2e2e8] hover:text-[#4edea3] hover:bg-[#333539] transition-colors font-medium ml-1"
                  title="View Case Study"
                >
                  View Case
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Card 2: Marketing Foundation (4 Columns) */}
        <div className="md:col-span-4 bg-[#1a1c20] border border-[#282a2e] rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-md hover:bg-[#1e2024] transition-all duration-300">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-[11px] font-bold uppercase text-[#ffb95f] bg-[#ffb95f]/10 border border-[#ffb95f]/20 px-3 py-1 rounded-full">
                Academic Angle
              </span>
              <span className="material-symbols-outlined text-[#ffb95f] text-[22px]">school</span>
            </div>

            <h3 className="font-serif text-[22px] text-[#e2e2e8] font-semibold">
              BBA in Marketing Acumen
            </h3>

            <p className="font-sans text-[15px] text-[#bbcabf] leading-relaxed">
              Graduating from Chaudhary Charan Singh University — marrying strategic business acumen with creative content strategy to drive brand loyalty and resonance.
            </p>
          </div>

          <div className="mt-6 pt-3 text-[13px] text-[#bbcabf] flex items-center gap-2 border-t border-[#282a2e]/60">
            <span className="material-symbols-outlined text-[16px] text-[#4edea3]">verified</span>
            <span className="text-[#e2e2e8]">Strategic Consumer Psychology</span>
          </div>
        </div>

        {/* Card 3: Multilingual Reach (5 Columns) */}
        <div className="md:col-span-5 bg-[#1a1c20] border border-[#282a2e] rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-md hover:bg-[#1e2024] transition-all duration-300">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-[11px] font-bold uppercase text-[#bbcabf] bg-[#1e2024] border border-[#282a2e] px-3 py-1 rounded-full">
                Pan-Indian &amp; Global
              </span>
              <span className="material-symbols-outlined text-[#bbcabf] text-[22px]">translate</span>
            </div>

            <h3 className="font-serif text-[22px] text-[#e2e2e8] font-semibold">
              Bilingual Editorial Fluency
            </h3>

            <p className="font-sans text-[15px] text-[#bbcabf] leading-relaxed">
              Native proficiency in <span className="text-[#e2e2e8] font-medium">Hindi</span> &amp; professional working fluency in <span className="text-[#e2e2e8] font-medium">English</span> — shaping nuanced cultural narratives across diverse pan-Indian and global reader demographics.
            </p>
          </div>

          <div className="flex items-center gap-2 mt-6">
            <span className="px-3.5 py-1.5 rounded-full bg-[#1e2024] border border-[#282a2e] text-[13px] text-[#e2e2e8] font-medium">
              Hindi (Native)
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#1e2024] border border-[#282a2e] text-[13px] text-[#e2e2e8] font-medium">
              English (Professional)
            </span>
          </div>
        </div>

        {/* Card 4: Verified Encyclopedia Media Entity (7 Columns) */}
        <div className="md:col-span-7 bg-[#1a1c20] border border-[#282a2e] rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-md hover:bg-[#1e2024] transition-all duration-300 relative">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4edea3]/10 border border-[#4edea3]/20 text-[#4edea3] font-sans text-[11px] font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-[15px]">verified_user</span>
                Verified Editorial Entity
              </div>
              <span className="font-sans text-[11px] uppercase tracking-wider text-[#bbcabf]">
                Digital Encyclopedia
              </span>
            </div>

            <h3 className="font-serif text-[24px] md:text-[28px] text-[#e2e2e8] font-semibold">
              Documented on Knowlepedia
            </h3>

            <p className="font-sans text-[15px] text-[#bbcabf] leading-relaxed">
              Officially cataloged biographical and editorial entity entry recognizing contributions to regional media distribution, corporate brand communications, and digital publishing leadership.
            </p>
          </div>

          <div className="mt-6 pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#0c0e12]/80 border border-[#282a2e] p-3.5 rounded-xl">
            <div className="flex items-center gap-2 truncate">
              <span className="material-symbols-outlined text-[#4edea3] text-[20px] shrink-0">public</span>
              <span className="font-sans text-[13px] text-[#e2e2e8] truncate">
                knowlepedia.org/wiki/Kirti_Sharma
              </span>
            </div>

            <button
              onClick={onOpenKnowlepedia}
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#282a2e] hover:bg-[#10b981] hover:text-[#00422b] text-[#e2e2e8] font-semibold text-[13px] transition-colors shrink-0 cursor-pointer"
            >
              Open Profile
              <span className="material-symbols-outlined ml-1.5 text-[16px]">open_in_new</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
