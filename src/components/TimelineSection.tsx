import React, { useState } from 'react';
import { WORK_EXPERIENCES } from '../data/portfolioData';

interface TimelineSectionProps {
  onViewCaseStudy?: () => void;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ onViewCaseStudy }) => {
  const [expandedRole, setExpandedRole] = useState<string | null>('Trilok Media');

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-14" id="experience">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div className="flex flex-col">
          <span className="font-sans text-[11px] font-bold uppercase text-[#4edea3] tracking-widest">
            03 / TRACK RECORD
          </span>
          <h2 className="font-serif text-[30px] md:text-[42px] text-[#e2e2e8] font-semibold mt-1 leading-tight text-balance">
            Editorial oversight and measurable digital momentum.
          </h2>
        </div>

        {onViewCaseStudy && (
          <button
            onClick={onViewCaseStudy}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#4edea3] hover:underline font-semibold"
          >
            <span>Explore All Client Case Studies</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        )}
      </div>

      {/* Timeline Container */}
      <div className="relative flex flex-col gap-6">
        {WORK_EXPERIENCES.map((exp) => {
          const isExpanded = expandedRole === exp.company;
          return (
            <div
              key={exp.company}
              className="bg-[#1a1c20] border border-[#282a2e] rounded-2xl p-6 md:p-8 shadow-md relative overflow-hidden transition-all duration-300 hover:border-[#3c4a42]"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                <div className="flex flex-col">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    {exp.isActive && (
                      <span className="px-3 py-0.5 rounded-full bg-[#4edea3]/10 border border-[#4edea3]/25 text-[#4edea3] font-sans text-[11px] font-bold uppercase flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] animate-pulse"></span>
                        Active Role
                      </span>
                    )}
                    <span className="font-sans text-[11px] font-bold uppercase text-[#bbcabf]">
                      {exp.period}
                    </span>
                    <span className="text-[#bbcabf]">•</span>
                    <span className="font-sans text-[13px] text-[#bbcabf]">{exp.location}</span>
                  </div>

                  <h3 className="font-serif text-[24px] md:text-[28px] text-[#e2e2e8] font-semibold">
                    {exp.role}
                  </h3>
                  <div
                    className={`font-sans text-[17px] font-medium mt-0.5 ${
                      exp.isActive ? 'text-[#4edea3]' : 'text-[#c7c6c5]'
                    }`}
                  >
                    {exp.company}
                  </div>
                </div>

                {/* Role Tags */}
                <div className="flex flex-wrap gap-2 lg:max-w-xs lg:justify-end">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-[#1e2024] border border-[#282a2e] font-sans text-[11px] font-bold uppercase tracking-wider text-[#bbcabf]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description Paragraphs */}
              <div className="mt-5 pt-1 text-[15px] text-[#bbcabf] space-y-3 max-w-4xl leading-relaxed">
                {exp.highlights.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Expandable Key Outcomes */}
              <div className="mt-5 pt-4 border-t border-[#282a2e]/60 flex flex-col gap-3">
                <button
                  onClick={() => setExpandedRole(isExpanded ? null : exp.company)}
                  className="flex items-center gap-2 text-xs font-semibold text-[#4edea3] hover:text-[#6ffbbe] cursor-pointer w-fit"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {isExpanded ? 'expand_less' : 'expand_more'}
                  </span>
                  <span>{isExpanded ? 'Hide Key Outcomes & Metrics' : 'View Key Outcomes & Metrics'}</span>
                </button>

                {isExpanded && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 animate-fadeIn">
                    {exp.keyOutcomes.map((outcome, idx) => (
                      <div
                        key={idx}
                        className="bg-[#0c0e12]/80 border border-[#282a2e] p-3.5 rounded-xl flex items-start gap-2.5"
                      >
                        <span className="material-symbols-outlined text-[#4edea3] text-[18px] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span className="text-[13px] text-[#e2e2e8] leading-snug">{outcome}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
