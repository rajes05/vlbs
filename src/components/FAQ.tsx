'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import styles from './FAQ.module.css';

const faqs = [
  {
    q: 'What types of loans does VLBS offer?',
    a: 'VLBS offers a wide range of loan products including agricultural loans, micro-enterprise loans, home improvement loans, and collateral-free group loans — all designed to empower low-income communities.'
  },
  {
    q: 'What are the criteria for obtaining a loan?',
    a: 'Applicants must be a member of VLBS, have a good credit history, and meet the minimum income requirements for the loan type applied for. Group loans do not require collateral.'
  },
  {
    q: 'How do we support financial inclusion?',
    a: 'VLBS reaches remote rural and semi-urban areas that traditional banks do not serve, offering doorstep banking, financial literacy programs, and community group savings schemes.'
  },
  {
    q: 'How can I become a member of VLBS?',
    a: 'You can become a member by visiting your nearest VLBS branch, filling out the membership form, and paying a nominal membership fee. Our staff will guide you through the process.'
  },
  {
    q: 'What remittance services does VLBS provide?',
    a: 'VLBS partners with licensed remittance companies to facilitate fast and secure money transfers from abroad directly to your account or through our branch network.'
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className={styles.header}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Questions & <span className="text-gradient">Answers</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Find answers to all your queries about our services.
          </motion.p>
        </div>

        <div className={styles.list}>
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              className={`${styles.item} ${openIndex === idx ? styles.open : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
            >
              <button
                className={styles.question}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`${styles.chevron} ${openIndex === idx ? styles.rotated : ''}`}
                  size={20}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className={styles.answerWrapper}
                  >
                    <p className={styles.answer}>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className={styles.cta}>
          <p>Didn&apos;t get an answer?</p>
          <a href="#contact" className="btn btn-primary">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
