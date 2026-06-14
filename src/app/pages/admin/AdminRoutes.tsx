import React from "react";
import { Map, Truck, Navigation, Route as RouteIcon, Search, ZoomIn, MoreVertical, MapPin } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

const ZONES = [
  { name: "Zone A - Koramangala", deliveries: 145, drivers: 4, status: "Active" },
  { name: "Zone B - Indiranagar", deliveries: 210, drivers: 6, status: "Active" },
  { name: "Zone C - HSR Layout", deliveries: 98, drivers: 3, status: "Active" },
  { name: "Zone D - Whitefield", deliveries: 320, drivers: 8, status: "Optimizing" },
];

export function AdminRoutes() {
  return (
    <div className="space-y-6 h-full flex flex-col">
      <div className="flex justify-between items-end flex-shrink-0">
        <div>
          <h1 className="text-3xl font-bold text-foreground tracking-tight">Route Manager</h1>
          <p className="text-muted-foreground mt-1">Live tracking and dynamic route optimization.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-xl">
            <RouteIcon className="w-4 h-4 mr-2" />
            Optimize All
          </Button>
          <Button className="rounded-xl">
            <Truck className="w-4 h-4 mr-2" />
            Assign Fleet
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-0 pb-6">
        
        {/* Left Column: Zones List */}
        <div className="space-y-4 flex flex-col h-full">
          <div className="relative flex-shrink-0">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input type="text" placeholder="Search zones or pincodes..." className="w-full pl-9 pr-4 py-2 text-sm border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary shadow-sm bg-background text-foreground" />
          </div>

          <div className="flex-1 overflow-y-auto space-y-3 pr-2 scrollbar-hide">
            {ZONES.map((zone, i) => (
              <Card key={i} className={`border-border shadow-sm cursor-pointer transition-colors ${i===0 ? 'border-primary ring-1 ring-primary' : 'hover:border-primary/50'}`}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-foreground text-sm">{zone.name}</h3>
                    <button className="text-muted-foreground hover:text-foreground">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <PackageIcon className="w-4 h-4" />
                      <span>{zone.deliveries} stops</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <BikeIcon className="w-4 h-4" />
                      <span>{zone.drivers} drivers</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Right Column: Map Placeholder */}
        <div className="lg:col-span-2 h-full">
          <Card className="h-full border-border shadow-sm overflow-hidden flex flex-col relative bg-muted/30">
            {/* Mock Map Background */}
            <div className="absolute inset-0 opacity-50 z-0 dark:opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h20v20H0V0zm10 10h10v10H10V10zM0 10h10v10H0V10zM10 0h10v10H10V0z\' fill=\'%23a1a1aa\' fill-opacity=\'0.4\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }} />
            
            <div className="relative z-10 p-4 flex justify-between items-start pointer-events-none">
              <div className="bg-background/90 backdrop-blur-md px-4 py-2 rounded-xl border border-border shadow-sm pointer-events-auto">
                <p className="text-sm font-bold text-foreground">Zone A - Koramangala</p>
                <p className="text-xs text-muted-foreground">Live Tracking • 4 Drivers Active</p>
              </div>
              <div className="flex flex-col gap-2 pointer-events-auto">
                <button className="w-10 h-10 bg-background rounded-xl border border-border shadow-sm flex items-center justify-center hover:bg-muted">
                  <ZoomIn className="w-5 h-5 text-foreground" />
                </button>
                <button className="w-10 h-10 bg-background rounded-xl border border-border shadow-sm flex items-center justify-center hover:bg-muted">
                  <Navigation className="w-5 h-5 text-foreground" />
                </button>
              </div>
            </div>

            {/* Mock Map Pins */}
            <div className="absolute top-1/3 left-1/4 z-10 text-primary animate-bounce">
              <MapPin className="w-8 h-8 fill-primary/20" />
            </div>
            <div className="absolute top-1/2 left-1/2 z-10 text-emerald-600">
              <Truck className="w-6 h-6 fill-emerald-100 bg-background p-1 rounded-full border-2 border-emerald-500 shadow-md" />
            </div>

          </Card>
        </div>

      </div>
    </div>
  );
}

// Helper icons since they weren't imported at top
function PackageIcon(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>;
}
function BikeIcon(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="5.5" cy="17.5" r="3.5"></circle><circle cx="18.5" cy="17.5" r="3.5"></circle><path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h2"></path></svg>;
}