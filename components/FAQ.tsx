"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a comprehensive range of digital services including Website Creation, Digital Marketing, Social Media Management, Brand Identity, and App Development. We tailor our solutions to meet the specific needs of each client.",
  },
  {
    question: "How long does a project typically take?",
    answer:
      "Project timelines vary depending on complexity and scope. A standard website might take 4-8 weeks, while a comprehensive web application or brand overhaul could take 3-6 months. We provide detailed timelines during the Discovery phase.",
  },
  {
    question: "Do you work with clients internationally?",
    answer:
      "Absolutely. We are a digital-first agency and have experience collaborating with clients globally. We adapt to your time zone and use effective communication tools to ensure a seamless workflow.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our pricing is project-based, depending on the specific requirements, features, and timeline. After our initial consultation, we provide a detailed proposal outlining the costs so there are no surprises.",
  },
  {
    question: "How do we communicate during a project?",
    answer:
      "We establish clear communication channels from day one. You'll have regular update meetings, and we use tools like Slack, Email, and project management software to keep you informed every step of the way.",
  },
  {
    question: "Can you help with branding and design as well as development?",
    answer:
      "Yes, we have specialized teams for both. Our designers work closely with our developers to ensure that the visual identity is perfectly translated into the final digital product.",
  },
  {
    question: "Will I have a dedicated project manager?",
    answer:
      "Yes, every project is assigned a dedicated project manager who serves as your main point of contact. They ensure the project stays on track, on budget, and meets your expectations.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes, we offer maintenance and support packages to ensure your product remains secure, up-to-date, and continues to perform optimally as your business grows.",
  },
  {
    question: "What platforms or technologies do you specialize in?",
    answer:
      "We are technology agnostic but specialize in modern, scalable stacks including React, Next.js, Node.js, iOS, Android, and various headless CMS solutions.",
  },
  {
    question: "How do we get started?",
    answer:
      "It's simple! Reach out to us via our contact form or book a call. We'll set up an initial consultation to discuss your vision, goals, and how we can help bring your project to life.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 w-full">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-[4rem] font-bold text-white mb-6 tracking-tight"
          >
            Frequently Asked
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-[#f1f1f1] text-lg sm:text-xl max-w-2xl mx-auto"
          >
            Everything you need to know about our services, process, and how we
            work with you.
          </motion.p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 bg-[#1e1e1e]/50 rounded-2xl overflow-hidden backdrop-blur-sm"
            >
              <button
                onClick={() => toggleOpen(index)}
                className="w-full flex items-center justify-between p-6 sm:p-8 text-left transition-colors hover:bg-white/[0.02]"
              >
                <span className="text-lg sm:text-xl font-medium text-white pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="flex-shrink-0 text-white"
                >
                  <Plus className="w-6 h-6" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-6 sm:p-8 pt-0 text-slate-400 text-base sm:text-lg leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
