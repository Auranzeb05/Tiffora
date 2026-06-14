import React from "react";
import { Outlet, Link, useLocation } from "react-router";
import { Logo } from "../ui/Logo";
import { Button } from "../ui/Button";

export function MarketingLayout() {
  const location = useLocation();

  const navLinks = [
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-zinc-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-10">
              <Link to="/">
                <Logo />
              </Link>
              <nav className="hidden md:flex gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                      location.pathname === link.path ? "text-indigo-600" : "text-zinc-600"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/login" className="hidden sm:block">
                <Button variant="ghost">Log in</Button>
              </Link>
              <Link to="/register">
                <Button variant="primary">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white py-12 text-sm text-zinc-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-2 space-y-4">
            <Logo />
            <p className="max-w-xs text-zinc-500 mt-4 leading-relaxed">
              The complete operations platform for enterprise meal subscription & delivery businesses.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-zinc-900 mb-4">Product</h4>
            <ul className="space-y-3">
              <li><Link to="/features" className="hover:text-indigo-600 transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-indigo-600 transition-colors">Pricing</Link></li>
              <li><Link to="#" className="hover:text-indigo-600 transition-colors">Integrations</Link></li>
              <li><Link to="#" className="hover:text-indigo-600 transition-colors">Changelog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-zinc-900 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-indigo-600 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-600 transition-colors">Contact</Link></li>
              <li><Link to="#" className="hover:text-indigo-600 transition-colors">Careers</Link></li>
              <li><Link to="#" className="hover:text-indigo-600 transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-zinc-900 mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><Link to="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-indigo-600 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Tiffora. All rights reserved.</p>
          <div className="flex gap-4">
            {/* Social icons placeholder */}
            <div className="w-5 h-5 bg-zinc-300 rounded-sm" />
            <div className="w-5 h-5 bg-zinc-300 rounded-sm" />
            <div className="w-5 h-5 bg-zinc-300 rounded-sm" />
          </div>
        </div>
      </footer>
    </div>
  );
}
