"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Building2, MapPin, Terminal } from "lucide-react";

const repaymentMethods = [
  {
    icon: User,
    title: "In your personal account",
    description:
      "Go to your personal account and pay off the loan using a bank card or use the quick payment",
    color: "bg-orange-50",
    iconColor: "text-[var(--color-primary)]",
  },
  {
    icon: Building2,
    title: "Bank cash desks",
    description:
      "You can repay the loan at any bank in the US or through postal services",
    color: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    icon: MapPin,
    title: "Partner locations",
    description: "Cash at partner locations through the payment system",
    color: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    icon: Terminal,
    title: "Payment terminals",
    description:
      "You can find the nearest terminal in the place closest to you on the map",
    color: "bg-emerald-50",
    iconColor: "text-[var(--color-secondary)]",
  },
];

export default function Repayment() {
  const [activeTab, setActiveTab] = useState<"repay" | "renew">("repay");

  return (
    <section id="repay" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-[var(--color-dark)] mb-6"
          >
            Paying off a loan is easy
          </motion.h2>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex rounded-full bg-[var(--color-bg-alt)] p-1 mb-10"
          >
            <button
              onClick={() => setActiveTab("repay")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "repay"
                  ? "bg-[var(--color-primary)] text-white"
                  : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
              }`}
            >
              How to repay
            </button>
            <button
              onClick={() => setActiveTab("renew")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "renew"
                  ? "bg-[var(--color-primary)] text-white"
                  : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
              }`}
            >
              How to renew
            </button>
          </motion.div>
        </div>

        {/* Payment Methods Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {repaymentMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -2 }}
              className="feature-card flex gap-4"
            >
              <div className={`icon-box ${method.color} flex-shrink-0`}>
                <method.icon className={`w-5 h-5 ${method.iconColor}`} />
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-dark)] mb-1">
                  {method.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {method.description}
                </p>
                {index === 3 && (
                  <a
                    href="#"
                    className="text-sm text-[var(--color-primary)] underline underline-offset-2 hover:no-underline mt-1 inline-block"
                  >
                    on the map
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
