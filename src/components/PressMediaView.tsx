import React, { useState } from 'react';
import { KNOWLEPEDIA_DOSSIER, PORTFOLIO_INFO } from '../data/portfolioData';

interface PressMediaViewProps {
  onOpenKnowlepedia: () => void;
  onOpenMediaKit: () => void;
  onOpenConnect: () => void;
}

export const PressMediaView: React.FC<PressMediaViewProps> = ({
  onOpenKnowlepedia,
  onOpenMediaKit,
  onOpenConnect,
}) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const pressCoverage = [
    {
      outlet: 'Digital Publishing Quarterly',
      title: 'How Regional Indian Editorial Desks Are Winning Global Organic Traffic',
      date: 'Jan 2026',
      type: 'Executive Feature',
      excerpt: 'Featuring editorial commentary from Kirti Sharma on the evolution of bilingual Hindi-English search algorithms.',
    },
    {
      outlet: 'North India Tech Dispatch',
      title: 'Trilok Media Expands Content Strategy Bureau Across UP & NCR',
      date: 'Nov 2025',
      type: 'Press Release',
      excerpt: 'Under Editor & PR Manager Kirti Sharma, the agency reports triple-digit organic impressions gains for corporate partners.',
    },
    {
      outlet: 'Modern Brand Communicator',
      title: 'The Death of Fluff: Why SEO Copywriters Must Think Like Broadside Editors',
      date: 'Oct 2025',
      type: 'Byline Article',
      excerpt: 'Authored by Kirti Sharma, exploring why intentional editorial depth consistently outperforms automated programmatic spam.',
    },
    {
      outlet: 'Knowlepedia Gazette',
      title: 'Biographical Directory Addition: Kirti Sharma Catalog Entry #8849',
      date: 'Oct 2025',
      type: 'Archival Entity',
      excerpt: 'Documenting contributions to regional content architecture and media relations leadership.',
    },
  ];

  const handleDownloadPressKit = () => {
    setDownloadSuccess(true);
    // Trigger print window for one-sheet or printable view
    window.print();
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 animate-fadeIn space-y-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#282a2e] gap-6">
        <div>
          <span className="font-sans text-[11px] font-bold uppercase text-[#4edea3] tracking-widest">
            PRESS &amp; MEDIA BUREAU
          </span>
          <h1 className="font-serif text-[34px] md:text-[50px] text-[#e2e2e8] font-bold mt-1 leading-tight">
            Institutional Verification &amp; Earned Media.
          </h1>
          <p className="font-sans text-[16px] text-[#bbcabf] max-w-2xl mt-2 leading-relaxed">
            Biographical credentials, cataloged encyclopedia citations, syndication releases, and verified media kit assets for news desks and conference organizers.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={onOpenMediaKit}
            className="px-4 py-2.5 rounded-xl bg-[#282a2e] text-[#e2e2e8] hover:bg-[#37393e] text-xs font-semibold transition-colors border border-[#3c4a42]/50 cursor-pointer flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[16px] text-[#ffb95f]">newspaper</span>
            <span>Digital Media Kit</span>
          </button>

          <button
            onClick={handleDownloadPressKit}
            className="px-4 py-2.5 rounded-xl bg-[#10b981] text-[#00422b] hover:bg-[#4edea3] text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5 shadow-md"
          >
            <span className="material-symbols-outlined text-[16px]">download</span>
            <span>Print Press One-Sheet</span>
          </button>
        </div>
      </div>

      {downloadSuccess && (
        <div className="p-3 bg-[#4edea3]/10 border border-[#4edea3]/30 text-[#4edea3] text-xs text-center rounded-xl font-medium animate-fadeIn">
          Press one-sheet ready. Opening print/PDF dialogue.
        </div>
      )}

      {/* Verified Knowlepedia Entity Spotlight Card */}
      <div className="bg-[#1a1c20] border border-[#282a2e] rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#4edea3]/10 border border-[#4edea3]/30 flex items-center justify-center text-[#4edea3] shrink-0">
              <span className="material-symbols-outlined text-[32px]">verified_user</span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full bg-[#4edea3]/20 text-[#4edea3] text-[10px] font-bold uppercase tracking-wider">
                  Verified Authority Entry
                </span>
                <span className="text-xs text-[#86948a]">Catalog ID: {KNOWLEPEDIA_DOSSIER.catalogId}</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#e2e2e8] font-bold">
                Documented on Knowlepedia
              </h2>
              <p className="font-sans text-sm text-[#bbcabf] max-w-2xl mt-2 leading-relaxed">
                Officially cataloged biographical entity entry recognizing contributions to regional media distribution, corporate brand communications, and digital publishing leadership.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenKnowlepedia}
              className="px-5 py-2.5 rounded-xl bg-[#282a2e] hover:bg-[#10b981] hover:text-[#00422b] text-[#e2e2e8] text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>Inspect Full Wiki Record</span>
              <span className="material-symbols-outlined text-[16px]">visibility</span>
            </button>
            <a
              href={PORTFOLIO_INFO.knowlepedia}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#1e2024] hover:bg-[#282a2e] text-[#bbcabf] hover:text-white transition-colors"
              title="Open external Knowlepedia link"
            >
              <span className="material-symbols-outlined text-[18px]">open_in_new</span>
            </a>
          </div>
        </div>
      </div>

      {/* Press Coverage & Mentions Gallery */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-2xl text-[#e2e2e8] font-semibold">
            Press Clippings &amp; Syndications
          </h2>
          <span className="text-xs text-[#86948a]">Updated for 2025–2026</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pressCoverage.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#1a1c20] border border-[#282a2e] rounded-2xl p-6 flex flex-col justify-between hover:bg-[#1e2024] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#86948a] mb-2.5">
                  <span className="text-[#4edea3] font-semibold uppercase tracking-wider text-[11px]">
                    {item.type}
                  </span>
                  <span>{item.date}</span>
                </div>
                <div className="text-xs text-[#bbcabf] font-medium mb-1">{item.outlet}</div>
                <h3 className="font-serif text-lg text-[#e2e2e8] font-semibold leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#bbcabf] leading-relaxed">{item.excerpt}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#282a2e]/60 flex items-center justify-between text-xs">
                <span className="text-[#86948a]">Editorial Record</span>
                <span className="text-[#4edea3] flex items-center gap-1">
                  <span>Archived</span>
                  <span className="material-symbols-outlined text-[14px]">check</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Media Inquiries Protocol */}
      <div className="bg-[#1a1c20] border border-[#282a2e] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-sans text-[11px] font-bold uppercase text-[#ffb95f] tracking-widest">
            PRESS DESK SLA
          </span>
          <h3 className="font-serif text-2xl text-[#e2e2e8] font-semibold mt-1">
            Need urgent commentary for a breaking media story?
          </h3>
          <p className="font-sans text-sm text-[#bbcabf] mt-1 max-w-xl">
            Journalists and news editors on deadline receive priority response within 12 hours via direct editorial routing.
          </p>
        </div>
        <button
          onClick={onOpenConnect}
          className="px-6 py-3 rounded-xl bg-[#10b981] text-[#00422b] font-semibold text-xs hover:bg-[#4edea3] transition-colors shrink-0 cursor-pointer"
        >
          Contact Press Desk
        </button>
      </div>
    </div>
  );
};
