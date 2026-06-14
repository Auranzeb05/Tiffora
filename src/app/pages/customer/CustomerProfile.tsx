import React, { useState } from "react";
import { User, Settings, CreditCard, MapPin, Bell, ChevronRight, ChevronDown, LogOut, History, Trash2, Plus } from "lucide-react";
import { Card } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { useNavigate } from "react-router";

export function CustomerProfile() {
  const navigate = useNavigate();
  const [expandedSetting, setExpandedSetting] = useState<string | null>(null);
  const [addresses, setAddresses] = useState([
    { id: 1, text: "123 Tech Park Hub, Tower B" },
    { id: 2, text: "Home, 45 Sunrise Avenue" }
  ]);
  const [payments, setPayments] = useState([
    { id: 1, text: "**** **** **** 4242 (Visa) - Expires 12/28" }
  ]);
  const [newAddress, setNewAddress] = useState("");
  const [newPayment, setNewPayment] = useState("");

  const toggleSetting = (label: string) => {
    setExpandedSetting(expandedSetting === label ? null : label);
  };

  const addAddress = () => { if (newAddress) { setAddresses([...addresses, { id: Date.now(), text: newAddress }]); setNewAddress(""); } };
  const removeAddress = (id: number) => setAddresses(addresses.filter(a => a.id !== id));
  
  const addPayment = () => { if (newPayment) { setPayments([...payments, { id: Date.now(), text: newPayment }]); setNewPayment(""); } };
  const removePayment = (id: number) => setPayments(payments.filter(p => p.id !== id));
  
  return (
    <div className="flex flex-col min-h-full bg-zinc-50 dark:bg-zinc-950 pb-8 transition-colors duration-200">
      <header className="bg-white dark:bg-zinc-900 px-6 pt-12 pb-4 sticky top-0 z-10 border-b border-zinc-100 dark:border-zinc-800 flex justify-between items-center transition-colors duration-200">
        <h1 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Profile</h1>
      </header>

      <div className="px-6 py-6 space-y-6 max-w-3xl mx-auto w-full">
        
        {/* User Card */}
        <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl md:rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center gap-4 transition-colors duration-200">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center text-indigo-700 dark:text-indigo-400 font-bold text-xl md:text-2xl flex-shrink-0 shadow-inner">
            AP
          </div>
          <div className="flex-1">
            <h2 className="text-lg md:text-xl font-bold text-zinc-900 dark:text-zinc-100">Akash Patel</h2>
            <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 mt-0.5">+91 98765 43210</p>
          </div>
          <button className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300">Edit</button>
        </div>

        {/* Account Menu */}
        <div>
          <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-3 px-1">Account & History</h3>
          <Card className="rounded-2xl border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden bg-white dark:bg-zinc-900 transition-colors duration-200">
            <div className="divide-y divide-zinc-100 dark:divide-zinc-800/50">
              <button onClick={() => navigate("/customer/history")} className="w-full flex items-center justify-between p-4 md:p-5 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors text-left group">
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-zinc-100 dark:bg-zinc-800 rounded-xl group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 transition-colors">
                    <History className="w-5 h-5 text-zinc-600 dark:text-zinc-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                  </div>
                  <div>
                    <span className="text-sm md:text-base font-semibold text-zinc-900 dark:text-zinc-100 block">Order History</span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">Past deliveries & receipts</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-zinc-400 dark:text-zinc-500" />
              </button>
            </div>
          </Card>
        </div>

        {/* Subscription Info */}
        <div>
          <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-3 px-1">Current Plan</h3>
          <Card className="rounded-2xl border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden bg-white dark:bg-zinc-900 transition-colors duration-200">
            <div className="p-4 md:p-5 flex justify-between items-center border-b border-zinc-100 dark:border-zinc-800">
              <div>
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 md:text-lg">Executive North Indian</h4>
                <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 mt-1">30 Meals • Lunch Only</p>
              </div>
              <Badge className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 border-none font-semibold">Active</Badge>
            </div>
            <div className="p-4 md:p-5 bg-zinc-50 dark:bg-zinc-800/30 flex justify-between items-center">
              <span className="text-sm text-zinc-600 dark:text-zinc-400 font-medium">Auto-renews on Oct 24</span>
              <button className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700">Manage</button>
            </div>
          </Card>
        </div>

        {/* Settings Menu */}
        <div>
          <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-3 px-1">Settings</h3>
          <Card className="rounded-2xl border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden bg-white dark:bg-zinc-900 transition-colors duration-200">
            <div className="divide-y divide-zinc-100 dark:divide-zinc-800/50">
              {[
                { 
                  icon: MapPin, 
                  label: "Delivery Addresses", 
                  type: "address"
                },
                { 
                  icon: CreditCard, 
                  label: "Payment Methods", 
                  type: "payment"
                },
                { 
                  icon: Bell, 
                  label: "Notifications", 
                  value: "On",
                  details: "SMS Alerts: Active. Email Newsletter: Active. WhatsApp Updates: Active."
                },
                { 
                  icon: Settings, 
                  label: "App Preferences", 
                  value: "",
                  details: "Theme: Match System. Language: English (US). Data Saver: Off."
                },
              ].map((item, i) => {
                const displayValue = item.type === 'address' ? `${addresses.length} Saved` : item.type === 'payment' ? `${payments.length} Saved` : item.value;
                
                return (
                  <div key={i}>
                    <button 
                      onClick={() => toggleSetting(item.label)}
                      className="w-full flex items-center justify-between p-4 md:p-5 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors text-left group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-2.5 bg-zinc-100 dark:bg-zinc-800 rounded-xl group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 transition-colors">
                          <item.icon className="w-5 h-5 text-zinc-600 dark:text-zinc-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                        </div>
                        <span className="text-sm md:text-base font-semibold text-zinc-900 dark:text-zinc-100">{item.label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {displayValue && <span className="text-xs md:text-sm font-medium text-zinc-400 dark:text-zinc-500">{displayValue}</span>}
                        {expandedSetting === item.label ? (
                          <ChevronDown className="w-5 h-5 text-zinc-400 dark:text-zinc-500" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-zinc-400 dark:text-zinc-500" />
                        )}
                      </div>
                    </button>
                    {expandedSetting === item.label && (
                      <div className="px-4 md:px-16 pb-4 pt-1 bg-zinc-50/50 dark:bg-zinc-900/50">
                        {item.type === 'address' ? (
                          <div className="space-y-3">
                            {addresses.map(addr => (
                              <div key={addr.id} className="flex justify-between items-center bg-zinc-100 dark:bg-zinc-800 p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 animate-in slide-in-from-top-2 fade-in">
                                <p className="text-sm text-zinc-700 dark:text-zinc-300 font-medium">{addr.text}</p>
                                <button onClick={() => removeAddress(addr.id)} className="text-red-500 hover:bg-red-100 dark:hover:bg-red-900/30 p-2 rounded-lg transition-colors"><Trash2 className="w-4 h-4" /></button>
                              </div>
                            ))}
                            <div className="flex gap-2 mt-3 items-center">
                              <input 
                                value={newAddress} 
                                onChange={e => setNewAddress(e.target.value)} 
                                placeholder="e.g. 123 Tech Park Hub..." 
                                className="flex-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-indigo-500 outline-none"
                              />
                              <button onClick={addAddress} className="flex items-center gap-1 bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 px-3 py-2 rounded-xl text-sm font-bold transition-colors">
                                <Plus className="w-4 h-4"/> Add
                              </button>
                            </div>
                          </div>
                        ) : item.type === 'payment' ? (
                          <div className="space-y-3">
                            {payments.map(pay => (
                              <div key={pay.id} className="flex justify-between items-center bg-zinc-100 dark:bg-zinc-800 p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 animate-in slide-in-from-top-2 fade-in">
                                <p className="text-sm text-zinc-700 dark:text-zinc-300 font-medium font-mono">{pay.text}</p>
                                <button onClick={() => removePayment(pay.id)} className="text-red-500 hover:bg-red-100 dark:hover:bg-red-900/30 p-2 rounded-lg transition-colors"><Trash2 className="w-4 h-4" /></button>
                              </div>
                            ))}
                            <div className="flex gap-2 mt-3 items-center">
                              <input 
                                value={newPayment} 
                                onChange={e => setNewPayment(e.target.value)} 
                                placeholder="e.g. **** **** **** 1234" 
                                className="flex-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 font-mono focus:ring-2 focus:ring-indigo-500 outline-none"
                              />
                              <button onClick={addPayment} className="flex items-center gap-1 bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 px-3 py-2 rounded-xl text-sm font-bold transition-colors">
                                <Plus className="w-4 h-4"/> Add
                              </button>
                            </div>
                          </div>
                        ) : (
                          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed bg-zinc-100 dark:bg-zinc-800 p-3 rounded-lg border border-zinc-200 dark:border-zinc-700">
                            {item.details}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Logout */}
        <button 
          onClick={() => navigate("/login")}
          className="w-full flex items-center justify-center gap-2 p-4 md:p-5 text-red-600 dark:text-red-500 font-bold bg-red-50 dark:bg-red-900/10 rounded-2xl hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Log Out
        </button>

      </div>
    </div>
  );
}