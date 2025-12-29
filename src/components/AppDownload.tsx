"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Download, Shield, Zap, Bell } from "lucide-react";

export default function AppDownload() {
  return (
    <section className="py-24 lg:py-32 bg-[#FAFAF8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 mb-6"
          >
            <Download className="w-4 h-4 text-[var(--color-primary)]" />
            <span className="text-sm font-medium text-[var(--color-primary)]">
              Mobile App
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-[var(--color-dark)] mb-5"
          >
            Your finances in your pocket
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto"
          >
            Get instant loan approvals, track repayments, and manage everything
            from one beautiful app.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Left - Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[var(--color-primary)]/10 rounded-full blur-3xl" />

              {/* Main Phone */}
              <motion.div
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                className="relative z-10 mx-auto w-[260px]"
              >
                {/* Phone Frame */}
                <div className="relative bg-[#1C1C1E] rounded-[3rem] p-2 shadow-2xl shadow-black/20">
                  {/* Dynamic Island */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-20" />

                  {/* Screen */}
                  <div className="relative bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
                    {/* Status Bar */}
                    <div className="absolute top-0 inset-x-0 h-12 flex items-end justify-between px-8 pb-1 z-10">
                      <span className="text-xs font-semibold">9:41</span>
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 3a9 9 0 0 1 9 9c0 .5-.04 1-.12 1.5h-2.02c.09-.49.14-1 .14-1.5a7 7 0 1 0-14 0c0 .5.05 1.01.14 1.5H3.12A9 9 0 0 1 12 3z" />
                        </svg>
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M2 9h2v12H2V9zm5-4h2v16H7V5zm5-4h2v20h-2V1zm5 8h2v12h-2V9z" />
                        </svg>
                        <div className="w-6 h-3 border border-current rounded-sm relative">
                          <div className="absolute inset-0.5 right-1 bg-current rounded-sm" />
                          <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-0.5 h-1.5 bg-current rounded-r" />
                        </div>
                      </div>
                    </div>

                    {/* App Content */}
                    <div className="pt-16 px-5 pb-8 h-full bg-gradient-to-b from-orange-50/80 via-white to-white">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <p className="text-xs text-[var(--color-text-muted)]">
                            Good morning
                          </p>
                          <p className="font-semibold text-[var(--color-dark)]">
                            John Doe
                          </p>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-[var(--color-primary)] flex items-center justify-center">
                          <span className="text-white text-sm font-bold">
                            JD
                          </span>
                        </div>
                      </div>

                      {/* Balance Card */}
                      <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-gradient-to-br from-[var(--color-dark)] to-[#2d2d2d] rounded-2xl p-4 mb-4 text-white"
                      >
                        <p className="text-xs text-white/60 mb-1">
                          Available Credit
                        </p>
                        <p className="text-2xl font-bold mb-3">$25,000.00</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-5 rounded bg-gradient-to-r from-yellow-400 to-yellow-500" />
                            <span className="text-xs text-white/60">
                              •••• 4829
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-white/60" />
                        </div>
                      </motion.div>

                      {/* Quick Actions */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {[
                          {
                            icon: Zap,
                            label: "Quick Loan",
                            color: "bg-orange-100 text-orange-600",
                          },
                          {
                            icon: Bell,
                            label: "Payments",
                            color: "bg-blue-100 text-blue-600",
                          },
                          {
                            icon: Shield,
                            label: "Security",
                            color: "bg-green-100 text-green-600",
                          },
                        ].map((action, i) => (
                          <motion.div
                            key={i}
                            initial={{ y: 10, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + i * 0.1 }}
                            className="flex flex-col items-center p-2 rounded-xl bg-white shadow-sm"
                          >
                            <div
                              className={`w-8 h-8 rounded-lg ${action.color} flex items-center justify-center mb-1`}
                            >
                              <action.icon className="w-4 h-4" />
                            </div>
                            <span className="text-[10px] text-[var(--color-text-muted)]">
                              {action.label}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Recent Activity */}
                      <div>
                        <p className="text-xs font-semibold text-[var(--color-dark)] mb-2">
                          Recent Activity
                        </p>
                        <div className="space-y-2">
                          {[
                            {
                              title: "Loan Approved",
                              amount: "+$15,000",
                              time: "Today",
                              positive: true,
                            },
                            {
                              title: "Payment Made",
                              amount: "-$500",
                              time: "Yesterday",
                              positive: false,
                            },
                          ].map((item, i) => (
                            <motion.div
                              key={i}
                              initial={{ x: -10, opacity: 0 }}
                              whileInView={{ x: 0, opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.6 + i * 0.1 }}
                              className="flex items-center justify-between p-2 rounded-lg bg-gray-50"
                            >
                              <div className="flex items-center gap-2">
                                <div
                                  className={`w-7 h-7 rounded-full flex items-center justify-center ${
                                    item.positive
                                      ? "bg-green-100"
                                      : "bg-gray-200"
                                  }`}
                                >
                                  <span className="text-xs">
                                    {item.positive ? "↓" : "↑"}
                                  </span>
                                </div>
                                <div>
                                  <p className="text-xs font-medium text-[var(--color-dark)]">
                                    {item.title}
                                  </p>
                                  <p className="text-[10px] text-[var(--color-text-muted)]">
                                    {item.time}
                                  </p>
                                </div>
                              </div>
                              <span
                                className={`text-xs font-semibold ${
                                  item.positive
                                    ? "text-green-600"
                                    : "text-[var(--color-dark)]"
                                }`}
                              >
                                {item.amount}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/50 rounded-full" />
              </motion.div>

              {/* Floating Notification Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute top-16 -right-4 lg:right-0 z-20"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="bg-white rounded-2xl p-4 shadow-xl shadow-black/10 border border-gray-100 w-48">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-green-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-[var(--color-dark)]">
                          Approved!
                        </p>
                        <p className="text-xs text-[var(--color-text-muted)]">
                          $15,000 loan ready
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-24 -left-4 lg:left-0 z-20"
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="bg-white rounded-2xl p-4 shadow-xl shadow-black/10 border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-[var(--color-primary)]" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-[var(--color-dark)]">
                          5 min
                        </p>
                        <p className="text-xs text-[var(--color-text-muted)]">
                          Avg. approval time
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:pl-8"
          >
            {/* App Rating */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm text-[var(--color-text-muted)]">
                4.9 rating from 12k+ reviews
              </span>
            </div>

            {/* Features List */}
            <div className="space-y-6 mb-10">
              {[
                {
                  title: "Instant Notifications",
                  description:
                    "Get real-time updates on your loan status, payments, and account activity.",
                  icon: Bell,
                },
                {
                  title: "Biometric Security",
                  description:
                    "Your data is protected with Face ID, Touch ID, and bank-level encryption.",
                  icon: Shield,
                },
                {
                  title: "One-Tap Applications",
                  description:
                    "Apply for a new loan in seconds with your saved profile information.",
                  icon: Zap,
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-[var(--color-primary)]" />
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

            {/* Download Section */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <p className="text-sm text-[var(--color-text-muted)] mb-4">
                Download the app
              </p>
              <div className="flex flex-wrap gap-1 md:gap-4">
                {/* App Store */}
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 px-5 py-3 bg-[var(--color-dark)] text-white rounded-xl hover:bg-black transition-colors"
                >
                  <svg
                    className="w-7 h-7"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-[10px] text-white/60">Download on the</p>
                    <p className="text-sm font-semibold">App Store</p>
                  </div>
                </motion.a>

                {/* Google Play */}
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 px-5 py-3 bg-[var(--color-dark)] text-white rounded-xl hover:bg-black transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.54.68.54 1.19 0 .51-.2.92-.54 1.19l-2.53 1.5-2.5-2.5 2.5-2.5 2.53 1.12zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-[10px] text-white/60">Get it on</p>
                    <p className="text-sm font-semibold">Google Play</p>
                  </div>
                </motion.a>
              </div>

              {/* QR Code */}
              <div className="flex items-center gap-4 mt-5 pt-5 border-t border-gray-100">
                <div className="w-16 h-16 bg-[var(--color-bg)] rounded-xl p-2">
                  <div className="w-full h-full grid grid-cols-6 grid-rows-6 gap-px">
                    {[
                      1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1,
                      0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1,
                    ].map((cell, i) => (
                      <div
                        key={i}
                        className={`rounded-sm ${
                          cell ? "bg-[var(--color-dark)]" : "bg-transparent"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-[var(--color-text-muted)]">
                  Scan QR code to download
                  <br />
                  the app on your device
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
