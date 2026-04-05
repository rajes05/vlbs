'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Partners.module.css';

const partners = [
  { name: 'Nabil Bank', logo: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=200&h=100&auto=format&fit=crop' },
  { name: 'Machhapuchchhre Bank', logo: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=200&h=100&auto=format&fit=crop' },
  { name: 'Prabhu Bank', logo: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=200&h=100&auto=format&fit=crop' },
  { name: 'Global IME', logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=200&h=100&auto=format&fit=crop' },
  { name: 'NIC Asia', logo: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=200&h=100&auto=format&fit=crop' },
];

const Partners = () => {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.header}>
          <h2>Association <span className="text-gradient">Partners</span></h2>
          <p>Trusted by leading financial institutions across Nepal.</p>
        </div>

        <div className={styles.grid}>
          {partners.map((partner, index) => (
            <motion.div 
              key={partner.name}
              className={styles.logoItem}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className={styles.imageBox}>
                <Image 
                  src={partner.logo} 
                  alt={partner.name} 
                  width={150} 
                  height={80} 
                  className={styles.pLogo}
                  onError={(e) => {
                    // Fallback for demo if logos fail
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150x80?text=' + partner.name;
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
