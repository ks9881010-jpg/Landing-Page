import React, { useState } from 'react';
import { CASE_STUDIES, WORK_EXPERIENCES } from '../data/portfolioData';
import { TimelineSection } from './TimelineSection';

interface ExperienceViewProps {
  onOpenConnect: () => void;
  initialCaseStudyId?: string;
}

export const ExperienceView: React.FC<ExperienceViewProps> = ({
  onOpenConnect,
  initialCaseStudyId,
}) => {
  const [activeTab, setActiveTab] = useState<'case-studies' | 'timeline'>(
    initialCaseStudyId ? 'case-studies' : 'case-studies'
  );
  const [selectedCaseId, setSelectedCaseId] = useState<string>(
    initialCaseStudyId || CASE_STUDIES[0].id
  );

  const selectedCase =
    CASE_STUDIES.find((c) => c.id === selectedCaseId) || CASE_STUDIES[0];

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#282a2e] mb-10 gap-6">
        <div>
          <span className="font-sans text-[11px] font-bold uppercase text-[#4edea3] tracking-widest">
            EXPERIENCE &amp; CASE STUDIES
          </span>
          <h1 className="font-serif text-[34px] md:text-[50px] text-[#e2e2e8] font-bold mt-1 leading-tight">
            Proven Editorial Leadership &amp; Tangible Growth.
          </h1>
          <p className="font-sans text-[16px] text-[#bbcabf] max-w-2xl mt-2 leading-relaxed">
            From directing multi-channel media pipelines at Trilok Media to executing viral cultural storytelling at To-Let Globe — explore documented outcomes and strategic methodologies.
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-1 p-1 bg-[#1a1c20] border border-[#282a2e] rounded-xl self-start md:self-auto">
          <button
            onClick={() => setActiveTab('case-studies')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'case-studies'
                ? 'bg-[#10b981] text-[#00422b]'
                : 'text-[#bbcabf] hover:text-[#e2e2e8]'
            }`}
          >
            Detailed Case Studies
          </button>
          <button
            onClick={() => setActiveTab('timeline')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'timeline'
                ? 'bg-[#10b981] text-[#00422b]'
                : 'text-[#bbcabf] hover:text-[#e2e2e8]'
            }`}
          >
            Career Timeline
          </button>
        </div>
      </div>

      {activeTab === 'timeline' ? (
        <TimelineSection />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Case Study Selector */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#86948a] mb-1">
              Select Client Engagement
            </span>
            {CASE_STUDIES.map((cs) => {
              const isSelected = selectedCaseId === cs.id;
              return (
                <div
                  key={cs.id}
                  onClick={() => setSelectedCaseId(cs.id)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#1e2024] border-[#4edea3] shadow-lg'
                      : 'bg-[#1a1c20] border-[#282a2e] hover:border-[#3c4a42] hover:bg-[#1e2024]/60'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-[#86948a] mb-2">
                    <span>{cs.client}</span>
                    <span className="text-[#4edea3] font-bold">{cs.metricHighlight}</span>
                  </div>
                  <h3 className="font-serif text-base text-[#e2e2e8] font-semibold leading-snug">
                    {cs.headline}
                  </h3>
                  <div className="flex items-center gap-2 mt-3 text-xs text-[#bbcabf]">
                    <span>{cs.duration}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Case Study Deep Dive */}
          <div className="lg:col-span-8 bg-[#1a1c20] border border-[#282a2e] rounded-3xl p-6 sm:p-10 shadow-xl space-y-8">
            {/* Case Header */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-[#4edea3]/10 border border-[#4edea3]/25 text-[#4edea3] font-sans text-[11px] font-bold uppercase tracking-wider">
                  {selectedCase.role}
                </span>
                <span className="text-xs text-[#86948a]">•</span>
                <span className="text-xs text-[#bbcabf] font-medium">{selectedCase.client}</span>
                <span className="text-xs text-[#86948a]">•</span>
                <span className="text-xs text-[#86948a]">{selectedCase.duration}</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl text-[#e2e2e8] font-bold leading-tight">
                {selectedCase.headline}
              </h2>
            </div>

            {/* Results Grid */}
            <div>
              <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-[#4edea3] mb-3">
                Documented Business Impact
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {selectedCase.results.map((res, idx) => (
                  <div
                    key={idx}
                    className="bg-[#0c0e12]/80 border border-[#282a2e] p-4 rounded-xl flex flex-col justify-between"
                  >
                    <div className="font-serif text-3xl font-bold text-[#4edea3] tabular-nums">
                      {res.value}
                    </div>
                    <div className="font-sans text-xs font-semibold text-[#e2e2e8] mt-1">
                      {res.label}
                    </div>
                    <div className="text-[11px] text-[#86948a] mt-1 leading-snug">
                      {res.context}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenge & Context */}
            <div className="space-y-2">
              <h3 className="font-serif text-lg text-[#e2e2e8] font-semibold">
                The Editorial Challenge
              </h3>
              <p className="font-sans text-sm text-[#bbcabf] leading-relaxed">
                {selectedCase.challenge}
              </p>
            </div>

            {/* Strategic Execution */}
            <div className="space-y-3">
              <h3 className="font-serif text-lg text-[#e2e2e8] font-semibold">
                Strategic Implementation
              </h3>
              <ul className="space-y-2.5">
                {selectedCase.strategy.map((step, idx) => (
                  <li
                    key={idx}
                    className="bg-[#1e2024] border border-[#282a2e] p-3.5 rounded-xl flex items-start gap-3 text-sm text-[#bbcabf]"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#4edea3]/20 text-[#4edea3] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags & Action */}
            <div className="pt-6 border-t border-[#282a2e] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {selectedCase.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-[#0c0e12] border border-[#282a2e] text-[11px] font-bold uppercase tracking-wider text-[#bbcabf]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={onOpenConnect}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#10b981] text-[#00422b] font-semibold text-xs hover:bg-[#4edea3] transition-colors cursor-pointer shrink-0"
              >
                Discuss Similar Strategy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
