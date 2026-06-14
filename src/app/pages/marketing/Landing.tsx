import React from "react";
import { Link } from "react-router";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { 
  ArrowRight, TrendingUp, Users, CheckCircle2,
  Map, ChefHat, CreditCard, LifeBuoy, Package 
} from "lucide-react";
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { motion } from "motion/react";

const REVENUE_DATA = [
  { value: 1.2 }, { value: 1.5 }, { value: 1.8 }, { value: 1.4 }, 
  { value: 2.1 }, { value: 1.9 }, { value: 2.4 }
];

const ORDER_DATA = [
  { value: 400 }, { value: 800 }, { value: 1876 }, { value: 1200 }, { value: 600 }
];

function HeroDashboardMockup() {
  return (
    <div className="w-full bg-white rounded-2xl border border-zinc-200/80 shadow-2xl overflow-hidden ring-1 ring-black/[0.03]">
      {/* Top Header Mockup */}
      <div className="h-12 bg-zinc-50 border-b border-zinc-100 flex items-center px-4 gap-4">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-zinc-300"></div>
          <div className="w-3 h-3 rounded-full bg-zinc-300"></div>
          <div className="w-3 h-3 rounded-full bg-zinc-300"></div>
        </div>
        <div className="flex-1 bg-white h-7 rounded-md border border-zinc-200 flex items-center px-3 max-w-sm mx-auto shadow-sm">
          <span className="text-[10px] text-zinc-400 font-mono">tiffora.com/admin/dashboard</span>
        </div>
      </div>
      
      {/* App Shell Mockup */}
      <div className="flex h-[450px]">
        {/* Sidebar */}
        <div className="w-48 bg-zinc-950 flex-shrink-0 flex flex-col pt-4 px-3">
          <div className="flex items-center gap-2 px-2 mb-6">
            <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">T</span>
            </div>
            <span className="text-zinc-100 text-sm font-semibold tracking-tight">Tiffora Admin</span>
          </div>
          <div className="space-y-1">
            <div className="bg-indigo-600/10 text-indigo-400 px-3 py-2 rounded-lg text-xs font-medium flex items-center gap-2">
              <TrendingUp className="w-3.5 h-3.5" /> Dashboard
            </div>
            <div className="text-zinc-500 hover:text-zinc-300 px-3 py-2 rounded-lg text-xs font-medium flex items-center gap-2">
              <Users className="w-3.5 h-3.5" /> Customers
            </div>
            <div className="text-zinc-500 hover:text-zinc-300 px-3 py-2 rounded-lg text-xs font-medium flex items-center gap-2">
              <ChefHat className="w-3.5 h-3.5" /> Kitchen
            </div>
            <div className="text-zinc-500 hover:text-zinc-300 px-3 py-2 rounded-lg text-xs font-medium flex items-center gap-2">
              <Map className="w-3.5 h-3.5" /> Routes
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-zinc-50/50 p-6 overflow-hidden">
          <div className="mb-6 flex justify-between items-end">
            <div>
              <h2 className="text-lg font-bold text-zinc-900">Analytics Overview</h2>
              <p className="text-xs text-zinc-500 mt-0.5">Real-time operations metrics</p>
            </div>
            <div className="h-7 px-3 bg-white border border-zinc-200 rounded-md text-xs font-medium text-zinc-600 flex items-center shadow-sm">
              Today
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="bg-white p-4 rounded-xl border border-zinc-200/80 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <p className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Revenue</p>
                <CreditCard className="w-4 h-4 text-zinc-400" />
              </div>
              <p className="text-2xl font-bold text-zinc-900">₹12.4L</p>
              <p className="text-[10px] text-emerald-600 font-medium mt-1">+18.1% vs last week</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-zinc-200/80 shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <p className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Deliveries</p>
                <Package className="w-4 h-4 text-zinc-400" />
              </div>
              <p className="text-2xl font-bold text-zinc-900">1,876</p>
              <p className="text-[10px] text-emerald-600 font-medium mt-1">+5.2% vs last week</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-zinc-200/80 shadow-sm relative overflow-hidden">
              <div className="flex justify-between items-start mb-2">
                <p className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Active Subs</p>
                <Users className="w-4 h-4 text-zinc-400" />
              </div>
              <p className="text-2xl font-bold text-zinc-900">2,183</p>
              <p className="text-[10px] text-emerald-600 font-medium mt-1">+12.5% vs last week</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 h-[160px]">
            <div className="bg-white rounded-xl border border-zinc-200/80 shadow-sm p-4 flex flex-col">
              <p className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider mb-2">Revenue Trend</p>
              <div className="flex-1 w-full relative min-h-[100px] min-w-[100px]">
                <ResponsiveContainer width="100%" height={100}>
                  <AreaChart data={REVENUE_DATA}>
                    <defs>
                      <linearGradient id="colorMock" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="value" stroke="#4f46e5" strokeWidth={2} fillOpacity={1} fill="url(#colorMock)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-zinc-200/80 shadow-sm p-4 flex flex-col">
              <p className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider mb-2">Live Production</p>
              <div className="flex-1 space-y-3 mt-2">
                <div>
                  <div className="flex justify-between text-[10px] mb-1">
                    <span className="font-medium text-zinc-700">Executive North Indian</span>
                    <span className="text-zinc-500">850/850</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] mb-1">
                    <span className="font-medium text-zinc-700">Premium South Indian</span>
                    <span className="text-zinc-500">357/420</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500 w-[85%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] mb-1">
                    <span className="font-medium text-zinc-700">Healthy Salad Bowl</span>
                    <span className="text-zinc-500">124/310</span>
                  </div>
                  <div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500 w-[40%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Landing() {
  return (
    <div className="flex flex-col flex-1 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-zinc-950">
        <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-indigo-900/20 to-transparent pointer-events-none" />
        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-indigo-500 mr-2 animate-pulse"></span>
            Introducing Tiffora 2.0
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl mx-auto leading-[1.1]"
          >
            The operating system for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">meal delivery.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Scale from 50 to 5,000 daily active subscribers. Manage kitchens, optimize routes, and handle prepaid wallets—all in one beautiful platform.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/register">
              <Button size="lg" className="w-full sm:w-auto h-12 px-8 font-inter text-[16px] font-semibold bg-[#E65F2B] hover:bg-[#d65524] text-[#FFFFFF] rounded-lg shadow-sm border-none transition-colors">
                Get Started
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="ghost" className="w-full sm:w-auto h-12 px-8 font-inter text-[16px] font-semibold bg-transparent border border-white text-[#FFFFFF] hover:bg-white/10 hover:text-white rounded-lg transition-colors">
                Sign in to Dashboard
              </Button>
            </Link>
          </motion.div>
          
          {/* Hero Dashboard Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="mt-20 relative max-w-5xl mx-auto rounded-2xl shadow-2xl"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur opacity-20"></div>
            <div className="relative">
              <HeroDashboardMockup />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-12 border-b border-zinc-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-8">
            Powering logistics for enterprise kitchens
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-xl font-bold font-serif text-zinc-900">FreshBite</div>
            <div className="text-xl font-black tracking-tighter text-zinc-900">MEALCRAFT</div>
            <div className="text-lg font-bold uppercase tracking-widest text-zinc-900">Nourish.io</div>
            <div className="text-xl font-semibold italic text-zinc-900">PrepDaily</div>
            <div className="text-xl font-bold text-zinc-900">tiffin+</div>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-32 bg-zinc-50 border-b border-zinc-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-50/50 via-zinc-50 to-zinc-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6 tracking-tight">
              Complex operations, <br/>simplified natively.
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Tiffora replaces spreadsheets with purpose-built infrastructure for subscription meals, giving you a 360° view of your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            <div className="bg-white rounded-3xl p-8 border border-zinc-200/80 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <ChefHat className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-3 tracking-tight">Kitchen Manifest</h3>
              <p className="text-zinc-600 leading-relaxed text-sm">
                Auto-generate exact meal prep numbers based on active subscriptions, pausing users, and new orders. No more over-cooking.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 border border-zinc-200/80 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Map className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-3 tracking-tight">Route Optimization</h3>
              <p className="text-zinc-600 leading-relaxed text-sm">
                Cluster deliveries by pincode automatically. Assign fleets and track real-time drops with our partner PWA app.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-zinc-200/80 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 text-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <LifeBuoy className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-3 tracking-tight">SOS Helpdesk</h3>
              <p className="text-zinc-600 leading-relaxed text-sm">
                Centralize spilled food reports and missing boxes. Manage customer credits instantly via the integrated prepaid wallet.
              </p>
            </div>
          </div>

          {/* New Swiggy-style Showcase Section */}
          <div className="bg-white rounded-[2.5rem] border border-zinc-200/80 shadow-xl overflow-hidden flex flex-col lg:flex-row items-stretch">
            <div className="p-10 md:p-16 lg:w-1/2 flex flex-col justify-center">
              <Badge className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100 w-fit mb-6 border-indigo-200">Customer Experience</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6 tracking-tight leading-tight">
                Deliver a 5-star experience, every single day.
              </h2>
              <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                Give your customers a Swiggy-like app to manage their daily tiffins. With beautiful meal showcases, precise nutritional info, and seamless vacation pausing, they'll never look back.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-zinc-700 font-medium">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center"><CheckCircle2 className="w-4 h-4" /></div>
                  Premium meal cards with photo showcases
                </li>
                <li className="flex items-center gap-3 text-zinc-700 font-medium">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center"><CheckCircle2 className="w-4 h-4" /></div>
                  Dietary tags & nutritional macros
                </li>
                <li className="flex items-center gap-3 text-zinc-700 font-medium">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center"><CheckCircle2 className="w-4 h-4" /></div>
                  Real-time driver tracking & ETA
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 relative min-h-[400px]">
              <img src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwYmlyeWFuaXxlbnwxfHx8fDE3ODEzMjczMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Premium Indian Meal Delivery" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent hidden lg:block" />
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Built for scale.</h2>
          <p className="text-xl text-zinc-400 mb-10 font-medium">
            Join enterprise kitchens managing 10,000+ meals daily.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/register">
              <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-base bg-white text-zinc-950 hover:bg-zinc-100 border-none shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                Start your 14-day free trial
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 text-base border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-800">
                Talk to Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}