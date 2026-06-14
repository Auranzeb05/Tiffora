import React from "react";
import { Layers } from "lucide-react";
import { cn } from "../../utils/cn";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600 text-white shadow-sm">
        <Layers className="w-5 h-5" />
      </div>
      <span className="font-bold text-xl tracking-tight text-zinc-900">Tiffora</span>
    </div>
  );
};
