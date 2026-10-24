import React, { useState } from 'react';
import { MEDIA_KIT_DATA, PORTFOLIO_INFO } from '../data/portfolioData';

interface MediaKitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConnect: () => void;
}

export const MediaKitModal: React.FC<MediaKitModalProps> = ({
  isOpen,
  onClose,
  onOpenConnect,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'services' | 'speaking' | 'rates'>('overview');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#16191f] border border-[#262930] rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl relative">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#262930] flex items-center justify-between bg-[#111317]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]"></span>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl text-[#f9f8f6] font-semibold">
                Editorial &amp; PR Media Kit
              </h2>
              <p className="font-sans text-xs text-[#8e95a2] mt-0.5">
                Official Press Dossier • Updated {MEDIA_KIT_DATA.lastUpdated}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#1e222a] text-[#8e95a2] hover:text-[#f9f8f6] hover:bg-[#282a2e] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 px-6 pt-3 bg-[#111317] border-b border-[#262930] overflow-x-auto">
          {[
            { id: 'overview', label: 'Executive Bio & Metrics' },
            { id: 'services', label: 'Retainer Services' },
            { id: 'speaking', label: 'Keynote & Speaking Topics' },
            { id: 'rates', label: 'Rates & Booking Terms' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 text-xs font-semibold rounded-t-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#16191f] text-[#10b981] border-t-2 border-[#10b981]'
                  : 'text-[#8e95a2] hover:text-[#f9f8f6]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-[#bbcabf] font-sans">
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-[#1e2024] p-5 rounded-xl border border-[#282a2e]">
                <h3 className="font-serif text-lg text-[#e2e2e8] font-semibold mb-2">
                  Editorial Biography
                </h3>
                <p className="text-sm leading-relaxed text-[#bbcabf]">
                  {MEDIA_KIT_DATA.bio}
                </p>
              </div>

              {/* Verified Metrics Grid */}
              <div>
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#4edea3] mb-3">
                  Verified Publication Metrics
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-[#1e2024] p-3.5 rounded-xl border border-[#282a2e] text-center">
                    <div className="font-serif text-2xl text-[#4edea3] font-bold">100+</div>
                    <div className="text-[11px] text-[#bbcabf] uppercase font-bold mt-1">
                      Curated Articles
                    </div>
                  </div>
                  <div className="bg-[#1e2024] p-3.5 rounded-xl border border-[#282a2e] text-center">
                    <div className="font-serif text-2xl text-[#ffb95f] font-bold">Top 1%</div>
                    <div className="text-[11px] text-[#bbcabf] uppercase font-bold mt-1">
                      SERP Rankings
                    </div>
                  </div>
                  <div className="bg-[#1e2024] p-3.5 rounded-xl border border-[#282a2e] text-center">
                    <div className="font-serif text-2xl text-[#e2e2e8] font-bold">+340%</div>
                    <div className="text-[11px] text-[#bbcabf] uppercase font-bold mt-1">
                      Organic Growth
                    </div>
                  </div>
                  <div className="bg-[#1e2024] p-3.5 rounded-xl border border-[#282a2e] text-center">
                    <div className="font-serif text-2xl text-[#4edea3] font-bold">45+</div>
                    <div className="text-[11px] text-[#bbcabf] uppercase font-bold mt-1">
                      Media Outlets
                    </div>
                  </div>
                </div>
              </div>

              {/* Editorial Ethics & Standards */}
              <div className="border border-[#282a2e] rounded-xl p-4 bg-[#1a1c20]">
                <h4 className="font-serif text-base text-[#e2e2e8] font-semibold mb-2">
                  Editorial Standards &amp; Protocol
                </h4>
                <ul className="text-xs space-y-1.5 text-[#bbcabf] list-disc list-inside">
                  <li>Strict adherence to Press Council &amp; digital journalistic fact-checking guidelines.</li>
                  <li>Zero algorithmic keyword stuffing; intent-first structural copyediting.</li>
                  <li>Exclusivity guarantees on corporate press release distribution and executive bylines.</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'services' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn">
              {MEDIA_KIT_DATA.coreServices.map((svc) => (
                <div
                  key={svc.name}
                  className="bg-[#1e2024] border border-[#282a2e] p-5 rounded-xl flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-serif text-lg text-[#e2e2e8] font-medium mb-1.5">
                      {svc.name}
                    </h3>
                    <p className="text-xs text-[#bbcabf] leading-relaxed mb-4">
                      {svc.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#282a2e]/60 flex items-center justify-between text-xs">
                    <span className="text-[#ffb95f] font-semibold">Turnaround: {svc.turnaround}</span>
                    <span className="text-[#8e95a2]">{svc.bestFor}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'speaking' && (
            <div className="space-y-4 animate-fadeIn">
              <p className="text-sm text-[#bbcabf]">
                Kirti Sharma accepts select virtual and in-person speaking engagements for digital media summits, university communications panels, and content marketing masterclasses.
              </p>
              <div className="space-y-3">
                {MEDIA_KIT_DATA.speakingTopics.map((topic, idx) => (
                  <div
                    key={idx}
                    className="bg-[#1e2024] border border-[#282a2e] p-4 rounded-xl flex items-center gap-3"
                  >
                    <span className="w-7 h-7 rounded-lg bg-[#4edea3]/10 text-[#4edea3] flex items-center justify-center font-bold text-xs shrink-0">
                      0{idx + 1}
                    </span>
                    <span className="text-sm text-[#e2e2e8] font-medium">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'rates' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#1e2024] border border-[#282a2e] p-4 rounded-xl">
                  <div className="font-sans text-[11px] font-bold uppercase text-[#4edea3] tracking-wider">
                    Content Audit
                  </div>
                  <div className="font-serif text-2xl text-[#e2e2e8] font-bold mt-1">Single Project</div>
                  <p className="text-xs text-[#bbcabf] mt-2">
                    Comprehensive 100+ page SEO taxonomy &amp; intent gap analysis.
                  </p>
                </div>
                <div className="bg-[#1e2024] border border-[#4edea3]/40 p-4 rounded-xl relative">
                  <span className="absolute -top-2.5 right-3 bg-[#10b981] text-[#00422b] text-[10px] font-bold uppercase px-2 py-0.5 rounded-full">
                    Most Popular
                  </span>
                  <div className="font-sans text-[11px] font-bold uppercase text-[#4edea3] tracking-wider">
                    Editorial Retainer
                  </div>
                  <div className="font-serif text-2xl text-[#e2e2e8] font-bold mt-1">Monthly Bureau</div>
                  <p className="text-xs text-[#bbcabf] mt-2">
                    Ongoing editorial management, news release drafting, and team review.
                  </p>
                </div>
                <div className="bg-[#1e2024] border border-[#282a2e] p-4 rounded-xl">
                  <div className="font-sans text-[11px] font-bold uppercase text-[#ffb95f] tracking-wider">
                    PR Campaign
                  </div>
                  <div className="font-serif text-2xl text-[#e2e2e8] font-bold mt-1">Per Launch</div>
                  <p className="text-xs text-[#bbcabf] mt-2">
                    Press wire distribution, targeted journalist pitches, and coverage reports.
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#8e95a2] text-center pt-2">
                Custom commercial quotes are tailored to publication cadence and market geography.
              </p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-[#262930] bg-[#111317] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-[#8e95a2]">
            <span className="material-symbols-outlined text-[16px] text-[#4edea3]">mail</span>
            <span>{PORTFOLIO_INFO.email}</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenConnect();
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#10b981] text-[#00422b] font-semibold text-xs hover:bg-[#4edea3] transition-colors cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Request Custom Brief</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
