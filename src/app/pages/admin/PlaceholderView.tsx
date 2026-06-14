import React from "react";
import { HardHat } from "lucide-react";

export function PlaceholderView({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center">
      <div className="w-16 h-16 bg-zinc-100 rounded-2xl flex items-center justify-center mb-6">
        <HardHat className="w-8 h-8 text-zinc-400" />
      </div>
      <h2 className="text-2xl font-bold text-zinc-900 mb-2">{title}</h2>
      <p className="text-zinc-500 max-w-md">
        This module is currently under construction. It will be built in the next iteration using the Tiffora Design System.
      </p>
    </div>
  );
}