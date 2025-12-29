"use client";

import { motion } from "framer-motion";
import { FileText, Clock, FileCheck, CreditCard } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: FileText,
    title: "Select the conditions",
    description: 'Select the loan amount and term and click "Get money"',
    bgColor: "bg-sky-50",
    iconColor: "text-sky-500",
    stepColor: "text-[var(--color-primary)]",
  },
  {
    step: 2,
    icon: Clock,
    title: "Submit your application",
    description: "Fill out the application and wait for a decision on your loan",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-500",
    stepColor: "text-orange-500",
  },
  {
    step: 3,
    icon: FileCheck,
    title: "Sign the contract",
    description: "Confirm the conclusion of the contract with the code sent to you via SMS",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-500",
    stepColor: "text-purple-500",
  },
  {
    step: 4,
    icon: CreditCard,
    title: "Receive the money",
    description: "After signing the contract, the money will be credited to your card or bank account",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-500",
    stepColor: "text-emerald-500",
  },
];

export default function HowToGet() {
  return (
    <section id="how-to-get" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-[2.75rem] font-bold text-[var(--color-dark)] mb-16 text-center"
        >
          How to get a loan
        </motion.h2>

        {/* Steps Grid with Connectors */}
        <div className="relative">
          {/* Desktop Connector Lines */}
          <div className="hidden lg:block absolute top-[85px] left-[12.5%] right-[12.5%] h-px">
            <div className="relative w-full h-full">
              {/* Line segments between icons */}
              <div className="absolute left-0 w-[33.33%] h-px bg-[var(--color-border)] flex items-center">
                <div className="absolute right-0 w-2 h-2 rounded-full bg-[var(--color-border)]" />
              </div>
              <div className="absolute left-[33.33%] w-[33.33%] h-px bg-[var(--color-border)] flex items-center">
                <div className="absolute right-0 w-2 h-2 rounded-full bg-[var(--color-border)]" />
              </div>
              <div className="absolute left-[66.66%] w-[33.33%] h-px bg-[var(--color-border)] flex items-center">
                <div className="absolute right-0 w-2 h-2 rounded-full bg-[var(--color-border)]" />
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center"
              >
                {/* Step Label */}
                <div className={`text-xs font-bold uppercase tracking-wider ${step.stepColor} mb-4`}>
                  <span>STEP</span>
                  <div className="text-base mt-0.5">{step.step}</div>
                </div>
                
                {/* Icon Container */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`relative w-24 h-24 mx-auto mb-6 rounded-2xl ${step.bgColor} flex items-center justify-center shadow-sm cursor-pointer`}
                >
                  <step.icon className={`w-10 h-10 ${step.iconColor}`} strokeWidth={1.5} />
                </motion.div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold text-[var(--color-dark)] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed max-w-[240px] mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-14"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-semibold py-4 px-12 rounded-full text-base transition-colors"
          >
            Get money
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
