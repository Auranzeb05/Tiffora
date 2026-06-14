import React from "react";
import { ArrowDownRight, ArrowUpRight, Search, Download, Filter, MoreVertical, CreditCard, Wallet, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";

const TRANSACTIONS = [
  { id: "TXN-001", user: "Akash Patel", amount: 1500, type: "credit", method: "UPI - PhonePe", date: "Today, 10:42 AM", status: "success" },
  { id: "TXN-002", user: "Priya Sharma", amount: 350, type: "debit", method: "Wallet Deduction", date: "Today, 9:15 AM", status: "success" },
  { id: "TXN-003", user: "Rahul Verma", amount: 2500, type: "credit", method: "UPI - GPay", date: "Yesterday", status: "success" },
  { id: "TXN-004", user: "Neha Gupta", amount: 150, type: "refund", method: "Wallet Refund", date: "Yesterday", status: "success" },
  { id: "TXN-005", user: "Vikram Singh", amount: 1200, type: "credit", method: "Credit Card", date: "Yesterday", status: "failed" },
];

export function AdminFinance() {
  return (
    <div className="p-4 md:p-8 max-w-[1600px] mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-zinc-900 tracking-tight">Wallet & Finance</h1>
          <p className="text-sm text-zinc-500 mt-1">Manage prepaid wallets, refunds, and UPI transactions.</p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <button className="w-full sm:w-auto px-4 py-2 bg-white border border-zinc-200 text-zinc-700 rounded-lg text-sm font-medium hover:bg-zinc-50 flex items-center justify-center gap-2">
            <Download className="w-4 h-4" /> Export CSV
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                <Wallet className="w-5 h-5" />
              </div>
              <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">+12%</Badge>
            </div>
            <p className="text-sm font-medium text-zinc-500 mb-1">Total Wallet Balances</p>
            <h3 className="text-3xl font-bold text-zinc-900 font-mono">₹4,82,500</h3>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                <ArrowUpRight className="w-5 h-5" />
              </div>
              <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">+8.5%</Badge>
            </div>
            <p className="text-sm font-medium text-zinc-500 mb-1">Today's Recharges</p>
            <h3 className="text-3xl font-bold text-zinc-900 font-mono">₹45,200</h3>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-orange-50 rounded-lg text-orange-600">
                <AlertCircle className="w-5 h-5" />
              </div>
            </div>
            <p className="text-sm font-medium text-zinc-500 mb-1">Pending Refunds</p>
            <h3 className="text-3xl font-bold text-zinc-900 font-mono">₹3,450</h3>
          </CardContent>
        </Card>
      </div>

      {/* Transactions Table */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between border-b border-zinc-100 pb-4">
          <CardTitle className="text-lg font-bold">Recent Transactions</CardTitle>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search Txn ID or User..." 
                className="pl-9 pr-4 py-1.5 text-sm border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64"
              />
            </div>
            <button className="p-1.5 border border-zinc-200 rounded-lg text-zinc-600 hover:bg-zinc-50">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </CardHeader>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-zinc-50/50 text-zinc-500 font-medium">
              <tr>
                <th className="px-6 py-4">Transaction ID</th>
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Method</th>
                <th className="px-6 py-4">Date & Time</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {TRANSACTIONS.map((txn) => (
                <tr key={txn.id} className="hover:bg-zinc-50/50 transition-colors">
                  <td className="px-6 py-4 font-mono text-zinc-600">{txn.id}</td>
                  <td className="px-6 py-4 font-medium text-zinc-900">{txn.user}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 font-mono">
                      {txn.type === 'credit' ? (
                        <ArrowUpRight className="w-3.5 h-3.5 text-emerald-500" />
                      ) : txn.type === 'debit' ? (
                        <ArrowDownRight className="w-3.5 h-3.5 text-red-500" />
                      ) : (
                        <ArrowDownRight className="w-3.5 h-3.5 text-orange-500" />
                      )}
                      <span className={
                        txn.type === 'credit' ? 'text-emerald-600 font-semibold' : 
                        txn.type === 'debit' ? 'text-zinc-900 font-semibold' : 'text-orange-600 font-semibold'
                      }>
                        {txn.type === 'credit' ? '+' : '-'}₹{txn.amount}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-zinc-500">{txn.method}</td>
                  <td className="px-6 py-4 text-zinc-500">{txn.date}</td>
                  <td className="px-6 py-4">
                    <Badge variant={txn.status === 'success' ? 'default' : 'destructive'} 
                           className={txn.status === 'success' ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-50' : 'bg-red-50 text-red-700 hover:bg-red-50'}>
                      {txn.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-1 text-zinc-400 hover:text-zinc-900 rounded">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}