import React from 'react';

export const AcademicSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-14">
      <div className="flex flex-col mb-8">
        <span className="font-sans text-[11px] font-bold uppercase text-[#4edea3] tracking-widest">
          04 / ACADEMIC FOUNDATION
        </span>
        <h2 className="font-serif text-[30px] md:text-[42px] text-[#e2e2e8] font-semibold mt-1 leading-tight text-balance">
          Rooted in marketing strategy and humanist expression.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* University Degree Card */}
        <div className="bg-[#1a1c20] border border-[#282a2e] rounded-2xl p-6 md:p-8 shadow-md flex flex-col justify-between hover:bg-[#1e2024] hover:border-[#3c4a42] transition-all duration-300">
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full bg-[#4edea3]/10 border border-[#4edea3]/25 text-[#4edea3] font-sans text-[11px] font-bold uppercase tracking-wider">
                Degree Program
              </span>
              <span className="font-sans text-[11px] font-bold uppercase text-[#bbcabf]">
                2022 – 2025
              </span>
            </div>

            <h3 className="font-serif text-[22px] md:text-[24px] text-[#e2e2e8] font-medium">
              Bachelor of Business Administration (BBA)
            </h3>
            <div className="font-sans text-[15px] font-semibold text-[#4edea3] mt-1">
              Chaudhary Charan Singh University
            </div>

            <p className="font-sans text-[15px] text-[#bbcabf] mt-4 leading-relaxed">
              Specialized in Marketing Management, Consumer Behavior Analysis, and Strategic Communication Dynamics. Synthesizing data-backed marketing paradigms with creative media writing.
            </p>
          </div>

          <div className="mt-6 pt-3 flex items-center gap-2 text-[#bbcabf] text-[13px] border-t border-[#282a2e]/60">
            <span className="material-symbols-outlined text-[18px] text-[#4edea3]">analytics</span>
            <span className="text-[#e2e2e8]">Focus: Brand Positioning &amp; Market Research</span>
          </div>
        </div>

        {/* Schooling Card */}
        <div className="bg-[#1a1c20] border border-[#282a2e] rounded-2xl p-6 md:p-8 shadow-md flex flex-col justify-between hover:bg-[#1e2024] hover:border-[#3c4a42] transition-all duration-300">
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full bg-[#1e2024] border border-[#282a2e] text-[#bbcabf] font-sans text-[11px] font-bold uppercase tracking-wider">
                Foundational Education
              </span>
              <span className="font-sans text-[11px] font-bold uppercase text-[#bbcabf]">
                CBSE Board
              </span>
            </div>

            <h3 className="font-serif text-[22px] md:text-[24px] text-[#e2e2e8] font-medium">
              Senior Secondary &amp; Secondary (Arts)
            </h3>
            <div className="font-sans text-[15px] font-semibold text-[#c7c6c5] mt-1">
              Central Board of Secondary Education
            </div>

            <p className="font-sans text-[15px] text-[#bbcabf] mt-4 leading-relaxed">
              Completed Senior Secondary education (Arts stream, 2022) and Secondary education (2020) with deep emphasis on literature, critical discourse, and written media articulation.
            </p>
          </div>

          <div className="mt-6 pt-3 flex items-center gap-2 text-[#bbcabf] text-[13px] border-t border-[#282a2e]/60">
            <span className="material-symbols-outlined text-[18px] text-[#ffb95f]">history_edu</span>
            <span className="text-[#e2e2e8]">Focus: Creative Composition &amp; Discourse</span>
          </div>
        </div>
      </div>
    </section>
  );
};
