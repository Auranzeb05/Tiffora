import React from "react";
import { Link, useNavigate } from "react-router";
import { motion } from "motion/react";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";

export function ResetPassword() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/reset-success");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Set new password</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Your new password must be different from previously used passwords.
        </p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <Input 
          label="New Password" 
          type="password" 
          placeholder="••••••••" 
          required 
        />
        
        <Input 
          label="Confirm Password" 
          type="password" 
          placeholder="••••••••" 
          required 
        />

        <Button type="submit" className="w-full">
          Reset password
        </Button>
      </form>
    </motion.div>
  );
}