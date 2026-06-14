import React, { useState } from "react";
import { useNavigate } from "react-router";
import { 
  ArrowLeft, Sun, Moon, ArrowRightLeft, LayoutDashboard, 
  Utensils, Truck, LifeBuoy, LogOut, TrendingUp, AlertOctagon, 
  CheckCircle2, Camera, UserX, Receipt, Wallet, Smartphone, 
  CreditCard, Clock, AlertCircle, PieChart, Search, Calendar, ChevronDown,
  X, MapPin, User, Phone, Navigation, Activity, Check
} from "lucide-react";

// --- Mock Data Arrays for Real-Time Filtering ---
const baseManifestData = [
  { meal: "Classic North Indian Thali", units: "1,420", targets: "Whole Wheat Atta: 240 Kg, Basmati Rice: 150 Kg, Toor Dal: 45 Kg", batch: "Batch Line A (Mega Cooker)" },
  { meal: "Healthy Paneer Tikka Salad", units: "380", targets: "Premium Paneer: 40 Kg, Assorted Greens: 25 Kg, Olive Oil: 5 L", batch: "Batch Line B (Cold Prep)" },
  { meal: "Hyderabadi Chicken Biryani", units: "216", targets: "Halal Chicken: 60 Kg, Long-Grain Basmati: 45 Kg, Spice Mix: 4 Kg", batch: "Batch Line C (Dum Handi)" },
  { meal: "Deluxe South Indian Meals", units: "550", targets: "Sona Masuri Rice: 65 Kg, Sambar Mix: 20 Kg, Vegetables: 40 Kg", batch: "Batch Line D" },
  { meal: "Low-Carb Keto Salad Bowls", units: "180", targets: "Grilled Chicken Breasts: 30 Kg, Avocado Mash: 15 Kg, Spinach: 12 Kg", batch: "Batch Line E" }
];

const cancellationsData = [
  { name: "Akash Patel", packageType: "Executive North Indian Thali", slot: "Lunch Only", date: "June 14, 2026", timestamp: "05:44 PM", reason: "Vacation Mode Active" },
  { name: "Neha Sharma", packageType: "Healthy Keto Prep", slot: "Dinner Only", date: "June 14, 2026", timestamp: "02:15 PM", reason: "Unwell / Sick Leave" },
  { name: "Rahul Verma", packageType: "Classic South Indian", slot: "Both (Lunch & Dinner)", date: "June 14, 2026", timestamp: "09:30 AM", reason: "Address Change" },
  { name: "Priyanka Nair", packageType: "Standard Homestyle Combo", slot: "Lunch Only", date: "June 14, 2026", timestamp: "08:12 AM", reason: "Unexpected Office Travel" }
];

const completedDeliveriesData = [
  { message: "Meal Delivered to Sunil K. via Route 04", time: "12:45 PM" },
  { message: "Meal Delivered to Priya M. via Route 11", time: "01:12 PM" },
  { message: "Meal Delivered to Vikram B. via Route 02", time: "01:28 PM" },
  { message: "Meal Delivered to Aisha R. via Route 07", time: "01:40 PM" }
];

const pendingDeliveriesData = [
  { id: "DEL-101", customerName: "Rahul Sharma", contact: "+91 98765 43210", address: "Sector 4, HSR Layout, Bangalore", driver: "Suresh S.", vehicle: "KA-01-AB-1234 (Bike)", coords: "12.9121° N, 77.6446° E", message: "Pending: 114 meals left to deliver in Sector 4 zone" },
  { id: "DEL-102", customerName: "Anita Desai", contact: "+91 87654 32109", address: "Block C, Indiranagar, Bangalore", driver: "Manoj T.", vehicle: "KA-03-XY-9876 (Scooter)", coords: "12.9784° N, 77.6408° E", message: "Pending: 89 meals left to deliver in HSR Layout" },
  { id: "DEL-103", customerName: "Vikram B.", contact: "+91 76543 21098", address: "Phase 1, Koramangala, Bangalore", driver: "Karthik R.", vehicle: "KA-05-MN-4567 (Bike)", coords: "12.9279° N, 77.6271° E", message: "Pending: 42 meals left to deliver in Indiranagar" },
  { id: "DEL-104", customerName: "Pooja Singh", contact: "+91 65432 10987", address: "Tech Park, Whitefield, Bangalore", driver: "Deepak V.", vehicle: "KA-53-KL-3456 (Bike)", coords: "12.9698° N, 77.7499° E", message: "Pending: 15 meals left to deliver in Koramangala" }
];

const supportTicketsData = [
  { id: "#TK-9921", customer: "Akash Patel", orderId: "#ORD-8821", plan: "Classic North Indian", category: "Spilled Food", timestamp: "10 mins ago", status: "SOS Emergency", image: "https://images.unsplash.com/photo-1606132915836-8e81561f5286?auto=format&fit=crop&w=600&q=80" },
  { id: "#TK-9922", customer: "Neha Sharma", orderId: "#ORD-8822", plan: "Healthy Keto Prep", category: "Late Delivery", timestamp: "25 mins ago", status: "Pending", image: null },
  { id: "#TK-9923", customer: "Siddharth Rao", orderId: "#ORD-8823", plan: "Classic South Indian", category: "Missing Item", timestamp: "1 hour ago", status: "Resolved", image: null },
  { id: "#TK-9924", customer: "Priyanka Nair", orderId: "#ORD-8824", plan: "Standard Homestyle Combo", category: "Damaged Packaging", timestamp: "2 hours ago", status: "Pending", image: "https://images.unsplash.com/photo-1584308666744-24d5e4a8dc56?auto=format&fit=crop&w=600&q=80" },
];

const financeData = [
  { name: "Anita Desai", tier: "Premium Gold Plan", modeType: "UPI AutoPay", balance: "₹ 2,450.00", status: "paid" },
  { name: "Karan Mehta", tier: "Standard Thali", modeType: "Credit Card", balance: "-₹ 350.00", status: "overdue" },
  { name: "Pooja Singh", tier: "Executive Keto", modeType: "Groww Wallet", balance: "₹ 120.00", status: "pending" },
  { name: "Siddharth Rao", tier: "Classic South", modeType: "UPI AutoPay", balance: "₹ 4,100.00", status: "paid" }
];

const checklistItems = [
  "Sanitize all prep stations",
  "Check walk-in freezer temps",
  "Calibrate industrial ovens",
  "Inventory spice racks",
  "Verify packaging stock",
  "Inspect delivery hot-bags"
];

const masterSubscriberData = [
  { name: "Arjun Mehta", plan: "Premium South Indian", slot: "Both (Lunch & Dinner)", start: "June 01, 2026", end: "Dec 01, 2026", status: "Active" },
  { name: "Neha Sharma", plan: "Elite Keto Salad Bowl", slot: "Lunch Only", start: "May 15, 2026", end: "Aug 15, 2026", status: "Active" },
  { name: "Rahul Verma", plan: "Classic North Indian", slot: "Dinner Only", start: "June 10, 2026", end: "Set to Renew", status: "Active" }
];

export const StandaloneAdminDashboard = () => {
  const navigate = useNavigate();
  
  // 1. Activate the Internal Dark/Light Mode Switch
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // 2. Sidebar Navigation State & Filtering State
  const [activeTab, setActiveTab] = useState("operational"); // Changed to operational based on prompt context
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedKpiView, setSelectedKpiView] = useState("subscriptions");
  const [kpiSearchQuery, setKpiSearchQuery] = useState("");
  
  // 3. Time-Series Timeline Selector State
  const [timeRange, setTimeRange] = useState("today");

  // 4. Delivery Status Logs Local State
  const [deliverySubTab, setDeliverySubTab] = useState('pending');
  const [selectedDelivery, setSelectedDelivery] = useState<any>(null);

  // 5. Support SOS Center Local State
  const [selectedSupportTicket, setSelectedSupportTicket] = useState<any>(null);

  // 6. Kitchen Manifest Checklist State
  const [checklistState, setChecklistState] = useState<Record<number, boolean>>({
    1: true, // Check walk-in freezer temps
    3: true, // Inventory spice racks
  });

  // 7. Fleet Data State
  const [fleetData, setFleetData] = useState([
    { id: 1, name: "Ramesh Kumar", contact: "+91 98765 43210", vehicle: "Electric Scooter E1", zone: "Route Zone 04 (Sector 4)", status: "● On Duty / Active" },
    { id: 2, name: "Suresh S.", contact: "+91 87654 32109", vehicle: "Eco Delivery Bike B2", zone: "Route Zone 09 (Sector 2)", status: "● On Duty / Active" }
  ]);
  const [isFleetModalOpen, setIsFleetModalOpen] = useState(false);
  const [editingFleetId, setEditingFleetId] = useState<number | null>(null);
  const [fleetForm, setFleetForm] = useState({ name: '', contact: '', vehicle: '', zone: 'Route Zone 01 (Sector 1)', status: '● On Duty / Active' });

  const handleOpenAddDriver = () => {
    setEditingFleetId(null);
    setFleetForm({ name: '', contact: '', vehicle: '', zone: 'Route Zone 01 (Sector 1)', status: '● On Duty / Active' });
    setIsFleetModalOpen(true);
  };

  const handleOpenEditDriver = (driver: any) => {
    setEditingFleetId(driver.id);
    setFleetForm({ name: driver.name, contact: driver.contact, vehicle: driver.vehicle, zone: driver.zone, status: driver.status });
    setIsFleetModalOpen(true);
  };

  const handleSaveDriver = () => {
    if (editingFleetId) {
      setFleetData(prev => prev.map(d => d.id === editingFleetId ? { ...d, ...fleetForm } : d));
    } else {
      setFleetData(prev => [...prev, { id: Date.now(), ...fleetForm }]);
    }
    setIsFleetModalOpen(false);
  };

  const handleDeleteDriver = (id: number) => {
    setFleetData(prev => prev.filter(d => d.id !== id));
  };

  // Helper for explicit conditional classes
  const mode = (light: string, dark: string) => isDarkMode ? dark : light;

  // Handle Tab Switch & Reset Search
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSearchQuery("");
  };

  // Safe search matcher
  const matchesSearch = (text: string | undefined) => {
    if (!text) return false;
    return text.toLowerCase().includes(searchQuery.toLowerCase());
  };

  const toggleCheck = (idx: number) => {
    setChecklistState(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  // --- Core Data Multiplier Logic ---
  const multiplier = timeRange === 'week' ? 7 : timeRange === 'month' ? 30 : 1;

  const scaleValue = (field: string, value: string) => {
    if (typeof value !== 'string') return value;
    if (field === 'units') {
      const num = parseInt(value.replace(/,/g, ''), 10);
      return (num * multiplier).toLocaleString();
    }
    if (field === 'targets') {
      return value.replace(/\b(\d+)\b/g, match => {
        return (parseInt(match, 10) * multiplier).toLocaleString();
      });
    }
    if (field === 'message') {
      return value.replace(/(\d+)\s+meals/, (match, num) => {
        return `${(parseInt(num, 10) * multiplier).toLocaleString()} meals`;
      });
    }
    if (field === 'balance') {
      return value.replace(/([\d,]+)(\.\d{2})/, (match, numStr, decimals) => {
        const num = parseInt(numStr.replace(/,/g, ''), 10);
        return (num * multiplier).toLocaleString() + decimals;
      });
    }
    return value;
  };

  const generateList = (baseList: any[], shouldScaleFields: string[] = []) => {
    const result = [];
    for (let i = 0; i < multiplier; i++) {
      baseList.forEach((item, index) => {
        const newItem = { ...item, _key: `${i}-${index}` };
        shouldScaleFields.forEach(field => {
          if (newItem[field]) {
            newItem[field] = scaleValue(field, newItem[field]);
          }
        });
        if (newItem.id && i > 0) newItem.id = `${newItem.id}-${i}`;
        result.push(newItem);
      });
    }
    return result;
  };

  // Pre-compute current active data arrays mapped dynamically
  const activeManifestData = generateList(baseManifestData, ['units', 'targets']);
  const activeCancellationsData = generateList(cancellationsData);
  const activeCompletedDeliveriesData = generateList(completedDeliveriesData);
  const activePendingDeliveriesData = generateList(pendingDeliveriesData, ['message']);
  const activeFinanceData = generateList(financeData, ['balance']);
  const activeSupportTicketsData = generateList(supportTicketsData);
  const activeSubscriberData = generateList(masterSubscriberData);

  // Orders Delivered Data based on timeRange
  const getOrdersDeliveredData = () => {
    const todayData = [
      { name: "Sunil Kumar", plan: "Premium Double Pass", slot: "Lunch Only", time: "June 14, 2026 - 12:45 PM", driver: "Ramesh Kumar", status: "● Verified Hand-off (OTP 5842)" },
      { name: "Priya Mishra", plan: "Elite Keto Salad Bowl", slot: "Dinner Only", time: "June 14, 2026 - 07:15 PM", driver: "Suresh S.", status: "● Verified Hand-off" },
      { name: "Amit Raj", plan: "Executive North Indian Thali", slot: "Both (Lunch & Dinner)", time: "June 14, 2026 - 01:10 PM", driver: "Ramesh Kumar", status: "● Left with Security" },
      { name: "Sneha Reddy", plan: "Veg-Only Special Pass", slot: "Lunch Only", time: "June 14, 2026 - 12:30 PM", driver: "Vikas M.", status: "● Verified Hand-off" },
      { name: "Vikram Malhotra", plan: "Corporate Fit Plan", slot: "Both (Lunch & Dinner)", time: "June 14, 2026 - 01:05 PM", driver: "Suresh S.", status: "● Verified Hand-off" },
      { name: "Ananya Das", plan: "Low-Carb High-Protein Tier", slot: "Dinner Only", time: "June 14, 2026 - 07:45 PM", driver: "Vikas M.", status: "● Left at Doorstep" },
      { name: "Rohan Jha", plan: "Classic Freedom Pass", slot: "Lunch Only", time: "June 14, 2026 - 12:55 PM", driver: "Ramesh Kumar", status: "● Verified Hand-off" },
      { name: "Kavita Nair", plan: "Premium Double Pass", slot: "Dinner Only", time: "June 14, 2026 - 08:15 PM", driver: "Suresh S.", status: "● Verified Hand-off" },
      { name: "Aditya Singh", plan: "Elite Keto Salad Bowl", slot: "Lunch Only", time: "June 14, 2026 - 12:20 PM", driver: "Vikas M.", status: "● Verified Hand-off (OTP 1129)" },
      { name: "Pooja Desai", plan: "Executive North Indian Thali", slot: "Both (Lunch & Dinner)", time: "June 14, 2026 - 01:30 PM", driver: "Ramesh Kumar", status: "● Left with Security" },
      { name: "Arjun Mehta", plan: "Corporate Fit Plan", slot: "Lunch Only", time: "June 14, 2026 - 12:40 PM", driver: "Suresh S.", status: "● Verified Hand-off" },
      { name: "Neha Sharma", plan: "Low-Carb High-Protein Tier", slot: "Both (Lunch & Dinner)", time: "June 14, 2026 - 01:15 PM", driver: "Vikas M.", status: "● Verified Hand-off" },
      { name: "Suresh N.", plan: "Classic Freedom Pass", slot: "Lunch Only", time: "June 14, 2026 - 12:50 PM", driver: "Ramesh Kumar", status: "● Verified Hand-off" }
    ];

    if (timeRange === 'today') {
      return todayData;
    } else if (timeRange === 'week') {
      return [
        ...todayData,
        { name: "Deepak Verma", plan: "Classic Freedom Pass", slot: "Lunch Only", time: "June 13, 2026 - 12:50 PM", driver: "Ramesh Kumar", status: "● Verified Hand-off" },
        { name: "Meera Reddy", plan: "Premium Double Pass", slot: "Dinner Only", time: "June 13, 2026 - 07:30 PM", driver: "Suresh S.", status: "● Verified Hand-off" },
        { name: "Rahul Kapoor", plan: "Elite Keto Salad Bowl", slot: "Both (Lunch & Dinner)", time: "June 13, 2026 - 01:05 PM", driver: "Vikas M.", status: "● Left with Security" },
        { name: "Simran Kaur", plan: "Veg-Only Special Pass", slot: "Lunch Only", time: "June 12, 2026 - 12:35 PM", driver: "Ramesh Kumar", status: "● Verified Hand-off" },
        { name: "Karthik Iyer", plan: "Corporate Fit Plan", slot: "Both (Lunch & Dinner)", time: "June 12, 2026 - 01:20 PM", driver: "Suresh S.", status: "● Left at Doorstep" },
        { name: "Anita Joshi", plan: "Low-Carb High-Protein Tier", slot: "Dinner Only", time: "June 12, 2026 - 08:00 PM", driver: "Vikas M.", status: "● Verified Hand-off" },
        { name: "Siddharth Rao", plan: "Executive North Indian Thali", slot: "Lunch Only", time: "June 11, 2026 - 12:45 PM", driver: "Ramesh Kumar", status: "● Verified Hand-off" },
        { name: "Rajesh Khanna", plan: "Classic Freedom Pass", slot: "Both (Lunch & Dinner)", time: "June 11, 2026 - 01:10 PM", driver: "Suresh S.", status: "● Left with Security" }
      ];
    } else if (timeRange === 'month') {
      const mayData = [];
      for (let i = 1; i <= 31; i++) {
        const day = i < 10 ? `0${i}` : `${i}`;
        mayData.push({ name: `Suresh N. (Sub-${i}A)`, plan: "Premium Double Pass", slot: "Lunch Only", time: `May ${day}, 2026 - 12:45 PM`, driver: "Ramesh Kumar", status: "● Verified Hand-off" });
        mayData.push({ name: `Priyanka M. (Sub-${i}B)`, plan: "Elite Keto Salad Bowl", slot: "Dinner Only", time: `May ${day}, 2026 - 07:15 PM`, driver: "Suresh S.", status: "● Verified Hand-off" });
        if (i % 2 === 0) {
          mayData.push({ name: `Amit R. (Sub-${i}C)`, plan: "Executive North Indian Thali", slot: "Both (Lunch & Dinner)", time: `May ${day}, 2026 - 01:10 PM`, driver: "Vikas M.", status: "● Left with Security" });
        }
      }
      return mayData;
    }
    return todayData;
  };

  const currentOrdersDeliveredData = getOrdersDeliveredData();

  return (
    <div className={`flex flex-col min-h-screen w-full font-sans transition-colors duration-200 ${mode("bg-[#F8FAFC] text-[#0F172A]", "bg-[#12181E] text-[#F1F5F9]")}`}>
      
      {/* Global Role-Switching & Utility Header (Locked) */}
      <header className={`h-16 flex items-center justify-between px-6 border-b transition-colors duration-200 z-50 sticky top-0 flex-shrink-0 shadow-sm ${mode("border-[#E2E8F0] bg-[#FFFFFF]", "border-[#334155] bg-[#1E252B]")}`}>
        <div className="flex items-center">
          <button 
            onClick={() => navigate("/login")}
            className={`flex items-center gap-2 text-sm font-semibold transition-colors ${mode("text-slate-500 hover:text-[#0F172A]", "text-slate-400 hover:text-white")}`}
          >
            <ArrowLeft className="w-4 h-4" /> Back to Main App
          </button>
        </div>

        <div className="flex items-center gap-6">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-full transition-colors border border-transparent ${mode("hover:bg-slate-100 text-slate-500 hover:border-[#E2E8F0]", "hover:bg-[#12181E] text-slate-400 hover:border-[#334155]")}`}
            title="Toggle Theme"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <div className={`w-px h-6 ${mode("bg-[#E2E8F0]", "bg-[#334155]")}`}></div>

          <div className={`flex items-center p-1 rounded-[12px] border ${mode("bg-slate-100 border-[#E2E8F0]", "bg-[#12181E] border-[#334155]")}`}>
            <button 
              onClick={() => navigate("/login")}
              className={`px-4 py-1.5 text-sm font-medium rounded-[8px] transition-colors flex items-center gap-2 ${mode("text-slate-600 hover:text-[#0F172A]", "text-slate-400 hover:text-white")}`}
            >
              Customer View <ArrowRightLeft className="w-3 h-3 opacity-50" />
            </button>
            <button 
              className={`px-4 py-1.5 text-sm font-bold rounded-[8px] shadow-sm border transition-colors ${mode("bg-[#FFFFFF] text-[#0F172A] border-[#E2E8F0]", "bg-[#1E252B] text-[#F1F5F9] border-[#334155]")}`}
            >
              Admin View
            </button>
          </div>
        </div>
      </header>

      {/* Main Layout Canvas */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Left Sidebar (Locked) */}
        <aside className={`w-[280px] flex flex-col border-r flex-shrink-0 transition-colors duration-200 ${mode("bg-[#FFFFFF] border-[#E2E8F0]", "bg-[#1E252B] border-[#334155]")}`}>
          <div className="p-6 pb-6">
            <h2 className="text-[#E65F2B] text-xl font-bold tracking-tight flex items-center gap-2">
              <span className="w-8 h-8 rounded-[12px] bg-[#E65F2B] text-white flex items-center justify-center">T</span>
              Tiffora Ops
            </h2>
          </div>

          <nav className="flex-1 px-4 space-y-1.5">
            <SidebarItem 
              icon={<LayoutDashboard size={20} />} label="Operational Matrix" 
              active={activeTab === "operational"} onClick={() => handleTabChange("operational")}
              isDarkMode={isDarkMode} 
            />
            <SidebarItem 
              icon={<Utensils size={20} />} label="Kitchen Manifest" 
              active={activeTab === "manifest"} onClick={() => handleTabChange("manifest")}
              isDarkMode={isDarkMode} 
            />
            <SidebarItem 
              icon={<UserX size={20} />} label="Cancellations List" 
              active={activeTab === "cancellations-list"} onClick={() => handleTabChange("cancellations-list")}
              badge="124" badgeColor="orange" isDarkMode={isDarkMode} 
            />
            <SidebarItem 
              icon={<CheckCircle2 size={20} />} label="Orders Delivered" 
              active={activeTab === "orders-delivered"} onClick={() => handleTabChange("orders-delivered")}
              badge="1,024" badgeColor="green" isDarkMode={isDarkMode} 
            />
            <SidebarItem 
              icon={<Truck size={20} />} label="Delivery Status Logs" 
              active={activeTab === "delivery"} onClick={() => handleTabChange("delivery")}
              badge="1,114 Left" badgeColor="gray" isDarkMode={isDarkMode} 
            />
            <SidebarItem 
              icon={<Receipt size={20} />} label="Payment & Billing" 
              active={activeTab === "billing"} onClick={() => handleTabChange("billing")}
              badge="Active" badgeColor="green" isDarkMode={isDarkMode} 
            />
            <SidebarItem 
              icon={<LifeBuoy size={20} />} label="Support SOS Center" 
              active={activeTab === "support"} onClick={() => handleTabChange("support")}
              badge="🚨 Emergency" badgeColor="red" isDarkMode={isDarkMode} 
            />
          </nav>

          <div className={`p-4 border-t ${mode("border-[#E2E8F0]", "border-[#334155]")}`}>
            <SidebarItem 
              icon={<LogOut size={20} />} label="Secure Logout" 
              isLogout onClick={() => navigate("/login")} isDarkMode={isDarkMode} 
            />
          </div>
        </aside>

        {/* Scrollable Content Canvas (Dynamic Routing) */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto custom-scrollbar">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-6 md:gap-8">
            
            {/* Time-Series Timeline Selector */}
            {!(activeTab === "delivery" && timeRange !== "today") && (
              <TimeRangeSelector timeRange={timeRange} setTimeRange={setTimeRange} isDarkMode={isDarkMode} />
            )}

            {/* View 1: Operational Matrix */}
            {activeTab === "operational" && (
              <div className="flex flex-col gap-6 md:gap-8 animate-in fade-in duration-300">
                <header className="flex flex-col gap-2">
                  <h1 className={`text-2xl md:text-3xl font-bold ${mode("text-[#0F172A]", "text-[#F1F5F9]")}`}>
                    Operational Matrix
                  </h1>
                  <p className={`text-sm ${mode("text-slate-500", "text-slate-400")}`}>
                    {timeRange === 'today' && "High-level KPI summaries and real-time radial telemetry."}
                    {timeRange === 'week' && "Cumulative 7-day aggregates and historical trendline telemetry."}
                    {timeRange === 'month' && "Finalized, immutable historical records from May 2026."}
                    {timeRange === 'custom' && "Data metrics for the specifically selected timeline."}
                  </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  {timeRange === 'week' ? (
                    <>
                      <MetricCard title="Gross Weekly Subscriptions" value="14,980" trend="+14%" positive isDarkMode={isDarkMode} onClick={() => setSelectedKpiView('subscriptions')} isActive={selectedKpiView === 'subscriptions'} />
                      <MetricCard title="Cancellations Processed" value="840" trend="-2%" positive isDarkMode={isDarkMode} onClick={() => setSelectedKpiView('cancellations')} isActive={selectedKpiView === 'cancellations'} />
                      <MetricCard title="Net Weekly Cooking Target" value="14,112" trend="+12%" positive highlight isDarkMode={isDarkMode} onClick={() => setSelectedKpiView('cooking')} isActive={selectedKpiView === 'cooking'} />
                      <MetricCard title="Peak Active Fleet" value="45" subtitle="Max Drivers Online" trend="Stable" isDarkMode={isDarkMode} onClick={() => setSelectedKpiView('fleet')} isActive={selectedKpiView === 'fleet'} />
                    </>
                  ) : timeRange === 'month' ? (
                    <>
                      <MetricCard title="Total May Subscriptions" value="64,200" trend="+18%" positive isDarkMode={isDarkMode} onClick={() => setSelectedKpiView('subscriptions')} isActive={selectedKpiView === 'subscriptions'} />
                      <MetricCard title="Cancellations Processed" value="3,600" trend="-5%" positive isDarkMode={isDarkMode} onClick={() => setSelectedKpiView('cancellations')} isActive={selectedKpiView === 'cancellations'} />
                      <MetricCard title="Total May Deliveries" value="62,430" trend="+15%" positive highlight isDarkMode={isDarkMode} onClick={() => setSelectedKpiView('cooking')} isActive={selectedKpiView === 'cooking'} />
                      <MetricCard title="Avg Active Fleet" value="42" subtitle="Daily Average Drivers" trend="+3" positive isDarkMode={isDarkMode} onClick={() => setSelectedKpiView('fleet')} isActive={selectedKpiView === 'fleet'} />
                    </>
                  ) : (
                    <>
                      <MetricCard title="Gross Subscriptions" value="2,140" trend="+12%" positive isDarkMode={isDarkMode} onClick={() => setSelectedKpiView('subscriptions')} isActive={selectedKpiView === 'subscriptions'} />
                      <MetricCard title="Cancellations Processed" value="124" trend="-3%" positive isDarkMode={isDarkMode} onClick={() => setSelectedKpiView('cancellations')} isActive={selectedKpiView === 'cancellations'} />
                      <MetricCard title="Net Cooking Target" value="2,016" trend="+8%" positive highlight isDarkMode={isDarkMode} onClick={() => setSelectedKpiView('cooking')} isActive={selectedKpiView === 'cooking'} />
                      <MetricCard title="Active Delivery Fleet" value="32" subtitle="Drivers Online" trend="Stable" isDarkMode={isDarkMode} onClick={() => setSelectedKpiView('fleet')} isActive={selectedKpiView === 'fleet'} />
                    </>
                  )}
                </div>

                {selectedKpiView === 'subscriptions' ? (
                  <div className={`rounded-[12px] border p-6 flex flex-col gap-4 shadow-sm transition-colors duration-200 ${mode("bg-[#FFFFFF] border-[#E2E8F0]", "bg-[#1E252B] border-[#334155]")}`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
                      <h3 className={`font-bold text-lg flex items-center gap-2 ${mode("text-[#0F172A]", "text-[#F1F5F9]")}`}>
                        <User className="w-5 h-5 text-[#E65F2B]" /> Master Active Subscriber Database
                      </h3>
                      <div className={`flex items-center gap-2 px-3 py-2 rounded-[8px] border sm:max-w-xs w-full transition-colors ${mode("bg-white border-slate-200 focus-within:border-[#E65F2B] focus-within:ring-1 focus-within:ring-[#E65F2B]", "bg-[#12181E] border-slate-700 focus-within:border-[#E65F2B] focus-within:ring-1 focus-within:ring-[#E65F2B]")}`}>
                        <Search className={`w-4 h-4 ${mode("text-slate-400", "text-slate-500")}`} />
                        <input
                          type="text"
                          placeholder="Search subscribers..."
                          value={kpiSearchQuery}
                          onChange={(e) => setKpiSearchQuery(e.target.value)}
                          className="bg-transparent border-none outline-none text-sm w-full"
                        />
                        {kpiSearchQuery && (
                          <button onClick={() => setKpiSearchQuery("")}>
                            <X className={`w-3.5 h-3.5 ${mode("text-slate-400 hover:text-slate-600", "text-slate-500 hover:text-slate-300")}`} />
                          </button>
                        )}
                      </div>
                    </div>

                    <div className={`w-full overflow-x-auto block max-h-[600px] overflow-y-auto rounded-[12px] border custom-scrollbar ${mode("border-[#E2E8F0]", "border-[#334155]")}`}>
                      <table className="w-full text-left text-sm min-w-[1000px]">
                        <thead className={`border-b sticky top-0 z-10 ${mode("bg-[#F8FAFC] border-[#E2E8F0]", "bg-[#12181E] border-[#334155]")}`}>
                          <tr>
                            <th className={`px-4 py-3 font-semibold ${mode("text-slate-500", "text-slate-400")}`}>Subscriber Name</th>
                            <th className={`px-4 py-3 font-semibold ${mode("text-slate-500", "text-slate-400")}`}>Plan Tier</th>
                            <th className={`px-4 py-3 font-semibold ${mode("text-slate-500", "text-slate-400")}`}>Meal Slot</th>
                            <th className={`px-4 py-3 font-semibold ${mode("text-slate-500", "text-slate-400")}`}>Subscription Start Date</th>
                            <th className={`px-4 py-3 font-semibold ${mode("text-slate-500", "text-slate-400")}`}>End Date</th>
                            <th className={`px-4 py-3 font-semibold ${mode("text-slate-500", "text-slate-400")}`}>Status</th>
                          </tr>
                        </thead>
                        <tbody className={`divide-y ${mode("divide-[#E2E8F0]", "divide-[#334155]")}`}>
                          {activeSubscriberData
                            .filter(item => 
                              !kpiSearchQuery || 
                              item.name.toLowerCase().includes(kpiSearchQuery.toLowerCase()) || 
                              item.slot.toLowerCase().includes(kpiSearchQuery.toLowerCase())
                            )
                            .map((item) => (
                              <SubscriberRow key={item._key} item={item} isDarkMode={isDarkMode} />
                            ))
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : selectedKpiView === 'fleet' ? (
                  <div className={`rounded-[12px] border p-6 flex flex-col gap-4 shadow-sm transition-colors duration-200 ${mode("bg-[#FFFFFF] border-[#E2E8F0]", "bg-[#1E252B] border-[#334155]")}`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
                      <h3 className={`font-bold text-lg flex items-center gap-2 ${mode("text-[#0F172A]", "text-[#F1F5F9]")}`}>
                        <Truck className="w-5 h-5 text-[#E65F2B]" /> Active Delivery Fleet Courier Registry
                      </h3>
                      <button 
                        onClick={handleOpenAddDriver}
                        className={`px-4 py-2 text-sm font-bold uppercase tracking-wide rounded-[8px] transition-colors shadow-sm bg-[#E65F2B] hover:bg-[#D55626] text-white flex items-center gap-2`}
                      >
                        ➕ Add New Driver
                      </button>
                    </div>

                    <div className={`w-full overflow-x-auto block max-h-[600px] overflow-y-auto rounded-[12px] border custom-scrollbar ${mode("border-[#E2E8F0]", "border-[#334155]")}`}>
                      <table className="w-full text-left text-sm min-w-[1000px]">
                        <thead className={`border-b sticky top-0 z-10 ${mode("bg-[#F8FAFC] border-[#E2E8F0]", "bg-[#12181E] border-[#334155]")}`}>
                          <tr>
                            <th className={`px-4 py-3 font-semibold ${mode("text-slate-500", "text-slate-400")}`}>Driver Name</th>
                            <th className={`px-4 py-3 font-semibold ${mode("text-slate-500", "text-slate-400")}`}>Contact Number</th>
                            <th className={`px-4 py-3 font-semibold ${mode("text-slate-500", "text-slate-400")}`}>Vehicle Profile</th>
                            <th className={`px-4 py-3 font-semibold ${mode("text-slate-500", "text-slate-400")}`}>Route Zone</th>
                            <th className={`px-4 py-3 font-semibold ${mode("text-slate-500", "text-slate-400")}`}>Status</th>
                            <th className={`px-4 py-3 font-semibold ${mode("text-slate-500", "text-slate-400")}`}>Actions</th>
                          </tr>
                        </thead>
                        <tbody className={`divide-y ${mode("divide-[#E2E8F0]", "divide-[#334155]")}`}>
                          {fleetData.map((driver) => (
                            <tr key={driver.id} className={`transition-colors group ${mode("hover:bg-slate-50", "hover:bg-[#12181E]/50")}`}>
                              <td className={`px-4 py-4 font-semibold border-r border-transparent ${mode("text-[#0F172A] group-hover:border-[#E2E8F0]", "text-[#F1F5F9] group-hover:border-[#334155]")}`}>{driver.name}</td>
                              <td className={`px-4 py-4 font-medium border-r border-transparent ${mode("text-slate-600 group-hover:border-[#E2E8F0]", "text-slate-400 group-hover:border-[#334155]")}`}>{driver.contact}</td>
                              <td className={`px-4 py-4 font-medium border-r border-transparent ${mode("text-slate-600 group-hover:border-[#E2E8F0]", "text-slate-400 group-hover:border-[#334155]")}`}>{driver.vehicle}</td>
                              <td className={`px-4 py-4 font-medium border-r border-transparent ${mode("text-slate-600 group-hover:border-[#E2E8F0]", "text-slate-400 group-hover:border-[#334155]")}`}>{driver.zone}</td>
                              <td className={`px-4 py-4 font-medium border-r border-transparent`}>
                                <span className={`flex items-center gap-1.5 text-xs font-bold text-emerald-600 px-2 py-1 rounded-[8px] w-fit ${mode("bg-emerald-50", "bg-emerald-900/20")}`}>
                                  {driver.status}
                                </span>
                              </td>
                              <td className="px-4 py-4 font-medium flex gap-2">
                                <button onClick={() => handleOpenEditDriver(driver)} className={`px-2 py-1 text-xs rounded border transition-colors ${mode("bg-white border-[#E2E8F0] hover:bg-slate-50", "bg-[#1E252B] border-[#334155] hover:bg-[#12181E]")}`}>
                                  ✏️ Edit
                                </button>
                                <button onClick={() => handleDeleteDriver(driver.id)} className={`px-2 py-1 text-xs rounded border transition-colors ${mode("bg-white border-[#E2E8F0] hover:bg-red-50 text-red-600", "bg-[#1E252B] border-[#334155] hover:bg-red-900/20 text-red-400")}`}>
                                  🗑️ Delete
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : (
                  <div className={`rounded-[12px] border p-6 flex flex-col items-center justify-center gap-6 shadow-sm transition-colors duration-200 ${mode("bg-[#FFFFFF] border-[#E2E8F0]", "bg-[#1E252B] border-[#334155]")}`}>
                    <h3 className={`font-bold text-lg self-start flex items-center gap-2 ${mode("text-[#0F172A]", "text-[#F1F5F9]")}`}>
                      <PieChart className="w-5 h-5 text-[#E65F2B]" /> System Efficiency Radial
                    </h3>
                    
                    <div className="relative flex items-center justify-center my-4">
                      <svg width="200" height="200" viewBox="0 0 120 120" className="transform -rotate-90">
                        <circle cx="60" cy="60" r="50" fill="none" strokeWidth="12" className={mode("stroke-slate-100", "stroke-slate-800")} />
                        <circle cx="60" cy="60" r="50" fill="none" strokeWidth="12" className="stroke-[#E65F2B]" strokeDasharray="314" strokeDashoffset="60" strokeLinecap="round" />
                      </svg>
                      <div className="absolute flex flex-col items-center justify-center">
                        <span className={`text-4xl font-bold ${mode("text-[#0F172A]", "text-white")}`} style={{ fontFamily: '"JetBrains Mono", monospace' }}>
                          81<span className="text-2xl text-[#E65F2B]">%</span>
                        </span>
                        <span className={`text-sm font-medium mt-1 ${mode("text-slate-500", "text-slate-400")}`}>Optimization</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* View 2: Kitchen Manifest */}
            {activeTab === "manifest" && (
              <div className="flex flex-col gap-6 md:gap-8 animate-in fade-in duration-300">
                <header className="flex flex-col gap-2">
                  <h1 className={`text-2xl md:text-3xl font-bold ${mode("text-[#0F172A]", "text-[#F1F5F9]")}`}>
                    Kitchen Manifest Ledger
                  </h1>
                  <p className={`text-sm ${mode("text-slate-500", "text-slate-400")}`}>
                    Convert active orders into raw material prep targets.
                  </p>
                </header>

                <SearchHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} isDarkMode={isDarkMode} />

                <div className={`rounded-[12px] border p-5 flex flex-col gap-4 shadow-sm transition-colors duration-200 ${mode("bg-[#FFFFFF] border-[#E2E8F0]", "bg-[#1E252B] border-[#334155]")}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <h3 className={`font-bold text-lg flex items-center gap-2 ${mode("text-[#0F172A]", "text-[#F1F5F9]")}`}>
                      <Utensils className="w-5 h-5 text-[#E65F2B]" /> Production Targets
                    </h3>
                  </div>
                  
                  <div className={`rounded-[12px] border custom-scrollbar ${mode("border-[#E2E8F0]", "border-[#334155]")}`} style={{ width: '100%', overflowX: 'auto', overflowY: 'hidden', whiteSpace: 'nowrap', display: 'block', clear: 'both' }}>
                    <table className="text-left text-sm" style={{ minWidth: '1200px', display: 'table', width: 'max-content', tableLayout: 'fixed' }}>
                      <thead className={`border-b sticky top-0 z-10 ${mode("bg-[#F8FAFC] border-[#E2E8F0]", "bg-[#12181E] border-[#334155]")}`}>
                        <tr>
                          <th className={`px-4 py-3 font-semibold ${mode("text-slate-500", "text-slate-400")}`}>Meal Plan</th>
                          <th className={`px-4 py-3 font-semibold ${mode("text-slate-500", "text-slate-400")}`}>Total Units</th>
                          <th className={`px-4 py-3 font-semibold ${mode("text-slate-500", "text-slate-400")}`}>Raw Material Mass Weights</th>
                          <th className={`px-4 py-3 font-semibold ${mode("text-slate-500", "text-slate-400")}`}>Assigned Batch Cooker Lines</th>
                        </tr>
                      </thead>
                      <tbody className={`divide-y ${mode("divide-[#E2E8F0]", "divide-[#334155]")}`}>
                        {activeManifestData
                          .filter(item => matchesSearch(item.meal) || matchesSearch(item.targets) || matchesSearch(item.batch))
                          .map((item) => (
                            <ManifestRow key={item._key} meal={item.meal} units={item.units} targets={item.targets} batch={item.batch} isDarkMode={isDarkMode} />
                          ))
                        }
                      </tbody>
                    </table>
                  </div>

                  {/* Supervisor Readiness Checklist */}
                  <div className="mt-4 flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <h3 className={`font-bold text-lg flex items-center gap-2 ${mode("text-[#0F172A]", "text-[#F1F5F9]")}`}>
                        <CheckCircle2 className="w-5 h-5 text-[#E65F2B]" /> Supervisor Readiness Checklist
                      </h3>
                      
                      <div className={`px-4 py-2.5 rounded-[8px] flex items-center gap-3 border shadow-sm ${mode("bg-[#F8FAFC] border-[#E2E8F0]", "bg-[#12181E] border-[#334155]")}`}>
                        <div className={`w-24 md:w-32 h-2 rounded-full overflow-hidden ${mode("bg-slate-200", "bg-slate-700")}`}>
                          <div 
                            className="h-full bg-emerald-500 transition-all duration-300" 
                            style={{ width: `${(Object.values(checklistState).filter(Boolean).length / checklistItems.length) * 100}%` }}
                          />
                        </div>
                        <span className={`text-sm font-bold whitespace-nowrap ${mode("text-slate-700", "text-slate-200")}`}>
                          Pre-Shift Checklist Readiness: [ {Object.values(checklistState).filter(Boolean).length} / {checklistItems.length} Tasks Cleared ]
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      {checklistItems.map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => toggleCheck(idx)}
                          className={`flex items-center gap-3 px-4 py-3 rounded-[12px] border transition-colors flex-grow md:flex-grow-0 cursor-pointer text-left shadow-sm ${
                            checklistState[idx]
                              ? mode("bg-emerald-50 border-emerald-200", "bg-emerald-900/20 border-emerald-800/50")
                              : mode("bg-white border-[#E2E8F0] hover:bg-slate-50", "bg-[#1E252B] border-[#334155] hover:bg-[#1E252B]/80")
                          }`}
                        >
                          <div className={`w-5 h-5 rounded-[6px] border flex items-center justify-center flex-shrink-0 transition-colors ${
                            checklistState[idx]
                              ? "bg-emerald-500 border-emerald-500 text-white"
                              : mode("border-slate-300 bg-white", "border-slate-600 bg-[#12181E]")
                          }`}>
                            {checklistState[idx] && <Check className="w-3.5 h-3.5" />}
                          </div>
                          <span className={`text-sm font-semibold ${
                            checklistState[idx]
                              ? mode("text-emerald-700", "text-emerald-400")
                              : mode("text-slate-600", "text-slate-300")
                          }`}>
                            {item}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* View 3: Cancellations List */}
            {activeTab === "cancellations-list" && (
              <div className="flex flex-col gap-6 md:gap-8 animate-in fade-in duration-300">
                <header className="flex flex-col gap-2">
                  <h1 className={`text-2xl md:text-3xl font-bold ${mode("text-[#0F172A]", "text-[#F1F5F9]")}`}>
                    Cancellations List
                  </h1>
                  <p className={`text-sm ${mode("text-slate-500", "text-slate-400")}`}>
                    Monitor and review today's order drop-offs.
                  </p>
                </header>

                <SearchHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} isDarkMode={isDarkMode} />

                <div className={`rounded-[12px] border p-5 flex flex-col gap-4 shadow-sm transition-colors duration-200 overflow-hidden ${mode("bg-[#FFFFFF] border-[#E2E8F0]", "bg-[#1E252B] border-[#334155]")}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <h3 className={`font-bold text-lg flex items-center gap-2 ${mode("text-[#0F172A]", "text-[#F1F5F9]")}`}>
                      <UserX className="w-5 h-5 text-[#E65F2B]" /> Today's Order Cancellations
                    </h3>
                  </div>
                  
                  <div className={`rounded-[12px] border custom-scrollbar ${mode("border-[#E2E8F0]", "border-[#334155]")}`} style={{ width: '100%', overflowX: 'auto', overflowY: 'hidden', whiteSpace: 'nowrap', display: 'block', clear: 'both' }}>
                    <table className="text-left text-sm" style={{ minWidth: '1200px', display: 'table', width: 'max-content', tableLayout: 'fixed' }}>
                      <thead className={`border-b sticky top-0 z-10 ${mode("bg-[#F8FAFC] border-[#E2E8F0]", "bg-[#12181E] border-[#334155]")}`}>
                        <tr>
                          <th className={`px-4 py-3 font-semibold ${mode("text-slate-500", "text-slate-400")}`}>Customer Name</th>
                          <th className={`px-4 py-3 font-semibold ${mode("text-slate-500", "text-slate-400")}`}>Assigned Package Type</th>
                          <th className={`px-4 py-3 font-semibold ${mode("text-slate-500", "text-slate-400")}`}>Meal Slot Type</th>
                          <th className={`px-4 py-3 font-semibold ${mode("text-slate-500", "text-slate-400")}`}>Cancellation Date</th>
                          <th className={`px-4 py-3 font-semibold ${mode("text-slate-500", "text-slate-400")}`}>Cancellation Timestamp</th>
                          <th className={`px-4 py-3 font-semibold ${mode("text-slate-500", "text-slate-400")}`}>Reason for Drop-off</th>
                        </tr>
                      </thead>
                      <tbody className={`divide-y ${mode("divide-[#E2E8F0]", "divide-[#334155]")}`}>
                        {activeCancellationsData
                          .filter(item => matchesSearch(item.name) || matchesSearch(item.packageType) || matchesSearch(item.reason))
                          .map((item) => (
                            <CancellationRow key={item._key} name={item.name} packageType={item.packageType} slot={item.slot} date={item.date} timestamp={item.timestamp} reason={item.reason} isDarkMode={isDarkMode} />
                          ))
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* View: Orders Delivered */}
            {activeTab === "orders-delivered" && (
              <div className="flex flex-col gap-6 md:gap-8 animate-in fade-in duration-300">
                <header className="flex flex-col gap-2">
                  <h1 className={`text-2xl md:text-3xl font-bold ${mode("text-[#0F172A]", "text-[#F1F5F9]")}`}>
                    Orders Delivered Ledger
                  </h1>
                  <p className={`text-sm ${mode("text-slate-500", "text-slate-400")}`}>
                    Historical log of all successfully fulfilled shipments.
                  </p>
                </header>

                <SearchHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} isDarkMode={isDarkMode} />

                <div className={`rounded-[12px] border p-5 flex flex-col gap-4 shadow-sm transition-colors duration-200 overflow-hidden ${mode("bg-[#FFFFFF] border-[#E2E8F0]", "bg-[#1E252B] border-[#334155]")}`}>
                  <div className="flex items-center justify-between">
                    <h3 className={`font-bold text-lg flex items-center gap-2 ${mode("text-[#0F172A]", "text-[#F1F5F9]")}`}>
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Successfully Fulfilled Shipments
                    </h3>
                  </div>

                  <div className={`rounded-[12px] border custom-scrollbar ${mode("border-[#E2E8F0]", "border-[#334155]")}`} style={{ width: '100%', overflowX: 'auto', display: 'block', whiteSpace: 'nowrap' }}>
                    <table className="text-left text-sm" style={{ minWidth: '1300px', display: 'table', width: 'max-content', tableLayout: 'fixed' }}>
                      <thead className={`border-b sticky top-0 z-10 ${mode("bg-[#F8FAFC] border-[#E2E8F0]", "bg-[#12181E] border-[#334155]")}`}>
                        <tr>
                          <th className={`px-4 py-3 font-semibold ${mode("text-slate-500", "text-slate-400")}`}>Customer Name</th>
                          <th className={`px-4 py-3 font-semibold ${mode("text-slate-500", "text-slate-400")}`}>Subscription Plan Type</th>
                          <th className={`px-4 py-3 font-semibold ${mode("text-slate-500", "text-slate-400")}`}>Meal Slot Variant (Lunch / Dinner / Both)</th>
                          <th className={`px-4 py-3 font-semibold ${mode("text-slate-500", "text-slate-400")}`}>Delivery Timestamp</th>
                          <th className={`px-4 py-3 font-semibold ${mode("text-slate-500", "text-slate-400")}`}>Courier Name</th>
                          <th className={`px-4 py-3 font-semibold ${mode("text-slate-500", "text-slate-400")}`}>Fulfillment Status Badge</th>
                        </tr>
                      </thead>
                      <tbody className={`divide-y ${mode("divide-[#E2E8F0]", "divide-[#334155]")}`}>
                        {currentOrdersDeliveredData
                          .filter(row => matchesSearch(row.name) || matchesSearch(row.plan))
                          .map((row, i) => (
                          <tr key={i} className={`transition-colors ${mode("hover:bg-slate-50", "hover:bg-[#12181E]/50")}`}>
                            <td className={`px-4 py-4 font-bold ${mode("text-[#0F172A]", "text-[#F1F5F9]")}`}>{row.name}</td>
                            <td className={`px-4 py-4 font-medium ${mode("text-[#0F172A]", "text-[#F1F5F9]")}`}>{row.plan}</td>
                            <td className={`px-4 py-4 font-medium ${mode("text-[#0F172A]", "text-[#F1F5F9]")}`}>{row.slot}</td>
                            <td className={`px-4 py-4 font-medium ${mode("text-slate-500", "text-slate-400")}`}>{row.time}</td>
                            <td className={`px-4 py-4 font-medium ${mode("text-[#0F172A]", "text-[#F1F5F9]")}`}>{row.driver}</td>
                            <td className="px-4 py-4">
                              <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-[12px] flex items-center gap-1 w-fit shadow-sm ${
                                row.status?.includes("Left") ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-500" : "text-white bg-emerald-600"
                              }`}>
                                {row.status?.includes("Left") ? <AlertCircle className="w-3 h-3" /> : <CheckCircle2 className="w-3 h-3" />} 
                                {row.status?.replace("● ", "") || "Verified Hand-off"}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* View 4: Delivery Status Logs */}
            {activeTab === "delivery" && (
              <div className="flex flex-col gap-6 md:gap-8 animate-in fade-in duration-300 relative">
                <header className="flex flex-col gap-2">
                  <h1 className={`text-2xl md:text-3xl font-bold ${mode("text-[#0F172A]", "text-[#F1F5F9]")}`}>
                    Delivery Status Logs
                  </h1>
                  <p className={`text-sm ${mode("text-slate-500", "text-slate-400")}`}>
                    Live tracking of fulfillment milestones and pending drop queues.
                  </p>
                </header>

                {/* Search Input Bar right above toggles */}
                <SearchHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} isDarkMode={isDarkMode} />

                {timeRange === 'today' ? (
                  <>
                    {/* Sub-navigation bar */}
                    <div className="flex items-center gap-3 border-b border-transparent">
                      <button 
                        onClick={() => { setDeliverySubTab('pending'); setSelectedDelivery(null); }}
                        className={`px-5 py-2.5 rounded-[12px] text-sm font-bold transition-colors flex items-center gap-2 ${
                          deliverySubTab === 'pending' 
                            ? mode("bg-[#E65F2B] text-white shadow-sm", "bg-[#E65F2B] text-white shadow-sm") 
                            : mode("bg-white border border-[#E2E8F0] text-slate-600 hover:bg-slate-50", "bg-[#1E252B] border border-[#334155] text-slate-400 hover:bg-[#1E252B]/80")
                        }`}
                      >
                        ⏳ Pending Shipments
                      </button>
                      <button 
                        onClick={() => { setDeliverySubTab('completed'); setSelectedDelivery(null); }}
                        className={`px-5 py-2.5 rounded-[12px] text-sm font-bold transition-colors flex items-center gap-2 ${
                          deliverySubTab === 'completed' 
                            ? mode("bg-emerald-500 text-white shadow-sm", "bg-emerald-600 text-white shadow-sm") 
                            : mode("bg-white border border-[#E2E8F0] text-slate-600 hover:bg-slate-50", "bg-[#1E252B] border border-[#334155] text-slate-400 hover:bg-[#1E252B]/80")
                        }`}
                      >
                        ✓ Completed Deliveries
                      </button>
                    </div>

                    <div className="flex gap-6 relative">
                      {/* Left List Pane */}
                      <div className={`flex-1 rounded-[12px] border p-5 flex flex-col gap-4 shadow-sm transition-colors duration-200 min-h-[400px] max-h-[700px] overflow-y-auto overflow-x-hidden custom-scrollbar ${mode("bg-[#FFFFFF] border-[#E2E8F0]", "bg-[#1E252B] border-[#334155]")}`}>
                        {deliverySubTab === 'completed' ? (
                          <>
                            <h3 className={`font-bold text-lg flex items-center gap-2 pb-2 border-b sticky top-0 z-10 ${mode("text-[#0F172A] border-[#E2E8F0] bg-white", "text-[#F1F5F9] border-[#334155] bg-[#1E252B]")}`}>
                              <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Fulfillment Completed
                            </h3>
                            <div className="flex flex-col gap-2.5 mt-2">
                              {activeCompletedDeliveriesData
                                .filter(item => matchesSearch(item.message) || matchesSearch(item.time))
                                .map((item) => (
                                  <FleetLogItem key={item._key} isSuccess message={item.message} time={item.time} isDarkMode={isDarkMode} />
                                ))
                              }
                            </div>
                          </>
                        ) : (
                          <>
                            <h3 className={`font-bold text-lg flex items-center gap-2 pb-2 border-b sticky top-0 z-10 ${mode("text-[#0F172A] border-[#E2E8F0] bg-white", "text-[#F1F5F9] border-[#334155] bg-[#1E252B]")}`}>
                              <Clock className="w-5 h-5 text-amber-500" /> Pending Shipments Active Queue
                            </h3>
                            <div className="flex flex-col gap-2.5 mt-2">
                              {activePendingDeliveriesData
                                .filter(item => matchesSearch(item.customerName) || matchesSearch(item.driver) || matchesSearch(item.id))
                                .map((item) => (
                                  <div 
                                    key={item._key} 
                                    onClick={() => setSelectedDelivery(item)}
                                    className={`cursor-pointer flex items-center justify-between p-3.5 rounded-[10px] transition-colors border ${
                                      selectedDelivery?.id === item.id 
                                        ? mode("bg-slate-100 border-[#E65F2B] shadow-sm", "bg-[#12181E] border-[#E65F2B] shadow-sm") 
                                        : mode("bg-slate-50 border-transparent hover:border-[#E2E8F0]", "bg-[#12181E]/50 border-transparent hover:border-[#334155]")
                                    }`}
                                  >
                                    <div className="flex items-center gap-3">
                                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${mode("bg-white text-[#E65F2B] shadow-sm", "bg-[#1E252B] text-[#E65F2B] shadow-sm")}`}>
                                        {item.customerName.charAt(0)}
                                      </div>
                                      <div>
                                        <h4 className={`font-semibold text-sm ${mode("text-[#0F172A]", "text-[#F1F5F9]")}`}>{item.customerName}</h4>
                                        <p className={`text-xs font-medium flex items-center gap-1 mt-0.5 ${mode("text-slate-500", "text-slate-400")}`}>
                                          <Navigation className="w-3 h-3" /> Driver: {item.driver}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="text-right">
                                      <span className={`text-xs font-bold px-2 py-1 rounded-[6px] ${mode("bg-amber-100 text-amber-700", "bg-amber-900/30 text-amber-400")}`}>
                                        {item.id}
                                      </span>
                                    </div>
                                  </div>
                                ))
                              }
                            </div>
                          </>
                        )}
                      </div>

                      {/* Right Split Detail Panel for Pending Shipments */}
                      {deliverySubTab === 'pending' && selectedDelivery && (
                        <div className={`w-[360px] flex-shrink-0 rounded-[12px] border shadow-md flex flex-col overflow-hidden animate-in slide-in-from-right-8 duration-300 ${mode("bg-[#FFFFFF] border-[#E2E8F0]", "bg-[#1E252B] border-[#334155]")}`}>
                          <div className={`p-4 border-b flex items-center justify-between ${mode("bg-[#F8FAFC] border-[#E2E8F0]", "bg-[#12181E] border-[#334155]")}`}>
                            <h3 className={`font-bold text-[15px] flex items-center gap-2 ${mode("text-[#0F172A]", "text-[#F1F5F9]")}`}>
                              <Activity className="w-4 h-4 text-[#E65F2B]" /> Dispatch Details
                            </h3>
                            <button onClick={() => setSelectedDelivery(null)} className={`p-1.5 rounded-full transition-colors ${mode("hover:bg-slate-200 text-slate-500", "hover:bg-[#1E252B] text-slate-400")}`}>
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="p-5 flex flex-col gap-5 overflow-y-auto custom-scrollbar">
                            
                            <div>
                              <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${mode("text-slate-400", "text-slate-500")}`}>Customer Contact</p>
                              <div className={`flex items-center gap-3 p-3 rounded-[8px] border ${mode("bg-slate-50 border-[#E2E8F0]", "bg-[#12181E]/50 border-[#334155]")}`}>
                                <div className="w-8 h-8 rounded-full bg-[#E65F2B]/10 flex items-center justify-center text-[#E65F2B]"><User className="w-4 h-4" /></div>
                                <div>
                                  <p className={`text-sm font-semibold ${mode("text-[#0F172A]", "text-[#F1F5F9]")}`}>{selectedDelivery.customerName}</p>
                                  <p className={`text-xs font-medium mt-0.5 ${mode("text-slate-500", "text-slate-400")}`}>{selectedDelivery.contact}</p>
                                </div>
                              </div>
                            </div>

                            <div>
                              <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${mode("text-slate-400", "text-slate-500")}`}>Delivery Address</p>
                              <div className={`flex items-start gap-3 p-3 rounded-[8px] border ${mode("bg-slate-50 border-[#E2E8F0]", "bg-[#12181E]/50 border-[#334155]")}`}>
                                <div className="mt-0.5 w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500"><MapPin className="w-4 h-4" /></div>
                                <p className={`text-sm font-medium leading-snug ${mode("text-slate-700", "text-slate-300")}`}>{selectedDelivery.address}</p>
                              </div>
                            </div>

                            <div>
                              <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${mode("text-slate-400", "text-slate-500")}`}>Assigned Partner & Vehicle</p>
                              <div className={`flex items-center gap-3 p-3 rounded-[8px] border ${mode("bg-slate-50 border-[#E2E8F0]", "bg-[#12181E]/50 border-[#334155]")}`}>
                                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500"><Truck className="w-4 h-4" /></div>
                                <div>
                                  <p className={`text-sm font-semibold ${mode("text-[#0F172A]", "text-[#F1F5F9]")}`}>{selectedDelivery.driver}</p>
                                  <p className={`text-xs font-medium mt-0.5 ${mode("text-slate-500", "text-slate-400")}`}>{selectedDelivery.vehicle}</p>
                                </div>
                              </div>
                            </div>

                            <div>
                              <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${mode("text-slate-400", "text-slate-500")}`}>Live Dispatch Coordinates</p>
                              <div className={`flex items-center gap-3 p-3 rounded-[8px] border ${mode("bg-slate-50 border-[#E2E8F0]", "bg-[#12181E]/50 border-[#334155]")}`}>
                                <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500"><Navigation className="w-4 h-4" /></div>
                                <div>
                                  <p className={`text-sm font-semibold font-mono tracking-tight ${mode("text-[#0F172A]", "text-[#F1F5F9]")}`}>{selectedDelivery.coords}</p>
                                  <p className={`text-xs font-medium mt-0.5 text-emerald-500 flex items-center gap-1`}>
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Tracking Active
                                  </p>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <div className={`rounded-[12px] border p-12 flex flex-col items-center justify-center text-center shadow-sm ${mode("bg-[#FFFFFF] border-[#E2E8F0]", "bg-[#1E252B] border-[#334155]")}`}>
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${mode("bg-slate-100 text-slate-400", "bg-[#12181E] text-slate-500")}`}>
                      <Calendar className="w-8 h-8" />
                    </div>
                    <h3 className={`text-lg font-bold mb-2 ${mode("text-[#0F172A]", "text-[#F1F5F9]")}`}>Historical Delivery Data</h3>
                    <p className={`text-sm max-w-md mb-6 ${mode("text-slate-500", "text-slate-400")}`}>
                      Real-time live map tracking, active driver countdowns, and pending dispatch telemetry are only available for today's active schedule.
                    </p>
                    <button 
                      onClick={() => setTimeRange('today')}
                      className={`px-5 py-2.5 rounded-[12px] text-sm font-bold transition-colors ${mode("bg-[#E65F2B] text-white hover:bg-[#d85523]", "bg-[#E65F2B] text-white hover:bg-[#d85523]")}`}
                    >
                      Return to Live Today
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* View 5: Payment & Billing Tracker */}
            {activeTab === "billing" && (
              <div className="flex flex-col gap-6 md:gap-8 animate-in fade-in duration-300">
                <header className="flex flex-col gap-2">
                  <h1 className={`text-2xl md:text-3xl font-bold ${mode("text-[#0F172A]", "text-[#F1F5F9]")}`}>
                    Payment & Billing Tracker
                  </h1>
                  <p className={`text-sm ${mode("text-slate-500", "text-slate-400")}`}>
                    Real-time monitoring of subscription collections and wallet re-charges.
                  </p>
                </header>

                <SearchHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} isDarkMode={isDarkMode} />

                <div className={`rounded-[12px] border p-5 flex flex-col gap-4 shadow-sm transition-colors duration-200 overflow-hidden ${mode("bg-[#FFFFFF] border-[#E2E8F0]", "bg-[#1E252B] border-[#334155]")}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <h3 className={`font-bold text-lg flex items-center gap-2 ${mode("text-[#0F172A]", "text-[#F1F5F9]")}`}>
                      <Receipt className="w-5 h-5 text-[#E65F2B]" /> Subscription Billing & Wallet Balance Tracker
                    </h3>
                  </div>
                  
                  <div className={`rounded-[12px] border custom-scrollbar ${mode("border-[#E2E8F0]", "border-[#334155]")}`} style={{ width: '100%', overflowX: 'auto', overflowY: 'hidden', whiteSpace: 'nowrap', display: 'block', clear: 'both' }}>
                    <table className="text-left text-sm" style={{ minWidth: '1200px', display: 'table', width: 'max-content', tableLayout: 'fixed' }}>
                      <thead className={`border-b sticky top-0 z-10 ${mode("bg-[#F8FAFC] border-[#E2E8F0]", "bg-[#12181E] border-[#334155]")}`}>
                        <tr>
                          <th className={`px-4 py-3 font-semibold ${mode("text-slate-500", "text-slate-400")}`}>Subscriber Name</th>
                          <th className={`px-4 py-3 font-semibold ${mode("text-slate-500", "text-slate-400")}`}>Active Fare Tiers</th>
                          <th className={`px-4 py-3 font-semibold ${mode("text-slate-500", "text-slate-400")}`}>Payment Mode</th>
                          <th className={`px-4 py-3 font-semibold ${mode("text-slate-500", "text-slate-400")}`}>Wallet Balances</th>
                          <th className={`px-4 py-3 font-semibold ${mode("text-slate-500", "text-slate-400")}`}>Payment Status Tags</th>
                        </tr>
                      </thead>
                      <tbody className={`divide-y ${mode("divide-[#E2E8F0]", "divide-[#334155]")}`}>
                        {activeFinanceData
                          .filter(item => 
                            matchesSearch(item.name) || 
                            matchesSearch(item.status) || 
                            matchesSearch(item.modeType) || 
                            matchesSearch(item.tier)
                          )
                          .map((item) => (
                            <FinanceRow key={item._key} name={item.name} tier={item.tier} modeType={item.modeType} balance={item.balance} status={item.status} isDarkMode={isDarkMode} />
                          ))
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* View 6: Support SOS Center */}
            {activeTab === "support" && (
              <div className="flex flex-col gap-6 md:gap-8 animate-in fade-in duration-300">
                <header className="flex flex-col gap-2">
                  <h1 className={`text-2xl md:text-3xl font-bold ${mode("text-[#0F172A]", "text-[#F1F5F9]")}`}>
                    Support SOS Center
                  </h1>
                  <p className={`text-sm ${mode("text-slate-500", "text-slate-400")}`}>
                    Handle immediate escalations and issue resolution workflows.
                  </p>
                </header>

                <div className="flex gap-6 relative">
                  {/* Ledger Pane */}
                  <div className={`flex-1 rounded-[12px] border p-5 flex flex-col gap-4 shadow-sm transition-colors duration-200 overflow-hidden ${mode("bg-[#FFFFFF] border-[#E2E8F0]", "bg-[#1E252B] border-[#334155]")}`}>
                    <div className="flex items-center justify-between">
                      <h3 className={`font-bold text-lg flex items-center gap-2 ${mode("text-[#0F172A]", "text-[#F1F5F9]")}`}>
                        <LifeBuoy className="w-5 h-5 text-[#E65F2B]" /> Urgent Escalations Ledger
                      </h3>
                    </div>

                    <div className={`max-h-[700px] overflow-y-auto rounded-[12px] border custom-scrollbar ${mode("border-[#E2E8F0]", "border-[#334155]")}`} style={{ width: '100%', overflowX: 'auto', display: 'block', whiteSpace: 'nowrap', clear: 'both' }}>
                      <table className="text-left text-sm" style={{ minWidth: '800px', display: 'table', width: 'max-content', tableLayout: 'fixed' }}>
                        <thead className={`border-b sticky top-0 z-10 ${mode("bg-[#F8FAFC] border-[#E2E8F0]", "bg-[#12181E] border-[#334155]")}`}>
                          <tr>
                            <th className={`px-4 py-3 font-semibold ${mode("text-slate-500", "text-slate-400")}`}>Ticket ID</th>
                            <th className={`px-4 py-3 font-semibold ${mode("text-slate-500", "text-slate-400")}`}>Customer Name</th>
                            <th className={`px-4 py-3 font-semibold ${mode("text-slate-500", "text-slate-400")}`}>Meal Plan Type</th>
                            <th className={`px-4 py-3 font-semibold ${mode("text-slate-500", "text-slate-400")}`}>Grievance Category</th>
                            <th className={`px-4 py-3 font-semibold ${mode("text-slate-500", "text-slate-400")}`}>Timestamp</th>
                            <th className={`px-4 py-3 font-semibold ${mode("text-slate-500", "text-slate-400")}`}>Status</th>
                          </tr>
                        </thead>
                        <tbody className={`divide-y ${mode("divide-[#E2E8F0]", "divide-[#334155]")}`}>
                          {activeSupportTicketsData.map((ticket) => (
                            <tr 
                              key={ticket._key}
                              onClick={() => setSelectedSupportTicket(ticket)}
                              className={`transition-colors cursor-pointer group ${
                                selectedSupportTicket?.id === ticket.id 
                                  ? mode("bg-slate-100/80", "bg-[#12181E]") 
                                  : mode("hover:bg-slate-50", "hover:bg-[#12181E]/50")
                              }`}
                            >
                              <td className={`px-4 py-4 font-bold ${mode("text-[#0F172A]", "text-[#F1F5F9]")}`}>{ticket.id}</td>
                              <td className={`px-4 py-4 font-medium ${mode("text-[#0F172A]", "text-[#F1F5F9]")}`}>{ticket.customer}</td>
                              <td className={`px-4 py-4 font-medium ${mode("text-slate-600", "text-slate-400")}`}>{ticket.plan}</td>
                              <td className={`px-4 py-4 font-medium ${mode("text-[#0F172A]", "text-[#F1F5F9]")}`}>{ticket.category}</td>
                              <td className={`px-4 py-4 font-medium ${mode("text-slate-500", "text-slate-400")}`}>{ticket.timestamp}</td>
                              <td className="px-4 py-4">
                                {ticket.status === "SOS Emergency" ? (
                                  <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-red-600 px-2 py-1 rounded-[12px] flex items-center gap-1 w-fit shadow-sm">
                                    <AlertOctagon className="w-3 h-3" /> {ticket.status}
                                  </span>
                                ) : ticket.status === "Resolved" ? (
                                  <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-emerald-600 px-2 py-1 rounded-[12px] flex items-center gap-1 w-fit shadow-sm">
                                    <CheckCircle2 className="w-3 h-3" /> {ticket.status}
                                  </span>
                                ) : (
                                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-[12px] flex items-center gap-1 w-fit shadow-sm ${mode("bg-amber-100 text-amber-700", "bg-amber-900/30 text-amber-400")}`}>
                                    <Clock className="w-3 h-3" /> {ticket.status}
                                  </span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Complaint Details View Pane */}
                  {selectedSupportTicket && (
                    <div className={`w-[400px] flex-shrink-0 rounded-[12px] border flex flex-col shadow-md animate-in slide-in-from-right-8 duration-300 ${mode("border-[#E2E8F0] bg-[#FFFFFF]", "border-[#334155] bg-[#1E252B]")}`}>
                      <div className={`p-4 border-b flex items-center justify-between ${mode("border-[#E2E8F0] bg-[#F8FAFC]", "border-[#334155] bg-[#12181E]")}`}>
                        <div className="flex items-center gap-2">
                          <Activity className="w-4 h-4 text-[#E65F2B]" />
                          <h4 className={`text-[15px] font-bold ${mode("text-[#0F172A]", "text-[#F1F5F9]")}`}>Ticket {selectedSupportTicket.id}</h4>
                        </div>
                        <button onClick={() => setSelectedSupportTicket(null)} className={`p-1.5 rounded-full transition-colors ${mode("hover:bg-slate-200 text-slate-500", "hover:bg-[#1E252B] text-slate-400")}`}>
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="p-4 flex flex-col gap-4 overflow-y-auto custom-scrollbar flex-1">
                        <div>
                          <p className={`text-xs font-bold uppercase tracking-wider mb-1.5 ${mode("text-slate-400", "text-slate-500")}`}>Issue Summary</p>
                          <h4 className={`font-bold text-base ${mode("text-[#0F172A]", "text-[#F1F5F9]")}`}>{selectedSupportTicket.category}</h4>
                          <p className={`text-sm font-medium mt-1 ${mode("text-slate-600", "text-slate-400")}`}>Customer: {selectedSupportTicket.customer} • {selectedSupportTicket.orderId}</p>
                        </div>
                        
                        {/* Preview Layout Frame */}
                        <div className={`rounded-[12px] border flex flex-col overflow-hidden min-h-[260px] ${mode("border-[#E2E8F0] bg-[#F8FAFC]", "border-[#334155] bg-[#12181E]")}`}>
                          <div className={`p-3 border-b flex items-center justify-between ${mode("border-[#E2E8F0] bg-[#FFFFFF]", "border-[#334155] bg-[#1E252B]")}`}>
                            <div className="flex items-center gap-2">
                              <Camera className="w-4 h-4 text-slate-400" />
                              <div>
                                <h4 className={`text-xs font-bold ${mode("text-[#0F172A]", "text-[#F1F5F9]")}`}>Proof of Damage</h4>
                                <p className="text-[10px] text-slate-500">Uploaded {selectedSupportTicket.timestamp} via App</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex-1 p-3 flex items-center justify-center min-h-[200px]">
                            {selectedSupportTicket.image ? (
                              <div className={`w-full h-full relative rounded-[8px] overflow-hidden border bg-black ${mode("border-[#E2E8F0]", "border-[#334155]")}`}>
                                <img 
                                  src={selectedSupportTicket.image} 
                                  alt={selectedSupportTicket.category}
                                  className="w-full h-full object-cover opacity-90"
                                />
                              </div>
                            ) : (
                              <div className={`w-full h-full min-h-[160px] flex flex-col items-center justify-center rounded-[8px] border border-dashed ${mode("border-[#E2E8F0] bg-slate-50", "border-[#334155] bg-[#1E252B]/50")}`}>
                                <Camera className={`w-8 h-8 mb-2 ${mode("text-slate-300", "text-slate-600")}`} />
                                <p className={`text-xs font-medium ${mode("text-slate-500", "text-slate-400")}`}>No photo uploaded</p>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className={`p-1 flex flex-col gap-2 mt-auto`}>
                          <button className="w-full bg-[#E65F2B] hover:bg-[#D45020] text-white font-bold py-2.5 rounded-[12px] transition-colors flex justify-center items-center gap-2 text-sm shadow-sm">
                            <Truck className="w-4 h-4" /> Dispatch Replacement
                          </button>
                          <button className={`w-full border-2 border-[#E65F2B] text-[#E65F2B] hover:bg-[#E65F2B]/5 font-bold py-2.5 rounded-[12px] transition-colors flex justify-center items-center gap-2 text-sm ${mode("bg-white", "bg-[#1E252B]")}`}>
                            <CheckCircle2 className="w-4 h-4" /> Issue Instant Wallet Refund
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Fleet CRUD Modal */}
            {isFleetModalOpen && (
              <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                <div className={`w-full max-w-md rounded-[12px] shadow-lg flex flex-col overflow-hidden animate-in zoom-in-95 duration-200 ${mode("bg-[#FFFFFF] border-[#E2E8F0]", "bg-[#1E252B] border-[#334155]")} border`}>
                  <div className={`p-4 border-b flex items-center justify-between ${mode("bg-[#F8FAFC] border-[#E2E8F0]", "bg-[#12181E] border-[#334155]")}`}>
                    <h3 className={`font-bold text-[15px] flex items-center gap-2 ${mode("text-[#0F172A]", "text-[#F1F5F9]")}`}>
                      {editingFleetId ? "Edit Courier details" : "Add New Driver"}
                    </h3>
                    <button onClick={() => setIsFleetModalOpen(false)} className={`p-1.5 rounded-full transition-colors ${mode("hover:bg-slate-200 text-slate-500", "hover:bg-[#1E252B] text-slate-400")}`}>
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="p-5 flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className={`text-xs font-bold uppercase tracking-wider ${mode("text-slate-500", "text-slate-400")}`}>Driver Name</label>
                      <input 
                        type="text" 
                        value={fleetForm.name} 
                        onChange={(e) => setFleetForm(prev => ({ ...prev, name: e.target.value }))}
                        className={`w-full px-3 py-2 rounded-[8px] border text-sm transition-colors ${mode("bg-white border-slate-300 text-[#0F172A] focus:border-[#E65F2B] focus:ring-1 focus:ring-[#E65F2B]", "bg-[#12181E] border-slate-700 text-[#F1F5F9] focus:border-[#E65F2B] focus:ring-1 focus:ring-[#E65F2B]")} outline-none`}
                        placeholder="e.g. Rahul Verma"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className={`text-xs font-bold uppercase tracking-wider ${mode("text-slate-500", "text-slate-400")}`}>Phone Number</label>
                      <input 
                        type="text" 
                        value={fleetForm.contact} 
                        onChange={(e) => setFleetForm(prev => ({ ...prev, contact: e.target.value }))}
                        className={`w-full px-3 py-2 rounded-[8px] border text-sm transition-colors ${mode("bg-white border-slate-300 text-[#0F172A] focus:border-[#E65F2B] focus:ring-1 focus:ring-[#E65F2B]", "bg-[#12181E] border-slate-700 text-[#F1F5F9] focus:border-[#E65F2B] focus:ring-1 focus:ring-[#E65F2B]")} outline-none`}
                        placeholder="e.g. +91 98765 43210"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className={`text-xs font-bold uppercase tracking-wider ${mode("text-slate-500", "text-slate-400")}`}>Vehicle Type</label>
                      <input 
                        type="text" 
                        value={fleetForm.vehicle} 
                        onChange={(e) => setFleetForm(prev => ({ ...prev, vehicle: e.target.value }))}
                        className={`w-full px-3 py-2 rounded-[8px] border text-sm transition-colors ${mode("bg-white border-slate-300 text-[#0F172A] focus:border-[#E65F2B] focus:ring-1 focus:ring-[#E65F2B]", "bg-[#12181E] border-slate-700 text-[#F1F5F9] focus:border-[#E65F2B] focus:ring-1 focus:ring-[#E65F2B]")} outline-none`}
                        placeholder="e.g. Eco Delivery Bike"
                      />
                    </div>
                  </div>
                  <div className={`p-4 border-t flex justify-end gap-3 ${mode("bg-[#F8FAFC] border-[#E2E8F0]", "bg-[#12181E] border-[#334155]")}`}>
                    <button 
                      onClick={() => setIsFleetModalOpen(false)}
                      className={`px-4 py-2 text-sm font-bold rounded-[8px] transition-colors border ${mode("bg-white border-slate-300 text-slate-700 hover:bg-slate-50", "bg-[#1E252B] border-slate-700 text-slate-300 hover:bg-[#2A3441]")}`}
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={handleSaveDriver}
                      className="px-4 py-2 text-sm font-bold rounded-[8px] transition-colors shadow-sm bg-[#E65F2B] hover:bg-[#D55626] text-white"
                    >
                      Save Details
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>
        </main>
      </div>
    </div>
  );
};

// --- Subcomponents ---

function TimeRangeSelector({ timeRange, setTimeRange, isDarkMode }: any) {
  const mode = (light: string, dark: string) => isDarkMode ? dark : light;
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  return (
    <div className={`flex flex-wrap items-center gap-1.5 p-1.5 rounded-[16px] border shadow-sm w-fit ${mode("bg-[#FFFFFF] border-[#E2E8F0]", "bg-[#1E252B] border-[#334155]")}`}>
      <div className={`flex items-center gap-2 px-3 py-1.5 border-r ${mode("border-[#E2E8F0] text-slate-500", "border-[#334155] text-slate-400")}`}>
        <Calendar className="w-5 h-5" />
      </div>
      
      <TimeTab active={timeRange === 'today'} onClick={() => { setTimeRange('today'); setIsCalendarOpen(false); }} label="🟢 Live Today (June 14, 2026)" isDarkMode={isDarkMode} />
      <TimeTab active={timeRange === 'week'} onClick={() => { setTimeRange('week'); setIsCalendarOpen(false); }} label="📅 This Week (Past 7 Days)" isDarkMode={isDarkMode} />
      
      <div className="relative">
        <TimeTab active={timeRange === 'custom'} onClick={() => { setIsCalendarOpen(!isCalendarOpen); setTimeRange('custom'); }} label={<span className="flex items-center gap-1">🔍 Pick Particular Day/Month <ChevronDown className="w-3.5 h-3.5" /></span>} isDarkMode={isDarkMode} />
        {isCalendarOpen && (
          <div className={`absolute top-full left-0 mt-2 p-4 rounded-[12px] border shadow-lg z-50 min-w-[240px] ${mode("bg-[#FFFFFF] border-[#E2E8F0]", "bg-[#1E252B] border-[#334155]")}`}>
            <h4 className={`text-sm font-bold mb-3 ${mode("text-[#0F172A]", "text-[#F1F5F9]")}`}>Select Date Range</h4>
            <div className={`grid grid-cols-7 gap-1 text-center text-xs font-medium mb-2 ${mode("text-slate-500", "text-slate-400")}`}>
              <div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div><div>Su</div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-sm">
              {[...Array(30)].map((_, i) => (
                <button key={i} onClick={() => setIsCalendarOpen(false)} className={`p-1.5 rounded-[6px] hover:bg-[#E65F2B] hover:text-white transition-colors ${mode("text-[#0F172A]", "text-[#F1F5F9]")}`}>
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <TimeTab active={timeRange === 'month'} onClick={() => { setTimeRange('month'); setIsCalendarOpen(false); }} label="📊 Last Month Summary (May 2026)" isDarkMode={isDarkMode} />
    </div>
  );
}

function TimeTab({ active, onClick, label, isDarkMode }: any) {
  const mode = (light: string, dark: string) => isDarkMode ? dark : light;
  return (
    <button 
      onClick={onClick}
      className={`px-4 py-2 text-sm font-semibold rounded-[10px] transition-colors whitespace-nowrap ${
        active 
          ? mode("bg-slate-100 text-[#0F172A] shadow-sm", "bg-[#12181E] text-white shadow-sm") 
          : mode("text-slate-500 hover:bg-slate-50 hover:text-[#0F172A]", "text-slate-400 hover:bg-[#12181E]/50 hover:text-white")
      }`}
    >
      {label}
    </button>
  );
}

function SearchHeader({ searchQuery, setSearchQuery, isDarkMode }: any) {
  const mode = (light: string, dark: string) => isDarkMode ? dark : light;
  return (
    <div className={`flex items-center gap-3 px-4 py-3.5 rounded-[12px] border shadow-sm transition-colors ${mode("bg-[#FFFFFF] border-[#E2E8F0]", "bg-[#1E252B] border-[#334155]")}`}>
      <Search className={`w-5 h-5 flex-shrink-0 ${mode("text-slate-400", "text-slate-500")}`} />
      <input 
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by customer name, order ID, phone, or delivery driver..."
        className={`flex-1 bg-transparent border-none outline-none text-sm font-medium ${mode("text-[#0F172A] placeholder:text-slate-400", "text-[#F1F5F9] placeholder:text-slate-500")}`}
      />
    </div>
  );
}

function SidebarItem({ icon, label, active, isLogout, onClick, isDarkMode, badge, badgeColor }: any) {
  const mode = (light: string, dark: string) => isDarkMode ? dark : light;
  const baseClasses = "flex items-center gap-3 px-4 py-3 rounded-[12px] font-medium transition-colors w-full text-left";
  
  let stateClasses = mode("text-slate-500 hover:text-[#0F172A] hover:bg-slate-50", "text-slate-400 hover:text-white hover:bg-[#12181E]");
  if (active) {
    stateClasses = "bg-[#E65F2B] text-white shadow-sm"; 
  } else if (isLogout) {
    stateClasses = mode("text-slate-400 hover:text-red-600 hover:bg-red-50 mt-auto", "text-slate-400 hover:text-red-400 hover:bg-red-900/20 mt-auto");
  }

  const getBadgeStyles = () => {
    if (active) return "bg-white/20 text-white border-transparent"; 
    
    switch (badgeColor) {
      case "orange": return mode("bg-orange-100 text-orange-600 border-orange-200", "bg-orange-900/30 text-orange-400 border-orange-800/50");
      case "gray": return mode("bg-slate-100 text-slate-600 border-slate-200", "bg-slate-800 text-slate-400 border-slate-700");
      case "green": return mode("bg-emerald-100 text-emerald-600 border-emerald-200", "bg-emerald-900/30 text-emerald-400 border-emerald-800/50");
      case "red": return mode("bg-red-100 text-red-600 border-red-200", "bg-red-900/30 text-red-400 border-red-800/50");
      default: return "";
    }
  };

  return (
    <button className={`${baseClasses} ${stateClasses}`} onClick={onClick}>
      <span className={active ? "text-white" : "text-current"}>
        {icon}
      </span>
      <span className="text-sm font-semibold flex-1">{label}</span>
      
      {badge && (
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-[12px] border ${getBadgeStyles()}`}>
          {badge}
        </span>
      )}
    </button>
  );
}

function MetricCard({ title, value, subtitle, trend, positive, highlight, isDarkMode, onClick, isActive }: any) {
  const mode = (light: string, dark: string) => isDarkMode ? dark : light;
  
  return (
    <button 
      onClick={onClick}
      className={`rounded-[12px] p-5 shadow-sm border flex flex-col justify-between relative overflow-hidden transition-all duration-200 text-left w-full cursor-pointer
      ${isActive ? `ring-2 ring-[#E65F2B] ring-offset-2 ${mode("ring-offset-[#F8FAFC]", "ring-offset-[#12181E]")}` : ""}
      ${
      highlight 
        ? "bg-[#E65F2B] border-[#E65F2B] text-white hover:bg-[#D55626]" 
        : mode("bg-[#FFFFFF] border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-slate-50", "bg-[#1E252B] border-[#334155] hover:border-[#475569] hover:bg-[#1E252B]/80")
    }`}>
      {highlight && (
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
      )}
      
      <div className="flex items-start justify-between mb-4 relative z-10">
        <h3 className={`text-sm font-semibold ${highlight ? "text-white/90" : mode("text-slate-500", "text-slate-400")}`}>
          {title}
        </h3>
        {trend && (
          <span className={`text-xs font-bold px-2 py-0.5 rounded-[12px] flex items-center gap-1 ${
            highlight ? "bg-white/20 text-white" : positive ? mode("bg-emerald-50 text-emerald-600", "bg-emerald-900/20 text-emerald-600") : mode("bg-slate-100 text-slate-500", "bg-[#12181E] text-slate-500")
          }`}>
            {trend !== "Stable" && <TrendingUp className="w-3 h-3" />}
            {trend}
          </span>
        )}
      </div>
      
      <div className="relative z-10">
        <div 
          className={`text-3xl font-bold tracking-tight mb-1 ${highlight ? "text-white" : mode("text-[#0F172A]", "text-[#F1F5F9]")}`} 
          style={{ fontFamily: '"JetBrains Mono", monospace' }}
        >
          {value}
        </div>
        {subtitle && (
          <div className={`text-xs font-medium ${highlight ? "text-white/80" : mode("text-slate-400", "text-slate-500")}`}>
            {subtitle}
          </div>
        )}
      </div>
    </button>
  );
}

// Data Row Components
function ManifestRow({ meal, units, targets, batch, isDarkMode }: any) {
  const mode = (light: string, dark: string) => isDarkMode ? dark : light;
  
  return (
    <tr className={`transition-colors group ${mode("hover:bg-slate-50", "hover:bg-[#12181E]/50")}`}>
      <td className={`px-4 py-4 font-semibold border-r border-transparent ${mode("text-[#0F172A] group-hover:border-[#E2E8F0]", "text-[#F1F5F9] group-hover:border-[#334155]")}`}>{meal}</td>
      <td className={`px-4 py-4 border-r border-transparent ${mode("group-hover:border-[#E2E8F0]", "group-hover:border-[#334155]")}`}>
        <span 
          className="text-base font-bold text-[#E65F2B] bg-[#E65F2B]/10 px-2 py-1 rounded-[8px]"
          style={{ fontFamily: '"JetBrains Mono", monospace' }}
        >
          {units}
        </span>
      </td>
      <td className={`px-4 py-4 font-medium leading-relaxed border-r border-transparent ${mode("text-slate-600 group-hover:border-[#E2E8F0]", "text-slate-400 group-hover:border-[#334155]")}`}>
        {targets}
      </td>
      <td className={`px-4 py-4 font-medium`}>
        <span className={`px-2.5 py-1 rounded-[6px] text-xs font-bold ${mode("bg-slate-100 text-slate-600", "bg-[#12181E] text-slate-300")}`}>
          {batch}
        </span>
      </td>
    </tr>
  );
}

function SubscriberRow({ item, isDarkMode }: any) {
  const mode = (light: string, dark: string) => isDarkMode ? dark : light;
  
  return (
    <tr className={`transition-colors group ${mode("hover:bg-slate-50", "hover:bg-[#12181E]/50")}`}>
      <td className={`px-4 py-4 font-semibold border-r border-transparent ${mode("text-[#0F172A] group-hover:border-[#E2E8F0]", "text-[#F1F5F9] group-hover:border-[#334155]")}`}>{item.name}</td>
      <td className={`px-4 py-4 font-medium border-r border-transparent ${mode("text-slate-600 group-hover:border-[#E2E8F0]", "text-slate-400 group-hover:border-[#334155]")}`}>{item.plan}</td>
      <td className={`px-4 py-4 border-r border-transparent ${mode("group-hover:border-[#E2E8F0]", "group-hover:border-[#334155]")}`}>
        <span className={`px-2.5 py-1 rounded-[6px] text-xs font-bold ${mode("bg-slate-100 text-slate-600", "bg-[#12181E] text-slate-300")}`}>
          {item.slot}
        </span>
      </td>
      <td className={`px-4 py-4 font-medium border-r border-transparent ${mode("text-slate-600 group-hover:border-[#E2E8F0]", "text-slate-400 group-hover:border-[#334155]")}`}>{item.start}</td>
      <td className={`px-4 py-4 font-medium border-r border-transparent ${mode("text-slate-600 group-hover:border-[#E2E8F0]", "text-slate-400 group-hover:border-[#334155]")}`}>{item.end}</td>
      <td className={`px-4 py-4 font-medium`}>
        <span className={`flex items-center gap-1.5 text-xs font-bold text-emerald-600 px-2 py-1 rounded-[8px] w-fit ${mode("bg-emerald-50", "bg-emerald-900/20")}`}>
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          {item.status}
        </span>
      </td>
    </tr>
  );
}

function FleetLogItem({ isSuccess, message, time, driver, isDarkMode }: any) {
  const mode = (light: string, dark: string) => isDarkMode ? dark : light;
  return (
    <div className={`flex items-start gap-3 p-3 rounded-[8px] transition-colors border ${mode("bg-slate-50 border-transparent hover:border-[#E2E8F0]", "bg-[#12181E]/50 border-transparent hover:border-[#334155]")}`}>
      <div className="mt-0.5 flex-shrink-0">
        {isSuccess ? (
          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
        ) : (
          <Clock className="w-4 h-4 text-amber-500 animate-pulse" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-medium leading-snug ${mode("text-[#0F172A]", "text-[#F1F5F9]")}`}>
          {message}
        </p>
        <div className={`text-xs mt-1 font-medium ${mode("text-slate-500", "text-slate-400")}`}>
          {time ? `Delivered at ${time}` : `Driver: ${driver}`}
        </div>
      </div>
    </div>
  );
}

function FinanceRow({ name, tier, modeType, balance, status, isDarkMode }: any) {
  const mode = (light: string, dark: string) => isDarkMode ? dark : light;
  
  const getModeIcon = () => {
    if (modeType.includes("UPI")) return <Smartphone className="w-3.5 h-3.5" />;
    if (modeType.includes("Wallet")) return <Wallet className="w-3.5 h-3.5" />;
    return <CreditCard className="w-3.5 h-3.5" />;
  };

  const isNegative = balance.includes("-");

  return (
    <tr className={`transition-colors group ${mode("hover:bg-slate-50", "hover:bg-[#12181E]/50")}`}>
      <td className={`px-4 py-4 font-bold ${mode("text-[#0F172A]", "text-[#F1F5F9]")}`}>{name}</td>
      <td className={`px-4 py-4 font-medium ${mode("text-slate-600", "text-slate-300")}`}>{tier}</td>
      <td className="px-4 py-4">
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] text-xs font-semibold ${mode("bg-slate-100 text-slate-600", "bg-[#12181E] text-slate-300")}`}>
          {getModeIcon()} {modeType}
        </span>
      </td>
      <td className="px-4 py-4">
        <span 
          className={`text-sm font-bold ${isNegative ? "text-red-500" : mode("text-[#0F172A]", "text-[#F1F5F9]")}`}
          style={{ fontFamily: '"JetBrains Mono", monospace' }}
        >
          {balance}
        </span>
      </td>
      <td className="px-4 py-4">
        {status === "paid" ? (
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-[12px] text-xs font-bold border ${mode("bg-emerald-50 text-emerald-700 border-emerald-200", "bg-emerald-900/20 text-emerald-400 border-emerald-800/50")}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Paid & Settled
          </span>
        ) : (
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-[12px] text-xs font-bold border ${mode("bg-orange-50 text-orange-700 border-orange-200", "bg-orange-900/20 text-orange-400 border-orange-800/50")}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span> {status === "overdue" ? "Payment Overdue" : "Pending Re-charge"}
          </span>
        )}
      </td>
    </tr>
  );
}

function CancellationRow({ name, packageType, slot, date, timestamp, reason, isDarkMode }: any) {
  const mode = (light: string, dark: string) => isDarkMode ? dark : light;
  
  return (
    <tr className={`transition-colors group ${mode("hover:bg-red-50/50", "hover:bg-red-900/10")}`}>
      <td className={`px-4 py-4 font-bold ${mode("text-[#0F172A]", "text-[#F1F5F9]")}`}>{name}</td>
      <td className={`px-4 py-4 font-medium ${mode("text-slate-600", "text-slate-300")}`}>{packageType}</td>
      <td className={`px-4 py-4 font-medium ${mode("text-slate-600", "text-slate-300")}`}>{slot}</td>
      <td className={`px-4 py-4 font-medium ${mode("text-slate-600", "text-slate-300")}`}>{date}</td>
      <td className="px-4 py-4">
        <span className={`text-sm font-semibold ${mode("text-slate-500", "text-slate-400")}`}>
          Cancelled at {timestamp}
        </span>
      </td>
      <td className="px-4 py-4">
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-red-500">
          <AlertCircle className="w-4 h-4" /> {reason}
        </span>
      </td>
    </tr>
  );
}
