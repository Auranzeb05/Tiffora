import React from "react";
import { Check } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Link } from "react-router";

export function Pricing() {
  return (
    <div className="flex flex-col flex-1 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
          Simple, transparent pricing.
        </h1>
        <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto mb-16">
          Start for free, then scale as your subscriber base grows. No hidden fees or surprise charges.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
          {/* Starter */}
          <div className="flex flex-col p-8 bg-white border border-zinc-200 rounded-2xl shadow-sm relative">
            <h3 className="text-xl font-semibold text-zinc-900 mb-2">Starter</h3>
            <p className="text-zinc-500 text-sm mb-6 h-10">Perfect for new tiffin providers just getting started.</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-zinc-900">$0</span>
              <span className="text-zinc-500">/mo</span>
            </div>
            <ul className="space-y-4 flex-1 mb-8">
              {['Up to 100 active subscribers', 'Basic kitchen production sheets', 'Email support', 'Manual driver routing'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-zinc-600">
                  <Check className="w-5 h-5 text-indigo-600 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link to="/register">
              <Button className="w-full" variant="outline">Start for free</Button>
            </Link>
          </div>

          {/* Professional */}
          <div className="flex flex-col p-8 bg-zinc-900 border border-zinc-900 rounded-2xl shadow-xl relative scale-105 z-10 text-white">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
              Most Popular
            </div>
            <h3 className="text-xl font-semibold mb-2">Professional</h3>
            <p className="text-zinc-400 text-sm mb-6 h-10">For growing businesses needing automation and scale.</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">$149</span>
              <span className="text-zinc-400">/mo</span>
            </div>
            <ul className="space-y-4 flex-1 mb-8">
              {['Up to 2,000 active subscribers', 'Automated route optimization', 'Wallet auto-billing system', 'Customer vacation mode', 'Priority chat support'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                  <Check className="w-5 h-5 text-indigo-400 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link to="/register">
              <Button className="w-full bg-indigo-500 hover:bg-indigo-600 border-none text-white">Start 14-day trial</Button>
            </Link>
          </div>

          {/* Enterprise */}
          <div className="flex flex-col p-8 bg-white border border-zinc-200 rounded-2xl shadow-sm relative">
            <h3 className="text-xl font-semibold text-zinc-900 mb-2">Enterprise</h3>
            <p className="text-zinc-500 text-sm mb-6 h-10">Custom setups for massive scale and multiple hubs.</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-zinc-900">Custom</span>
            </div>
            <ul className="space-y-4 flex-1 mb-8">
              {['Unlimited subscribers', 'Multi-kitchen / Hub support', 'Custom API access', 'Dedicated account manager', 'White-labeled customer app'].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-zinc-600">
                  <Check className="w-5 h-5 text-indigo-600 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact">
              <Button className="w-full" variant="outline">Contact Sales</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
