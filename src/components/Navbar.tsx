"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown, User } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "How to get", href: "#how-to-get" },
  { label: "How to repay", href: "#repay", hasDropdown: true },
  { label: "About us", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-bg)]/95 backdrop-blur-sm border-b border-[var(--color-border-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-[var(--color-dark)]">
              Duo<span className="text-[var(--color-primary)]">credit.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-1 text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
              >
                {link.label}
                {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+18005551234"
              className="flex items-center gap-2 text-sm font-medium text-[var(--color-text)]"
            >
              <Phone className="w-4 h-4" />
              <span>1 (800) 555-1234</span>
            </a>
            <div className="w-px h-6 bg-[var(--color-border)]" />
            <button className="btn-secondary py-2 px-4">Repay</button>
            <button className="btn-primary py-2.5 px-5 flex items-center gap-2">
              <User className="w-4 h-4" />
              Personal account
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[var(--color-text)]"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-[var(--color-border-light)] bg-[var(--color-white)]"
          >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-base font-medium text-[var(--color-text)]"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-[var(--color-border-light)] space-y-3">
                <a
                  href="tel:+18005551234"
                  className="flex items-center gap-2 text-sm font-medium text-[var(--color-text)]"
                >
                  <Phone className="w-4 h-4" />1 (800) 555-1234
                </a>
                <button className="btn-primary w-full">Personal account</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
