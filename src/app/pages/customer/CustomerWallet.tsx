import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Wallet as WalletIcon, ArrowDownRight, ArrowUpRight, Plus, History, Smartphone, CreditCard, Landmark, CheckCircle2, ChevronRight, Info, Clock, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { motion, AnimatePresence } from "motion/react";

const TRANSACTIONS = [
  { id: 1, type: "deduction", title: "Daily Meal Deduction", date: "Today, 10:00 AM", amount: "-₹85", status: "Success" },
  { id: 2, type: "deduction", title: "Daily Meal Deduction", date: "Yesterday, 10:00 AM", amount: "-₹85", status: "Success" },
  { id: 3, type: "addition", title: "Wallet Recharge (UPI)", date: "Oct 20, 2026", amount: "+₹1500", status: "Success" },
  { id: 4, type: "refund", title: "Cancelled Meal Refund", date: "Oct 18, 2026", amount: "+₹85", status: "Refunded" },
];

const UPI_APPS = [
  { id: "gpay", name: "Google Pay", color: "bg-white", icon: "G" },
  { id: "phonepe", name: "PhonePe", color: "bg-[#5f259f]", icon: "P" },
  { id: "paytm", name: "Paytm", color: "bg-[#002970]", icon: "Pay" },
];

export function CustomerWallet() {
  const navigate = useNavigate();
  const [showAddFunds, setShowAddFunds] = useState(false);
  const [rechargeAmount, setRechargeAmount] = useState("1000");
  const [paymentStep, setPaymentStep] = useState<'amount' | 'method' | 'processing' | 'success'>('amount');
  const [selectedUpi, setSelectedUpi] = useState<string | null>(null);

  const handleRecharge = () => {
    setPaymentStep('processing');
    setTimeout(() => {
      setPaymentStep('success');
      setTimeout(() => {
        setShowAddFunds(false);
        setPaymentStep('amount');
      }, 2000);
    }, 2500);
  };

  return (
    <div className="flex flex-col min-h-full bg-zinc-50 dark:bg-zinc-950 pb-8 transition-colors duration-200">
      <header className="bg-white dark:bg-zinc-900 px-6 pt-12 pb-4 sticky top-0 z-10 border-b border-zinc-100 dark:border-zinc-800 flex items-center gap-3 transition-colors duration-200">
        <button 
          onClick={() => navigate("/customer")}
          className="p-2 -ml-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Wallet</h1>
      </header>

      <div className="px-6 py-6 space-y-6 max-w-3xl mx-auto w-full">
        
        {/* Balance Card */}
        <div className="bg-zinc-950 dark:bg-indigo-950 rounded-3xl p-6 md:p-8 text-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] relative overflow-hidden border border-zinc-800 dark:border-indigo-900/50">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl -ml-8 -mb-8" />
          
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2 text-zinc-400 dark:text-indigo-200/70">
                <WalletIcon className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base font-medium uppercase tracking-wider">Available Balance</span>
              </div>
            </div>
            <div className="text-4xl md:text-5xl font-bold mb-8 font-mono tracking-tight text-white">₹850.00</div>
            
            <div className="flex gap-3 md:gap-4">
              <Button 
                onClick={() => { setShowAddFunds(true); setPaymentStep('amount'); }}
                className="flex-1 bg-white hover:bg-zinc-100 text-zinc-900 dark:bg-indigo-500 dark:text-white dark:hover:bg-indigo-600 rounded-xl md:rounded-2xl h-12 md:h-14 font-bold shadow-sm md:text-base"
              >
                <Plus className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Add Funds
              </Button>
            </div>
          </div>
        </div>

        {/* Transactions list */}
        <div>
          <div className="flex justify-between items-center mb-4 px-1">
            <h3 className="text-base md:text-lg font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <History className="w-4 h-4 md:w-5 md:h-5 text-zinc-500 dark:text-zinc-400" />
              Payment History
            </h3>
            <button className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700">View All</button>
          </div>
          
          <Card className="rounded-2xl md:rounded-3xl border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden bg-white dark:bg-zinc-900 transition-colors duration-200">
            <div className="divide-y divide-zinc-100 dark:divide-zinc-800/50">
              {TRANSACTIONS.map((tx) => (
                <div key={tx.id} className="p-4 md:p-5 flex items-center justify-between hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shrink-0 ${
                      tx.type === 'deduction' ? 'bg-zinc-100 dark:bg-zinc-800' : 'bg-emerald-50 dark:bg-emerald-900/20'
                    }`}>
                      {tx.type === 'deduction' ? (
                        <ArrowUpRight className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                      ) : (
                        <ArrowDownRight className="w-5 h-5 text-emerald-600 dark:text-emerald-500" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm md:text-base font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">{tx.title}</p>
                      <div className="flex items-center gap-2 mt-0.5 md:mt-1">
                        <span className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400">{tx.date}</span>
                        <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
                        <span className={`text-[10px] md:text-xs font-medium ${tx.type === 'refund' ? 'text-orange-600 dark:text-orange-400' : 'text-emerald-600 dark:text-emerald-400'}`}>{tx.status}</span>
                      </div>
                    </div>
                  </div>
                  <div className={`text-sm md:text-base font-bold font-mono tracking-tight ${
                    tx.type === 'deduction' ? 'text-zinc-900 dark:text-zinc-100' : 'text-emerald-600 dark:text-emerald-400'
                  }`}>
                    {tx.amount}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* UPI Auto-Pay Promo */}
        <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl md:rounded-3xl p-5 border border-indigo-100 dark:border-indigo-900/50 flex gap-4">
          <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center shrink-0">
            <Smartphone className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-1">Set up UPI AutoPay</h4>
            <p className="text-xs md:text-sm text-indigo-700/80 dark:text-indigo-300/80 leading-relaxed mb-3">Never miss a meal. Auto-recharge your wallet when balance falls below ₹200.</p>
            <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg h-8 md:h-9">Set up now</Button>
          </div>
        </div>

      </div>

      {/* Add Funds Overlay */}
      <AnimatePresence>
        {showAddFunds && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => paymentStep === 'processing' ? null : setShowAddFunds(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-md bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] transition-colors duration-200"
            >
              
              <div className="px-5 pt-8 pb-8 overflow-y-auto w-full">
                {paymentStep === 'amount' && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                    <div className="text-center">
                      <h2 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Add Funds</h2>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Current balance: ₹850</p>
                    </div>

                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-medium text-zinc-400">₹</span>
                      <input 
                        type="number" 
                        value={rechargeAmount}
                        onChange={(e) => setRechargeAmount(e.target.value)}
                        className="w-full text-center text-4xl font-bold font-mono py-6 border-b-2 border-zinc-200 dark:border-zinc-800 focus:border-indigo-600 bg-transparent text-zinc-900 dark:text-white outline-none transition-colors"
                      />
                    </div>

                    <div className="flex gap-3 justify-center">
                      {["500", "1000", "1500", "3000"].map((amount) => (
                        <button 
                          key={amount}
                          onClick={() => setRechargeAmount(amount)}
                          className={`px-4 py-2 rounded-xl text-sm font-bold border transition-colors ${
                            rechargeAmount === amount 
                              ? 'bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-zinc-900 dark:border-white' 
                              : 'bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600'
                          }`}
                        >
                          +{amount}
                        </button>
                      ))}
                    </div>

                    <Button 
                      onClick={() => setPaymentStep('method')}
                      className="w-full h-14 rounded-2xl text-base font-bold bg-indigo-600 hover:bg-indigo-700 shadow-[0_4px_14px_0_rgb(79,70,229,0.39)]"
                    >
                      Proceed to Pay
                    </Button>
                  </div>
                )}

                {paymentStep === 'method' && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                    <div className="flex items-center gap-4 mb-2">
                      <button onClick={() => setPaymentStep('amount')} className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full text-zinc-500">
                        <ChevronRight className="w-5 h-5 rotate-180" />
                      </button>
                      <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Select Payment Method</h2>
                    </div>

                    <div className="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-800 dark:text-indigo-300 px-4 py-3 rounded-xl flex items-center justify-between font-semibold">
                      <span>Amount to pay</span>
                      <span className="text-xl font-mono">₹{rechargeAmount}</span>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-3">Pay via UPI</h3>
                        <div className="grid grid-cols-3 gap-3">
                          {UPI_APPS.map(app => (
                            <button 
                              key={app.id}
                              onClick={() => setSelectedUpi(app.id)}
                              className={`flex flex-col items-center justify-center p-3 md:p-4 rounded-2xl border-2 transition-all ${
                                selectedUpi === app.id 
                                  ? 'border-indigo-600 bg-indigo-50/50 dark:bg-indigo-900/20' 
                                  : 'border-zinc-100 dark:border-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700 bg-white dark:bg-zinc-900'
                              }`}
                            >
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white mb-2 ${app.color} ${app.id === 'gpay' ? 'text-zinc-900 border border-zinc-200' : ''}`}>
                                {app.icon}
                              </div>
                              <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">{app.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
                        <h3 className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-3">Other Options</h3>
                        <div className="space-y-2">
                          <button 
                            onClick={() => setSelectedUpi('card')}
                            className={`w-full flex items-center p-4 rounded-xl border-2 transition-all ${
                              selectedUpi === 'card' ? 'border-indigo-600 bg-indigo-50/50 dark:bg-indigo-900/20' : 'border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900'
                            }`}
                          >
                            <CreditCard className="w-6 h-6 text-zinc-400 mr-3" />
                            <div className="text-left flex-1">
                              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Credit / Debit Card</p>
                              <p className="text-xs text-zinc-500 dark:text-zinc-400">Visa, Mastercard, RuPay</p>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>

                    <Button 
                      disabled={!selectedUpi}
                      onClick={handleRecharge}
                      className="w-full h-14 rounded-2xl text-base font-bold bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-100"
                    >
                      Pay ₹{rechargeAmount}
                    </Button>
                  </div>
                )}

                {paymentStep === 'processing' && (
                  <div className="py-12 flex flex-col items-center justify-center text-center animate-in fade-in">
                    <div className="relative w-20 h-20 mb-6">
                      <div className="absolute inset-0 border-4 border-zinc-100 dark:border-zinc-800 rounded-full"></div>
                      <div className="absolute inset-0 border-4 border-indigo-600 rounded-full border-t-transparent animate-spin"></div>
                      <Smartphone className="absolute inset-0 m-auto w-8 h-8 text-indigo-600 animate-pulse" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Awaiting Payment</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-[250px]">Please open your UPI app and approve the payment of ₹{rechargeAmount}.</p>
                    <div className="mt-8 px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 rounded-lg text-xs font-medium flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5" /> Automatically expires in 04:59
                    </div>
                  </div>
                )}

                {paymentStep === 'success' && (
                  <div className="py-12 flex flex-col items-center justify-center text-center animate-in zoom-in-95">
                    <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2 tracking-tight">Payment Successful</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-8">₹{rechargeAmount} has been added to your wallet.</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}