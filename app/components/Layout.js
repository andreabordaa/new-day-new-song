"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathname = usePathname();

  const navLink = (href, label) => (
    <Link
      href={href}
      className={`text-sm font-medium px-4 py-1.5 rounded-full transition-colors ${
        pathname === href
          ? "bg-lavender text-white"
          : "text-slate/50 hover:bg-lavender/10 hover:text-slate"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-slate/10 sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-8 h-16 flex items-center justify-between">
          <span className="font-display font-bold text-lg bg-gradient-to-br from-pink via-lavender to-blue bg-clip-text text-transparent">
            New Day, New Song
          </span>
          <nav className="flex gap-1">
            {navLink("/", "Home")}
            {navLink("/previous", "Previous Songs")}
            {navLink("/about", "About Us")}
            {navLink("/feedback", "Feedback")}
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-3xl w-full mx-auto px-8 py-12">
        {children}
      </main>

      <footer className="bg-white border-t border-slate/10 py-5 text-center text-xs text-slate/40">
        <p>©2025 New Day, New Song. All rights reserved</p>
      </footer>
    </div>
  );
}
