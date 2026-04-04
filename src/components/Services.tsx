'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Send, TrendingUp, Landmark, ArrowRight } from 'lucide-react';
import styles from './Services.module.css';

const services = [
  {
    title: 'Remittance',
    description: 'Fast and secure money transfer services to members and community people across the nation through trusted partner networks.',
    icon: <Send size={28} />,
    color: 'var(--primary)',
    bg: 'rgba(0, 51, 102, 0.07)'
  },
  {
    title: 'Loan',
    description: 'Empowering your dreams with flexible loan products — both collateral and non-collateral based — at competitive interest rates.',
    icon: <TrendingUp size={28} />,
    color: 'var(--accent)',
    bg: 'rgba(243, 156, 18, 0.08)'
  },
  {
    title: 'Saving',
    description: 'Grow your wealth with multiple saving products and customized schemes designed to match your financial goals.',
    icon: <Landmark size={28} />,
    color: 'var(--secondary)',
    bg: 'rgba(26, 115, 232, 0.07)'
  }
];

const Services = () => {
  return (
    <section className={styles.servicesSection} id="services">
      <div className="container">
        <div className={styles.header}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">What We Offer</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            VLBS For Your <span className="text-gradient">Needs</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The microfinance that builds better relationships through trusted, accessible financial solutions.
          </motion.p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={styles.serviceCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.cardInner}>
                <div
                  className={styles.iconContainer}
                  style={{ backgroundColor: service.bg, color: service.color }}
                >
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button className={styles.readMore}>
                  Read More <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button className="btn btn-primary">View All Services</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
