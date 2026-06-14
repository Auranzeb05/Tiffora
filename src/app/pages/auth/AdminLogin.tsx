import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router";
import { motion } from "motion/react";
import { Sun, Moon, ArrowLeft } from "lucide-react";
import { useTheme } from "next-themes";

export function AdminLogin() {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/standalone-admin");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#F8FAFC] dark:bg-[#12181E] transition-colors duration-200 relative overflow-hidden font-sans">
      {/* Top Left Escape Button */}
      <Link 
        to="/" 
        className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-2 font-medium text-[14px] font-['Inter'] text-[#64748B] hover:text-slate-800 dark:text-[#94A3B8] dark:hover:text-white transition-colors z-10"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Main App
      </Link>

      {/* Top Right Theme Toggle */}
      {mounted && (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full transition-colors border border-transparent text-[#64748B] hover:bg-slate-200 hover:border-slate-300 dark:text-[#94A3B8] dark:hover:bg-slate-800 dark:hover:border-slate-700 z-10"
          title="Toggle Theme"
        >
          {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      )}

      {/* Center Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-full max-w-md mx-4 p-8 md:p-10 bg-white dark:bg-[#1E252B] rounded-2xl shadow-xl border border-slate-200 dark:border-[#334155] z-10 relative"
      >
        <div className="mb-8 text-center">
          <div className="mx-auto w-14 h-14 bg-[#E65F2B] rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-orange-500/20">
            <span className="text-white font-bold text-2xl leading-none">T</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-[#F1F5F9]">
            Tiffora Secure Admin Portal
          </h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Authorized personnel access only
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-[#F1F5F9] mb-1.5">
                Administrator Badge ID
              </label>
              <input 
                type="text" 
                placeholder="e.g. TIF-ADM-001" 
                required 
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#12181E] border border-slate-200 dark:border-[#334155] focus:border-[#E65F2B] focus:ring-1 focus:ring-[#E65F2B] outline-none transition-all dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-[#F1F5F9] mb-1.5">
                Access PIN / Password
              </label>
              <input 
                type="password" 
                placeholder="••••••••" 
                required 
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#12181E] border border-slate-200 dark:border-[#334155] focus:border-[#E65F2B] focus:ring-1 focus:ring-[#E65F2B] outline-none transition-all dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-4 rounded-xl font-bold text-white transition-all bg-[#E65F2B] hover:bg-[#D55322] shadow-[0_4px_14px_0_rgba(230,95,43,0.39)] hover:shadow-[0_6px_20px_rgba(230,95,43,0.23)] hover:-translate-y-0.5 active:translate-y-0"
          >
            Verify & Enter Terminal
          </button>
        </form>
      </motion.div>
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-orange-100/40 to-transparent dark:from-orange-900/10 blur-3xl" />
        <div className="absolute top-[60%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tl from-slate-200/50 to-transparent dark:from-slate-800/30 blur-3xl" />
      </div>
    </div>
  );
}
