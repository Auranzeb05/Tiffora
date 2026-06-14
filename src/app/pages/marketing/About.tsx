import React from "react";
import { ImageWithFallback } from "../../components/ui/ImageWithFallback";

export function About() {
  return (
    <div className="flex flex-col flex-1 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 text-center">
          Building the OS for meal delivery.
        </h1>
        <p className="text-xl text-zinc-600 mb-16 text-center max-w-2xl mx-auto">
          We started Tiffora because we saw first-hand how hard it was to scale a tiffin service past 100 subscribers using just WhatsApp and Excel.
        </p>

        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhc2hib2FyZCUyMGRhdGF8ZW58MXx8fHwxNzgxMTU3MzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Abstract dashboard data"
          className="w-full h-80 object-cover rounded-2xl mb-16 shadow-lg border border-zinc-200"
        />

        <div className="prose prose-lg prose-indigo mx-auto text-zinc-600">
          <h2 className="text-2xl font-bold text-zinc-900 mb-4 mt-8">Our Mission</h2>
          <p className="mb-6">
            Our mission is to empower independent kitchens, cloud kitchens, and tiffin providers with enterprise-grade logistics software. We believe that great food shouldn't be bottlenecked by bad operations.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 mb-4 mt-8">The Problem</h2>
          <p className="mb-6">
            Taking an order is easy. But ensuring exactly 423 meals are prepped (with 14 keto, 22 vegan, and 5 nut-free variations), divided across 8 drivers, and delivered hot before 1:00 PM every single day? That's a logistical nightmare. That's why we built Tiffora.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 mb-4 mt-8">Join Us</h2>
          <p>
            Today, Tiffora powers over 50,000 daily deliveries across the country. If you're passionate about food logistics and software, check out our open roles.
          </p>
        </div>
      </div>
    </div>
  );
}
