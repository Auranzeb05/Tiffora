import React from "react";
import { Link, useNavigate } from "react-router";
import { motion } from "motion/react";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";

export function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/customer");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Sign in to your account</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Don't have an account?{" "}
          <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
            Start your 14-day free trial
          </Link>
        </p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <Input 
          label="Work Email" 
          type="email" 
          placeholder="you@company.com" 
          autoComplete="email" 
          required 
        />
        
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label className="text-sm font-medium leading-none text-zinc-700">Password</label>
            <Link to="/forgot-password" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
              Forgot password?
            </Link>
          </div>
          <Input 
            type="password" 
            placeholder="••••••••" 
            autoComplete="current-password" 
            required 
          />
        </div>

        <div className="space-y-4">
          <Button type="submit" className="w-full">
            Sign in
          </Button>
          <div className="text-center">
            <button
              type="button"
              onClick={() => navigate("/admin-login")}
              className="text-[14px] font-medium text-slate-500 hover:text-slate-700 transition-colors"
            >
              Sign In as Administrator
            </button>
          </div>
        </div>
      </form>
    </motion.div>
  );
}
