import React, { useState } from 'react';
import { Article } from '../types';
import { PORTFOLIO_INFO } from '../data/portfolioData';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  onOpenConnect: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onOpenConnect,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);

  if (!article) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#16191f] border border-[#282a2e] rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#282a2e] flex items-center justify-between bg-[#111317]">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-1 rounded-full bg-[#4edea3]/10 border border-[#4edea3]/20 text-[#4edea3] font-sans text-[11px] font-bold uppercase tracking-wider">
              {article.category}
            </span>
            <span className="text-xs text-[#86948a]">•</span>
            <span className="text-xs text-[#bbcabf] font-medium">{article.publication}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="p-1.5 rounded-lg bg-[#1e2024] text-[#bbcabf] hover:text-[#4edea3] hover:bg-[#282a2e] transition-colors cursor-pointer text-xs flex items-center gap-1 px-2.5"
              title="Copy permalink"
            >
              <span className="material-symbols-outlined text-[16px]">
                {copiedLink ? 'done' : 'share'}
              </span>
              <span>{copiedLink ? 'Copied' : 'Share'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#1e2024] text-[#bbcabf] hover:text-white hover:bg-[#282a2e] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 font-sans">
          {/* SEO Performance Strip */}
          {article.serpRank && (
            <div className="bg-[#111317] border border-[#282a2e] rounded-xl p-3.5 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#4edea3] text-[18px]">verified</span>
                <span className="text-[#e2e2e8] font-bold">{article.serpRank}</span>
                <span className="text-[#86948a]">for target keyword:</span>
                <span className="text-[#4edea3] font-medium font-mono">
                  "{article.targetKeyword}"
                </span>
              </div>
              {article.searchVolume && (
                <div className="text-[#bbcabf]">
                  <span className="text-[#86948a]">Est. Volume:</span>{' '}
                  <span className="font-semibold text-[#e2e2e8]">{article.searchVolume}</span>
                </div>
              )}
            </div>
          )}

          {/* Title & Metadata */}
          <div>
            <h1 className="font-serif text-2xl sm:text-3xl text-[#e2e2e8] font-bold leading-tight mb-3">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-xs text-[#86948a]">
              <span>By {PORTFOLIO_INFO.name}</span>
              <span>•</span>
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="p-4 rounded-xl bg-[#1e2024] border-l-2 border-[#4edea3] text-sm text-[#e2e2e8] italic">
            "{article.summary}"
          </div>

          {/* Full Content Paragraphs */}
          <div className="space-y-4 text-sm sm:text-[15px] text-[#bbcabf] leading-relaxed">
            {article.content.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-[#282a2e] flex flex-wrap gap-2">
            {article.tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full bg-[#111317] border border-[#282a2e] text-[11px] font-bold uppercase tracking-wider text-[#bbcabf]"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>

        {/* Footer / CTA */}
        <div className="p-4 sm:p-5 border-t border-[#282a2e] bg-[#111317] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#86948a]">
            Curated by <strong className="text-[#e2e2e8]">{PORTFOLIO_INFO.name}</strong> • Available for syndication
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenConnect();
            }}
            className="w-full sm:w-auto px-4 py-2 rounded-xl bg-[#10b981] text-[#00422b] text-xs font-semibold hover:bg-[#4edea3] transition-colors cursor-pointer flex items-center justify-center gap-1.5"
          >
            <span>Commission Similar Editorial Piece</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};
