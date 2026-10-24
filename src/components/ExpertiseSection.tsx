import React from 'react';

interface ExpertiseSectionProps {
  onSelectCategory?: (category: string) => void;
}

export const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({ onSelectCategory }) => {
  const disciplines = [
    {
      title: 'Content Editing & Storytelling',
      icon: 'edit_note',
      category: 'Editorial & Culture',
      description:
        'Auditing, structural copyediting, proofreading, editorial line-management, and narrative voice development for premium publications.',
      tags: ['Editorial Tone', 'Deep Copyediting', 'Content Audits'],
    },
    {
      title: 'SEO & Keyword Architecture',
      icon: 'query_stats',
      category: 'SEO Architecture',
      description:
        'Search intent mapping, high-volume keyword discovery, on-page content architecture, meta taxonomy, and competitive SERP domination.',
      tags: ['Keyword Research', 'SERP Strategy', 'On-Page SEO'],
    },
    {
      title: 'Corporate PR & Media Outreach',
      icon: 'campaign',
      category: 'Corporate PR',
      description:
        'Press release authoring, publication liaison, executive positioning, brand sentiment monitoring, and crisis PR buffer management.',
      tags: ['Press Releases', 'Media Relations', 'Brand Voice'],
    },
    {
      title: 'Social Strategy & Growth',
      icon: 'share',
      category: 'Brand Voice',
      description:
        'Multi-platform corporate storytelling, engagement loops, audience retention, and high-conversion editorial copy for LinkedIn channels.',
      tags: ['LinkedIn Authority', 'Audience Loops', 'Viral Copywriting'],
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-14">
      <div className="flex flex-col mb-8">
        <span className="font-sans text-[11px] font-bold uppercase text-[#4edea3] tracking-widest">
          02 / EXPERTISE &amp; DISCIPLINES
        </span>
        <h2 className="font-serif text-[30px] md:text-[42px] text-[#e2e2e8] font-semibold mt-1 leading-tight text-balance">
          Engineered for high organic reach and brand authority.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {disciplines.map((item) => (
          <div
            key={item.title}
            onClick={() => onSelectCategory?.(item.category)}
            className="bg-[#1a1c20] border border-[#282a2e] rounded-2xl p-6 flex flex-col justify-between shadow-md hover:bg-[#1e2024] hover:border-[#3c4a42] transition-all duration-200 group cursor-pointer"
          >
            <div className="flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-[#1e2024] border border-[#282a2e] flex items-center justify-center text-[#4edea3] group-hover:scale-105 group-hover:border-[#4edea3]/40 transition-all mb-4">
                <span className="material-symbols-outlined text-[26px]">{item.icon}</span>
              </div>

              <h3 className="font-serif text-[20px] text-[#e2e2e8] font-medium mb-2 leading-snug group-hover:text-[#4edea3] transition-colors">
                {item.title}
              </h3>

              <p className="font-sans text-[13px] text-[#bbcabf] leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-6 pt-3 border-t border-[#282a2e]/60">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-[#1e2024] border border-[#282a2e]/60 font-sans text-[10px] font-semibold uppercase tracking-wider text-[#bbcabf]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
