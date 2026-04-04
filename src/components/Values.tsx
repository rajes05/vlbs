'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, Trophy, ListChecks } from 'lucide-react';
import styles from './Values.module.css';

const values = [
  {
    title: 'Vision',
    icon: <Eye size={28} />,
    description: 'To promote agro-tourism and micro-enterprise business, driving economic and social transformation in rural and semi-urban areas, increasing self-employment and community prosperity.'
  },
  {
    title: 'Mission',
    icon: <Target size={28} />,
    description: 'We strive to identify and develop local resources, enhance financial literacy, and provide equitable financial services to marginalized communities lacking access to traditional banking.'
  },
  {
    title: 'Goal',
    icon: <Trophy size={28} />,
    description: 'Our aim is to empower rural and semi-urban communities through microfinance, enabling them to build financial strength and utilize local resources for sustainable development.'
  },
  {
    title: 'Objectives',
    icon: <ListChecks size={28} />,
    description: 'Our objectives include improving the financial capacity of low-income rural communities, providing diversified financial services and leveraging local resources for socio-economic advancement.'
  }
];


const Values = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Our Foundation</span>
          <h2>
            Built on <span className="text-gradient">Core Values</span>
          </h2>
          <p>Driving sustainable change through empowerment, inclusivity, and financial access for all.</p>
        </motion.div>

        <div className={styles.grid}>
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
            >
              <div className={styles.bgDecor} />
              <div className={styles.iconWrapper}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
