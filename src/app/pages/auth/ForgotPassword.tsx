import React from "react";
import { Link, useNavigate } from "react-router";
import { motion } from "motion/react";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { ArrowLeft } from "lucide-react";

export function ForgotPassword() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/reset-password");
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 10 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Reset your password</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Enter your work email and we'll send you a link to reset your password.
        </p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <Input 
          label="Work Email" 
          type="email" 
          placeholder="you@company.com" 
          required 
        />

        <Button type="submit" className="w-full">
          Send reset link
        </Button>

        <div className="text-center mt-4 text-sm">
          <Link to="/login" className="inline-flex items-center font-medium text-indigo-600 hover:text-indigo-500">
            <ArrowLeft className="w-4 h-4 mr-1.5" />
            Back to log in
          </Link>
        </div>
      </form>
    </motion.div>
  );
}
