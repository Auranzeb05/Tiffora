import React from "react";
import { CheckCircle2, LayoutDashboard, Truck, Wallet, FileSpreadsheet, Headset, ChefHat, BellRing } from "lucide-react";
import { ImageWithFallback } from "../../components/ui/ImageWithFallback";

export function Features() {
  const features = [
    {
      icon: <ChefHat className="w-6 h-6 text-orange-600" />,
      title: "Kitchen Production Planning",
      description: "Auto-generate exact meal counts daily based on active subscriptions, pauses, and custom requests. No more guesswork or wastage.",
    },
    {
      icon: <Truck className="w-6 h-6 text-blue-600" />,
      title: "Smart Delivery Routing",
      description: "Automatically cluster active deliveries, assign drivers, and optimize routes for maximum fuel and time efficiency.",
    },
    {
      icon: <Wallet className="w-6 h-6 text-green-600" />,
      title: "Wallet & Billing Auto-pilot",
      description: "Customers maintain a prepaid wallet balance. Tiffora automatically deducts per meal delivered and alerts when balances are low.",
    },
    {
      icon: <FileSpreadsheet className="w-6 h-6 text-purple-600" />,
      title: "Subscription Management",
      description: "Easily handle complex customer requirements—weekend skips, vacation pauses, allergy notes, and dynamic pricing tiers.",
    },
    {
      icon: <LayoutDashboard className="w-6 h-6 text-indigo-600" />,
      title: "Unified Provider Dashboard",
      description: "See your entire business at a glance. Revenue trends, active customer count, upcoming pauses, and kitchen loads.",
    },
    {
      icon: <Headset className="w-6 h-6 text-rose-600" />,
      title: "Customer Support Tickets",
      description: "Centralized inbox for missing meals, feedback, and special requests. Never lose track of a customer complaint again.",
    },
  ];

  return (
    <div className="flex flex-col flex-1 bg-white">
      {/* Header */}
      <div className="bg-zinc-50 py-20 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
            Features built for scale.
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto">
            Everything a tiffin service provider needs to manage subscriptions, cook exact quantities, and deliver on time.
          </p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-zinc-100 flex items-center justify-center mb-6 border border-zinc-200">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-3">{f.title}</h3>
              <p className="text-zinc-600 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Deep Dive Section */}
      <div className="bg-zinc-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-indigo-400 bg-indigo-400/10 border border-indigo-400/20 mb-6">
                Kitchen Operations
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Stop over-prepping. Start maximizing margins.
              </h2>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                Our kitchen module takes all active subscriptions, cross-references vacation mode dates, accounts for custom dietary notes, and gives your chefs a precise production sheet every single morning.
              </p>
              <ul className="space-y-4">
                {['Live kitchen display system', 'Dietary tag grouping (e.g. 50 Vegan, 20 Keto)', 'Automated ingredient forecasting'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-indigo-400 shrink-0" />
                    <span className="text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1543352632-5a4b24e4d2a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWFsJTIwcHJlcCUyMGNvbnRhaW5lcnMlMjBoZWFsdGh5fGVufDF8fHx8MTc4MTE1NzM0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Meal prep containers arranged neatly"
                className="rounded-2xl shadow-2xl border border-zinc-800 object-cover w-full h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
