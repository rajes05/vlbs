'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, MessageSquare } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* Background elements */}
      <div className={styles.orb + ' ' + styles.orb1} />
      <div className={styles.orb + ' ' + styles.orb2} />
      <div className={styles.orb + ' ' + styles.orb3} />
      <div className={styles.gridPattern} />

      <div className="container">
        <div className={styles.inner}>
          <div className={styles.grid}>
            {/* Left: Content */}
            <div className={styles.content}>
              <motion.div
                className={styles.premiumBadge}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className={styles.badgePulse}>
                  <div className={styles.pulseDot} />
                </div>
                <span className={styles.badgeText}>
                  <strong>EST. 2023</strong> <span className={styles.badgeDivider} />Tilottama, Nepal
                </span>
                <div className={styles.badgeGlow} />
              </motion.div>

              <motion.h1
                className={styles.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                Cornortech{' '}
                <span className={styles.highlight}>Microfinance</span>
                {' '}Pvt. Ltd.
              </motion.h1>

              <motion.p
                className={styles.subtitle}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                &ldquo;Banking with Happiness.&rdquo; Empowering communities through
                microfinance, financial literacy, and inclusive banking across Nepal.
              </motion.p>

              <motion.div
                className={styles.actions}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <button className="btn btn-accent">
                  Grab Your Deals <ArrowRight size={16} />
                </button>
                <button className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>
                  Explore Services
                </button>
              </motion.div>
            </div>

            {/* Right: Floating cards */}
            <div className={styles.cards}>
              <motion.div
                className={styles.floatingCard}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                whileHover={{ x: 8 }}
              >
                <div className={styles.iconCircle}>
                  <MapPin size={22} />
                </div>
                <div>
                  <h3>Branch on Map</h3>
                  <p>Find your nearest Cornortech branch across Nepal.</p>
                </div>
                <ArrowRight size={16} style={{ marginLeft: 'auto', color: 'var(--text-muted)' }} />
              </motion.div>

              <motion.div
                className={styles.floatingCard}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.55 }}
                whileHover={{ x: 8 }}
              >
                <div className={styles.iconCircle}>
                  <MessageSquare size={22} />
                </div>
                <div>
                  <h3>CEO Message</h3>
                  <p>A word from Basanta Raj Lamsal, CEO.</p>
                </div>
                <ArrowRight size={16} style={{ marginLeft: 'auto', color: 'var(--text-muted)' }} />
              </motion.div>

              {/* Info card */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                style={{
                  background: 'rgba(243,156,18,0.12)',
                  border: '1px solid rgba(243,156,18,0.3)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '1.5rem 2rem',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-light)', lineHeight: 1 }}>
                  15+
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Years of Service</div>
                  <div style={{ fontSize: '0.82rem', opacity: 0.7 }}>Trusted by 50,000+ members</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className={styles.scrollHint}>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
};

export default Hero;
