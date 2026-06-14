import React, { useState } from "react";
import { useNavigate } from "react-router";
import { MessageSquare, PhoneCall, Image as ImageIcon, AlertOctagon, ChevronRight, CheckCircle2, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

const ISSUES = [
  { id: "spilled", label: "Spilled or Damaged Food", requiresImage: true },
  { id: "missing", label: "Missing Items in Meal", requiresImage: false },
  { id: "quality", label: "Food Quality Issue", requiresImage: false },
  { id: "delivery", label: "Delivery Delay / Not Delivered", requiresImage: false },
  { id: "other", label: "Other", requiresImage: false },
];

export function CustomerSupport() {
  const navigate = useNavigate();
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);

  const [imageUploaded, setImageUploaded] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeContactMethod, setActiveContactMethod] = useState<string | null>(null);

  const selectedIssueData = ISSUES.find(i => i.id === selectedIssue);

  if (submitted) {
    return (
      <div className="flex flex-col min-h-full bg-[#F8FAFC] dark:bg-[#12181E] px-6 py-12 justify-center items-center text-center transition-colors duration-200">
        <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-500" />
        </div>
        <h2 className="text-2xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mb-2">Issue Reported</h2>
        <p className="text-zinc-500 dark:text-[#94A3B8] mb-8">We've received your complaint and our support team will contact you shortly.</p>
        <Button onClick={() => navigate("/customer")} className="w-full rounded-[12px]">
          Back to Dashboard
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-full bg-[#F8FAFC] dark:bg-[#12181E] pb-8 transition-colors duration-200">
      <header className="bg-[#FFFFFF] dark:bg-[#1E252B] px-6 pt-12 pb-4 sticky top-0 z-10 border-b border-zinc-100 dark:border-[#334155] flex items-center gap-3 transition-colors duration-200">
        <button 
          onClick={() => navigate("/customer")}
          className="p-2 -ml-2 rounded-full hover:bg-zinc-100 dark:hover:bg-[#12181E] text-zinc-500 dark:text-[#94A3B8] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] tracking-tight">Support Center</h1>
      </header>

      <div className="px-6 py-6 space-y-6">
        
        {/* SOS Action */}
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/50 rounded-[12px] p-5 flex items-start gap-4 transition-colors duration-200">
          <div className="bg-red-100 dark:bg-red-900/50 p-2.5 rounded-full mt-0.5">
            <AlertOctagon className="w-6 h-6 text-red-600 dark:text-red-400" />
          </div>
          <div>
            <h3 className="font-semibold text-red-900 dark:text-red-400">SOS / Emergency</h3>
            <p className="text-sm text-red-700 dark:text-red-300 mt-1 mb-3">Severe food quality issue or health concern regarding today's meal?</p>
            <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white border-none rounded-[8px] h-9 px-4 shadow-sm">
              Call Kitchen Manager
            </Button>
          </div>
        </div>

        {/* Issue Reporting Form */}
        <div>
          <h3 className="text-base font-bold text-[#0F172A] dark:text-[#F1F5F9] mb-4">Report an Issue</h3>
          
          {!selectedIssue ? (
            <Card className="rounded-[12px] border-zinc-200 dark:border-[#334155] shadow-sm overflow-hidden bg-[#FFFFFF] dark:bg-[#1E252B] transition-colors duration-200">
              <div className="divide-y divide-zinc-100 dark:divide-[#334155]">
                {ISSUES.map(issue => (
                  <button 
                    key={issue.id}
                    onClick={() => setSelectedIssue(issue.id)}
                    className="w-full flex items-center justify-between p-4 bg-[#FFFFFF] hover:bg-zinc-50 dark:bg-[#1E252B] dark:hover:bg-[#12181E] transition-colors text-left"
                  >
                    <span className="text-sm font-medium text-[#0F172A] dark:text-[#F1F5F9]">{issue.label}</span>
                    <ChevronRight className="w-4 h-4 text-zinc-400 dark:text-[#94A3B8]" />
                  </button>
                ))}
              </div>
            </Card>
          ) : (
            <Card className="rounded-[12px] border-zinc-200 dark:border-[#334155] shadow-sm bg-[#FFFFFF] dark:bg-[#1E252B] transition-colors duration-200">
              <CardContent className="p-5 space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-zinc-100 dark:border-[#334155]">
                  <h4 className="font-semibold text-[#0F172A] dark:text-[#F1F5F9]">{selectedIssueData?.label}</h4>
                  <button onClick={() => setSelectedIssue(null)} className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">Change</button>
                </div>
                
                <textarea 
                  className="w-full rounded-[12px] border border-zinc-200 dark:border-[#334155] bg-white dark:bg-[#12181E] text-[#0F172A] dark:text-[#F1F5F9] p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 min-h-[100px] resize-none placeholder:text-zinc-400 dark:placeholder:text-[#94A3B8]"
                  placeholder="Please describe the issue in detail..."
                />

                {selectedIssueData?.requiresImage && (
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[#0F172A] dark:text-[#F1F5F9]">Photo Evidence Required</label>
                    {!imageUploaded ? (
                      <button 
                        onClick={() => setImageUploaded(true)}
                        className="w-full flex flex-col items-center justify-center p-6 border-2 border-dashed border-zinc-300 dark:border-[#334155] rounded-[12px] bg-zinc-50 dark:bg-[#12181E] hover:bg-zinc-100 dark:hover:bg-[#1E252B] transition-colors"
                      >
                        <ImageIcon className="w-8 h-8 text-zinc-400 dark:text-[#94A3B8] mb-2" />
                        <span className="text-sm font-medium text-zinc-600 dark:text-[#F1F5F9]">Tap to upload photo</span>
                        <span className="text-xs text-zinc-400 dark:text-[#94A3B8] mt-1">Camera or Gallery</span>
                      </button>
                    ) : (
                      <div className="relative w-full h-32 rounded-[12px] overflow-hidden border border-zinc-200 dark:border-[#334155]">
                        <img src="https://images.unsplash.com/photo-1606132915836-8e81561f5286?auto=format&fit=crop&w=400&q=80" alt="Uploaded evidence" className="w-full h-full object-cover" />
                        <button 
                          onClick={() => setImageUploaded(false)}
                          className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-[8px] backdrop-blur-sm"
                        >
                          Retake
                        </button>
                      </div>
                    )}
                  </div>
                )}

                <Button 
                  className="w-full rounded-[12px] mt-4" 
                  disabled={selectedIssueData?.requiresImage && !imageUploaded}
                  onClick={() => setSubmitted(true)}
                >
                  Submit Report
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Contact Methods */}
        <div>
          <h3 className="text-sm font-semibold text-zinc-500 dark:text-[#94A3B8] uppercase tracking-wider mb-3 px-1">Other ways to reach us</h3>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <button 
              onClick={() => setActiveContactMethod(activeContactMethod === 'chat' ? null : 'chat')}
              className={`flex flex-col items-center justify-center p-4 bg-[#FFFFFF] dark:bg-[#1E252B] border ${activeContactMethod === 'chat' ? 'border-indigo-500 ring-1 ring-indigo-500/20' : 'border-zinc-200 dark:border-[#334155]'} rounded-[12px] shadow-sm hover:border-indigo-200 dark:hover:border-indigo-500/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 transition-colors`}
            >
              <MessageSquare className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mb-2" />
              <span className="text-sm font-medium text-[#0F172A] dark:text-[#F1F5F9]">Chat with us</span>
            </button>
            <button 
              onClick={() => setActiveContactMethod(activeContactMethod === 'call' ? null : 'call')}
              className={`flex flex-col items-center justify-center p-4 bg-[#FFFFFF] dark:bg-[#1E252B] border ${activeContactMethod === 'call' ? 'border-indigo-500 ring-1 ring-indigo-500/20' : 'border-zinc-200 dark:border-[#334155]'} rounded-[12px] shadow-sm hover:border-indigo-200 dark:hover:border-indigo-500/50 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 transition-colors`}
            >
              <PhoneCall className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mb-2" />
              <span className="text-sm font-medium text-[#0F172A] dark:text-[#F1F5F9]">Call Support</span>
            </button>
          </div>
          
          {activeContactMethod === 'chat' && (
            <div className="bg-[#FFFFFF] dark:bg-[#1E252B] border border-indigo-100 dark:border-[#334155] p-5 rounded-[12px] shadow-sm animate-in fade-in slide-in-from-top-2">
              <h4 className="font-bold text-[#0F172A] dark:text-[#F1F5F9] mb-3 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-indigo-500" />
                Live Chat Support
              </h4>
              <div className="h-32 bg-zinc-50 dark:bg-[#12181E] rounded-[8px] p-3 mb-3 overflow-y-auto border border-zinc-100 dark:border-zinc-800">
                <div className="bg-[#FFFFFF] dark:bg-[#1E252B] p-2.5 rounded-[8px] rounded-tl-none border border-zinc-200 dark:border-zinc-700 max-w-[85%] mb-2 shadow-sm">
                  <p className="text-xs text-[#0F172A] dark:text-[#F1F5F9]">Hi Akash! I'm Tiffora's virtual assistant. How can I help you with your meal today?</p>
                </div>
              </div>
              <div className="flex gap-2">
                <input type="text" placeholder="Type a message..." className="flex-1 bg-zinc-50 dark:bg-[#12181E] border border-zinc-200 dark:border-[#334155] rounded-[8px] px-3 py-2 text-sm text-[#0F172A] dark:text-[#F1F5F9] focus:outline-none focus:border-indigo-500" />
                <Button size="sm" className="rounded-[8px] px-4">Send</Button>
              </div>
            </div>
          )}

          {activeContactMethod === 'call' && (
            <div className="bg-[#FFFFFF] dark:bg-[#1E252B] border border-indigo-100 dark:border-[#334155] p-5 rounded-[12px] shadow-sm flex items-center justify-between animate-in fade-in slide-in-from-top-2">
              <div>
                <h4 className="font-bold text-[#0F172A] dark:text-[#F1F5F9] mb-1">Tiffora Hotline</h4>
                <p className="text-sm text-zinc-500 dark:text-[#94A3B8]">Available 9 AM - 9 PM Daily</p>
              </div>
              <a href="tel:1800-TIF-FORA" className="text-xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-4 py-2 rounded-[8px]">
                1800-TIF-FORA
              </a>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}