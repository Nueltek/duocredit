"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Eye, Server } from "lucide-react";

const safetyFeatures = [
  {
    icon: ShieldCheck,
    title: "Approved by the Central Bank",
    description:
      "We operate within the legal framework, have a registration certificate, and are listed in the state register of microfinance organizations.",
    visual: (
      <div className="relative w-full h-32 flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-20 h-20 rounded-full bg-[var(--color-secondary)] flex items-center justify-center"
        >
          <ShieldCheck className="w-10 h-10 text-white" />
        </motion.div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-28 h-28 rounded-full border-2 border-dashed border-[var(--color-secondary)]/30"
        />
      </div>
    ),
  },
  {
    icon: Lock,
    title: "SSL certificate",
    description:
      "The certificate ensures the protection of your data, the security of payments and prevents unauthorized access to information.",
    visual: (
      <div className="relative w-full h-32 flex items-center justify-center">
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-24 h-28 rounded-xl bg-[var(--color-secondary)] flex flex-col items-center justify-center text-white"
        >
          <Lock className="w-8 h-8 mb-1" />
          <span className="text-lg font-bold">SSL</span>
        </motion.div>
      </div>
    ),
  },
  {
    icon: Eye,
    title: "No hidden fees",
    description:
      "We maintain a transparent policy, all information about costs and terms is openly presented on the website.",
    visual: (
      <div className="relative w-full h-32 flex items-center justify-center">
        <div className="text-6xl font-bold text-[var(--color-secondary)]">
          0%
        </div>
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute w-32 h-32 rounded-full bg-[var(--color-secondary)]/10"
        />
      </div>
    ),
  },
  {
    icon: Server,
    title: "Internal security standards",
    description:
      "The Company ensures compliance with confidentiality obligations, as well as technical and organizational security measures to prevent unauthorized access.",
    visual: (
      <div className="relative w-full h-32 flex items-center justify-center">
        <div className="flex flex-col gap-2">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ width: 0 }}
              whileInView={{ width: `${60 + i * 20}px` }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="h-3 rounded-full bg-[var(--color-secondary)]"
            />
          ))}
        </div>
      </div>
    ),
  },
];

export default function Safety() {
  return (
    <section className="py-16 lg:py-24 bg-[var(--color-white)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-[2.75rem] font-bold text-[var(--color-dark)] mb-16 text-center"
        >
          It&apos;s safe with us
        </motion.h2>

        {/* Safety Features Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {safetyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card p-6 lg:p-8"
            >
              <div className="grid lg:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-dark)] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="order-first lg:order-last">
                  {feature.visual}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
