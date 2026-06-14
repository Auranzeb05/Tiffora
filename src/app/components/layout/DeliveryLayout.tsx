import React from "react";
import { Outlet, NavLink, useLocation, useNavigate } from "react-router";
import { ListTodo, Navigation, Wallet, UserCircle, LogOut, ChevronLeft, Bell } from "lucide-react";
import { cn } from "../ui/utils";

const deliveryNav = [
  { path: "/delivery", label: "Tasks", icon: ListTodo },
  { path: "/delivery/route", label: "Route", icon: Navigation },
  { path: "/delivery/earnings", label: "Earnings", icon: Wallet },
  { path: "/delivery/profile", label: "Profile", icon: UserCircle },
];

export function DeliveryLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/delivery";

  const getBreadcrumb = () => {
    if (isHome) return "Active Route";
    const path = location.pathname.split("/").pop();
    return path ? path.charAt(0).toUpperCase() + path.slice(1) : "";
  };

  return (
    <div className="flex h-screen bg-zinc-50 font-sans text-zinc-900 overflow-hidden w-full">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 bg-zinc-950 text-zinc-400 flex-col flex-shrink-0 shadow-xl z-20">
        <div className="h-16 flex items-center px-6 border-b border-zinc-800">
          <div className="flex items-center gap-2 text-white">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="font-bold text-lg leading-none">T</span>
            </div>
            <span className="font-bold text-lg tracking-tight">Tiffora Fleet</span>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-3 space-y-1 scrollbar-hide">
          {deliveryNav.map((item) => {
            const isActive = location.pathname === item.path || (item.path !== '/delivery' && location.pathname.startsWith(item.path));
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
            onClick={() => navigate("/login")}
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
        <header className="hidden md:flex h-16 bg-white border-b border-zinc-200 items-center justify-between px-8 flex-shrink-0 z-10">
          <div className="flex items-center gap-4">
            {!isHome && (
              <button 
                onClick={() => navigate(-1)}
                className="p-1.5 hover:bg-zinc-100 rounded-lg text-zinc-500 transition-colors flex items-center gap-1 text-sm font-medium"
              >
                <ChevronLeft className="w-4 h-4" /> Back
              </button>
            )}
            <div className="flex items-center text-sm text-zinc-500 gap-2">
              <span>Fleet</span>
              <span>/</span>
              <span className="font-semibold text-zinc-900">{getBreadcrumb()}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-zinc-400 hover:text-zinc-600 transition-colors bg-zinc-50 rounded-full border border-zinc-200">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
            </button>
            <div className="h-8 w-px bg-zinc-200" />
            <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
              <div className="text-right">
                <p className="text-sm font-semibold text-zinc-900">Ramesh Kumar</p>
                <p className="text-xs text-zinc-500">Zone A</p>
              </div>
              <div className="w-10 h-10 bg-indigo-100 rounded-full border-2 border-white shadow-sm flex items-center justify-center text-indigo-600 font-bold overflow-hidden">
                <UserCircle className="w-6 h-6" />
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto pb-20 md:pb-0">
          <div className="max-w-7xl mx-auto h-full">
            <Outlet />
          </div>
        </div>

        {/* Mobile Bottom Navigation */}
        <nav className="md:hidden absolute bottom-0 left-0 right-0 bg-white border-t border-zinc-200 px-4 py-2 flex justify-between items-center z-50 pb-4 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
          {deliveryNav.map((item) => {
            const isActive = location.pathname === item.path || (item.path !== '/delivery' && location.pathname.startsWith(item.path));
            
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={cn(
                  "flex flex-col items-center justify-center w-14 h-14 rounded-xl transition-all duration-200",
                  isActive 
                    ? "text-indigo-600 font-semibold" 
                    : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100"
                )}
              >
                <item.icon className={cn("w-6 h-6 mb-1", isActive && "fill-indigo-50")} />
                <span className="text-[10px] leading-none">{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </main>
    </div>
  );
}