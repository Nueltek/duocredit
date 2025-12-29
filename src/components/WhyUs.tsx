"use client";

import { motion } from "framer-motion";
import { Clock, FileText, Calendar, Award } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Clock,
    title: "Get money in 5 minutes",
    description:
      "Quick application processing and instant funds transfer to your card",
  },
  {
    icon: FileText,
    title: "Simple and clear terms",
    description:
      "Your first loan is free, and repeat loans are at 0.8%. No fees for issuance or repayment",
  },
  {
    icon: Calendar,
    title: "Repay when it's convenient",
    description:
      "You can repay the loan early or postpone the payment date, paying only the interest",
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl lg:text-[2.75rem] font-bold text-[var(--color-dark)] mb-16 text-center"
        >
          Why choose DuoCredit?
        </motion.h2>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Features */}
          <div>
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="icon-box icon-box-primary flex-shrink-0">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-dark)] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Award Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="card p-8 max-w-sm">
                <h3 className="text-xl font-bold text-[var(--color-dark)] mb-6">
                  DuoCredit was named the MFO of the year 2025 by FinanceAwards
                </h3>

                {/* Award Badge */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-[var(--color-secondary)] to-emerald-600 rounded-2xl p-6 text-white">
                    <div className="flex items-center gap-4 mb-4">
                      <Award className="w-10 h-10" />
                      <div>
                        <p className="text-sm opacity-80">FINANCE</p>
                        <p className="text-xl font-bold">AWARDS &apos;25</p>
                      </div>
                    </div>
                    <div className="border-t border-white/20 pt-4">
                      <p className="text-sm opacity-80">MICROFINANCE</p>
                      <p className="text-2xl font-bold">MFO 2024</p>
                    </div>
                  </div>

                  {/* Decorative Trophy */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center shadow-lg rotate-12">
                    <span className="text-2xl">🏆</span>
                  </div>
                </motion.div>
              </div>

              {/* Background Decoration */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-[var(--color-secondary-light)] rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
