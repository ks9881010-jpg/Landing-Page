import React, { useState } from 'react';
import { PORTFOLIO_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenKnowlepedia?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenKnowlepedia }) => {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'editorial',
    scope: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText(PORTFOLIO_INFO.email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      })
      .catch(() => {
        window.location.href = `mailto:${PORTFOLIO_INFO.email}`;
      });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        service: 'editorial',
        scope: '',
      });
    }, 600);
  };

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-14 mb-8" id="inquiry">
      <div className="bg-[#1a1c20] border border-[#282a2e] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
        {/* Background Ambient Accents */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#4edea3]/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
          {/* Left Column: Details & Quick Links */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <span className="font-sans text-[11px] font-bold uppercase text-[#4edea3] tracking-widest">
                05 / COLLABORATE
              </span>
              <h2 className="font-serif text-[30px] md:text-[44px] text-[#e2e2e8] font-semibold leading-tight text-balance">
                Have a story to tell or a brand to elevate? Let's talk.
              </h2>
              <p className="font-sans text-[15px] text-[#bbcabf] max-w-md leading-relaxed">
                Available for strategic editorial commissions, full-scale corporate PR campaigns, SEO content audits, and leadership ghostwriting.
              </p>

              {/* Live Status Pill */}
              <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#1e2024] border border-[#282a2e] w-fit mt-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4edea3] animate-ping"></span>
                <span className="font-sans text-[13px] text-[#e2e2e8] font-medium">
                  Accepting editorial retainers &amp; PR projects
                </span>
              </div>
            </div>

            {/* Interactive Direct Contacts Suite */}
            <div className="flex flex-col gap-3 mt-8">
              {/* Email Copy Card with Interactive Tooltip */}
              <div className="bg-[#1e2024] border border-[#282a2e] p-3.5 rounded-xl flex items-center justify-between gap-3 shadow-sm hover:border-[#3c4a42] transition-colors">
                <div className="flex items-center gap-3 truncate">
                  <div className="w-9 h-9 rounded-lg bg-[#4edea3]/10 flex items-center justify-center text-[#4edea3] shrink-0">
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                  </div>
                  <div className="flex flex-col truncate">
                    <span className="font-sans text-[10px] uppercase font-bold tracking-wider text-[#bbcabf]">
                      Direct Mail
                    </span>
                    <span className="font-sans text-[14px] text-[#e2e2e8] font-medium truncate">
                      {PORTFOLIO_INFO.email}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleCopyEmail}
                    className="px-3 py-1.5 rounded-lg bg-[#282a2e] hover:bg-[#10b981] hover:text-[#00422b] text-[#e2e2e8] font-sans text-[13px] font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      {copied ? 'done' : 'content_copy'}
                    </span>
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>

                  <a
                    className="p-2 rounded-lg bg-[#282a2e] hover:bg-[#37393e] text-[#e2e2e8] transition-colors"
                    href={`mailto:${PORTFOLIO_INFO.email}`}
                    title="Open Mail Client"
                  >
                    <span className="material-symbols-outlined text-[18px]">send</span>
                  </a>
                </div>
              </div>

              {/* Toast feedback banner */}
              {copied && (
                <div className="font-sans text-[12px] font-semibold text-[#4edea3] bg-[#4edea3]/10 border border-[#4edea3]/20 px-3 py-2 rounded-lg text-center animate-fadeIn">
                  Copied to clipboard! Ready to paste into your mail app.
                </div>
              )}

              {/* LinkedIn & Knowlepedia Shortcut Links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  className="p-3.5 rounded-xl bg-[#1e2024] border border-[#282a2e] hover:bg-[#282a2e] flex items-center justify-between transition-colors shadow-sm"
                  href={PORTFOLIO_INFO.linkedin}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[20px] text-[#4edea3]">badge</span>
                    <span className="font-sans text-[13px] text-[#e2e2e8] font-medium">
                      LinkedIn Profile
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-[16px] text-[#bbcabf]">
                    arrow_outward
                  </span>
                </a>

                <button
                  type="button"
                  onClick={onOpenKnowlepedia}
                  className="p-3.5 rounded-xl bg-[#1e2024] border border-[#282a2e] hover:bg-[#282a2e] flex items-center justify-between transition-colors shadow-sm text-left cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[20px] text-[#ffb95f]">
                      menu_book
                    </span>
                    <span className="font-sans text-[13px] text-[#e2e2e8] font-medium">
                      Knowlepedia Wiki
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-[16px] text-[#bbcabf]">
                    open_in_new
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Micro-Inquiry Form */}
          <div className="lg:col-span-6 bg-[#1e2024] border border-[#282a2e] p-6 sm:p-8 rounded-2xl shadow-inner">
            <h3 className="font-serif text-[22px] text-[#e2e2e8] font-semibold mb-1">
              Send a Brief
            </h3>
            <p className="font-sans text-[13px] text-[#bbcabf] mb-6">
              Share details about your publication, press release, or SEO needs. Responses delivered within 24 hours.
            </p>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <label className="block font-sans text-[11px] font-bold uppercase tracking-wider text-[#bbcabf] mb-1.5">
                  Your Name
                </label>
                <input
                  className="w-full bg-[#1a1c20] border border-[#282a2e] px-4 py-3 rounded-xl text-[#e2e2e8] text-[15px] placeholder:text-[#86948a] focus:outline-none focus:border-[#4edea3] focus:ring-1 focus:ring-[#4edea3] transition-all"
                  placeholder="e.g. Elena Rostova"
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block font-sans text-[11px] font-bold uppercase tracking-wider text-[#bbcabf] mb-1.5">
                  Email Address
                </label>
                <input
                  className="w-full bg-[#1a1c20] border border-[#282a2e] px-4 py-3 rounded-xl text-[#e2e2e8] text-[15px] placeholder:text-[#86948a] focus:outline-none focus:border-[#4edea3] focus:ring-1 focus:ring-[#4edea3] transition-all"
                  placeholder="name@organization.com"
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block font-sans text-[11px] font-bold uppercase tracking-wider text-[#bbcabf] mb-1.5">
                  Service Required
                </label>
                <select
                  className="w-full bg-[#1a1c20] border border-[#282a2e] px-4 py-3 rounded-xl text-[#e2e2e8] text-[15px] focus:outline-none focus:border-[#4edea3] focus:ring-1 focus:ring-[#4edea3] transition-all"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="editorial">Editorial Oversight &amp; Copyediting</option>
                  <option value="pr">Corporate PR &amp; Media Placement</option>
                  <option value="seo">SEO Architecture &amp; Content Audit</option>
                  <option value="retainer">Full Retainer Advisory</option>
                </select>
              </div>

              <div>
                <label className="block font-sans text-[11px] font-bold uppercase tracking-wider text-[#bbcabf] mb-1.5">
                  Project Scope / Timeline
                </label>
                <textarea
                  className="w-full bg-[#1a1c20] border border-[#282a2e] px-4 py-3 rounded-xl text-[#e2e2e8] text-[15px] placeholder:text-[#86948a] focus:outline-none focus:border-[#4edea3] focus:ring-1 focus:ring-[#4edea3] transition-all resize-none"
                  placeholder="Outline the core editorial goals, target timeline, and publication format..."
                  required
                  rows={3}
                  value={formData.scope}
                  onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                ></textarea>
              </div>

              <button
                className="w-full py-3.5 rounded-xl bg-[#10b981] text-[#00422b] font-sans text-[13px] font-semibold hover:bg-[#4edea3] hover:text-[#003824] transition-all duration-200 shadow-md flex items-center justify-center gap-2 mt-2 cursor-pointer active:scale-[0.99] disabled:opacity-50"
                type="submit"
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? 'Dispatching...' : 'Dispatch Editorial Inquiry'}</span>
                <span className="material-symbols-outlined text-[18px]">send</span>
              </button>

              {submitted && (
                <div className="p-3.5 rounded-xl bg-[#4edea3]/10 border border-[#4edea3]/30 text-[#4edea3] text-center text-[13px] font-medium mt-2 animate-fadeIn">
                  Thank you! Your message has been routed to Kirti Sharma's priority desk. Expected reply within 24 hours.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
