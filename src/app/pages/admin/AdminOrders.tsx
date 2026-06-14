import React, { useState } from "react";
import { Search, Filter, Calendar, Eye, CheckCircle2, XCircle, Clock } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";

const MOCK_ORDERS = [
  { id: "ORD-9823", customer: "Rahul Sharma", meal: "Executive North Indian Thali", type: "Lunch", amount: 180, payment: "Prepaid", status: "Delivered", exec: "Ravi K.", time: "1:15 PM" },
  { id: "ORD-9824", customer: "Priya Patel", meal: "Healthy South Indian Meal", type: "Lunch", amount: 150, payment: "Wallet", status: "Out for Delivery", exec: "Suresh M.", time: "Expected 1:45 PM" },
  { id: "ORD-9825", customer: "Amit Kumar", meal: "Premium Chicken Biryani", type: "Dinner", amount: 220, payment: "COD", status: "Preparing", exec: "Unassigned", time: "Expected 8:30 PM" },
  { id: "ORD-9826", customer: "Sneha Reddy", meal: "Light Diet Dinner (Jain)", type: "Dinner", amount: 160, payment: "Prepaid", status: "Cancelled", exec: "-", time: "Cancelled by User" },
  { id: "ORD-9827", customer: "Vikram Singh", meal: "Executive North Indian Thali", type: "Lunch", amount: 180, payment: "Wallet", status: "Delivered", exec: "Ravi K.", time: "1:40 PM" },
];

export function AdminOrders() {
  const [activeFilter, setActiveFilter] = useState("all");

  const getStatusBadge = (status: string) => {
    switch(status) {
      case "Delivered": return <Badge className="bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 border-emerald-200 dark:border-emerald-800/30">Delivered</Badge>;
      case "Out for Delivery": return <Badge className="bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 border-blue-200 dark:border-blue-800/30">Out for Delivery</Badge>;
      case "Preparing": return <Badge className="bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 border-amber-200 dark:border-amber-800/30">Preparing</Badge>;
      case "Cancelled": return <Badge variant="destructive" className="bg-red-500/10 text-red-600 hover:bg-red-500/20 border-red-200 dark:border-red-800/30">Cancelled</Badge>;
      default: return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6 h-full flex flex-col">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 flex-shrink-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Daily Orders</h1>
          <p className="text-muted-foreground mt-1">Monitor real-time order lifecycle and fulfillment.</p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <Button variant="outline" className="w-full sm:w-auto">
            <Calendar className="w-4 h-4 mr-2" />
            Select Date
          </Button>
        </div>
      </div>

      <Card className="flex-shrink-0">
        <CardContent className="p-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 scrollbar-hide">
            {['all', 'lunch', 'dinner', 'preparing', 'out-for-delivery'].map((filter) => (
              <Button 
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                size="sm"
                className="capitalize whitespace-nowrap"
                onClick={() => setActiveFilter(filter)}
              >
                {filter.replace(/-/g, ' ')}
              </Button>
            ))}
          </div>
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search order ID or customer..." 
              className="w-full pl-9 pr-4 py-2 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring" 
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex-1 overflow-auto rounded-xl border border-border bg-card">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-muted-foreground uppercase bg-muted/50 sticky top-0 z-10 backdrop-blur-sm">
            <tr>
              <th className="px-6 py-4 font-medium">Order ID & Time</th>
              <th className="px-6 py-4 font-medium">Customer & Meal</th>
              <th className="px-6 py-4 font-medium">Amount & Payment</th>
              <th className="px-6 py-4 font-medium">Status & Exec</th>
              <th className="px-6 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {MOCK_ORDERS.map((order) => (
              <tr key={order.id} className="hover:bg-muted/50 transition-colors group cursor-pointer">
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="font-bold text-foreground">{order.id}</span>
                    <span className="text-xs text-muted-foreground mt-1 flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {order.time}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="font-medium text-foreground">{order.customer}</span>
                    <span className="text-xs text-muted-foreground mt-1 truncate max-w-[250px]">{order.meal}</span>
                    <Badge variant="outline" className="w-fit mt-1.5 text-[10px] uppercase">{order.type}</Badge>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="font-bold text-foreground">₹{order.amount}</span>
                    <span className="text-xs text-muted-foreground mt-1">{order.payment}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col items-start gap-2">
                    {getStatusBadge(order.status)}
                    <span className="text-xs text-muted-foreground">Exec: {order.exec}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <Button variant="ghost" size="sm" className="group-hover:bg-background">
                    <Eye className="w-4 h-4 mr-2" />
                    Details
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
