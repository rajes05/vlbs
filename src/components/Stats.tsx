'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building2, MapPin, TrendingUp } from 'lucide-react';
import styles from './Stats.module.css';

const stats = [
  { value: '50,000+', label: 'Active Members', icon: <Users size={28} /> },
  { value: '25+', label: 'Branch Offices', icon: <Building2 size={28} /> },
  { value: '15+', label: 'Districts Served', icon: <MapPin size={28} /> },
  { value: '98%', label: 'Repayment Rate', icon: <TrendingUp size={28} /> },
];

const Stats = () => {
  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className={styles.statItem}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.iconBox}>{stat.icon}</div>
              <h3 className={styles.value}>{stat.value}</h3>
              <p className={styles.label}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
