import React, { useState } from "react";
import { Printer, Download, Filter, Search, Calculator } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

const RAW_INGREDIENTS = [
  { item: "Paneer", alloc: "119.2 kg", safeStock: "125.0 kg", status: "Optimal" },
  { item: "Atta (Whole Wheat)", alloc: "240.0 kg", safeStock: "250.0 kg", status: "Optimal" },
  { item: "Basmati Rice", alloc: "185.5 kg", safeStock: "200.0 kg", status: "Optimal" },
  { item: "Mixed Vegetables", alloc: "95.0 kg", safeStock: "90.0 kg", status: "Deficit (-5.0 kg)" },
  { item: "Lentils (Dal)", alloc: "68.4 kg", safeStock: "75.0 kg", status: "Optimal" },
  { item: "Cooking Oil", alloc: "42.0 L", safeStock: "50.0 L", status: "Optimal" },
];

export function AdminKitchen() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-foreground tracking-tight">Kitchen Prep Manifest Terminal</h1>
          <p className="text-muted-foreground mt-1">Data-driven recipe scaling and ingredient weight calculation.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-xl bg-card">
            <Printer className="w-4 h-4 mr-2" />
            Print KOT
          </Button>
          <Button className="rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white border-none">
            <Download className="w-4 h-4 mr-2" />
            Export Weights
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: High-density variant breakdown cards & scaling */}
        <div className="space-y-6">
          <Card className="border-border shadow-sm rounded-xl overflow-hidden">
            <div className="bg-indigo-500/10 px-6 py-4 border-b border-border flex items-center gap-3">
              <Calculator className="w-5 h-5 text-indigo-500" />
              <h3 className="font-bold text-foreground">Global Recipe Scaler</h3>
            </div>
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground mb-4">Set target to automatically calculate raw mass allocations across all recipes to prevent over-purchasing.</p>
              <div className="flex gap-2">
                <input type="number" defaultValue={2016} className="flex-1 px-4 py-2 text-sm border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono bg-background text-foreground" />
                <Button className="rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white">Compute</Button>
              </div>
            </CardContent>
          </Card>

          <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mt-8 mb-4">Variant Breakdowns</h3>
          
          <Card className="border-border shadow-sm rounded-xl mb-4 hover:border-indigo-500/50 transition-colors">
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-bold text-foreground">Classic North Indian Thali</h4>
                <span className="bg-emerald-500/10 text-emerald-600 text-[10px] font-bold px-2 py-1 rounded-md uppercase">Veg</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-muted rounded-lg p-3">
                  <p className="text-xs text-muted-foreground mb-1">Target Count</p>
                  <p className="text-lg font-mono font-bold text-foreground">1,450</p>
                </div>
                <div className="bg-muted rounded-lg p-3">
                  <p className="text-xs text-muted-foreground mb-1">Base Multiplier</p>
                  <p className="text-lg font-mono font-bold text-foreground">1.0x</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border shadow-sm rounded-xl hover:border-indigo-500/50 transition-colors">
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-bold text-foreground">Healthy Paneer Tikka Salad</h4>
                <span className="bg-emerald-500/10 text-emerald-600 text-[10px] font-bold px-2 py-1 rounded-md uppercase">Veg</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-muted rounded-lg p-3">
                  <p className="text-xs text-muted-foreground mb-1">Target Count</p>
                  <p className="text-lg font-mono font-bold text-foreground">566</p>
                </div>
                <div className="bg-muted rounded-lg p-3">
                  <p className="text-xs text-muted-foreground mb-1">Base Multiplier</p>
                  <p className="text-lg font-mono font-bold text-foreground">0.8x</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Space: Ingredient Weight Calculation Data Table */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-border shadow-sm rounded-xl overflow-hidden h-full">
            <div className="px-6 py-5 border-b border-border flex justify-between items-center bg-card">
              <h3 className="font-bold text-foreground">Raw Mass Allocations</h3>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input type="text" placeholder="Search ingredient..." className="pl-9 pr-4 py-1.5 text-sm border border-input bg-background text-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <Button variant="outline" size="sm" className="rounded-lg h-9">
                  <Filter className="w-4 h-4 mr-2" /> Filter
                </Button>
              </div>
            </div>
            <CardContent className="p-0">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-muted/50 border-b border-border">
                    <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Ingredient</th>
                    <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Allocated Weight</th>
                    <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Safe Stock</th>
                    <th className="px-6 py-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {RAW_INGREDIENTS.map((req, i) => (
                    <tr key={i} className="hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-foreground">{req.item}</td>
                      <td className="px-6 py-4">
                        <span className="font-mono text-sm font-bold bg-muted px-2 py-1 rounded-md text-foreground">{req.alloc}</span>
                      </td>
                      <td className="px-6 py-4 font-mono text-sm text-muted-foreground">{req.safeStock}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold ${
                          req.status === 'Optimal' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-red-500/10 text-red-600'
                        }`}>
                          {req.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="p-6 bg-muted/20 border-t border-border flex justify-between items-center">
                <p className="text-sm text-muted-foreground">Showing 6 of 42 ingredients</p>
                <div className="flex gap-1">
                  <Button variant="outline" size="sm" disabled className="h-8 rounded-lg">Prev</Button>
                  <Button variant="outline" size="sm" className="h-8 rounded-lg">Next</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}
