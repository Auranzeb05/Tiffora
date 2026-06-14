import React, { useState } from "react";
import { MapPin, Phone, Navigation, CheckCircle2, AlertTriangle, Clock, QrCode, KeyRound, ArrowRight } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { motion, AnimatePresence } from "motion/react";

const TASKS = [
  { id: "1", customer: "Akash Patel", address: "Tech Park, Phase 2, BLR", phone: "+91 9876543210", meal: "Executive Veg", status: "pending", eta: "1:15 PM" },
  { id: "2", customer: "Priya Sharma", address: "G-402, Green View Apts", phone: "+91 9876543211", meal: "Premium South Indian", status: "completed", eta: "12:45 PM" },
];

export function DeliveryTasks() {
  const [showVerification, setShowVerification] = useState(false);
  const [verificationMethod, setVerificationMethod] = useState<'otp' | 'qr' | null>(null);
  
  return (
    <div className="flex flex-col min-h-full bg-zinc-50 pb-20 md:pb-8 md:p-8">
      <header className="bg-zinc-950 px-4 pt-10 pb-6 sticky top-0 z-10 text-white rounded-b-3xl shadow-lg border-b border-zinc-800 md:hidden">
        <div className="flex justify-between items-center mb-5">
          <div>
            <p className="text-zinc-400 text-xs font-semibold tracking-wide uppercase mb-1">Zone A • Koramangala</p>
            <h1 className="text-xl font-bold tracking-tight">Active Route</h1>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-2 rounded-xl text-center min-w-[60px]">
            <span className="text-lg font-bold font-mono text-emerald-400">1</span>
            <span className="text-zinc-500 font-mono text-sm">/45</span>
            <p className="text-[9px] text-zinc-500 uppercase tracking-wider mt-0.5">Done</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button className="flex-1 bg-white text-zinc-950 hover:bg-zinc-100 rounded-xl font-semibold h-12 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            <Navigation className="w-4 h-4 mr-2" /> Start Navigation
          </Button>
        </div>
      </header>

      <div className="px-4 py-6 md:p-0 space-y-5 md:space-y-8">
        {/* Desktop Header Content (hidden on mobile) */}
        <div className="hidden md:flex justify-between items-end">
          <div>
            <p className="text-zinc-500 text-xs font-semibold tracking-wide uppercase mb-1">Zone A • Koramangala</p>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900">Active Route</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white border border-zinc-200 p-2 rounded-xl text-center min-w-[80px] shadow-sm">
              <span className="text-xl font-bold font-mono text-emerald-600">1</span>
              <span className="text-zinc-400 font-mono text-base">/45</span>
              <p className="text-[10px] text-zinc-500 uppercase tracking-wider mt-0.5">Done</p>
            </div>
            <Button className="bg-zinc-950 text-white hover:bg-zinc-800 rounded-xl font-semibold h-14 px-6 shadow-md">
              <Navigation className="w-5 h-5 mr-2" /> Start Navigation
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Next Drop Section */}
          <div>
            <h3 className="text-xs md:text-sm font-bold text-zinc-500 uppercase tracking-widest pl-1 mb-4">Next Drop</h3>
            
            <Card className="rounded-3xl border-indigo-200/60 shadow-[0_8px_30px_rgba(79,70,229,0.08)] relative overflow-hidden bg-white">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-indigo-500" />
              <CardContent className="p-5 md:p-8">
                <div className="flex justify-between items-start mb-4 md:mb-6">
                  <div>
                    <h4 className="font-bold text-zinc-900 text-lg md:text-2xl tracking-tight">{TASKS[0].customer}</h4>
                    <div className="flex gap-2 items-center mt-1.5 md:mt-2">
                      <span className="text-xs md:text-sm font-semibold text-indigo-700 bg-indigo-50 px-2 md:px-3 py-0.5 md:py-1 rounded-md border border-indigo-100">{TASKS[0].meal}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-xs md:text-sm font-semibold bg-orange-50 border border-orange-100 px-2.5 md:px-3 py-1.5 md:py-2 rounded-lg text-orange-700 font-mono">
                    <Clock className="w-3.5 md:w-4 h-3.5 md:h-4 mr-1 md:mr-1.5" /> {TASKS[0].eta}
                  </div>
                </div>
                
                <div className="flex items-start gap-3 mt-4 md:mt-6 bg-zinc-50 p-3.5 md:p-5 rounded-2xl border border-zinc-100">
                  <MapPin className="w-5 md:w-6 h-5 md:h-6 text-zinc-400 mt-0.5 shrink-0" />
                  <p className="text-sm md:text-base text-zinc-700 font-medium leading-relaxed">{TASKS[0].address}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 md:gap-4 mt-5 md:mt-8">
                  <Button variant="outline" className="rounded-xl md:rounded-2xl border-zinc-200 text-zinc-700 h-12 md:h-14 font-semibold hover:bg-zinc-50">
                    <Phone className="w-4 md:w-5 h-4 md:h-5 mr-2 text-zinc-400" /> Call
                  </Button>
                  <Button 
                    onClick={() => setShowVerification(true)}
                    className="rounded-xl md:rounded-2xl h-12 md:h-14 bg-indigo-600 hover:bg-indigo-700 font-semibold shadow-[0_4px_14px_0_rgb(79,70,229,0.39)]"
                  >
                    Deliver <ArrowRight className="w-4 md:w-5 h-4 md:h-5 ml-2" />
                  </Button>
                </div>
                <div className="mt-4 md:mt-6 text-center">
                  <button className="text-[11px] md:text-sm text-zinc-400 font-semibold uppercase tracking-widest flex items-center justify-center w-full hover:text-zinc-600 transition-colors">
                    <AlertTriangle className="w-3 md:w-4 h-3 md:h-4 mr-1.5 md:mr-2" /> Report Issue
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Completed Section */}
          <div>
            <h3 className="text-xs md:text-sm font-bold text-zinc-500 uppercase tracking-widest pl-1 mt-8 md:mt-0 pt-4 md:pt-0 border-t border-zinc-100 md:border-none mb-4">Completed</h3>
            
            <Card className="rounded-2xl border-zinc-200 shadow-sm opacity-60 bg-zinc-50">
              <CardContent className="p-4 md:p-6 flex items-center justify-between">
                <div>
                  <h4 className="font-bold md:text-lg text-zinc-900 line-through decoration-zinc-400">{TASKS[1].customer}</h4>
                  <p className="text-xs md:text-sm text-zinc-500 mt-0.5">{TASKS[1].address}</p>
                </div>
                <div className="flex flex-col items-end gap-1.5">
                  <div className="bg-emerald-100 p-1 md:p-1.5 rounded-full text-emerald-600">
                    <CheckCircle2 className="w-5 md:w-6 h-5 md:h-6" />
                  </div>
                  <span className="text-[10px] md:text-xs font-bold font-mono text-emerald-700">{TASKS[1].eta}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Verification Drawer Overlay */}
      <AnimatePresence>
        {showVerification && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
              onClick={() => setShowVerification(false)}
            />
            <motion.div 
              initial={{ y: "100%" }} 
              animate={{ y: 0 }} 
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 bg-white z-50 rounded-t-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
            >
              <div className="w-12 h-1.5 bg-zinc-200 rounded-full mx-auto mt-3 mb-5"></div>
              <div className="px-5 pb-8 overflow-y-auto">
                <h2 className="text-xl font-bold text-zinc-900 tracking-tight text-center mb-1">Verify Delivery</h2>
                <p className="text-sm text-zinc-500 text-center mb-6">Choose verification method to complete drop for <span className="font-semibold text-zinc-800">Akash Patel</span>.</p>
                
                {!verificationMethod ? (
                  <div className="space-y-3">
                    <button 
                      onClick={() => setVerificationMethod('otp')}
                      className="w-full flex items-center p-4 border border-zinc-200 rounded-2xl hover:border-indigo-600 hover:bg-indigo-50/50 transition-all text-left"
                    >
                      <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mr-4">
                        <KeyRound className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-zinc-900 text-base">OTP Verification</h4>
                        <p className="text-xs text-zinc-500 mt-0.5">Ask customer for 4-digit code</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-zinc-400" />
                    </button>
                    
                    <button 
                      onClick={() => setVerificationMethod('qr')}
                      className="w-full flex items-center p-4 border border-zinc-200 rounded-2xl hover:border-indigo-600 hover:bg-indigo-50/50 transition-all text-left"
                    >
                      <div className="w-12 h-12 bg-zinc-900 text-white rounded-xl flex items-center justify-center mr-4">
                        <QrCode className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-zinc-900 text-base">Scan QR Code</h4>
                        <p className="text-xs text-zinc-500 mt-0.5">Scan code from customer's app</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-zinc-400" />
                    </button>
                  </div>
                ) : verificationMethod === 'otp' ? (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                    <div className="flex justify-center gap-3">
                      {[1, 2, 3, 4].map((i) => (
                        <input key={i} type="text" maxLength={1} className="w-14 h-16 text-center text-2xl font-bold font-mono border-2 border-zinc-200 rounded-xl focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 outline-none transition-all" />
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" className="flex-1 h-12 rounded-xl" onClick={() => setVerificationMethod(null)}>Back</Button>
                      <Button className="flex-1 h-12 rounded-xl bg-emerald-600 hover:bg-emerald-700 shadow-[0_4px_14px_0_rgb(5,150,105,0.39)]">Verify & Deliver</Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right-4 text-center">
                    <div className="w-48 h-48 bg-zinc-100 border-2 border-dashed border-zinc-300 rounded-3xl mx-auto flex flex-col items-center justify-center gap-3">
                      <QrCode className="w-10 h-10 text-zinc-400" />
                      <span className="text-sm font-medium text-zinc-500">Camera Active</span>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" className="w-full h-12 rounded-xl" onClick={() => setVerificationMethod(null)}>Cancel Scan</Button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}