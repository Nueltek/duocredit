"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How quickly can I get a loan?",
    answer: "The entire process takes about 5-10 minutes. After approval, funds are transferred to your card within 15 minutes. First-time users may need an additional 5 minutes for verification.",
  },
  {
    question: "What are the requirements to get a loan?",
    answer: "You need to be at least 18 years old, have a valid ID, an active bank card, and a mobile phone number. No credit history check is required for first-time loans up to $5,000.",
  },
  {
    question: "Is my first loan really free?",
    answer: "Yes! Your first loan is completely free with 0% APR. You only repay the exact amount you borrowed if you pay on time. This offer applies to loans up to $15,000 for terms up to 30 days.",
  },
  {
    question: "What happens if I can't repay on time?",
    answer: "We understand that situations change. You can extend your loan term through your personal account before the due date. A small fee applies for extensions. Contact our support team if you're facing difficulties.",
  },
  {
    question: "How do I repay my loan?",
    answer: "You can repay through multiple channels: online via your personal account, bank transfer, at partner locations, or through payment terminals. We'll send you reminders before your payment is due.",
  },
  {
    question: "Is my personal data secure?",
    answer: "Absolutely. We use bank-level SSL encryption and comply with all data protection regulations. Your information is never shared with third parties without your explicit consent.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-4xl font-bold text-[var(--color-dark)] mb-12 text-center"
        >
          Frequently asked questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-[var(--color-dark)] pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-[var(--color-text-muted)]" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-5 text-[var(--color-text-muted)] leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-[var(--color-text-muted)] mb-4">
            Still have questions?
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-outline"
          >
            Contact support
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
