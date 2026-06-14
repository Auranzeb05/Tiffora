import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Package, Clock, CheckCircle2, ChevronRight, XCircle, Search, Calendar as CalendarIcon, MapPin, Bike, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";

const HISTORY_DATA = [
  { 
    id: "ORD-8821", 
    date: "Today, 1:15 PM", 
    meal: "Classic North Indian Thali", 
    status: "delivered", 
    type: "Lunch",
    driver: "Ramesh Kumar" 
  },
  { 
    id: "ORD-8820", 
    date: "Yesterday, 8:45 PM", 
    meal: "Hyderabadi Chicken Biryani", 
    status: "delivered", 
    type: "Dinner",
    driver: "Suresh S" 
  },
  { 
    id: "ORD-8819", 
    date: "Yesterday, 1:30 PM", 
    meal: "Healthy Paneer Tikka Salad", 
    status: "delivered", 
    type: "Lunch",
    driver: "Ramesh Kumar" 
  },
  { 
    id: "ORD-8790", 
    date: "Oct 20, 2026", 
    meal: "Premium Dal Makhani Spread", 
    status: "cancelled", 
    type: "Dinner",
    driver: null 
  },
  { 
    id: "ORD-8785", 
    date: "Oct 19, 2026", 
    meal: "Classic North Indian Thali", 
    status: "delivered", 
    type: "Lunch",
    driver: "Amit V" 
  },
];

export function CustomerHistory() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<'all' | 'delivered' | 'cancelled'>('all');

  const filteredData = HISTORY_DATA.filter(item => 
    filter === 'all' ? true : item.status === filter
  );

  return (
    <div className="flex flex-col min-h-full bg-zinc-50 dark:bg-zinc-950 pb-8 transition-colors duration-200">
      <header className="bg-white dark:bg-zinc-900 px-6 pt-12 pb-4 sticky top-0 z-10 border-b border-zinc-100 dark:border-zinc-800 transition-colors duration-200 flex items-center gap-3">
        <button 
          onClick={() => navigate("/customer")}
          className="p-2 -ml-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Order History</h1>
      </header>

      <div className="px-6 py-6 space-y-6 max-w-4xl mx-auto w-full">
        
        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <button 
            onClick={() => setFilter('all')}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors shrink-0 ${filter === 'all' ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900' : 'bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700'}`}
          >
            All Orders
          </button>
          <button 
            onClick={() => setFilter('delivered')}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors shrink-0 ${filter === 'delivered' ? 'bg-emerald-600 text-white' : 'bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700'}`}
          >
            Delivered
          </button>
          <button 
            onClick={() => setFilter('cancelled')}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors shrink-0 ${filter === 'cancelled' ? 'bg-red-600 text-white' : 'bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700'}`}
          >
            Cancelled
          </button>
        </div>

        {/* List */}
        <div className="space-y-4">
          {filteredData.map((order) => (
            <Card key={order.id} className="rounded-2xl border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden bg-white dark:bg-zinc-900 hover:border-indigo-200 dark:hover:border-indigo-800/50 transition-colors group cursor-pointer">
              <CardContent className="p-0">
                <div className="p-4 md:p-5">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded-md">{order.id}</span>
                      <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded-md">{order.type}</span>
                    </div>
                    {order.status === 'delivered' ? (
                      <Badge className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-900/20 dark:text-emerald-400 border-none gap-1 px-2.5">
                        <CheckCircle2 className="w-3 h-3" /> Delivered
                      </Badge>
                    ) : (
                      <Badge className="bg-red-50 text-red-700 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 border-none gap-1 px-2.5">
                        <XCircle className="w-3 h-3" /> Cancelled
                      </Badge>
                    )}
                  </div>
                  
                  <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-lg mb-4 line-clamp-1">{order.meal}</h3>
                  
                  <div className="flex flex-col md:flex-row gap-3 md:gap-6 text-sm">
                    <div className="flex items-center text-zinc-500 dark:text-zinc-400 font-medium">
                      <CalendarIcon className="w-4 h-4 mr-2" />
                      {order.date}
                    </div>
                    {order.driver && (
                      <div className="flex items-center text-zinc-500 dark:text-zinc-400 font-medium">
                        <Bike className="w-4 h-4 mr-2" />
                        Delivered by {order.driver}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="bg-zinc-50 dark:bg-zinc-800/30 px-4 md:px-5 py-3 border-t border-zinc-100 dark:border-zinc-800 flex justify-between items-center group-hover:bg-indigo-50/50 dark:group-hover:bg-indigo-900/10 transition-colors">
                  <span className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">View Details & Receipt</span>
                  <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
