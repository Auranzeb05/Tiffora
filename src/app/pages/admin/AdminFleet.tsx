import React, { useState } from "react";
import { Search, Map as MapIcon, Truck, Users, Activity, Crosshair, Star, AlertTriangle, ChevronRight, Phone } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";

const MOCK_EXECUTIVES = [
  { id: "EX-001", name: "Ravi Kumar", phone: "+91 9876543210", zone: "Koramangala", status: "Active", battery: "84%", activeDeliveries: 4, completed: 12, rating: 4.8 },
  { id: "EX-002", name: "Suresh M.", phone: "+91 8765432109", zone: "Indiranagar", status: "Active", battery: "62%", activeDeliveries: 2, completed: 8, rating: 4.6 },
  { id: "EX-003", name: "Prakash Raj", phone: "+91 9123456780", zone: "HSR Layout", status: "Inactive", battery: "100%", activeDeliveries: 0, completed: 0, rating: 4.9 },
  { id: "EX-004", name: "John D.", phone: "+91 9988776655", zone: "Whitefield", status: "Delayed", battery: "15%", activeDeliveries: 3, completed: 5, rating: 4.2 },
];

export function AdminFleet() {
  return (
    <div className="space-y-6 h-full flex flex-col">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 flex-shrink-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Delivery Fleet</h1>
          <p className="text-muted-foreground mt-1">Manage delivery personnel, zones, and live performance.</p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <Button variant="outline" className="w-full sm:w-auto">
            <MapIcon className="w-4 h-4 mr-2" />
            Live Map View
          </Button>
          <Button className="w-full sm:w-auto">
            <Truck className="w-4 h-4 mr-2" />
            Onboard Executive
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 flex-shrink-0">
        <Card className="bg-card border-border shadow-sm">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-3 bg-primary/10 text-primary rounded-xl">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Total Fleet</p>
              <p className="text-2xl font-bold mt-1">42</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border shadow-sm">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-3 bg-emerald-500/10 text-emerald-600 rounded-xl">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Active Now</p>
              <p className="text-2xl font-bold mt-1">28</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border shadow-sm">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-3 bg-amber-500/10 text-amber-600 rounded-xl">
              <Crosshair className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">On-Time Rate</p>
              <p className="text-2xl font-bold mt-1">94.2%</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card border-border shadow-sm">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-3 bg-red-500/10 text-red-600 rounded-xl">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Delayed/SOS</p>
              <p className="text-2xl font-bold mt-1">2</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="flex-shrink-0">
        <CardContent className="p-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search executive name, ID or zone..." 
              className="w-full pl-9 pr-4 py-2 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring" 
            />
          </div>
          <div className="flex gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 scrollbar-hide">
            <Button variant="outline" size="sm" className="whitespace-nowrap">Filter Zone</Button>
            <Button variant="outline" size="sm" className="whitespace-nowrap">Filter Status</Button>
          </div>
        </CardContent>
      </Card>

      <div className="flex-1 overflow-auto rounded-xl border border-border bg-card">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-muted-foreground uppercase bg-muted/50 sticky top-0 z-10 backdrop-blur-sm">
            <tr>
              <th className="px-6 py-4 font-medium">Executive Details</th>
              <th className="px-6 py-4 font-medium">Zone</th>
              <th className="px-6 py-4 font-medium">Status & Battery</th>
              <th className="px-6 py-4 font-medium">Current Load</th>
              <th className="px-6 py-4 font-medium">Rating</th>
              <th className="px-6 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {MOCK_EXECUTIVES.map((exec) => (
              <tr key={exec.id} className="hover:bg-muted/50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="font-bold text-foreground">{exec.name}</span>
                    <span className="text-xs text-muted-foreground">{exec.id}</span>
                    <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                      <Phone className="w-3 h-3" />
                      {exec.phone}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="font-medium text-foreground">{exec.zone}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col items-start gap-2">
                    <Badge variant={
                      exec.status === 'Active' ? 'default' : 
                      exec.status === 'Inactive' ? 'secondary' : 'destructive'
                    } className={
                      exec.status === 'Active' ? 'bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 border-emerald-200 dark:border-emerald-800/30' : ''
                    }>
                      {exec.status}
                    </Badge>
                    <span className={`text-xs ${parseInt(exec.battery) < 20 ? 'text-red-500 font-bold' : 'text-muted-foreground'}`}>
                      🔋 {exec.battery}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="font-medium text-foreground">{exec.activeDeliveries} Active</span>
                    <span className="text-xs text-muted-foreground mt-1">{exec.completed} Completed Today</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-foreground">{exec.rating}</span>
                  </div>
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
