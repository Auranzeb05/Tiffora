import React, { useState } from "react";
import { AlertCircle, Clock, PackageX, CheckCircle, Image as ImageIcon, Send, RefreshCcw, Wallet } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

const TICKETS = [
  { 
    id: "SOS-8924", 
    customer: "Akash Patel", 
    type: "Spilled Food", 
    status: "Red", 
    time: "2 mins ago", 
    desc: "The dal is completely spilled across the thali compartments.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop"
  },
  { 
    id: "SOS-8923", 
    customer: "Priya Sharma", 
    type: "Missing Item", 
    status: "Amber", 
    time: "14 mins ago", 
    desc: "Did not receive the sweet dish included in the premium thali.",
    image: null
  },
  { 
    id: "SOS-8920", 
    customer: "Rahul V.", 
    type: "Quality Issue", 
    status: "Amber", 
    time: "28 mins ago", 
    desc: "The rotis are extremely hard today.",
    image: null
  },
  { 
    id: "SOS-8915", 
    customer: "Anita K.", 
    type: "Delivery Delay", 
    status: "Resolved", 
    time: "1 hr ago", 
    desc: "Delivery was 45 mins late.",
    image: null
  },
];

export function AdminSupport() {
  const [activeTicket, setActiveTicket] = useState(TICKETS[0]);

  return (
    <div className="space-y-6 md:space-y-8 h-[calc(100vh-8rem)] flex flex-col">
      <div className="flex-shrink-0">
        <h1 className="text-3xl font-bold text-foreground tracking-tight">Live SOS Support Desk</h1>
        <p className="text-muted-foreground mt-1">Emergency dispute command panel.</p>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-0 overflow-hidden">
        
        {/* Left Pane: Chronological Ticket Stack */}
        <div className="lg:col-span-4 flex flex-col min-h-0 bg-card border border-border shadow-sm rounded-xl overflow-hidden">
          <div className="p-4 border-b border-border bg-muted/30 flex justify-between items-center">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-500" /> Active Tickets
            </h3>
            <span className="text-xs font-bold bg-red-500 text-white px-2 py-0.5 rounded-full">3</span>
          </div>
          
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {TICKETS.map(ticket => (
              <div 
                key={ticket.id}
                onClick={() => setActiveTicket(ticket)}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${activeTicket.id === ticket.id ? 'border-indigo-500 bg-indigo-500/5 shadow-sm' : 'border-border bg-card hover:border-indigo-500/30'}`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    {ticket.status === 'Red' && <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />}
                    {ticket.status === 'Amber' && <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />}
                    {ticket.status === 'Resolved' && <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />}
                    <span className="font-mono text-xs font-bold text-foreground">{ticket.id}</span>
                  </div>
                  <span className="text-[10px] font-medium flex items-center gap-1 text-muted-foreground">
                    <Clock className="w-3 h-3" /> {ticket.time}
                  </span>
                </div>
                <h4 className="font-semibold text-sm text-foreground mb-1">{ticket.type}</h4>
                <p className="text-xs text-muted-foreground mb-2 line-clamp-1">{ticket.customer}</p>
                {ticket.image && (
                  <div className="mt-2 text-[10px] font-medium text-indigo-500 flex items-center gap-1">
                    <ImageIcon className="w-3 h-3" /> Photographic proof attached
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Pane: Inspection Viewport & Actions */}
        <div className="lg:col-span-8 flex flex-col min-h-0 bg-card border border-border shadow-sm rounded-xl overflow-hidden">
          <div className="p-4 border-b border-border bg-muted/30 flex justify-between items-center">
            <h3 className="font-semibold text-foreground">Ticket Inspection: {activeTicket.id}</h3>
            <span className="text-sm text-muted-foreground font-medium">{activeTicket.customer}</span>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Issue Description</h4>
              <p className="text-lg text-foreground bg-muted/30 p-4 rounded-xl border border-border/50">{activeTicket.desc}</p>
            </div>

            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Photographic Proof</h4>
            {activeTicket.image ? (
              <div className="rounded-xl overflow-hidden border border-border bg-muted max-w-lg aspect-video relative group">
                <img src={activeTicket.image} alt="Customer Proof" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button variant="outline" className="text-white border-white hover:bg-white/20">View Full Resolution</Button>
                </div>
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-border bg-muted/20 h-40 flex flex-col items-center justify-center text-muted-foreground max-w-lg">
                <PackageX className="w-8 h-8 mb-2 opacity-50" />
                <p className="text-sm font-medium">No photographic proof provided.</p>
              </div>
            )}
          </div>

          {/* Programmatic Actions Toolbar */}
          <div className="p-5 border-t border-border bg-muted/10">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Resolution Actions</p>
            <div className="flex flex-wrap gap-3">
              <Button className="rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm flex-1 sm:flex-none">
                <RefreshCcw className="w-4 h-4 mr-2" />
                Dispatch Replacement Meal
              </Button>
              <Button className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm flex-1 sm:flex-none">
                <Wallet className="w-4 h-4 mr-2" />
                Issue Instant Wallet Refund
              </Button>
              <div className="flex-1 min-w-[200px] flex justify-end">
                <Button variant="outline" className="rounded-xl w-full sm:w-auto">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Mark as Resolved
                </Button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
