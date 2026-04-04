'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IndianRupee, Calendar, Percent, CheckCircle2 } from 'lucide-react';
import styles from './EMICalculator.module.css';

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(120000);
  const [tenure, setTenure] = useState(13);
  const [interestRate, setInterestRate] = useState(11);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  useEffect(() => {
    const P = loanAmount;
    const R = interestRate / (12 * 100);
    const N = tenure * 12;
    if (R === 0) {
      setEmi(P / N);
      setTotalPayment(P);
      setTotalInterest(0);
    } else {
      const emiVal = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
      setEmi(emiVal);
      setTotalPayment(emiVal * N);
      setTotalInterest(emiVal * N - P);
    }
  }, [loanAmount, tenure, interestRate]);

  return (
    <section className={styles.section} id="calculator">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Financial Planning</span>
          <h2>Flexible <span className="text-gradient">EMI Calculator</span></h2>
          <p>Plan your finances effectively with our real-time interactive loan calculator.</p>
        </motion.div>

        <div className={styles.grid}>
          {/* Inputs */}
          <motion.div
            className={styles.card}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <div className={styles.inputGroup}>
              <label>
                <div className={styles.labelTitle}>
                  <IndianRupee size={16} /> Loan Amount
                </div>
                <span className={styles.labelValue}>Rs. {loanAmount.toLocaleString()}</span>
              </label>
              <input
                type="range"
                min="10000"
                max="1000000"
                step="5000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className={styles.range}
              />
              <div className={styles.rangeHints}>
                <span>Rs. 10,000</span><span>Rs. 10,00,000</span>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>
                <div className={styles.labelTitle}>
                  <Calendar size={16} /> Loan Term
                </div>
                <span className={styles.labelValue}>{tenure} Years</span>
              </label>
              <input
                type="range"
                min="1"
                max="20"
                step="1"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className={styles.range}
              />
              <div className={styles.rangeHints}>
                <span>1 Year</span><span>20 Years</span>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>
                <div className={styles.labelTitle}>
                  <Percent size={16} /> Interest Rate
                </div>
                <span className={styles.labelValue}>{interestRate}%</span>
              </label>
              <input
                type="range"
                min="1"
                max="24"
                step="0.5"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className={styles.range}
              />
              <div className={styles.rangeHints}>
                <span>1%</span><span>24%</span>
              </div>
            </div>
          </motion.div>

          {/* Result */}
          <motion.div
            className={styles.resultCard}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            <div className={styles.emiDisplay}>
              <p>Your Monthly EMI</p>
              <motion.h3
                key={Math.round(emi)}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                Rs. {Math.round(emi).toLocaleString()}
              </motion.h3>
            </div>

            <div className={styles.divider} />

            <div className={styles.breakdown}>
              <div className={styles.breakdownItem}>
                <p>Principal Amount</p>
                <span>Rs. {loanAmount.toLocaleString()}</span>
              </div>
              <div className={styles.breakdownItem}>
                <p>Total Interest</p>
                <span>Rs. {Math.round(totalInterest).toLocaleString()}</span>
              </div>
              <div className={styles.breakdownItem}>
                <p>Total Payable</p>
                <span className={styles.totalPayable}>
                  Rs. {Math.round(totalPayment).toLocaleString()}
                </span>
              </div>
            </div>

            <button className="btn btn-white" style={{ width: '100%', color: 'var(--primary)' }}>
              <CheckCircle2 size={18} /> Apply Online Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EMICalculator;
