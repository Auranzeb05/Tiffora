import React, { useState } from "react";
import { Outlet, NavLink, useLocation, useNavigate } from "react-router";
import { 
  LayoutDashboard, Users, CreditCard, ShoppingBag, Package,
  ChefHat, Map, Bike, LifeBuoy, BarChart3, Settings,
  LogOut, Bell, Menu, X, Moon, Sun
} from "lucide-react";
import { cn } from "../ui/utils";
import { Badge } from "../ui/badge";
import { useTheme } from "next-themes";

const adminNav = [
  { path: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { path: "/admin/customers", label: "Customers & Subs", icon: Users },
  { path: "/admin/menu", label: "Menu Management", icon: ShoppingBag },
  { path: "/admin/kitchen", label: "Kitchen Manifest", icon: ChefHat },
  { path: "/admin/orders", label: "Daily Orders", icon: Package },
  { path: "/admin/routes", label: "Route Manager", icon: Map },
  { path: "/admin/fleet", label: "Delivery Fleet", icon: Bike },
  { path: "/admin/finance", label: "Wallet & Finance", icon: CreditCard },
  { path: "/admin/support", label: "SOS & Support", icon: LifeBuoy, badge: 14 },
  { path: "/admin/reports", label: "Reports", icon: BarChart3 },
  { path: "/admin/settings", label: "Settings", icon: Settings },
];

export function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#F8FAFC] dark:bg-zinc-950 font-sans text-foreground overflow-hidden w-full">
      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed md:static inset-y-0 left-0 z-50 w-64 bg-[#1E252B] text-white flex flex-col flex-shrink-0 transition-transform duration-300 ease-in-out md:transform-none border-r border-[#1E252B]",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="h-16 flex items-center justify-between px-6 border-b border-zinc-800">
          <div className="flex items-center gap-2 text-white">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="font-bold text-lg leading-none">T</span>
            </div>
            <span className="font-bold text-lg tracking-tight">Tiffora Admin</span>
          </div>
          <button 
            className="md:hidden text-zinc-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-3 space-y-1 scrollbar-hide">
          {adminNav.map((item) => {
            const isActive = location.pathname === item.path || (item.path !== '/admin' && location.pathname.startsWith(item.path));
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-200 group",
                  isActive 
                    ? "bg-indigo-600 text-white font-medium" 
                    : "hover:bg-zinc-900 hover:text-zinc-100"
                )}
              >
                <div className="flex items-center gap-3">
                  <item.icon className={cn("w-5 h-5", isActive ? "text-indigo-200" : "text-zinc-500 group-hover:text-zinc-300")} />
                  <span className="text-sm">{item.label}</span>
                </div>
                {item.badge && (
                  <Badge variant="destructive" className="h-5 min-w-[20px] px-1.5 flex items-center justify-center text-[10px] bg-red-500 text-white border-none rounded-md">
                    {item.badge}
                  </Badge>
                )}
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

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-4 md:px-8 flex-shrink-0">
          <div className="flex items-center gap-3">
            <button 
              className="p-2 -ml-2 text-muted-foreground hover:bg-muted rounded-lg md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="hidden md:flex items-center text-sm font-medium text-muted-foreground">
              {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
            <div className="md:hidden text-sm font-bold text-foreground">
              Admin
            </div>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="relative p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button className="relative p-2 text-muted-foreground hover:text-foreground transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-card" />
            </button>
            <div className="h-8 w-px bg-border" />
            <div className="flex items-center gap-3">
              <div className="hidden md:block text-right">
                <p className="text-sm font-semibold text-foreground">Admin User</p>
                <p className="text-xs text-muted-foreground">Operations Head</p>
              </div>
              <div className="w-8 h-8 md:w-9 md:h-9 bg-muted rounded-full border border-border flex items-center justify-center text-foreground font-bold text-sm md:text-base">
                A
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto bg-[#F8FAFC] dark:bg-zinc-950 p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}