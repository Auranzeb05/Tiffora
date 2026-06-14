import React from "react";
import { Link, useNavigate } from "react-router";
import { motion } from "motion/react";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";

export function Register() {
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate navigation to OTP
    navigate("/verify-otp");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Create your workspace</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
            Sign in
          </Link>
        </p>
      </div>

      <form className="space-y-5" onSubmit={handleRegister}>
        <Input 
          label="Company Name" 
          type="text" 
          placeholder="Acme Meals" 
          required 
        />
        <div className="grid grid-cols-2 gap-4">
          <Input 
            label="First Name" 
            type="text" 
            placeholder="Jane" 
            required 
          />
          <Input 
            label="Last Name" 
            type="text" 
            placeholder="Doe" 
            required 
          />
        </div>
        <Input 
          label="Work Email" 
          type="email" 
          placeholder="jane@company.com" 
          required 
        />
        <Input 
          label="Password" 
          type="password" 
          placeholder="••••••••" 
          required 
        />

        <div className="flex items-start mt-4 mb-6">
          <div className="flex h-5 items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="h-4 w-4 rounded border-zinc-300 text-indigo-600 focus:ring-indigo-600"
              required
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="terms" className="text-zinc-600">
              I agree to the{" "}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Terms of Service</a>
              {" "}and{" "}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Privacy Policy</a>.
            </label>
          </div>
        </div>

        <Button type="submit" className="w-full">
          Create Account
        </Button>
      </form>
    </motion.div>
  );
}
