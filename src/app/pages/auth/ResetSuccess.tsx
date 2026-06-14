import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "../../components/ui/Button";

export function ResetSuccess() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="text-center"
    >
      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100 mb-4">
        <CheckCircle2 className="h-6 w-6 text-emerald-600" />
      </div>
      <h2 className="text-2xl font-bold tracking-tight text-zinc-900 mb-2">Password reset</h2>
      <p className="text-sm text-zinc-600 mb-6">
        Your password has been successfully reset. Click below to log in magically.
      </p>
      <Link to="/login">
        <Button className="w-full">Continue to log in</Button>
      </Link>
    </motion.div>
  );
}