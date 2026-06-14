import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Plane, ArrowLeft, Flame, Leaf, Search, Heart, Sun, Moon } from "lucide-react";
import { Button } from "../../components/ui/button";

const WEEKLY_MENU = [
  {
    day: "Sunday",
    date: "June 14, 2026",
    lunch: {
      title: "Classic North Indian Thali",
      desc: "Fresh whole wheat rotis served with organic daal tadka, seasonal subzi, basmati rice, and low-fat curd.",
      image: "https://images.unsplash.com/photo-1742281257687-092746ad6021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOb3J0aCUyMEluZGlhbiUyMFRoYWxpfGVufDF8fHx8MTc4MTQzMDY4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      macros: "Calories: 620 kcal | Protein: 24g"
    },
    dinner: {
      title: "Light Khichdi & Grilled Veggies",
      desc: "Comforting moong dal khichdi paired with fire-roasted seasonal vegetables.",
      image: "https://images.unsplash.com/photo-1630409351211-d62ab2d24da4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLaGljaGRpfGVufDF8fHx8MTc4MTQzMTY4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      macros: "Calories: 450 kcal | Protein: 18g"
    }
  },
  {
    day: "Monday",
    date: "June 15, 2026",
    lunch: {
      title: "Healthy Paneer Tikka Salad",
      desc: "Grilled low-fat paneer cubes mixed with assorted greens, cherry tomatoes, and a light olive oil dressing.",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYW5lZXIlMjBUaWtrYSUyMFNhbGFkfGVufDF8fHx8MTc4MTQzMDY4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      macros: "Calories: 480 kcal | Protein: 28g"
    },
    dinner: {
      title: "Quinoa Bowl & Roasted Chickpeas",
      desc: "A protein-rich quinoa base topped with crunchy roasted chickpeas, spinach, and tahini.",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIZWFsdGh5JTIwRGlubmVyfGVufDF8fHx8MTc4MTQzMTY4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      macros: "Calories: 420 kcal | Protein: 20g"
    }
  },
  {
    day: "Tuesday",
    date: "June 16, 2026",
    lunch: {
      title: "Hyderabadi Chicken Biryani",
      desc: "Authentic dum biryani made with long-grain basmati, halal chicken, and our signature low-sodium spice mix.",
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDaGlja2VuJTIwQmlyeWFuaXxlbnwxfHx8fDE3ODE0MzA2ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      macros: "Calories: 710 kcal | Protein: 35g"
    },
    dinner: {
      title: "Lemon Pepper Grilled Fish",
      desc: "Lightly pan-seared white fish fillets marinated in lemon zest and cracked black pepper.",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIZWFsdGh5JTIwRGlubmVyfGVufDF8fHx8MTc4MTQzMTY4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      macros: "Calories: 380 kcal | Protein: 40g"
    }
  },
  {
    day: "Wednesday",
    date: "June 17, 2026",
    lunch: {
      title: "Deluxe South Indian Meals",
      desc: "Sona masuri rice paired with authentic sambar, rasam, poriyal, and a healthy carrot-beans stir fry.",
      image: "https://images.unsplash.com/photo-1680993032090-1ef7ea9b51e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0aGFsaXxlbnwxfHx8fDE3ODEzNjIwNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      macros: "Calories: 550 kcal | Protein: 18g"
    },
    dinner: {
      title: "Millet Upma & Mint Chutney",
      desc: "A warm, satisfying bowl of foxtail millet upma served with fresh mint and coriander chutney.",
      image: "https://images.unsplash.com/photo-1630409351211-d62ab2d24da4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLaGljaGRpfGVufDF8fHx8MTc4MTQzMTY4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      macros: "Calories: 410 kcal | Protein: 14g"
    }
  },
  {
    day: "Thursday",
    date: "June 18, 2026",
    lunch: {
      title: "Low-Carb Keto Salad Bowls",
      desc: "Fresh spinach base topped with grilled chicken breasts, creamy avocado mash, and roasted sunflower seeds.",
      image: "https://images.unsplash.com/photo-1512621843614-b3e58a972e27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXRvJTIwc2FsYWR8ZW58MXx8fHwxNzgxNDMwNjk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      macros: "Calories: 450 kcal | Protein: 42g"
    },
    dinner: {
      title: "Tofu Stir-fry with Zucchini",
      desc: "High-protein tofu cubes wok-tossed with fresh zucchini ribbons and a dash of soy-ginger glaze.",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIZWFsdGh5JTIwRGlubmVyfGVufDF8fHx8MTc4MTQzMTY4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      macros: "Calories: 350 kcal | Protein: 22g"
    }
  },
  {
    day: "Friday",
    date: "June 19, 2026",
    lunch: {
      title: "Classic North Indian Thali",
      desc: "Fresh whole wheat rotis served with organic daal tadka, seasonal subzi, basmati rice, and low-fat curd.",
      image: "https://images.unsplash.com/photo-1742281257687-092746ad6021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOb3J0aCUyMEluZGlhbiUyMFRoYWxpfGVufDF8fHx8MTc4MTQzMDY4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      macros: "Calories: 620 kcal | Protein: 24g"
    },
    dinner: {
      title: "Light Khichdi & Grilled Veggies",
      desc: "Comforting moong dal khichdi paired with fire-roasted seasonal vegetables.",
      image: "https://images.unsplash.com/photo-1630409351211-d62ab2d24da4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLaGljaGRpfGVufDF8fHx8MTc4MTQzMTY4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      macros: "Calories: 450 kcal | Protein: 18g"
    }
  },
  {
    day: "Saturday",
    date: "June 20, 2026",
    lunch: {
      title: "Healthy Paneer Tikka Salad",
      desc: "Grilled low-fat paneer cubes mixed with assorted greens, cherry tomatoes, and a light olive oil dressing.",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYW5lZXIlMjBUaWtrYSUyMFNhbGFkfGVufDF8fHx8MTc4MTQzMDY4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      macros: "Calories: 480 kcal | Protein: 28g"
    },
    dinner: {
      title: "Quinoa Bowl & Roasted Chickpeas",
      desc: "A protein-rich quinoa base topped with crunchy roasted chickpeas, spinach, and tahini.",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIZWFsdGh5JTIwRGlubmVyfGVufDF8fHx8MTc4MTQzMTY4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      macros: "Calories: 420 kcal | Protein: 20g"
    }
  }
];

export function CustomerCalendar() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [mealFilter, setMealFilter] = useState('all');

  const toggleFavorite = (id: string) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredMenu = WEEKLY_MENU.filter(meal => 
    meal.lunch.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    meal.dinner.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    meal.day.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-full bg-[#F8FAFC] dark:bg-[#12181E] pb-8 transition-colors duration-200">
      <header className="bg-[#FFFFFF] dark:bg-[#1E252B] px-6 pt-12 pb-4 sticky top-0 z-10 border-b border-zinc-100 dark:border-[#334155] flex justify-between items-center transition-colors duration-200">
        <div className="flex items-center gap-3 flex-1">
          <button 
            onClick={() => navigate("/customer")}
            className="p-2 -ml-2 rounded-full hover:bg-zinc-100 dark:hover:bg-[#12181E] text-zinc-500 dark:text-[#94A3B8] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          {isSearchOpen ? (
            <div className="flex-1 max-w-md animate-in fade-in slide-in-from-left-4 duration-200">
              <input 
                autoFocus
                type="text"
                placeholder="Live-filter weekly menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-b-2 border-[#E65F2B] outline-none text-[#0F172A] dark:text-[#F1F5F9] placeholder-zinc-400 dark:placeholder-[#94A3B8] py-1 text-lg font-medium"
              />
            </div>
          ) : (
            <h1 className="text-xl md:text-2xl font-bold text-[#0F172A] dark:text-[#F1F5F9] tracking-tight">
              Weekly Menu Planner
            </h1>
          )}
        </div>
        
        <div className="flex items-center gap-2 md:gap-3">
          <button 
            onClick={() => {
              setIsSearchOpen(!isSearchOpen);
              if (isSearchOpen) setSearchQuery("");
            }}
            className={`p-2 rounded-full transition-colors ${isSearchOpen ? 'bg-[#E65F2B]/10 text-[#E65F2B]' : 'text-zinc-500 dark:text-[#94A3B8] hover:bg-zinc-100 dark:hover:bg-[#12181E]'}`}
          >
            <Search className="w-5 h-5" />
          </button>
          <Button variant="outline" size="sm" className="hidden sm:flex h-8 md:h-10 rounded-lg md:rounded-[12px] gap-2 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-900 bg-indigo-50/50 dark:bg-indigo-900/30 hover:bg-indigo-100 dark:hover:bg-indigo-900/50">
            <Plane className="w-3.5 h-3.5 md:w-4 md:h-4" />
            Vacation Mode
          </Button>
        </div>
      </header>

      <div className="px-6 py-6 md:p-8 w-full max-w-7xl mx-auto">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9]">Upcoming Schedule</h2>
          <p className="text-sm text-zinc-500 dark:text-[#94A3B8]">Review your meal deliveries for June 14 - June 20, 2026.</p>
        </div>

        {filteredMenu.length === 0 ? (
          <div className="text-center py-20 bg-[#FFFFFF] dark:bg-[#1E252B] rounded-[12px] border border-zinc-200 dark:border-[#334155]">
            <Search className="w-10 h-10 text-zinc-300 dark:text-[#334155] mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#0F172A] dark:text-[#F1F5F9]">No meals found</h3>
            <p className="text-zinc-500 dark:text-[#94A3B8]">Try adjusting your search query.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredMenu.map((meal, idx) => (
              <div key={idx} className="bg-[#FFFFFF] dark:bg-[#1E252B] border border-[#E2E8F0] dark:border-[#334155] rounded-[12px] overflow-hidden flex flex-col shadow-sm transition-colors duration-200">
                
                {/* Date Header */}
                <div className="bg-zinc-50 dark:bg-[#12181E] p-3 text-center border-b border-[#E2E8F0] dark:border-[#334155]">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-[#94A3B8]">
                    {meal.day}, {meal.date}
                  </span>
                </div>

                {/* LUNCH SLOT */}
                {(mealFilter === 'all' || mealFilter === 'lunch') && (
                  <div className="flex flex-col flex-1 border-b border-[#E2E8F0] dark:border-[#334155] group">
                    <div className="h-36 w-full relative">
                      <img 
                        src={meal.lunch.image} 
                        alt={meal.lunch.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <button 
                        onClick={() => toggleFavorite(`${idx}-lunch`)}
                        className="absolute top-3 right-3 p-2 bg-white/90 dark:bg-black/60 hover:bg-white dark:hover:bg-black rounded-full backdrop-blur-sm shadow-sm transition-all active:scale-95"
                      >
                        <Heart className={`w-4 h-4 transition-colors ${favorites[`${idx}-lunch`] ? "fill-[#E65F2B] text-[#E65F2B]" : "text-zinc-600 dark:text-zinc-300"}`} />
                      </button>
                      
                      <button 
                        onClick={() => setMealFilter(mealFilter === 'lunch' ? 'all' : 'lunch')}
                        className="absolute top-3 left-3 bg-white/95 dark:bg-[#1E252B]/95 px-2.5 py-1 rounded-[6px] flex items-center gap-1.5 shadow-sm backdrop-blur-sm border border-zinc-100 dark:border-[#334155] hover:bg-zinc-100 dark:hover:bg-[#12181E] transition-colors cursor-pointer"
                      >
                        <Sun className="w-3.5 h-3.5 text-yellow-500" />
                        <span className="text-[10px] font-bold tracking-wide uppercase text-zinc-900 dark:text-[#F1F5F9]">
                          {mealFilter === 'lunch' ? 'View All' : 'Lunch Slot'}
                        </span>
                      </button>
                    </div>
                    
                    <div className="p-5 flex flex-col flex-1 gap-3 bg-[#FFFFFF] dark:bg-[#1E252B]">
                      <div>
                        <h3 className="font-bold text-[#0F172A] dark:text-[#F1F5F9] text-base leading-tight mb-1.5">
                          {meal.lunch.title}
                        </h3>
                        <p className="text-xs text-zinc-600 dark:text-[#94A3B8] leading-relaxed line-clamp-2">
                          {meal.lunch.desc}
                        </p>
                      </div>
                      <div className="mt-auto inline-flex items-center self-start bg-zinc-50 dark:bg-[#12181E] border border-zinc-100 dark:border-[#334155] px-3 py-1.5 rounded-[6px]">
                        <p className="font-mono text-[10px] font-medium text-zinc-700 dark:text-[#F1F5F9] tracking-tight">
                          {meal.lunch.macros}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* DINNER SLOT */}
                {(mealFilter === 'all' || mealFilter === 'dinner') && (
                  <div className="flex flex-col flex-1 group">
                    <div className="h-36 w-full relative">
                      <img 
                        src={meal.dinner.image} 
                        alt={meal.dinner.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <button 
                        onClick={() => toggleFavorite(`${idx}-dinner`)}
                        className="absolute top-3 right-3 p-2 bg-white/90 dark:bg-black/60 hover:bg-white dark:hover:bg-black rounded-full backdrop-blur-sm shadow-sm transition-all active:scale-95"
                      >
                        <Heart className={`w-4 h-4 transition-colors ${favorites[`${idx}-dinner`] ? "fill-[#E65F2B] text-[#E65F2B]" : "text-zinc-600 dark:text-zinc-300"}`} />
                      </button>
                      
                      <button 
                        onClick={() => setMealFilter(mealFilter === 'dinner' ? 'all' : 'dinner')}
                        className="absolute top-3 left-3 bg-zinc-900/90 dark:bg-black/80 px-2.5 py-1 rounded-[6px] flex items-center gap-1.5 shadow-sm backdrop-blur-sm border border-zinc-700 dark:border-[#334155] hover:bg-zinc-800 dark:hover:bg-zinc-900 transition-colors cursor-pointer"
                      >
                        <Moon className="w-3.5 h-3.5 text-indigo-300" />
                        <span className="text-[10px] font-bold tracking-wide uppercase text-white">
                          {mealFilter === 'dinner' ? 'View All' : 'Dinner Slot'}
                        </span>
                      </button>
                    </div>
                    
                    <div className="p-5 flex flex-col flex-1 gap-3 bg-zinc-50/50 dark:bg-[#1E252B]">
                      <div>
                        <h3 className="font-bold text-[#0F172A] dark:text-[#F1F5F9] text-base leading-tight mb-1.5">
                          {meal.dinner.title}
                        </h3>
                        <p className="text-xs text-zinc-600 dark:text-[#94A3B8] leading-relaxed line-clamp-2">
                          {meal.dinner.desc}
                        </p>
                      </div>
                      <div className="mt-auto inline-flex items-center self-start bg-white dark:bg-[#12181E] border border-zinc-200 dark:border-[#334155] px-3 py-1.5 rounded-[6px]">
                        <p className="font-mono text-[10px] font-medium text-zinc-700 dark:text-[#F1F5F9] tracking-tight">
                          {meal.dinner.macros}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
