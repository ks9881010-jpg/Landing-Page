import React, { useState } from 'react';
import { CURATED_ARTICLES } from '../data/portfolioData';
import { Article } from '../types';

interface EditorialArchiveViewProps {
  onSelectArticle: (article: Article) => void;
  onOpenConnect: () => void;
  initialCategory?: string;
}

export const EditorialArchiveView: React.FC<EditorialArchiveViewProps> = ({
  onSelectArticle,
  onOpenConnect,
  initialCategory,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'SEO Architecture',
    'Corporate PR',
    'Editorial & Culture',
    'Brand Voice',
  ];

  const filteredArticles = CURATED_ARTICLES.filter((article) => {
    const matchesCategory =
      selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (article.targetKeyword && article.targetKeyword.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 animate-fadeIn">
      {/* Masthead Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#282a2e] mb-10 gap-6">
        <div>
          <span className="font-sans text-[11px] font-bold uppercase text-[#4edea3] tracking-widest">
            EDITORIAL ARCHIVE &amp; EXPERTISE
          </span>
          <h1 className="font-serif text-[34px] md:text-[50px] text-[#e2e2e8] font-bold mt-1 leading-tight">
            Curated Publications &amp; Search Architecture.
          </h1>
          <p className="font-sans text-[16px] text-[#bbcabf] max-w-2xl mt-2 leading-relaxed">
            A selection of audited, high-ranking publications, strategic media releases, and cultural essays engineered for top-tier search visibility and institutional authority.
          </p>
        </div>

        {/* Quick Stats Pill Strip */}
        <div className="flex items-center gap-4 bg-[#1a1c20] border border-[#282a2e] p-3 rounded-2xl shrink-0">
          <div className="px-3 border-r border-[#282a2e] text-center">
            <div className="font-serif text-xl font-bold text-[#4edea3]">100+</div>
            <div className="text-[10px] uppercase font-bold text-[#bbcabf]">Indexed</div>
          </div>
          <div className="px-3 border-r border-[#282a2e] text-center">
            <div className="font-serif text-xl font-bold text-[#ffb95f]">Top 1%</div>
            <div className="text-[10px] uppercase font-bold text-[#bbcabf]">SERP Rank</div>
          </div>
          <div className="px-3 text-center">
            <div className="font-serif text-xl font-bold text-[#e2e2e8]">+340%</div>
            <div className="text-[10px] uppercase font-bold text-[#bbcabf]">Avg Uplift</div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8">
        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-[#1a1c20] border border-[#282a2e] rounded-xl overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#10b981] text-[#00422b]'
                  : 'text-[#bbcabf] hover:text-[#e2e2e8] hover:bg-[#282a2e]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Live Search Input */}
        <div className="relative w-full lg:w-72">
          <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[18px] text-[#86948a]">
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search keywords, topics, titles..."
            className="w-full bg-[#1a1c20] border border-[#282a2e] pl-10 pr-4 py-2 rounded-xl text-sm text-[#e2e2e8] placeholder:text-[#86948a] focus:outline-none focus:border-[#4edea3] transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#86948a] hover:text-white"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Articles Grid */}
      {filteredArticles.length === 0 ? (
        <div className="bg-[#1a1c20] border border-[#282a2e] rounded-2xl p-12 text-center text-[#bbcabf]">
          <span className="material-symbols-outlined text-4xl text-[#86948a] mb-2">find_in_page</span>
          <h3 className="font-serif text-lg text-[#e2e2e8]">No publications found</h3>
          <p className="text-xs mt-1">Try refining your keyword query or switching categories.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="bg-[#1a1c20] border border-[#282a2e] hover:border-[#4edea3]/50 rounded-2xl p-6 flex flex-col justify-between shadow-md hover:bg-[#1e2024] transition-all duration-300 group cursor-pointer"
            >
              <div className="flex flex-col">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#1e2024] border border-[#282a2e] text-[#4edea3] font-sans text-[10px] font-bold uppercase tracking-wider">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#86948a]">
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="font-serif text-[19px] text-[#e2e2e8] font-semibold leading-snug group-hover:text-[#4edea3] transition-colors mb-2">
                  {article.title}
                </h3>

                <p className="font-sans text-[13px] text-[#bbcabf] line-clamp-3 leading-relaxed mb-4">
                  {article.summary}
                </p>
              </div>

              <div>
                {/* Ranking Pill if available */}
                {article.serpRank && (
                  <div className="mb-3 p-2 rounded-lg bg-[#0c0e12]/80 border border-[#282a2e] flex items-center justify-between text-xs">
                    <span className="text-[#4edea3] font-semibold">{article.serpRank}</span>
                    <span className="text-[#86948a] font-mono truncate max-w-[140px]">
                      "{article.targetKeyword}"
                    </span>
                  </div>
                )}

                <div className="pt-3 border-t border-[#282a2e]/60 flex items-center justify-between text-xs">
                  <span className="text-[#bbcabf]">{article.publication}</span>
                  <span className="text-[#4edea3] group-hover:translate-x-1 transition-transform flex items-center gap-1 font-semibold">
                    Read Article
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Bottom Commission Box */}
      <div className="mt-14 bg-gradient-to-r from-[#1a1c20] to-[#1e2024] border border-[#282a2e] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-serif text-2xl text-[#e2e2e8] font-semibold">
            Need high-intent editorial written for your publication?
          </h3>
          <p className="font-sans text-sm text-[#bbcabf] mt-1">
            Accepting select commissions for ghostwritten leadership essays, SEO blueprints, and corporate media releases.
          </p>
        </div>
        <button
          onClick={onOpenConnect}
          className="px-6 py-3 rounded-xl bg-[#10b981] text-[#00422b] font-semibold text-xs hover:bg-[#4edea3] transition-colors shrink-0 cursor-pointer"
        >
          Commission a Piece
        </button>
      </div>
    </div>
  );
};
