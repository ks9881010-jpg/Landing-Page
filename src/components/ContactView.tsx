import React, { useState } from 'react';
import { ContactSection } from './ContactSection';
import { PORTFOLIO_INFO } from '../data/portfolioData';

interface ContactViewProps {
  onOpenKnowlepedia: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onOpenKnowlepedia }) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Editorial Copyediting',
    'SEO Audit',
  ]);
  const [scheduled, setScheduled] = useState(false);
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('10:00 AM IST');

  const availableServices = [
    { id: 'Editorial Copyediting', label: 'Editorial Copyediting & Line Polish', duration: '3–5 Days' },
    { id: 'SEO Audit', label: 'Full SEO Intent Audit & Keyword Clustering', duration: '7–10 Days' },
    { id: 'PR Campaign', label: 'Corporate PR Release & Journalist Outreach', duration: '2–3 Weeks' },
    { id: 'Full Retainer', label: 'Full Monthly Editorial Retainer', duration: 'Ongoing Monthly' },
  ];

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const calculateTimeline = () => {
    if (selectedServices.includes('Full Retainer')) return 'Monthly Retainer (Immediate Onboarding)';
    if (selectedServices.includes('PR Campaign')) return '2–3 Weeks Dedicated Sprint';
    if (selectedServices.includes('SEO Audit')) return '7–10 Business Days';
    return '3–5 Business Days';
  };

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 animate-fadeIn space-y-12">
      {/* Header */}
      <div className="pb-8 border-b border-[#282a2e]">
        <span className="font-sans text-[11px] font-bold uppercase text-[#4edea3] tracking-widest">
          COLLABORATE &amp; ENGAGE
        </span>
        <h1 className="font-serif text-[34px] md:text-[50px] text-[#e2e2e8] font-bold mt-1 leading-tight">
          Direct Editorial Desk &amp; Inquiries.
        </h1>
        <p className="font-sans text-[16px] text-[#bbcabf] max-w-2xl mt-2 leading-relaxed">
          Commission strategic editorial campaigns, schedule executive discovery sessions, or submit a media brief directly to Kirti Sharma.
        </p>
      </div>

      {/* Interactive Scope & Turnaround Estimator */}
      <div className="bg-[#1a1c20] border border-[#282a2e] rounded-3xl p-6 sm:p-10 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
          <div className="flex-1 space-y-4">
            <span className="font-sans text-[11px] font-bold uppercase text-[#4edea3] tracking-widest">
              SCOPE CALCULATOR
            </span>
            <h2 className="font-serif text-2xl text-[#e2e2e8] font-semibold">
              Select Required Deliverables
            </h2>
            <p className="font-sans text-xs text-[#bbcabf]">
              Pick components to review estimated production turnaround and editorial team routing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {availableServices.map((svc) => {
                const isChecked = selectedServices.includes(svc.id);
                return (
                  <button
                    key={svc.id}
                    onClick={() => toggleService(svc.id)}
                    className={`p-3.5 rounded-xl border text-left flex items-start gap-3 transition-colors cursor-pointer ${
                      isChecked
                        ? 'bg-[#1e2024] border-[#4edea3] text-[#e2e2e8]'
                        : 'bg-[#111317] border-[#282a2e] text-[#bbcabf] hover:border-[#3c4a42]'
                    }`}
                  >
                    <span
                      className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 mt-0.5 text-[12px] ${
                        isChecked
                          ? 'bg-[#10b981] border-[#10b981] text-[#00422b] font-bold'
                          : 'border-[#3c4a42]'
                      }`}
                    >
                      {isChecked && '✓'}
                    </span>
                    <div>
                      <div className="text-xs font-semibold leading-snug">{svc.label}</div>
                      <div className="text-[10px] text-[#86948a] mt-0.5">Est. {svc.duration}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Output Card */}
          <div className="w-full lg:w-80 bg-[#111317] border border-[#282a2e] p-6 rounded-2xl flex flex-col justify-between shrink-0">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#86948a]">
                Project Scope Estimate
              </div>
              <div className="font-serif text-2xl text-[#4edea3] font-bold mt-2">
                {calculateTimeline()}
              </div>
              <div className="text-xs text-[#bbcabf] mt-2 space-y-1">
                <div>• {selectedServices.length} deliverable stream(s) selected</div>
                <div>• Direct editorial line supervision included</div>
                <div>• Dual bilingual review (Hindi &amp; English)</div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#282a2e] text-xs text-[#86948a]">
              Responses delivered within 24 hours of brief dispatch.
            </div>
          </div>
        </div>
      </div>

      {/* Discovery Call Booking Simulation */}
      <div className="bg-[#1a1c20] border border-[#282a2e] rounded-3xl p-6 sm:p-10 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
          <div>
            <span className="font-sans text-[11px] font-bold uppercase text-[#ffb95f] tracking-widest">
              DIRECT DISCOVERY
            </span>
            <h2 className="font-serif text-2xl text-[#e2e2e8] font-semibold mt-1">
              Schedule a 20-Minute Strategy Discovery
            </h2>
            <p className="font-sans text-xs text-[#bbcabf] mt-1">
              For publication editors, agency directors, and founders seeking rapid consultation.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#bbcabf] bg-[#111317] px-3.5 py-2 rounded-xl border border-[#282a2e]">
            <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse"></span>
            <span>Next Open Slot: Tomorrow at 10:00 AM IST</span>
          </div>
        </div>

        {!scheduled ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setScheduled(true);
            }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3"
          >
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#86948a] mb-1">
                Select Date
              </label>
              <input
                type="date"
                required
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full bg-[#111317] border border-[#282a2e] px-3.5 py-2.5 rounded-xl text-xs text-[#e2e2e8] focus:outline-none focus:border-[#4edea3]"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#86948a] mb-1">
                Time Window
              </label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full bg-[#111317] border border-[#282a2e] px-3.5 py-2.5 rounded-xl text-xs text-[#e2e2e8] focus:outline-none focus:border-[#4edea3]"
              >
                <option value="10:00 AM IST">10:00 AM IST</option>
                <option value="02:30 PM IST">02:30 PM IST</option>
                <option value="05:00 PM IST">05:00 PM IST</option>
                <option value="08:00 PM IST (US Morning)">08:00 PM IST (US Morning)</option>
              </select>
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-[#282a2e] hover:bg-[#10b981] hover:text-[#00422b] text-[#e2e2e8] font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer h-[42px]"
              >
                <span className="material-symbols-outlined text-[16px]">calendar_month</span>
                <span>Lock Strategy Slot</span>
              </button>
            </div>
          </form>
        ) : (
          <div className="p-4 rounded-xl bg-[#4edea3]/10 border border-[#4edea3]/30 text-xs text-[#4edea3] flex items-center justify-between">
            <span>
              Reserved strategy session for <strong>{preferredDate || 'Upcoming Session'}</strong> at{' '}
              <strong>{preferredTime}</strong>. Calendar invitation dispatched to your email!
            </span>
            <button
              onClick={() => setScheduled(false)}
              className="underline font-semibold ml-2 cursor-pointer"
            >
              Change
            </button>
          </div>
        )}
      </div>

      {/* Main Standard Collaboration Section */}
      <ContactSection onOpenKnowlepedia={onOpenKnowlepedia} />
    </div>
  );
};
