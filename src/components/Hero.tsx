"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Clock,
  ArrowRight,
  Shield,
  Zap,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

export default function Hero() {
  const [loanAmount, setLoanAmount] = useState(15000);
  const [loanTerm, setLoanTerm] = useState(15);
  const [returnAmount, setReturnAmount] = useState(15000);

  const amountRef = useRef<HTMLInputElement>(null);
  const termRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const isFirstLoan = true;
    const interest = isFirstLoan ? 0 : loanAmount * 0.008 * loanTerm;
    setReturnAmount(loanAmount + interest);
  }, [loanAmount, loanTerm]);

  useEffect(() => {
    if (amountRef.current) {
      const percentage = ((loanAmount - 1000) / (30000 - 1000)) * 100;
      amountRef.current.style.background = `linear-gradient(to right, #E85A1D ${percentage}%, #E8E4DE ${percentage}%)`;
    }
  }, [loanAmount]);

  useEffect(() => {
    if (termRef.current) {
      const percentage = ((loanTerm - 7) / (30 - 7)) * 100;
      termRef.current.style.background = `linear-gradient(to right, #E85A1D ${percentage}%, #E8E4DE ${percentage}%)`;
    }
  }, [loanTerm]);

  const getDeliveryTime = () => {
    const now = new Date();
    now.setMinutes(now.getMinutes() + 30);
    return now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  return (
    <section className="relative overflow-hidden py-8 lg:py-16">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top Stats Bar */}
        {/* <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 lg:gap-12 mb-12 pb-8 border-b border-[var(--color-border-light)]"
        >
          {[
            {
              icon: Shield,
              label: "Bank-Level Security",
              value: "256-bit SSL",
            },
            { icon: Zap, label: "Instant Approval", value: "< 5 min" },
            { icon: TrendingUp, label: "Success Rate", value: "98.7%" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--color-secondary)]/10 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-[var(--color-secondary)]" />
              </div>
              <div>
                <p className="text-xs text-[var(--color-text-muted)]">
                  {stat.label}
                </p>
                <p className="text-sm font-semibold text-[var(--color-dark)]">
                  {stat.value}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div> */}

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Calculator Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              {/* Card Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-primary)]/20 via-transparent to-[var(--color-secondary)]/20 rounded-[2rem] blur-xl opacity-50" />

              <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-white/50">
                {/* Card Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-lg font-semibold text-[var(--color-dark)]">
                      Calculate Your Loan
                    </h2>
                    <p className="text-sm text-[var(--color-text-muted)]">
                      Instant approval, no hidden fees
                    </p>
                  </div>
                  <div className="px-3 py-1.5 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-xs font-semibold">
                    0% APR
                  </div>
                </div>

                {/* Loan Amount */}
                <div className="mb-8">
                  <div className="flex items-end justify-between mb-4">
                    <label className="text-sm text-[var(--color-text-muted)]">
                      Loan amount
                    </label>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-[var(--color-dark)] tracking-tight">
                        ${loanAmount.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <input
                    ref={amountRef}
                    type="range"
                    min="1000"
                    max="30000"
                    step="500"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-[var(--color-primary)] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-[var(--color-primary)] [&::-moz-range-thumb]:cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #E85A1D ${
                        ((loanAmount - 1000) / (30000 - 1000)) * 100
                      }%, #E8E4DE ${
                        ((loanAmount - 1000) / (30000 - 1000)) * 100
                      }%)`,
                    }}
                  />
                  <div className="flex justify-between mt-2 text-xs text-[var(--color-text-light)]">
                    <span>$1,000</span>
                    <span>$30,000</span>
                  </div>
                </div>

                {/* Loan Term */}
                <div className="mb-8">
                  <div className="flex items-end justify-between mb-4">
                    <label className="text-sm text-[var(--color-text-muted)]">
                      Term
                    </label>
                    <span className="text-2xl font-bold text-[var(--color-dark)]">
                      {loanTerm} days
                    </span>
                  </div>
                  <input
                    ref={termRef}
                    type="range"
                    min="7"
                    max="30"
                    step="1"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-[var(--color-primary)] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-[var(--color-primary)] [&::-moz-range-thumb]:cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #E85A1D ${
                        ((loanTerm - 7) / (30 - 7)) * 100
                      }%, #E8E4DE ${((loanTerm - 7) / (30 - 7)) * 100}%)`,
                    }}
                  />
                  <div className="flex justify-between mt-2 text-xs text-[var(--color-text-light)]">
                    <span>7 days</span>
                    <span>30 days</span>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="group w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-semibold py-4 px-8 rounded-2xl text-base transition-all flex items-center justify-center gap-2 mb-6"
                >
                  Get money now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                {/* Quick Apply Options */}
                <div className="flex flex-col items-center">
                  <p className="text-xs text-[var(--color-text-light)] mb-3">
                    Quick application via
                  </p>
                  <div className="flex items-center gap-3">
                    <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--color-border)] bg-white hover:border-[var(--color-primary)] hover:bg-orange-50/50 transition-all">
                      <span className="w-6 h-6 rounded-lg bg-yellow-400 flex items-center justify-center text-xs font-bold text-black">
                        T
                      </span>
                      <span className="text-sm font-medium text-[var(--color-dark)]">
                        T-Bank
                      </span>
                    </button>
                    <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[var(--color-border)] bg-white hover:border-[var(--color-primary)] hover:bg-orange-50/50 transition-all">
                      <span className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center text-xs font-bold text-white">
                        G
                      </span>
                      <span className="text-sm font-medium text-[var(--color-dark)]">
                        GovServices
                      </span>
                    </button>
                  </div>
                </div>

                {/* Return Amount */}
                <div className="mt-8 pt-6 border-t border-[var(--color-border-light)]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-[var(--color-text-muted)]">
                        You return
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-[10px] font-semibold">
                        FIRST LOAN FREE
                      </span>
                    </div>
                    <span className="text-2xl font-bold text-[var(--color-dark)]">
                      ${returnAmount.toLocaleString()}
                    </span>
                  </div>
                  <button className="text-sm text-[var(--color-primary)] hover:underline transition-all flex items-center gap-1">
                    I have a promo code
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-[var(--color-text-light)] mt-6 leading-relaxed max-w-md">
              *Provided the loan is fully repaid on time. For a repeat loan up
              to $30,000, money is issued at 0.8% per day. APR range 0-29%.
            </p>
          </motion.div>

          {/* Right Side - Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 lg:sticky lg:top-24"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
              Online loans to card
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[var(--color-dark)] mb-6 tracking-tight leading-[1.1]">
              First loan
              <br />
              <span className="relative">
                free
                <span className="text-[var(--color-primary)]">*</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 8C50 2 150 2 198 8"
                    stroke="#E85A1D"
                    strokeWidth="4"
                    strokeLinecap="round"
                    opacity="0.3"
                  />
                </svg>
              </span>
            </h1>

            {/* Delivery Time Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-[var(--color-border)] shadow-sm mb-10"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--color-bg)] flex items-center justify-center">
                <Clock className="w-5 h-5 text-[var(--color-text-muted)]" />
              </div>
              <div>
                <p className="text-xs text-[var(--color-text-muted)]">
                  Money in your account by
                </p>
                <p className="text-lg font-bold text-[var(--color-dark)]">
                  {getDeliveryTime()}
                </p>
              </div>
            </motion.div>

            {/* Premium Visual Element */}
            <div className="relative overflow-hidden lg:overflow-visible">
              {/* Main Card Stack Visual */}
              <div className="relative w-full max-w-md">
                {/* Background Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20, rotate: -6 }}
                  animate={{ opacity: 1, y: 0, rotate: -6 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-4 left-4 w-full h-48 rounded-3xl bg-gradient-to-br from-[var(--color-secondary)] to-emerald-600 shadow-lg"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20, rotate: -3 }}
                  animate={{ opacity: 1, y: 0, rotate: -3 }}
                  transition={{ delay: 0.6 }}
                  className="absolute top-2 left-2 w-full h-48 rounded-3xl bg-gradient-to-br from-orange-400 to-[var(--color-primary)] shadow-lg"
                />

                {/* Main Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="relative w-full h-48 rounded-3xl bg-gradient-to-br from-[var(--color-dark)] to-zinc-800 shadow-2xl p-6 text-white overflow-hidden"
                >
                  {/* Card Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-64 h-64 rounded-full border border-white/20 -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full border border-white/20 translate-y-1/2 -translate-x-1/2" />
                  </div>

                  <div className="relative h-full flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs text-white/60 mb-1">
                          Available Credit
                        </p>
                        <p className="text-3xl font-bold">$25,000</p>
                      </div>
                      <div className="w-12 h-8 rounded bg-gradient-to-r from-yellow-400 to-yellow-500" />
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-xs text-white/60">Card Number</p>
                        <p className="text-sm font-mono tracking-wider">
                          •••• •••• •••• 4829
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-white/60">Expires</p>
                        <p className="text-sm font-mono">12/28</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 }}
                className="absolute -top-4 -right-4 lg:right-8"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-secondary)]/10 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-[var(--color-secondary)]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-dark)]">
                        Approved!
                      </p>
                      <p className="text-xs text-[var(--color-text-muted)]">
                        Just now
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-6 -left-4 lg:left-0"
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="bg-white rounded-2xl px-5 py-3 shadow-xl border border-gray-100"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-200 to-orange-300 border-2 border-white flex items-center justify-center text-[10px] font-bold text-orange-700"
                        >
                          {String.fromCharCode(65 + i)}
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[var(--color-dark)]">
                        12,847 people
                      </p>
                      <p className="text-[10px] text-[var(--color-text-muted)]">
                        applied today
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Trust Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="mt-16 pt-8 border-t border-[var(--color-border-light)]"
            >
              <div className="flex flex-wrap items-center gap-6">
                <a
                  href="#"
                  className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
                >
                  What if I don&apos;t repay on time?
                </a>
                <span className="w-1 h-1 rounded-full bg-[var(--color-border)]" />
                <a
                  href="#"
                  className="text-sm text-[var(--color-primary)] hover:underline transition-all"
                >
                  Promotion conditions
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
