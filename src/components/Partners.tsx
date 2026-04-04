'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Partners.module.css';

const partners = [
  { name: 'Nabil Bank', logo: 'https://vlbs.com.np/static/media/nabil-logo.png' },
  { name: 'Machhapuchchhre Bank', logo: 'https://vlbs.com.np/static/media/mbl-logo.png' },
  { name: 'Prabhu Bank', logo: 'https://vlbs.com.np/static/media/prabhu-logo.png' },
  { name: 'Global IME', logo: 'https://vlbs.com.np/static/media/global-logo.png' },
  { name: 'NIC Asia', logo: 'https://vlbs.com.np/static/media/nic-logo.png' },
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
