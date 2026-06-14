import React, { useState } from "react";
import { Bell, MapPin, Clock, CheckCircle2, ChevronRight, Search, User, Bike, PhoneCall, Flame, Leaf, ArrowRight, Tag, X, Check, ShieldCheck, Star, Calendar, FileText } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { ImageWithFallback } from "../../components/ui/ImageWithFallback";
import { Link } from "react-router";

const MEALS_LUNCH = [
  {
    id: 1,
    name: "Classic North Indian Thali",
    type: "veg",
    calories: "650",
    protein: "18g",
    image: "https://images.unsplash.com/photo-1680993032090-1ef7ea9b51e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0aGFsaXxlbnwxfHx8fDE3ODEzNjIwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Bestseller", "Comfort Food"],
    ingredients: "Yellow Dal Fry, Paneer Butter Masala, 3 Butter Rotis, Jeera Rice, Raita, and a sweet Gulab Jamun. Prepared with low-oil cooking techniques."
  },
  {
    id: 2,
    name: "Healthy Paneer Tikka Salad",
    type: "veg",
    calories: "320",
    protein: "24g",
    image: "https://images.unsplash.com/photo-1556386734-4227a180d19e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwaW5kaWFuJTIwc2FsYWR8ZW58MXx8fHwxNzgxMzYyMDQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Low Carb", "Keto"],
    ingredients: "Fresh malai paneer cubes marinated in hung curd and tandoori spices, grilled to perfection, served over a bed of crisp lettuce, cherry tomatoes, and bell peppers with mint dressing."
  }
];

const MEALS_DINNER = [
  {
    id: 3,
    name: "Hyderabadi Chicken Biryani",
    type: "non-veg",
    calories: "850",
    protein: "45g",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwYmlyeWFuaXxlbnwxfHx8fDE3ODEzMjczMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Chef's Special"],
    ingredients: "Authentic dum biryani prepared with tender chicken marinated overnight in traditional Hyderabadi spices, layered with long-grain basmati rice and topped with barista (fried onions)."
  },
  {
    id: 4,
    name: "Premium Dal Makhani Spread",
    type: "veg",
    calories: "540",
    protein: "16g",
    image: "https://images.unsplash.com/photo-1728910156510-77488f19b152?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmb29kJTIwc3ByZWFkfGVufDF8fHx8MTc4MTM2MjA0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["High Fiber"],
    ingredients: "Slow-cooked black lentils simmered for 12 hours with fresh tomato puree and a touch of cream. Served alongside 2 Garlic Naans and spiced onion salad."
  }
];

function VegIcon({ type }: { type: string }) {
  const isVeg = type === "veg";
  return (
    <div className={`w-4 h-4 rounded-[3px] border-2 flex items-center justify-center shrink-0 ${isVeg ? 'border-green-600' : 'border-red-600'}`}>
      <div className={`w-2 h-2 rounded-full ${isVeg ? 'bg-green-600' : 'bg-red-600'}`} />
    </div>
  );
}

function MealCard({ meal, isExpanded, onToggle }: { meal: any; isExpanded: boolean; onToggle: () => void }) {
  return (
    <div 
      onClick={onToggle}
      className="min-w-[280px] md:min-w-[320px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-indigo-200 dark:hover:border-indigo-800 transition-all group flex flex-col snap-start cursor-pointer"
    >
      <div className="relative h-40 overflow-hidden shrink-0">
        <ImageWithFallback src={meal.image} alt={meal.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-3 left-3 flex gap-2">
          {meal.tags.map((tag: string) => (
            <Badge key={tag} className="bg-black/50 hover:bg-black/60 text-white backdrop-blur-md border-none text-[10px] font-semibold">{tag}</Badge>
          ))}
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start gap-2 mb-2">
            <VegIcon type={meal.type} />
            <h4 className="font-bold text-zinc-900 dark:text-zinc-100 leading-tight line-clamp-2">{meal.name}</h4>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-3 text-xs font-medium text-zinc-500 dark:text-zinc-400">
            <div className="flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-md">
              <Flame className="w-3.5 h-3.5 text-orange-500" /> {meal.calories} kcal
            </div>
            <div className="flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-md">
              <Leaf className="w-3.5 h-3.5 text-emerald-500" /> {meal.protein}
            </div>
          </div>
          <ChevronRight className={`w-4 h-4 text-zinc-400 transition-transform ${isExpanded ? "rotate-90" : ""}`} />
        </div>
      </div>
      
      {isExpanded && (
        <div className="p-4 border-t border-zinc-100 dark:border-zinc-800 bg-indigo-50/50 dark:bg-indigo-900/10 animate-in slide-in-from-top-2 fade-in duration-200">
          <h5 className="text-xs font-bold text-indigo-900 dark:text-indigo-300 mb-1.5 uppercase tracking-wide flex items-center gap-1">
            <Star className="w-3.5 h-3.5" /> Culinary Notes
          </h5>
          <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium">
            {meal.ingredients}
          </p>
        </div>
      )}
    </div>
  );
}

export function CustomerDashboard() {
  const [isVacationModalOpen, setIsVacationModalOpen] = useState(false);
  const [isAddFundsOpen, setIsAddFundsOpen] = useState(false);
  const [vacationPaused, setVacationPaused] = useState(false);
  const [vacationOptions, setVacationOptions] = useState({ lunch: false, dinner: false });
  const [expandedMealDesc, setExpandedMealDesc] = useState<number | null>(null);
  const [isDriverInfoOpen, setIsDriverInfoOpen] = useState(false);
  const [isSubModalOpen, setIsSubModalOpen] = useState(false);
  const [showClaimModal, setShowClaimModal] = useState(false);
  const [isOfferClaimed, setIsOfferClaimed] = useState(false);

  const handleVacationConfirm = () => {
    setVacationPaused(true);
    setTimeout(() => {
      setIsVacationModalOpen(false);
      setVacationPaused(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-full bg-zinc-50 dark:bg-zinc-950 pb-20 md:pb-8 md:p-8 transition-colors duration-200">
      {/* Header - Mobile Only */}
      <header className="bg-white dark:bg-zinc-900 px-4 pt-10 pb-4 flex justify-between items-center sticky top-0 z-20 border-b border-zinc-100 dark:border-zinc-800 shadow-sm md:hidden transition-colors duration-200">
        <div className="flex items-center gap-3">
          <Link to="/customer/profile" className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center border-2 border-white dark:border-zinc-800 shadow-sm overflow-hidden">
            <User className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          </Link>
          <div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium tracking-wide uppercase">Good Morning</p>
            <h1 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Akash Patel</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="relative p-2 bg-zinc-50 dark:bg-zinc-800 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 transition-colors">
            <Search className="w-5 h-5 text-zinc-600 dark:text-zinc-300" />
          </button>
          <button className="relative p-2 bg-zinc-50 dark:bg-zinc-800 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 transition-colors">
            <Bell className="w-5 h-5 text-zinc-600 dark:text-zinc-300" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white dark:ring-zinc-900" />
          </button>
        </div>
      </header>

      <div className="px-4 py-6 md:p-0 space-y-8 md:space-y-10">
        
        {/* Desktop Welcome (Hidden on Mobile) */}
        <div className="hidden md:block">
          <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium tracking-wide uppercase">Good Morning</p>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Akash Patel</h1>
        </div>

        {/* Promo Hero Banner */}
        <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden bg-zinc-900 shadow-lg group">
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/80 to-transparent z-10" />
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5lZXIlMjB0aWtrYSUyMG1hc2FsYXxlbnwxfHx8fDE3ODEzNjIwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Paneer Tikka Offer" 
            className="absolute inset-0 w-full h-full object-cover object-center opacity-60 group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="relative z-20 p-6 md:p-10 w-full md:w-2/3 flex flex-col items-start">
            <Badge className="bg-orange-500 text-white hover:bg-orange-600 border-none mb-4 font-bold tracking-wide uppercase">
              <Tag className="w-3.5 h-3.5 mr-1.5" /> Weekend Special
            </Badge>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 tracking-tight leading-tight">Upgrade to Premium<br/>Paneer Tikka Meals</h2>
            <p className="text-zinc-300 text-sm md:text-base mb-6 max-w-sm">Get 20% extra protein in your daily lunch deliveries this weekend at no extra cost.</p>
            {isOfferClaimed ? (
              <button disabled className="bg-emerald-500/20 text-emerald-400 font-bold px-5 py-2.5 rounded-lg text-sm shadow-sm flex items-center gap-2 border border-emerald-500/30">
                <Check className="w-4 h-4" /> Offer Active This Weekend
              </button>
            ) : (
              <button 
                onClick={() => setShowClaimModal(true)} 
                className="bg-white text-zinc-900 font-bold px-5 py-2.5 rounded-lg text-sm shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform"
              >
                Claim Offer
              </button>
            )}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-8 md:space-y-10">
            {/* KPI Row */}
            <div className="grid grid-cols-2 gap-3 md:gap-6">
              <Card className="rounded-2xl border-zinc-200/60 dark:border-zinc-800 shadow-sm bg-white dark:bg-zinc-900 hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors">
                <CardContent className="p-4 md:p-6 flex flex-col">
                  <span className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 font-medium mb-1 md:mb-2">Meals Remaining</span>
                  <div className="flex items-baseline gap-1 font-mono">
                    <span className="text-2xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100">14</span>
                    <span className="text-sm md:text-base text-zinc-400 dark:text-zinc-500">/30</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-2xl border-zinc-200/60 dark:border-zinc-800 shadow-sm bg-white dark:bg-zinc-900 hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors">
                <CardContent className="p-4 md:p-6 flex flex-col">
                  <span className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 font-medium mb-1 md:mb-2">Wallet Balance</span>
                  <div className="flex items-baseline gap-1 font-mono">
                    <span className="text-2xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-500">₹850</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Live Tracking Widget */}
            <div>
              <div className="flex justify-between items-end mb-3 md:mb-4 px-1">
                <h3 className="text-base md:text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Live Tracking</h3>
                <span className="text-xs md:text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 md:px-3 md:py-1.5 rounded-md">Lunch</span>
              </div>
              
              <Card className="rounded-2xl border-zinc-200 dark:border-zinc-800 shadow-lg overflow-hidden relative">
                <div className="absolute inset-0 bg-indigo-50/50 dark:bg-indigo-900/10 pointer-events-none"></div>
                
                {/* Map Mockup Area */}
                <div className="h-32 md:h-48 bg-zinc-200 dark:bg-zinc-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXB8ZW58MXx8fHwxNzgxMzYxMzI0fDA&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center opacity-40 mix-blend-luminosity dark:opacity-20"></div>
                  <div className="absolute top-1/2 left-1/4 w-3 md:w-4 h-3 md:h-4 bg-indigo-600 rounded-full ring-4 ring-indigo-200 dark:ring-indigo-900 shadow-lg z-10"></div>
                  <div className="absolute top-1/3 right-1/4 w-4 md:w-5 h-4 md:h-5 bg-emerald-500 rounded-full ring-4 ring-emerald-100 dark:ring-emerald-900 shadow-lg flex items-center justify-center z-10">
                    <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-white rounded-full"></div>
                  </div>
                  <svg className="absolute inset-0 w-full h-full text-indigo-600 dark:text-indigo-400 z-0" style={{ strokeDasharray: '4 4' }}>
                    <path d="M100 80 Q 150 50 250 60" fill="transparent" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>

                <div className="relative bg-white dark:bg-zinc-900 pt-4 md:pt-6 pb-5 md:pb-8 px-5 md:px-8 z-10 rounded-t-3xl -mt-4 shadow-[0_-8px_20px_rgba(0,0,0,0.05)] border-t border-zinc-100 dark:border-zinc-800">
                  <div className="flex justify-between items-start mb-5 md:mb-8">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-zinc-900 dark:text-zinc-100 text-lg md:text-2xl">Arriving in 12 mins</h4>
                      </div>
                      <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 font-medium">1:15 PM • Out for Delivery</p>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-500 w-10 md:w-14 h-10 md:h-14 rounded-full flex items-center justify-center border border-orange-100 dark:border-orange-900/50 shadow-sm">
                      <Bike className="w-5 md:w-7 h-5 md:h-7" />
                    </div>
                  </div>

                  {/* OTP Badge */}
                  <div className="mb-6 bg-indigo-50/80 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/50 p-3 rounded-xl flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-2 text-indigo-900 dark:text-indigo-300 font-bold text-sm tracking-tight">
                      <ShieldCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                      Verification Secure OTP
                    </div>
                    <span className="font-mono text-lg font-bold tracking-widest text-indigo-700 dark:text-indigo-400 bg-white dark:bg-zinc-950 px-3 py-1 rounded-[8px] border border-indigo-200 dark:border-indigo-800/50 shadow-sm">
                      5842
                    </span>
                  </div>

                  {/* Progress Timeline */}
                  <div className="relative mb-6 md:mb-10">
                    <div className="absolute top-2 left-0 w-full h-0.5 md:h-1 bg-zinc-100 dark:bg-zinc-800 rounded-full"></div>
                    <div className="absolute top-2 left-0 w-2/3 h-0.5 md:h-1 bg-indigo-600 dark:bg-indigo-500 rounded-full"></div>
                    <div className="relative flex justify-between text-[10px] md:text-sm font-medium">
                      <div className="flex flex-col items-center gap-1 md:gap-2">
                        <div className="w-4 md:w-5 h-4 md:h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center z-10 ring-4 ring-white dark:ring-zinc-900"><CheckCircle2 className="w-3 md:w-3.5 h-3 md:h-3.5" /></div>
                        <span className="text-zinc-900 dark:text-zinc-100">Packed</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 md:gap-2">
                        <div className="w-4 md:w-5 h-4 md:h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center z-10 ring-4 ring-white dark:ring-zinc-900"><CheckCircle2 className="w-3 md:w-3.5 h-3 md:h-3.5" /></div>
                        <span className="text-zinc-900 dark:text-zinc-100">On Way</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 md:gap-2">
                        <div className="w-4 md:w-5 h-4 md:h-5 rounded-full bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 z-10 ring-4 ring-white dark:ring-zinc-900"></div>
                        <span className="text-zinc-400 dark:text-zinc-500">Nearby</span>
                      </div>
                    </div>
                  </div>

                  {/* Delivery Exec Info */}
                  <div className="flex items-center justify-between bg-zinc-50 dark:bg-zinc-800/50 rounded-xl p-3 md:p-4 border border-zinc-100 dark:border-zinc-800 hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors cursor-pointer" onClick={() => setIsDriverInfoOpen(true)}>
                    <div className="flex items-center gap-3 md:gap-4">
                      <ImageWithFallback src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtYW58ZW58MXx8fHwxNzgxMzYxMzQwfDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Ramesh" className="w-10 md:w-12 h-10 md:h-12 rounded-full object-cover shadow-sm border border-zinc-200 dark:border-zinc-700" />
                      <div>
                        <p className="text-sm md:text-base font-semibold text-zinc-900 dark:text-zinc-100">Ramesh Kumar</p>
                        <p className="text-[11px] md:text-xs text-zinc-500 dark:text-zinc-400 font-mono">KA-01-EF-4321</p>
                      </div>
                    </div>
                    <button className="w-9 md:w-11 h-9 md:h-11 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-500 rounded-full flex items-center justify-center hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors" onClick={(e) => e.stopPropagation()}>
                      <PhoneCall className="w-4 md:w-5 h-4 md:h-5" />
                    </button>
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Lunch Showcase */}
            <div>
              <div className="flex justify-between items-end mb-3 md:mb-4 px-1">
                <h3 className="text-base md:text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Today's Lunch Menu</h3>
                <Link to="/customer/calendar" className="text-xs md:text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 flex items-center">
                  Full Week <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
              <div className="flex overflow-x-auto gap-4 md:gap-6 pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
                {MEALS_LUNCH.map(meal => (
                  <MealCard 
                    key={meal.id} 
                    meal={meal} 
                    isExpanded={expandedMealDesc === meal.id}
                    onToggle={() => setExpandedMealDesc(expandedMealDesc === meal.id ? null : meal.id)}
                  />
                ))}
              </div>
            </div>

            {/* Dinner Showcase */}
            <div>
              <div className="flex justify-between items-end mb-3 md:mb-4 px-1">
                <h3 className="text-base md:text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Today's Dinner Menu</h3>
                <Link to="/customer/calendar" className="text-xs md:text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 flex items-center">
                  Full Week <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
              <div className="flex overflow-x-auto gap-4 md:gap-6 pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
                {MEALS_DINNER.map(meal => (
                  <MealCard 
                    key={meal.id} 
                    meal={meal} 
                    isExpanded={expandedMealDesc === meal.id}
                    onToggle={() => setExpandedMealDesc(expandedMealDesc === meal.id ? null : meal.id)}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 space-y-6 md:space-y-8">
            {/* Active Subscription Banner - Dinner */}
            <div>
              <div className="flex justify-between items-end mb-3 md:mb-4 px-1">
                <h3 className="text-base md:text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Active Subscriptions</h3>
              </div>
              <button 
                onClick={() => setIsSubModalOpen(true)}
                className="w-full text-left bg-zinc-950 dark:bg-zinc-900 rounded-2xl md:rounded-3xl p-5 md:p-6 text-white shadow-lg border border-zinc-800 dark:border-zinc-700 relative overflow-hidden group hover:border-indigo-500/50 transition-colors"
              >
                <div className="absolute top-0 right-0 w-32 md:w-48 h-32 md:h-48 bg-indigo-500/20 blur-3xl rounded-full transition-transform group-hover:scale-110"></div>
                <div className="flex justify-between items-start mb-4 md:mb-6 relative z-10">
                  <div>
                    <Badge className="bg-white/10 text-indigo-200 hover:bg-white/20 border-none mb-2 md:mb-3 backdrop-blur-sm text-xs font-semibold">
                      Premium Dinner
                    </Badge>
                    <h2 className="text-lg md:text-xl font-bold tracking-tight text-white">Executive North Indian</h2>
                  </div>
                  <div className="w-12 md:w-16 h-12 md:h-16 rounded-xl bg-white/5 flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:bg-white/10 transition-colors">
                    <ImageWithFallback src="https://images.unsplash.com/photo-1624085920158-a0f08a6b30cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBsdW5jaCUyMGJveHxlbnwxfHx8fDE3ODEzNjEzMDN8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Tiffin" className="w-10 md:w-14 h-10 md:h-14 object-cover rounded-lg" />
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm md:text-base text-zinc-400 relative z-10 font-mono">
                  <div className="flex items-center">
                    <Clock className="w-4 md:w-5 h-4 md:h-5 mr-1.5 md:mr-2" />
                    <span>Valid till Oct 24, 2026</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-zinc-500 group-hover:text-indigo-400 transition-colors" />
                </div>
              </button>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-4">
              <button 
                onClick={() => setIsVacationModalOpen(true)}
                className="flex items-center justify-between p-4 md:p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl md:rounded-2xl shadow-sm hover:border-indigo-200 dark:hover:border-indigo-800 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 transition-colors"
              >
                <div className="flex flex-col items-start gap-1">
                  <span className="text-sm md:text-base font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">Pause Meal</span>
                  <span className="text-[11px] md:text-sm text-zinc-500 dark:text-zinc-400">Vacation mode</span>
                </div>
                <ChevronRight className="w-4 md:w-5 h-4 md:h-5 text-zinc-400 dark:text-zinc-500" />
              </button>
              <button 
                onClick={() => setIsAddFundsOpen(true)}
                className="flex items-center justify-between p-4 md:p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl md:rounded-2xl shadow-sm hover:border-indigo-200 dark:hover:border-indigo-800 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20 transition-colors group"
              >
                <div className="flex flex-col items-start gap-1">
                  <span className="text-sm md:text-base font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">Add Funds</span>
                  <span className="text-[11px] md:text-sm text-zinc-500 dark:text-zinc-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-500 transition-colors">UPI / Cards</span>
                </div>
                <ChevronRight className="w-4 md:w-5 h-4 md:h-5 text-zinc-400 dark:text-zinc-500" />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Modals */}
      {showClaimModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-5 border-b border-zinc-100 dark:border-zinc-800 flex justify-between items-center">
              <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-100">✨ Weekend Special Offer Claimed!</h3>
              <button onClick={() => setShowClaimModal(false)} className="p-1 text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="space-y-4 mb-6">
                <div className="p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-100 dark:border-zinc-700/50">
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-semibold uppercase tracking-wider mb-1">Promotional Package</p>
                  <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Premium Paneer Tikka Meals Upgrade (Weekend Edition)</p>
                </div>
                
                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-100 dark:border-indigo-800/50">
                  <p className="text-xs text-indigo-500 dark:text-indigo-400 font-semibold uppercase tracking-wider mb-1">Benefit Breakdown</p>
                  <p className="text-sm font-bold text-indigo-900 dark:text-indigo-300">⚡ Get 20% extra macro-tracked protein in your daily lunch deliveries this weekend.</p>
                </div>
                
                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl border border-orange-100 dark:border-orange-800/50">
                  <p className="text-xs text-orange-500 dark:text-orange-400 font-semibold uppercase tracking-wider mb-1">Price Factor</p>
                  <p className="text-sm font-bold text-orange-900 dark:text-orange-300">🔥 Slashed to ₹0 (Free Loyalty Upgrade applied to your active Premium Member tier)</p>
                </div>
              </div>
              
              <button 
                onClick={() => {
                  setIsOfferClaimed(true);
                  setShowClaimModal(false);
                }}
                className="w-full py-3.5 bg-[#E65F2B] hover:bg-[#D55626] text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                [ Confirm & Apply to Schedule ]
              </button>
            </div>
          </div>
        </div>
      )}

      {isVacationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-5 border-b border-zinc-100 dark:border-zinc-800 flex justify-between items-center">
              <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-100">Schedule Alteration Panel</h3>
              <button onClick={() => setIsVacationModalOpen(false)} className="p-1 text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {vacationPaused ? (
              <div className="p-8 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-500 rounded-full flex items-center justify-center mb-4">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Slot Paused Successfully</h4>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm">Your delivery schedule has been updated.</p>
              </div>
            ) : (
              <div className="p-6">
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-5">Select which upcoming meals you would like to pause for tomorrow.</p>
                <div className="space-y-3 mb-6">
                  <label className="flex items-center gap-3 p-4 border border-zinc-200 dark:border-zinc-700 rounded-xl cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                    <input 
                      type="checkbox" 
                      checked={vacationOptions.lunch} 
                      onChange={(e) => setVacationOptions({...vacationOptions, lunch: e.target.checked})}
                      className="w-5 h-5 rounded border-zinc-300 text-indigo-600 focus:ring-indigo-600 dark:border-zinc-600 dark:bg-zinc-800"
                    />
                    <div className="flex-1">
                      <span className="block font-semibold text-zinc-900 dark:text-zinc-100">Tomorrow's Lunch</span>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">June 15 • 12:30 PM - 1:30 PM</span>
                    </div>
                  </label>
                  <label className="flex items-center gap-3 p-4 border border-zinc-200 dark:border-zinc-700 rounded-xl cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                    <input 
                      type="checkbox" 
                      checked={vacationOptions.dinner} 
                      onChange={(e) => setVacationOptions({...vacationOptions, dinner: e.target.checked})}
                      className="w-5 h-5 rounded border-zinc-300 text-indigo-600 focus:ring-indigo-600 dark:border-zinc-600 dark:bg-zinc-800"
                    />
                    <div className="flex-1">
                      <span className="block font-semibold text-zinc-900 dark:text-zinc-100">Tomorrow's Dinner</span>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">June 15 • 7:30 PM - 8:30 PM</span>
                    </div>
                  </label>
                </div>
                <div className="flex justify-end gap-3">
                  <button onClick={() => setIsVacationModalOpen(false)} className="px-5 py-2.5 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors">
                    Cancel
                  </button>
                  <button 
                    onClick={handleVacationConfirm}
                    disabled={!vacationOptions.lunch && !vacationOptions.dinner}
                    className="px-5 py-2.5 text-sm font-bold bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Confirm Pause
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {isAddFundsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-5 border-b border-zinc-100 dark:border-zinc-800 flex justify-between items-center bg-zinc-50 dark:bg-zinc-800/50">
              <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-100">Tiffora Instant Recharge Wallet</h3>
              <button onClick={() => setIsAddFundsOpen(false)} className="p-1 text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="mb-5 text-center">
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-1">Current Balance</p>
                <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-500">₹850</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">Enter Amount</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 font-bold">₹</span>
                    <input type="number" placeholder="1000" className="w-full pl-8 pr-4 py-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none text-zinc-900 dark:text-zinc-100 font-semibold transition-all" />
                  </div>
                  <div className="flex gap-2 mt-2">
                    {["+500", "+1000", "+2000"].map(amt => (
                      <button key={amt} className="flex-1 py-1.5 border border-zinc-200 dark:border-zinc-700 rounded-md text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 dark:hover:bg-emerald-900/20 dark:hover:border-emerald-800 transition-colors">
                        {amt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">Payment Method</label>
                  <div className="space-y-2">
                    <div className="p-3 border border-emerald-500 bg-emerald-50/50 dark:bg-emerald-900/10 rounded-xl flex items-center gap-3">
                      <input type="radio" name="payment" defaultChecked className="text-emerald-600 focus:ring-emerald-600" />
                      <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">UPI ID / Handle</span>
                    </div>
                    <div className="p-3 border border-zinc-200 dark:border-zinc-700 rounded-xl flex items-center gap-3 opacity-60">
                      <input type="radio" name="payment" disabled className="text-zinc-400" />
                      <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Credit / Debit Card</span>
                    </div>
                  </div>
                </div>

                <button onClick={() => {
                  alert("Mock Payment Success");
                  setIsAddFundsOpen(false);
                }} className="w-full py-3.5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-bold rounded-xl mt-4 hover:bg-zinc-800 dark:hover:bg-white transition-colors">
                  Proceed to Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isDriverInfoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="relative h-24 bg-gradient-to-r from-indigo-500 to-emerald-500">
              <button onClick={() => setIsDriverInfoOpen(false)} className="absolute top-3 right-3 p-1.5 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors backdrop-blur-sm">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="px-6 pb-6 pt-0 relative">
              <div className="-mt-12 mb-4 flex justify-center">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtYW58ZW58MXx8fHwxNzgxMzYxMzQwfDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Ramesh" className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-zinc-900 shadow-lg" />
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Ramesh Kumar</h3>
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-1">Delivery Partner Since 2022</p>
                <div className="flex items-center justify-center gap-1 mt-2 text-orange-500">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current opacity-40" />
                  <span className="text-zinc-700 dark:text-zinc-300 font-bold text-sm ml-1">4.2</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-100 dark:border-zinc-800">
                  <div className="flex items-center gap-3">
                    <PhoneCall className="w-5 h-5 text-indigo-500" />
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100">+91 98765 43210</span>
                  </div>
                  <button className="text-xs font-bold text-white bg-green-600 hover:bg-green-700 px-3 py-1.5 rounded-lg transition-colors">Call</button>
                </div>
                <div className="flex items-center gap-3 p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-100 dark:border-zinc-800">
                  <Bike className="w-5 h-5 text-emerald-500" />
                  <div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Vehicle</p>
                    <p className="font-semibold text-zinc-900 dark:text-zinc-100">Honda Activa (KA-01-EF-4321)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-100 dark:border-zinc-800">
                  <ShieldCheck className="w-5 h-5 text-indigo-500" />
                  <div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Status</p>
                    <p className="font-semibold text-zinc-900 dark:text-zinc-100">Verified & Background Checked</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isSubModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
            <div className="p-5 border-b border-zinc-100 dark:border-zinc-800 flex justify-between items-center bg-zinc-50 dark:bg-zinc-800/50 shrink-0">
              <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-600" /> Subscription Inspector
              </h3>
              <button onClick={() => setIsSubModalOpen(false)} className="p-1 text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-800/50 rounded-xl p-5 mb-6">
                <Badge className="bg-indigo-600 text-white border-none mb-3">Active Tier</Badge>
                <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">Subscription Tiffora Tier Pass</h4>
                <p className="text-sm font-medium text-indigo-700 dark:text-indigo-400 mb-4">Executive North Indian • Dinner Only</p>
                <div className="flex gap-4 font-mono text-sm">
                  <div className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400">
                    <Calendar className="w-4 h-4" /> Billed Monthly
                  </div>
                  <div className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400">
                    <Clock className="w-4 h-4" /> Renews Oct 24
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <h5 className="text-sm font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">Available Plan Types</h5>
                  <div className="space-y-2">
                    <label className="flex items-start gap-3 p-3 border border-indigo-500 bg-indigo-50/30 dark:bg-indigo-900/10 rounded-xl cursor-pointer">
                      <input type="radio" name="plan" defaultChecked className="mt-1 text-indigo-600 focus:ring-indigo-600" />
                      <div>
                        <span className="block font-semibold text-zinc-900 dark:text-zinc-100">Executive Dinner (Current)</span>
                        <span className="text-xs text-zinc-500 dark:text-zinc-400">30 Meals/mo • ₹4,500</span>
                      </div>
                    </label>
                    <label className="flex items-start gap-3 p-3 border border-zinc-200 dark:border-zinc-700 rounded-xl cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                      <input type="radio" name="plan" className="mt-1 text-indigo-600 focus:ring-indigo-600" />
                      <div>
                        <span className="block font-semibold text-zinc-900 dark:text-zinc-100">Premium Double Pass</span>
                        <span className="text-xs text-zinc-500 dark:text-zinc-400">60 Meals/mo (Lunch+Dinner) • ₹8,200</span>
                      </div>
                    </label>
                    <label className="flex items-start gap-3 p-3 border border-zinc-200 dark:border-zinc-700 rounded-xl cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                      <input type="radio" name="plan" className="mt-1 text-indigo-600 focus:ring-indigo-600" />
                      <div>
                        <span className="block font-semibold text-zinc-900 dark:text-zinc-100">Veg-Only Special</span>
                        <span className="text-xs text-zinc-500 dark:text-zinc-400">30 Meals/mo (Lunch) • ₹3,800</span>
                      </div>
                    </label>
                  </div>
                </div>

                <div>
                  <h5 className="text-sm font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">Historical Tracking</h5>
                  <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-zinc-100 dark:border-zinc-800 p-4 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-600 dark:text-zinc-400">Total Orders Lifetime</span>
                      <span className="font-bold text-zinc-900 dark:text-zinc-100">142 Meals</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-600 dark:text-zinc-400">Total Spend</span>
                      <span className="font-bold text-zinc-900 dark:text-zinc-100">₹24,500</span>
                    </div>
                    <div className="flex justify-between text-sm pt-3 border-t border-zinc-200 dark:border-zinc-700">
                      <span className="text-zinc-600 dark:text-zinc-400">Next Billing Amount</span>
                      <span className="font-bold text-indigo-600 dark:text-indigo-400">₹4,500</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-5 border-t border-zinc-100 dark:border-zinc-800 flex justify-between gap-3 bg-zinc-50 dark:bg-zinc-800/50 shrink-0">
              <button onClick={() => setIsSubModalOpen(false)} className="px-5 py-2.5 text-sm font-bold text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-colors">
                Cancel Plan
              </button>
              <div className="flex gap-2">
                <button onClick={() => setIsSubModalOpen(false)} className="px-5 py-2.5 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-xl transition-colors">
                  Close
                </button>
                <button onClick={() => setIsSubModalOpen(false)} className="px-5 py-2.5 text-sm font-bold bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}