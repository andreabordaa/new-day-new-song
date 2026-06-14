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
          ? "bg-lavendar shadow-sm text-white"
          : "text-slate/50 hover:bg-lavender/10 hover:text-slate"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-slate/10 shadow-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-8 h-16 flex items-center justify-between">
          <span className="font-display font-bold text-xl bg-linear-to-r from-pink via-lavendar to-blue bg-clip-text text-transparent">
            New Day, New Song
          </span>
          <nav className="flex gap-1 text-shadow-2xs">
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

      <footer className="bg-cream border-t border-slate/10 py-4 text-center text-xs text-slate/40">
        <p>©2025 New Day, New Song. All rights reserved</p>
      </footer>
    </div>
  );
}
