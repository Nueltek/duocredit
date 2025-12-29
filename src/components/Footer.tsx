"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  company: [
    { label: "About us", href: "#about" },
    { label: "How it works", href: "#how-to-get" },
    { label: "FAQ", href: "#faq" },
    { label: "Careers", href: "#" },
  ],
  legal: [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Licenses", href: "#" },
  ],
  support: [
    { label: "Help Center", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Report an Issue", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[var(--color-dark)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="text-xl font-bold">
                Duo<span className="text-[var(--color-primary)]">credit.</span>
              </span>
            </Link>

            <p className="text-sm text-white/60 mb-6 max-w-sm">
              Fast and simple online loans. Get your first loan free with
              instant approval and money in your account within minutes.
            </p>

            <div className="space-y-3">
              <a
                href="tel:+18005551234"
                className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />1 (800) 555-1234
              </a>
              <a
                href="mailto:support@duocredit.com"
                className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                support@duocredit.com
              </a>
              <div className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  123 Finance Street, Suite 100
                  <br />
                  New York, NY 10001
                </span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4 capitalize">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} DuoCredit. All rights reserved.
            </p>
            <p className="text-xs text-white/40 max-w-2xl text-center md:text-right">
              DuoCredit LLC is a licensed microfinance organization.
              Registration No. 12345678. Loans are subject to approval. Terms
              and conditions apply. APR range 0-29%.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
