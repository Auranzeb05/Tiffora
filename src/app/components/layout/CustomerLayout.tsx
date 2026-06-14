import React, { useState } from "react";
import { Outlet, NavLink, useLocation, useNavigate } from "react-router";
import { Home, CalendarDays, Wallet, LifeBuoy, User, Bell, ChevronLeft, LogOut, Menu, Moon, Sun, ShoppingCart, MapPin, CreditCard, Calendar } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "../ui/utils";

const navItems = [
  { path: "/customer", label: "Home", icon: Home },
  { path: "/customer/calendar", label: "Calendar", icon: CalendarDays },
  { path: "/customer/wallet", label: "Wallet", icon: Wallet },
  { path: "/customer/support", label: "Support", icon: LifeBuoy },
  { path: "/customer/profile", label: "Profile", icon: User },
];

export function CustomerLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const isHome = location.pathname === "/customer";
  const [showNotifications, setShowNotifications] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  // Simple breadcrumb logic based on path
  const getBreadcrumb = () => {
    if (isHome) return "Dashboard";
    const path = location.pathname.split("/").pop();
    return path ? path.charAt(0).toUpperCase() + path.slice(1) : "";
  };

  return (
    <div className="flex h-screen bg-zinc-50 dark:bg-zinc-950 font-sans text-zinc-900 dark:text-zinc-50 overflow-hidden w-full transition-colors duration-200">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 bg-zinc-950 text-zinc-400 flex-col flex-shrink-0 shadow-xl z-20 border-r border-zinc-800">
        <div className="h-16 flex items-center px-6 border-b border-zinc-800">
          <div className="flex items-center gap-2 text-white">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="font-bold text-lg leading-none">T</span>
            </div>
            <span className="font-bold text-lg tracking-tight">Tiffora</span>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-3 space-y-1 scrollbar-hide">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path !== '/customer' && location.pathname.startsWith(item.path));
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group",
                  isActive 
                    ? "bg-indigo-600 text-white font-medium" 
                    : "hover:bg-zinc-900 hover:text-zinc-100"
                )}
              >
                <item.icon className={cn("w-5 h-5", isActive ? "text-indigo-200" : "text-zinc-500 group-hover:text-zinc-300")} />
                <span className="text-sm">{item.label}</span>
              </NavLink>
            );
          })}
        </div>

        <div className="p-4 border-t border-zinc-800">
          <button 
            onClick={() => {
              localStorage.clear();
              sessionStorage.clear();
              navigate("/login");
            }}
            className="flex items-center gap-3 px-3 py-2.5 w-full rounded-xl text-sm font-medium hover:bg-zinc-900 transition-colors"
          >
            <LogOut className="w-5 h-5 text-zinc-500" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 relative">
        {/* Desktop Header */}
        <header className="hidden md:flex h-16 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 items-center justify-between px-8 flex-shrink-0 z-10 transition-colors duration-200">
          <div className="flex items-center gap-4">
            {!isHome && (
              <button 
                onClick={() => navigate("/customer")}
                className="p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg text-zinc-500 dark:text-zinc-400 transition-colors flex items-center gap-1 text-sm font-medium"
              >
                <ChevronLeft className="w-4 h-4" /> Back to Dashboard
              </button>
            )}
            <div className="flex items-center text-sm text-zinc-500 dark:text-zinc-400 gap-2">
              <span>Customer</span>
              <span>/</span>
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">{getBreadcrumb()}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="relative p-2 text-zinc-400 dark:text-zinc-300 hover:text-zinc-600 dark:hover:text-white transition-colors bg-zinc-50 dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <div className="relative">
              <button 
                onClick={() => { setShowCart(!showCart); setShowNotifications(false); setShowProfile(false); }}
                className="relative p-2 text-zinc-400 dark:text-zinc-300 hover:text-zinc-600 dark:hover:text-white transition-colors bg-zinc-50 dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700"
              >
                <ShoppingCart className="w-5 h-5" />
              </button>
              
              {showCart && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-white dark:bg-[#1E252B] border border-zinc-200 dark:border-[#334155] rounded-[12px] shadow-lg z-50">
                  <div className="p-4 border-b border-zinc-100 dark:border-[#334155]">
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-[#F1F5F9]">Subscription Checkout</h3>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-zinc-500 dark:text-[#94A3B8]">Active Plan</span>
                      <span className="font-semibold text-indigo-600 dark:text-indigo-400">Premium Tier</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-zinc-500 dark:text-[#94A3B8]">Next Renewal</span>
                      <span className="font-medium text-zinc-900 dark:text-[#F1F5F9]">June 21, 2026</span>
                    </div>
                    <div className="flex justify-between items-center text-sm pt-2 border-t border-zinc-100 dark:border-[#334155]">
                      <span className="text-zinc-500 dark:text-[#94A3B8]">Wallet Balance</span>
                      <span className="font-bold text-green-600 dark:text-green-400">₹1,250</span>
                    </div>
                  </div>
                  <div className="p-3 bg-zinc-50 dark:bg-[#12181E] border-t border-zinc-100 dark:border-[#334155] rounded-b-[12px]">
                    <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-[8px] text-sm font-medium transition-colors">
                      Manage Subscription
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button 
                onClick={() => { setShowNotifications(!showNotifications); setShowCart(false); setShowProfile(false); }}
                className="relative p-2 text-zinc-400 dark:text-zinc-300 hover:text-zinc-600 dark:hover:text-white transition-colors bg-zinc-50 dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-zinc-800" />
              </button>
              
              {showNotifications && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-white dark:bg-[#1E252B] border border-zinc-200 dark:border-[#334155] rounded-xl shadow-lg z-50 overflow-hidden">
                  <div className="p-4 border-b border-zinc-100 dark:border-[#334155]">
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-[#F1F5F9]">Notifications</h3>
                  </div>
                  <div className="max-h-[300px] overflow-y-auto">
                    <div className="p-4 border-b border-zinc-50 dark:border-[#334155]/50 hover:bg-zinc-50 dark:hover:bg-[#12181E] transition-colors cursor-pointer">
                      <p className="text-sm text-zinc-800 dark:text-[#F1F5F9]">🚚 Your Lunchbox via Route 04 has left the kitchen hub! (ETA: 18 mins)</p>
                      <p className="text-xs text-zinc-500 dark:text-[#94A3B8] mt-1">2 mins ago</p>
                    </div>
                    <div className="p-4 border-b border-zinc-50 dark:border-[#334155]/50 hover:bg-zinc-50 dark:hover:bg-[#12181E] transition-colors cursor-pointer">
                      <p className="text-sm text-zinc-800 dark:text-[#F1F5F9]">🎉 Weekly Menu Active: Check out your new upcoming meal choices below.</p>
                      <p className="text-xs text-zinc-500 dark:text-[#94A3B8] mt-1">1 hour ago</p>
                    </div>
                    <div className="p-4 hover:bg-zinc-50 dark:hover:bg-[#12181E] transition-colors cursor-pointer">
                      <p className="text-sm text-zinc-800 dark:text-[#F1F5F9]">💳 Automated UPI AutoPay transaction settled successfully for this week's package.</p>
                      <p className="text-xs text-zinc-500 dark:text-[#94A3B8] mt-1">Yesterday</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="h-8 w-px bg-zinc-200 dark:bg-zinc-700" />
            <div className="relative">
              <div onClick={() => { setShowProfile(!showProfile); setShowCart(false); setShowNotifications(false); }} className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                <div className="text-right">
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Akash Patel</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Premium Member</p>
                </div>
                <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/50 rounded-full border-2 border-white dark:border-zinc-800 shadow-sm flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold overflow-hidden">
                  <User className="w-5 h-5" />
                </div>
              </div>
              
              {showProfile && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white dark:bg-[#1E252B] border border-zinc-200 dark:border-[#334155] rounded-[12px] shadow-lg z-50">
                  <div className="p-4 border-b border-zinc-100 dark:border-[#334155]">
                    <p className="text-sm font-bold text-zinc-900 dark:text-[#F1F5F9]">Akash Patel</p>
                    <p className="text-xs text-zinc-500 dark:text-[#94A3B8]">akash.patel@example.com</p>
                  </div>
                  <div className="p-2 space-y-1">
                    <div className="px-3 py-2 text-sm text-zinc-600 dark:text-[#94A3B8] flex flex-col gap-1">
                      <div className="flex items-center gap-2 font-medium text-zinc-900 dark:text-[#F1F5F9]">
                        <MapPin className="w-4 h-4" /> Delivery Address
                      </div>
                      <span className="pl-6 text-xs leading-relaxed">123 Tech Park, Block B<br/>Bengaluru, 560001</span>
                    </div>
                    <div className="border-t border-zinc-100 dark:border-[#334155] my-1"></div>
                    <button onClick={() => navigate('/customer/support')} className="w-full flex items-center gap-2 px-3 py-2 text-sm text-zinc-700 dark:text-[#F1F5F9] hover:bg-zinc-100 dark:hover:bg-[#12181E] rounded-lg transition-colors">
                      <LifeBuoy className="w-4 h-4" /> Support Screen
                    </button>
                    <button onClick={() => {
                        localStorage.clear();
                        sessionStorage.clear();
                        navigate("/login");
                      }} 
                      className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                    >
                      <LogOut className="w-4 h-4" /> Log Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto pb-20 md:pb-0">
          <div className="max-w-7xl mx-auto h-full">
            <Outlet />
          </div>
        </div>

        {/* Mobile Bottom Navigation */}
        <nav className="md:hidden absolute bottom-0 left-0 right-0 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 px-4 py-2 flex justify-between items-center z-50 pb-4 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] transition-colors duration-200">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path !== '/customer' && location.pathname.startsWith(item.path));
            
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={cn(
                  "flex flex-col items-center justify-center w-14 h-14 rounded-xl transition-all duration-200",
                  isActive 
                    ? "text-indigo-600 dark:text-indigo-400 font-semibold" 
                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                )}
              >
                <item.icon className={cn("w-6 h-6 mb-1", isActive && "fill-indigo-50 dark:fill-indigo-900/50")} />
                <span className="text-[10px] leading-none">{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </main>
    </div>
  );
}