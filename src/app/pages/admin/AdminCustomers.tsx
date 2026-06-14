import React, { useState } from "react";
import { Search, MoreVertical, Filter, Download, ChevronRight } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";

const MOCK_CUSTOMERS = [
  { id: "C1001", name: "Rahul Sharma", phone: "+91 9876543210", address: "A-402, Prestige Shantiniketan", pincode: "560048", plan: "Lunch + Dinner", wallet: 1450, status: "Active", lastDelivery: "Today, 1:15 PM" },
  { id: "C1002", name: "Priya Patel", phone: "+91 8765432109", address: "12, 4th Cross, Indiranagar", pincode: "560038", plan: "Lunch Only", wallet: 450, status: "Paused", lastDelivery: "Mon, 1:30 PM" },
  { id: "C1003", name: "Amit Kumar", phone: "+91 9123456780", address: "Villa 3, Rohan Jharoka", pincode: "560037", plan: "Dinner Only", wallet: 0, status: "Inactive", lastDelivery: "Oct 12, 8:45 PM" },
  { id: "C1004", name: "Sneha Reddy", phone: "+91 9988776655", address: "B-205, Sobha City", pincode: "560066", plan: "Lunch + Dinner", wallet: 3200, status: "Active", lastDelivery: "Today, 1:05 PM" },
  { id: "C1005", name: "Vikram Singh", phone: "+91 9876512345", address: "Flat 101, Brigade Metropolis", pincode: "560048", plan: "Lunch Only", wallet: 120, status: "Active", lastDelivery: "Today, 1:40 PM" },
];

export function AdminCustomers() {
  return (
    <div className="space-y-6 h-full flex flex-col">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 flex-shrink-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Customer Management</h1>
          <p className="text-muted-foreground mt-1">Manage subscriptions, wallets, and profiles.</p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <Button variant="outline" className="w-full sm:w-auto">
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </Button>
          <Button className="w-full sm:w-auto">
            Add Customer
          </Button>
        </div>
      </div>

      <Card className="flex-shrink-0">
        <CardContent className="p-4 flex flex-col sm:flex-row gap-4 items-center">
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search by name, ID, phone or address..." 
              className="w-full pl-9 pr-4 py-2 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring" 
            />
          </div>
          <div className="flex gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 scrollbar-hide">
            <Button variant="outline" size="sm" className="whitespace-nowrap">
              <Filter className="w-4 h-4 mr-2" />
              Filter by Status
            </Button>
            <Button variant="outline" size="sm" className="whitespace-nowrap">
              Filter by Area
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="flex-1 overflow-auto rounded-xl border border-border bg-card">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-muted-foreground uppercase bg-muted/50 sticky top-0 z-10 backdrop-blur-sm">
            <tr>
              <th className="px-6 py-4 font-medium">Customer Details</th>
              <th className="px-6 py-4 font-medium">Subscription</th>
              <th className="px-6 py-4 font-medium">Wallet (₹)</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Last Delivery</th>
              <th className="px-6 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {MOCK_CUSTOMERS.map((cust) => (
              <tr key={cust.id} className="hover:bg-muted/50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="font-bold text-foreground">{cust.name}</span>
                    <span className="text-xs text-muted-foreground">{cust.id} • {cust.phone}</span>
                    <span className="text-xs text-muted-foreground mt-1 truncate max-w-[200px]">{cust.address}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="font-medium text-foreground">{cust.plan}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`font-bold ${cust.wallet < 500 ? 'text-red-500 dark:text-red-400' : 'text-foreground'}`}>
                    ₹{cust.wallet}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <Badge variant={
                    cust.status === 'Active' ? 'default' : 
                    cust.status === 'Paused' ? 'outline' : 'secondary'
                  } className={
                    cust.status === 'Paused' ? 'border-amber-500 text-amber-600 dark:text-amber-400' : ''
                  }>
                    {cust.status}
                  </Badge>
                </td>
                <td className="px-6 py-4 text-muted-foreground">
                  {cust.lastDelivery}
                </td>
                <td className="px-6 py-4 text-right">
                  <Button variant="ghost" size="icon" className="group-hover:bg-background">
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
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
