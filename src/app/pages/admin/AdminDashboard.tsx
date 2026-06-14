import React from "react";
import { Users, AlertTriangle, ChefHat, Map } from "lucide-react";
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from "recharts";
import { Card, CardContent } from "../../components/ui/card";

const ROUTE_DATA = [
  { name: "Completed", value: 85, fill: "#4F46E5" } // 85% completion
];

export function AdminDashboard() {
  return (
    <div className="space-y-6 md:space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground tracking-tight">Executive Analytics Hub</h1>
        <p className="text-muted-foreground mt-1">High-volume workload management and real-time operations.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Three Card Matrix */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-border shadow-sm overflow-hidden flex flex-col justify-center min-h-[160px] rounded-xl">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <p className="text-sm font-medium text-muted-foreground">Gross Subscriptions</p>
                <div className="p-2 bg-indigo-500/10 rounded-lg">
                  <Users className="w-5 h-5 text-indigo-500" />
                </div>
              </div>
              <p className="text-4xl font-mono font-bold text-foreground tracking-tight">2,140</p>
              <div className="mt-2 text-sm font-medium text-emerald-500">
                +12 Today
              </div>
            </CardContent>
          </Card>

          <Card className="border-border shadow-sm overflow-hidden flex flex-col justify-center min-h-[160px] rounded-xl">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <p className="text-sm font-medium text-muted-foreground">Cancellations Processed</p>
                <div className="p-2 bg-amber-500/10 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                </div>
              </div>
              <p className="text-4xl font-mono font-bold text-foreground tracking-tight">124</p>
              <div className="mt-2 text-sm font-medium text-muted-foreground">
                Routine pauses
              </div>
            </CardContent>
          </Card>

          <Card className="border-border shadow-sm overflow-hidden flex flex-col justify-center min-h-[160px] rounded-xl">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <p className="text-sm font-medium text-muted-foreground">Net Cooking Target</p>
                <div className="p-2 bg-emerald-500/10 rounded-lg">
                  <ChefHat className="w-5 h-5 text-emerald-500" />
                </div>
              </div>
              <p className="text-4xl font-mono font-bold text-foreground tracking-tight">2,016</p>
              <div className="mt-2 text-sm font-medium text-emerald-500">
                Ready for manifest
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Live Route Completion Radial Widget */}
        <Card className="border-border shadow-sm overflow-hidden relative min-h-[240px] rounded-xl flex flex-col">
          <CardContent className="p-6 flex-1 flex flex-col items-center justify-center relative">
            <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
              <span className="text-sm font-medium text-muted-foreground">Route Completion</span>
              <Map className="w-4 h-4 text-indigo-500" />
            </div>
            
            <div className="w-full h-[180px] mt-6 relative min-h-[180px] min-w-[200px]">
              <ResponsiveContainer width="100%" height={180}>
                <RadialBarChart 
                  cx="50%" 
                  cy="50%" 
                  innerRadius="70%" 
                  outerRadius="100%" 
                  barSize={12} 
                  data={ROUTE_DATA} 
                  startAngle={90} 
                  endAngle={-270}
                >
                  <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                  <RadialBar
                    background={{ fill: 'hsl(var(--muted))', opacity: 0.5 }}
                    dataKey="value"
                    cornerRadius={10}
                  />
                </RadialBarChart>
              </ResponsiveContainer>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pt-8">
              <span className="text-3xl font-mono font-bold text-foreground">85%</span>
              <span className="text-xs text-muted-foreground font-medium mt-1">18/21 Fleets</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}