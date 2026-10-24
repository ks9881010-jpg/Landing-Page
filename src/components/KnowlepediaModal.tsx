import React from 'react';
import { KNOWLEPEDIA_DOSSIER, PORTFOLIO_INFO } from '../data/portfolioData';

interface KnowlepediaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const KnowlepediaModal: React.FC<KnowlepediaModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#111317] border border-[#282a2e] rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Masthead Header */}
        <div className="p-4 sm:p-5 border-b border-[#282a2e] flex items-center justify-between bg-[#0c0e12]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#4edea3]/10 border border-[#4edea3]/30 flex items-center justify-center text-[#4edea3]">
              <span className="material-symbols-outlined text-[20px]">public</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-lg text-[#e2e2e8] font-bold">Knowlepedia</span>
                <span className="px-2 py-0.5 rounded bg-[#4edea3]/20 text-[#4edea3] text-[10px] font-bold uppercase tracking-wider">
                  Verified Entity
                </span>
              </div>
              <span className="font-sans text-[11px] text-[#bbcabf]">
                The Independent Digital Encyclopedia of Media &amp; Culture
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#1e2024] text-[#bbcabf] hover:text-white hover:bg-[#282a2e] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Article Body */}
        <div className="p-6 overflow-y-auto space-y-6 font-sans text-[#bbcabf] text-sm leading-relaxed">
          {/* Main Title */}
          <div>
            <h1 className="font-serif text-3xl text-[#e2e2e8] font-bold mb-1">
              {KNOWLEPEDIA_DOSSIER.title}
            </h1>
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#86948a] border-b border-[#282a2e] pb-3">
              <span>Catalog: {KNOWLEPEDIA_DOSSIER.catalogId}</span>
              <span>•</span>
              <span>Verified: {KNOWLEPEDIA_DOSSIER.verificationDate}</span>
              <span>•</span>
              <span className="text-[#4edea3]">Peer Reviewed Record</span>
            </div>
          </div>

          {/* Quick Infobox */}
          <div className="bg-[#1a1c20] border border-[#282a2e] rounded-xl p-4 space-y-2.5">
            <div className="text-xs font-bold uppercase tracking-wider text-[#4edea3] border-b border-[#282a2e] pb-1.5">
              Entity Metadata
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-[#86948a]">Origin:</span>{' '}
                <span className="text-[#e2e2e8] font-medium">{KNOWLEPEDIA_DOSSIER.infobox.born}</span>
              </div>
              <div>
                <span className="text-[#86948a]">Occupation:</span>{' '}
                <span className="text-[#e2e2e8] font-medium">{KNOWLEPEDIA_DOSSIER.infobox.occupation}</span>
              </div>
              <div>
                <span className="text-[#86948a]">Education:</span>{' '}
                <span className="text-[#e2e2e8] font-medium">{KNOWLEPEDIA_DOSSIER.infobox.education}</span>
              </div>
              <div>
                <span className="text-[#86948a]">Languages:</span>{' '}
                <span className="text-[#e2e2e8] font-medium">{KNOWLEPEDIA_DOSSIER.infobox.languages}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-[#86948a]">Affiliations:</span>{' '}
                <span className="text-[#e2e2e8] font-medium">
                  {KNOWLEPEDIA_DOSSIER.infobox.organizations.join(', ')}
                </span>
              </div>
            </div>
          </div>

          {/* Biography Prose */}
          <div className="space-y-3">
            <h3 className="font-serif text-lg text-[#e2e2e8] font-semibold">Biographical Overview</h3>
            <p>{KNOWLEPEDIA_DOSSIER.overview}</p>
            <p>
              Sharma graduated with a specialization in Marketing Management from Chaudhary Charan Singh University, emphasizing consumer psychology, communication architectures, and quantitative audience segmentation. Concurrently, her foundational education under the Central Board of Secondary Education grounded her work in literary analysis and written rhetoric.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-serif text-lg text-[#e2e2e8] font-semibold">Key Contributions</h3>
            <ul className="list-disc list-inside space-y-1.5 text-xs text-[#bbcabf]">
              <li>
                <strong className="text-[#e2e2e8]">High-Intent Content Architecture:</strong> Pioneered semantic topic cluster models driving +340% organic impressions uplift for regional media enterprises.
              </li>
              <li>
                <strong className="text-[#e2e2e8]">PR &amp; Regional Media Relations:</strong> Coordinated syndication campaigns securing over 45 high-impact placements across North Indian digital and print publications.
              </li>
              <li>
                <strong className="text-[#e2e2e8]">Bilingual Editorial Standards:</strong> Codified stylistic standards bridging conversational Hindi with institutional English corporate brand prose.
              </li>
            </ul>
          </div>

          {/* References & Citations */}
          <div className="border-t border-[#282a2e] pt-4 space-y-2">
            <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#86948a]">
              References &amp; Archival Citations
            </h4>
            <ol className="list-decimal list-inside space-y-1 text-xs text-[#86948a]">
              {KNOWLEPEDIA_DOSSIER.citations.map((cite, idx) => (
                <li key={idx} className="hover:text-[#bbcabf] transition-colors">
                  {cite.text}
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#282a2e] bg-[#0c0e12] flex items-center justify-between text-xs text-[#86948a]">
          <span>Verified Entry KP-2025-IND-8849</span>
          <a
            href={PORTFOLIO_INFO.knowlepedia}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4edea3] hover:underline flex items-center gap-1 font-semibold"
          >
            <span>Open in External Browser</span>
            <span className="material-symbols-outlined text-[14px]">open_in_new</span>
          </a>
        </div>
      </div>
    </div>
  );
};
